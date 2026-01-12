import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" fixed='top'>
        <Container fluid>
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            alt="TechNova Kft. Logo"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          TechNova Kft.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Főoldal</Nav.Link>
            <Nav.Link href="/Rolunk">Rólunk</Nav.Link>
            <Nav.Link href="/Termekek">Termékek</Nav.Link>
            <Nav.Link href="/Akciok">Akciók</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}
