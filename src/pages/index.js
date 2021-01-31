import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const Section = styled.div`
  margin-bottom: 48px
`

export default function IndexPage({ data }) {
  return (
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
}

export const query = graphql`
query {
  allStrapiClassList {
    edges {
      node {
        id
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