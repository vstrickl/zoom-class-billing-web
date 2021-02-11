import React from "react"
import styled from "styled-components"

import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col, Table } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'

const StudentName = styled.div`
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2px;
`

const Section = styled.div`
  margin-top: 20px
`

export default function Purchase({ data }) {
  const purchasehist = data.allStrapiPurchase.edges
  const studentdesc = data.strapiNewStudent
  
  return (
    <Layout>
      <Container className={`justify-content-md-center pt-5`}>
        <Row className={`justify-content-md-center`}>
          <Col className={`col-md-auto`}>
            <StudentName>
              <Link to={`/student/${studentdesc.nick_name}`}>{studentdesc.firstname} {studentdesc.lastname}</Link>
            </StudentName>
            <Section>
              <Table>
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Package</th>
                    <th>Date Purchased</th>
                    <th>Classes Left</th>
                  </tr>
                </thead>
                <tbody>
                  {purchasehist.map(document => (
                    <tr key={document.node.id}>
                      <td><Link to={`/class/${document.node.class.slug}`}>{document.node.class.classname}</Link></td>
                      <td>{document.node.package.classpk}</td>
                      <td>{document.node.package.date_purchased}</td>
                      <td>{document.node.package.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Section>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query PurchaseHistQuery($nick_name: String!) {
    strapiNewStudent(nick_name: { eq: $nick_name }) {
      firstname
      lastname
      nick_name
    }
    allStrapiPurchase(filter: {Student: {nick_name: {eq: $nick_name }}}) {
      edges {
        node {
          class {
            classname
            slug
          }
          package {
            classpk
            date_purchased
            qty
          }
        }
      }
    }
  }
`