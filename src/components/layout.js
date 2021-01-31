import React from "react"
import styled from "styled-components"

import Navbar from "./navbar"
import Footer from "./footer"

const Container = styled.div`
  margin: 1rem auto;
  padding: 0 1rem;
  width: 100%;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
        {children}
      <Footer />
    </Container>
  )
}