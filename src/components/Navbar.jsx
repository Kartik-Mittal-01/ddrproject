import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#8B0000" }} variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#fff", fontWeight: "bold" }}>
          Plastic Management
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>

            <Nav.Link href="/page1" style={{ color: "#fff" }}>
              Hardik
            </Nav.Link>

            <Nav.Link href="#action2" style={{ color: "#fff" }}>
              Kavya
            </Nav.Link>

            <NavDropdown title="Link" id="navbarScrollingDropdown" menuVariant="dark">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" disabled style={{ color: "#ccc" }}>
              Link
            </Nav.Link>

          </Nav>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;