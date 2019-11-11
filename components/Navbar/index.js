import { Navbar, Nav } from "react-bootstrap"
import Link from "next";

export const CustomNavbar = () => (
  <Navbar variant="dark" bg="primary">
    <Navbar.Brand>The Water Agency Inc.</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Link passhref href="/shasta">
          <Nav.Link>Shasta Dam</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)