import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaCoins, FaRegBell } from 'react-icons/fa';
import { BsPersonLinesFill } from "react-icons/bs";

function ProfileNavBar() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className="shadow-sm" style={{ background: '#000349', borderBottom: 'none', height: '60px',margin:'0px' }}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold rounded-pill" style={{ color: '#fff', height: '60px', lineHeight: '60px' }}>
            <img src="brand.jpg" alt="brand" style={{ maxHeight: '90%', verticalAlign: 'middle' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <NavDropdown
                title={<FaRegBell style={{ color: '#fff' }} className='me-1' />}
                className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="/login" className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}>
                <FaCoins />
              </Nav.Link>
              <NavDropdown
                title={<BsPersonLinesFill style={{ color: '#fff'}} className='me-1' />}
                className="fw-bold nav-Nav.Link" style={{ color: '#fff' }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default ProfileNavBar;
