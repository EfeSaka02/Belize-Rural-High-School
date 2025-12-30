import { useState, useEffect } from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scroolToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={scrolled ? "scrolled" : ""} // That tells us we have scrolled or not I mean it's controlling scrolled
    >
      <Container>
        <BootstrapNavbar.Brand
          href="#home"
          onClick={() => scroolToSection("home")}
        >
          <img
            src="/Images/Belize_Rural_Logo.jpg"
            alt="Belize Rural High School"
            height="60"
            className="d-inline-block align-top"
          />
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => scroolToSection("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => scroolToSection("about")}>About</Nav.Link>
            <Nav.Link onClick={() => scroolToSection("services")}>
              Services
            </Nav.Link>
            <Nav.Link onClick={() => scroolToSection("blog")}>Blog</Nav.Link>
            <Nav.Link onClick={() => scroolToSection("contact")}>
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
