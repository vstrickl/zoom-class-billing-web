import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

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
    <h3>
      <Link to="/">Class Name</Link>
    </h3>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Img />
    </div>
    <Section>
      <ul>
        {data.allStrapiNewClass.edges.map(document => (
          <li key={document.node.id}>
            <h2>
              <Link to={`/${document.node.id}`}>{document.node.classname}</Link>
            </h2>
            <Img />
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
    allStrapiNewClass {
      edges {
        node {
          id
          classname
          days
          start
        }
      }
    }
  }
`