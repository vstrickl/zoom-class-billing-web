import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.scss"

const Section = styled.div`
  margin-bottom: 48px
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Container className={`wrapper`}>
        <h1 class="headingStyles">
            Welcome!
            <span class="username"> Vonique </span>
        </h1>
        <Section>
          <ul>
            {data.allStrapiClassList.edges.map(document => (
              <li key={document.node.id}>
                <Img fixed={document.node.class_img.childImageSharp.fixed} alt="" />
                <h2>
                  <Link to={`/class/${document.node.slug}`}>{document.node.classname}</Link>
                </h2>
                <p>{document.node.days} @ {document.node.start}</p>
              </li>
            ))}
          </ul>
        </Section>
      </Container>
    </Layout>
  )
}

export const query = graphql`
query {
  allStrapiClassList {
    edges {
      node {
        slug
        classname
        days
        start
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