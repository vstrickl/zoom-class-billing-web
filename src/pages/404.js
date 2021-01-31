import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"

export default function NotFoundPage () {
  return (
    <Layout>
      <Header headerText="404: Not Found" />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}