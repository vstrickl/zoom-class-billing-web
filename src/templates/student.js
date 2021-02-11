import React, { useState } from "react"
import styled from "styled-components"

import { Link, graphql } from "gatsby"
import StudentImg from 'gatsby-background-image'
import Layout from "../components/layout"
import { 
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./student.scss"

const StudentName = styled.div`
  color: white;
`
const Section = styled.div`
  margin-top: 20px;
`

export default function Student({ data }) {
  const student = data.student

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(prevState => !prevState)

  console.log('hey==>>>', student);

  return (
    <Layout>
      <Container className={`justify-content-md-center pt-5`}>
        <Row className={`justify-content-md-center`}>
          <Col className={`col-md-auto`}>
            <StudentImg
              Tag="section"
              className={`student-img`}
              fixed={student.student_img.childImageSharp.fixed}
            >
              <StudentName className={`student-name text-center`}>{student.firstname} {student.lastname}</StudentName>
            </StudentImg>
            <Section>
              <p>{student.email}</p>
              <p>{student.phone}</p>
            </Section>
            <Section>
              <Button
                key={document.id}
                color="secondary"
                className={`student-btn`}
              >
                <Link to={`/purchase-history/${student.nick_name}`}>
                  Purchase History
                </Link>
              </Button>
              <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  className={`class-drop`}
                >
                  <DropdownToggle>Attendance History</DropdownToggle>
                  <DropdownMenu>
                    {student.attendance.map(document => (
                      <DropdownItem  key={document.id}>
                        <Link to={`/attendance/${document.id}`}>{document.attendance_date}</Link>
                      </DropdownItem >
                    ))}
                  </DropdownMenu>
              </Dropdown>
            </Section>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query StudentQuery($nick_name: String!) {
    student: strapiNewStudent(nick_name: { eq: $nick_name }) {
      student_img {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      firstname
      lastname
      nick_name
      email
      phone
      attendance {
        attendance_date
        id
      }
    }
  }
`