import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"

const Section = styled.div`
  margin-bottom: 48px
`

const IndexPage = () => (
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
      Class day and time
    </Section>
  </Layout>
)

export default IndexPage
