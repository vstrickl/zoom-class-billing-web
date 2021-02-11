import React from "react"
import styled from "styled-components"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { 
  Container,
  Row,
  Col,
  List,
  Table
} from 'reactstrap';

import Layout from "../components/layout"

import 'bootstrap/dist/css/bootstrap.min.css'

const ClassName = styled.div`
  font-size: 2.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const Date = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const SectionHeader = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`
const Section = styled.div`
  margin-top: 20px
`

export default function Attendance({ data }) {
  const attendance = data.attendance

  console.log('hey==>>>', attendance);
  
  return (
    <Layout>
      <Container className={`justify-content-lg-center pt-5`}>
        <Row className={`justify-content-lg-center`}>
          <Col className={`col-md-auto`}>
            <Section>
              <ClassName className={`text-center`}>
                <List type="unstyled">
                  {attendance.class_list.map(document => (
                    <li>{document.classname}</li>
                  ))}
                </List>
              </ClassName>
              <Date className={`text-center`}>{attendance.attendance_date}</Date>
            </Section>
            <Section className={"history-table text-center"}>
              <SectionHeader className={`text-center`}>Student Attendance</SectionHeader>
              <Table>
                <thead>
                  <tr>
                    <th>*</th>
                    <th>Nick Name</th>
                  </tr>
                </thead>
                <tbody>
                  {attendance.student_list.map(document => (
                    <tr key={document.id}>
                      <td><Img fixed={document.student_img.childImageSharp.fixed} alt="" /></td>
                      <td><Link to={`/student/${document.nick_name}`}>{document.nick_name}</Link></td>
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
  query ClassAttendanceQuery($strapiId: Int!) {
    attendance: strapiAttendanceRecord(strapiId: {eq: $strapiId}) {
      attendance_date
      class_list {
        classname
      }
      student_list {
        nick_name
        student_img {
          childImageSharp {
            fixed(width: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`