import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import StudentImg from 'gatsby-background-image'
import Layout from "../components/layout"
import { Container,  Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./students.scss"

const StudentName = styled.div`
  color: white;
  text-transform: uppercase;
`

const Section = styled.div`
  margin-bottom: 48px;
`

export default function StudentList({ data }) {
  const studentdesc = data.students.edges

  return (
    <Layout>
      <Container className={`wrapper`}>
        <Row className={`justify-content-md-center`}>
          <Col className={`col-md-auto`}>
            <Section>
              <ul>
                {studentdesc.map(document => (
                  <li key={document.node.id}>
                    <StudentImg
                      Tag="section"
                      className={`class-img`}
                      fixed={document.node.student_img.childImageSharp.fixed}
                      alt=""
                    >
                      <StudentName className={`text-center`}>
                        <Link to={`/student/${document.node.nick_name}`}>{document.node.firstname} {document.node.lastname}</Link>
                      </StudentName>
                    </StudentImg>
                  </li>
                ))}
              </ul>
            </Section>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  students: allStrapiNewStudent {
    edges {
      node {
        student_img {
          childImageSharp {
            fixed(width: 300, height: 300) {
              src
            }
          }
        }
        firstname
        lastname
        nick_name
      }
    }
  }
}
`