// import { Button } from "bootstrap";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import callImages from "../../assets/callImages";
// import { Link } from "react-router-dom";

const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={callImages.logo} className="logo" alt="sfvs" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
            
          />
          <Nav className="me-auto">
            <Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-center"
            >
              <img src={callImages.login} className="login-img" alt="sfvs" />

              <p style={{ color: "white" }} className="mx-2">دخول</p>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={callImages.cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }} className="mx-2">العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
