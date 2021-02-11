import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Container } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.scss"

const Section = styled.div`
  margin-bottom: 48px
`

export default function IndexPage() {

  return (
    <Layout>
      <Container className={`wrapper`}>
        <Section>
          <p>Login form goes here...</p>
        </Section>
      </Container>
    </Layout>
  )
}