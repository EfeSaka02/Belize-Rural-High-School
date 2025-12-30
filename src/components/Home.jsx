import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url(/Images/Belize_Rural_Img_1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="min-vh-100 align-items-center">
          <Col xs={12} md={8} lg={6}>
            <div style={{ color: "white" }}>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  opacity: 0.9,
                }}
              >
                WELCOME TO
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                  color: "white",
                }}
              >
                Belize Rural High School
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  marginBottom: "2.5rem",
                  lineHeight: 1.6,
                  opacity: 0.95,
                }}
              >
                Empowering students for a successful future
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  style={{
                    padding: "1rem 2.5rem",
                    background: "#f59e0b",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 155px rgba(245, 158, 11, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#d97706";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 20px rgba(245, 158, 11, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f59e0b";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px rgba(245, 158, 11, 0.3)";
                  }}
                >
                  Join Us
                </Button>
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
