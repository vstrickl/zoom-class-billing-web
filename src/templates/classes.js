import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import ClassImg from 'gatsby-background-image'
import Layout from "../components/layout"
import { Container,  Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./classes.scss"

const ClassName = styled.div`
  color: white;
  text-transform: uppercase;
  transform: translateY(300%);
`

const Section = styled.div`
  margin-bottom: 48px
`

export default function ClassList({ data }) {
  const classdesc = data.classes.edges

  return (
    <Layout>
      <Container className={`wrapper`}>
        <Row className={`justify-content-md-center`}>
          <Col className={`col-md-auto`}>
            <Section>
              <ul>
                {classdesc.map(document => (
                  <li key={document.node.id}>
                    <ClassImg
                      Tag="section"
                      className={`class-img`}
                      fixed={document.node.class_img.childImageSharp.fixed}
                      alt=""
                    >
                      <ClassName className={`text-center`}>
                        <Link to={`/class/${document.node.slug}`}>{document.node.classname}</Link>
                      </ClassName>
                    </ClassImg>
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
  classes: allStrapiClassList {
    edges {
      node {
        slug
        classname
        class_img {
          childImageSharp {
            fixed(width: 400, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`