import React from "react";

import {Navbar, Container, Image} from 'react-bootstrap'

function Navigationbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand className="font-weight-bold" href="#home">Postagram</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Image src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" width="30" height="30" rounded />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;