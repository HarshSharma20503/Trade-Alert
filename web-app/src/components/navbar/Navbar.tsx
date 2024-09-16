import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useState } from "react";

import "./Navbar.css";

interface User {
  username?: string;
  email?: string;
}

const Header = () => {
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [localStorage.getItem("user")]);

  return (
    <>
      <Navbar
        key="md"
        expand="md"
        className="bg-body-danger"
        style={{
          background:
            "linear-gradient(to bottom, rgb(0, 123, 255) 0%, rgba(0, 123, 255,0.9) 33%, rgba(0, 123, 255,0.8) 50%, rgba(0, 123, 255, 0.7) 80%, rgba(255, 255, 255, 0) 100%)",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="/">RED ALERT</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header
              closeButton
              style={{
                background: "rgb(0, 123, 255)",
              }}
            >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                RED ALERT
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offcanvas-bg-md-class">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {user ? (
                  <>
                    <Nav.Link as={Link} to="/logout">
                      <button
                        className="btn btn-primary my-0"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/signUp">
                      Sign Up
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
