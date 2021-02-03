import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import ClassImg from 'gatsby-background-image'
import Layout from "../components/layout"
import { Container } from 'reactstrap';

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
      <Container className={`class-wrapper`}>
        <ClassImg
          Tag="section"
          className={`class-img`}
          fixed={classdesc.class_img.childImageSharp.fixed}
        >
          <ClassName>{classdesc.classname}</ClassName>
        </ClassImg>
        <Section>
          <p>{classdesc.days}</p>
          <p>{classdesc.start} - {classdesc.end}</p>
        </Section>
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
        class_img {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
    }
  }
`