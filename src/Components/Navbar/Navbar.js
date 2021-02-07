import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">SpaceWiki</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Astronauts</Nav.Link>
          <Nav.Link href="#pricing">Agencies</Nav.Link>
          <Nav.Link href="#pricing">Launches</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;

// TODO add links functionality