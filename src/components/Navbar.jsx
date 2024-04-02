import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="fixed-top">
      {/* <Navbar.Brand href="#home" className="navbar-brand-left">sakshi danej</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-right highlightTextIn">
          <Nav.Link href="#">home</Nav.Link>
          <Nav.Link href="/projects">projects</Nav.Link>
          <Nav.Link href="/about">about</Nav.Link>
          {/* <Nav.Link href="https://www.linkedin.com/in/sakshi-danej/"><FontAwesomeIcon icon={faLinkedin} /></Nav.Link> */}
          {/* <Nav.Link href="https://twitter.com/SakshiDanej"><FontAwesomeIcon icon={faXTwitter} /></Nav.Link> */}
          {/* <Nav.Link href="https://github.com/DanejSakshi13"><FontAwesomeIcon icon={faGithub} /></Nav.Link> */}
          <Nav.Link href="mailto:sakshi1314.d@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;








// BOX SHADOW