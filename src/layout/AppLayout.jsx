import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet, Link } from 'react-router-dom';


const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar expand="lg" className="navbar_layout" style={{ backgroundColor: 'black' }}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img 
              src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' 
              alt="Netflix Logo" 
              style={{ width: '150px',  }} 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
               <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
               <Nav.Link as={Link} to="/movies" style={{ color: 'white' }}>Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ backgroundColor: 'white', color: 'black' }}
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default AppLayout;
