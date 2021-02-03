import React from "react"
import styled from "styled-components"

import Navbar from "./navbar"
import Footer from "./footer"

const Container = styled.div`
  margin: 1rem auto;
  padding: 0 1rem;
  min-width: 1280px;
    @media(max-width: 1440px){
        min-width: 1280px;
    }
    @media(max-width: 1280px){
        width: 1080px;
        min-width: 1080px;
    }
    @media(max-width: 991px){
        width: 810px;
        min-width: 810px;
    }
    @media(max-width: 768px){
        width: 720px;
        min-width: 720px;
    }
    @media(max-width: 480px){
        width: 360px;
        min-width: 360px;
    }
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