import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Top = () => {
  return (
    <Navbar  className="navbar navbar-expand-lg  navbar-dark bg-dark navbar-fixed-top ">
    <Container>
      <Navbar.Brand href="#home"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
           
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link> */}
         <h1 style={{color:"red"}}>Film categories</h1>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Top