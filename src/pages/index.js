import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from 'gatsby';

import Layout from "../components/layout"

const Section = styled.div`
  margin-bottom: 48px
`

const IndexPage = ({ data }) => (
  <Layout>
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
              <Link to={`/${document.node.id}`}>{document.node.classname}</Link>
            </h2>
            <p>{document.node.days} @ {document.node.start}</p>
          </li>
        ))}
      </ul>
    </Section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiClassList {
      edges {
        node {
          id
          class_img {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          classname
          days
          start
        }
      }
    }
  }
`