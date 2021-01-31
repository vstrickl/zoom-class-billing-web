/**
 * Logo component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"

import { useStaticQuery, Link, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  width: max-content;
  display: inline-block;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #1d2225;
    font-size: 2.25rem;
    text-transform: uppercase;
}
`

export default function Logo() {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <LogoWrap>
      <Link to="/">{data.site.siteMetadata.title}</Link>
    </LogoWrap>
  )
}