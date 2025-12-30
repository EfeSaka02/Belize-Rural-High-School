import { Container } from "react-bootstrap";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-4 text-center text-white"
      style={{
        background: "#1a1a1a",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container>
        <div className="mb-3">
          <a
            href="https://www.facebook.com/belizerural/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
            style={{ fontSize: "2rem", transition: "color 0.3s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1877f2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
          >
            <FaFacebook />
          </a>{" "}
          {/* noopener and noreferrer prevents the newly opened page like facebook from accessing your site. */}
        </div>

        <p className="mb-0" style={{ fontSize: "0.9rem", color: "#aaa" }}>
          © Copyright 2023 - {currentYear} | Designed & Managed by GLP Software
          House
          <br />
          <span className="fw-bold text-white">
            Belize Rural High School{" "}
          </span>{" "}
          GLP Software House | All Rights Reserved
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
