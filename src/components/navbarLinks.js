
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  letter-spacing: 1.75px;
  font-size: 0.75rem;
  color: #1d2225;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  @media(max-width: 360px){
    display: block;
    padding-left: 40px;
}

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: goldenrod;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: goldenrod;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavbarLinks = () => {
  return (
    <div className="navigation">
      <nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/">Classes</NavItem>
        <NavItem to="/studentList">Students</NavItem>
      </nav>
    </div>
  )
}

export default NavbarLinks