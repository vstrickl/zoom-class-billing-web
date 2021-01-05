import React from "react"

export default function Footer() {
  return (
    <footer style={{
      marginTop: `2rem`
    }}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a> and <a href="https://strapi.io/">Strapi</a>
    </footer>
  )
}