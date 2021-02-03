import React, { useState } from "react"
import styled from 'styled-components'

import Logo from "./logo"
import NavbarLinks from "./navbarLinks"

const Navigation = styled.nav`
  height: 10vh;
  display: inline-block;
  border-bottom: 2px solid #33333320;
  background-size: cover;
  background-color: #fff;
  background-position: 50%;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 20px 40px;
  z-index: 2;
  align-self: center;
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
    @media (max-width: 768px) {
      position: sticky;
      height: 8vh;
      top: 0;
      left: 0;
      right: 0;
      left: 0;
      margin: 0;
      width: 720px;
      min-width: 720px;
    }
    @media(max-width: 480px){
        width: 360px;
        min-width: 360px;
    }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: inline-block;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  width: max-content;
  float: right;
  transform: translateY(12px);

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar