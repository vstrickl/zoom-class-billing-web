import React from "react"
import styled from "styled-components"

import {  Link, graphql } from "gatsby"
import StudentImg from 'gatsby-background-image'
import Layout from "../components/layout"
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./student.scss"

const StudentName = styled.div`
  color: white;
`
const Section = styled.div`
  margin-top: 20px
`

export default function Student({ data }) {
  const studentdesc = data.strapiNewStudent
  
  return (
    <Layout>
      <Container className={`justify-content-md-center pt-5`}>
        <Row className={`justify-content-md-center`}>
          <Col className={`col-md-auto`}>
            <StudentImg
              Tag="section"
              className={`student-img`}
              fixed={studentdesc.student_img.childImageSharp.fixed}
            >
              <StudentName className={`student-name text-center`}>{studentdesc.firstname} {studentdesc.lastname}</StudentName>
            </StudentImg>
            <Section>
              <p>{studentdesc.email}</p>
              <p>{studentdesc.phone}</p>
              <ul>
                {studentdesc.packages.map(document => (
                  <li key={document.id}>
                    <p>{document.classpk} <Link to="/">{document.date_purchased}</Link></p>
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
  query($nick_name: String!) {
    strapiNewStudent(nick_name: { eq: $nick_name }) {
        student_img {
          childImageSharp {
            fixed(width: 300) {
              src
            }
          }
        }
        firstname
        lastname
        email
        phone
        packages {
            id
            classpk
            date_purchased
        }
      }
  }
`