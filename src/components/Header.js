import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/wx0X5J2K/logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
           CHiPoLiTE Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header