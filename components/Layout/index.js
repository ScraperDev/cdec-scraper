import { Container } from "react-bootstrap";
import { CustomNavbar } from "../Navbar";

export const Layout = ({ children }) => (
  <>
    <CustomNavbar />
    <Container fluid>
      {children}
    </Container>
  </>
)