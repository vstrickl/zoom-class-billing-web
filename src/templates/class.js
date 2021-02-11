import React, { useState } from "react"
import styled from "styled-components"

import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ClassImg from 'gatsby-background-image'
import Layout from "../components/layout"
import {
  Container,
  Row,
  Col,
  List,
  ListInlineItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import "./class.scss"

const ClassName = styled.div`
  color: white;
`
const Section = styled.div`
  margin-top: 20px
`

const SectionHeader = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export default function Class({ data }) {
  const classdesc = data.class

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(prevState => !prevState)

  console.log('hey==>>>', classdesc.attendance);
  
  return (
    <Layout>
      <Container className={`justify-content-lg-center pt-5`}>
        <Row className={`justify-content-lg-center`}>
          <Col className={`col-lg-auto`}>
            <ClassImg
              Tag="section"
              className={`class-img`}
              fixed={classdesc.class_img.childImageSharp.fixed}
            >
              <ClassName className={`class-name text-center`}>{classdesc.classname}</ClassName>
            </ClassImg>
            <Section>
              <p>{classdesc.days}</p>
              <p>{classdesc.start} - {classdesc.end}</p>
              <p>{classdesc.class_desc}</p>
            </Section>
            <Section>
              <SectionHeader>Enrolled Students</SectionHeader>
                <List type="inline">
                  {classdesc.students.map(document => (
                    <ListInlineItem  key={document.id}>
                      <Img fixed={document.student_img.childImageSharp.fixed} alt="" />
                      <p><Link to={`/student/${document.nick_name}`}>{document.firstname}</Link></p>
                    </ListInlineItem>
                  ))}
                </List>
                <Dropdown
                  isOpen={dropdownOpen}
                  toggle={toggle}
                  className={`class-drop`}
                >
                  <DropdownToggle>Attendance History</DropdownToggle>
                  <DropdownMenu>
                    {classdesc.attendance.map(document => (
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
  query ClassQuery($strapiId: Int!) {
    class: strapiClassList(strapiId: {eq: $strapiId}) {
      class_img {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      classname
      class_desc
      zoomurl
      days
      start
      end
      attendance {
        attendance_date
        id
      }
      students {
        firstname
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