import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import './AppLayout.style.css';
import logo from '../images/logo.png';

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="app-layout">
      <Navbar expand="lg" className="navbar_layout" style={{ backgroundColor: 'black' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ width: '150px', height: '70px', overflow: 'hidden' }}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain', 
                transform: 'scale(3)',  // 이미지 확대
                transformOrigin: 'center' // 확대 기준점을 중앙으로 설정
              }} 
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/movies" style={{ color: 'white' }}>Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                style={{ backgroundColor: 'white', color: 'black' }}
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
