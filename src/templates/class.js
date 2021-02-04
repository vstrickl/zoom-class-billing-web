import React from "react"
import styled from "styled-components"

import {  Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ClassImg from 'gatsby-background-image'
import Layout from "../components/layout"
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./class.scss"

const ClassName = styled.div`
  color: white;
`
const Section = styled.div`
  margin-top: 20px
`

export default function Class({ data }) {
  const classdesc = data.strapiClassList
  
  return (
    <Layout>
      <Container className={`justify-content-md-center pt-5`}>
        <Row className={`justify-content-md-center`}>
          <Col className={`col-md-auto`}>
            <ClassImg
              Tag="section"
              className={`class-img`}
              fixed={classdesc.class_img.childImageSharp.fixed}
            >
              <ClassName className={`class-name text-center`}>{classdesc.classname}</ClassName>
            </ClassImg>
            <Section>
              <p>{classdesc.days}</p>
              <p>{classdesc.start} - {classdesc.end}</p>
              <p>{classdesc.class_desc}</p>
              <ul>
                {classdesc.new_students.map(document => (
                  <li key={document.id}>
                    <Img fixed={document.student_img.childImageSharp.fixed} alt="" />
                    <p><Link to={`/student/${document.nick_name}`}>{document.firstname}</Link></p>
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
  query($slug: String!) {
    strapiClassList(slug: { eq: $slug }) {
      classname
      zoomurl
      days
      start
      end
      class_desc
      class_img {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      new_students {
        id
        firstname
        nick_name
        student_img {
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`