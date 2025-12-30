import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Contact() {
  const Submit = (e) => {
    e.preventDefault();
    alert("Thank you for your message ! We will get back to you soon.");
  };

  return (
    <section id="contact" style={{ background: "#f8fafc", padding: "6rem 0" }}>
      <Container>
        <Row className="g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "#64748b",
                  fontWeight: 600,
                  marginBottom: "1rem",
                }}
              >
                Connect For
              </p>

              <h2
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  color: "#0f172a",
                  marginBottom: "2rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                }}
              >
                Any Inquiries or Assistance
              </h2>

              <div
                style={{
                  background: "rgba(31, 41, 55, 0.95)",
                  padding: "3rem",
                  borderRadius: "20px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
              >
                <Form onSubmit={Submit}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white", fontWeight: 500 }}>
                      First Name <span style={{ color: "#ef4444" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "1rem",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white", fontWeight: 500 }}>
                      Email <span style={{ color: "#ef4444" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      required
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "1rem",
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white", fontWeight: 500 }}>
                      Message <span style={{ color: "#ef4444" }}>*</span>
                    </Form.Label>
                    <Form.Control
                      type="textarea"
                      required
                      style={{
                        padding: "0.75rem 1rem",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "1rem",
                        resize: "none", // resize especially in elemets like textareas controls the user's ability to resize by dragging and dropping from the corner
                      }}
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    style={{
                      padding: "0.75rem 2rem",
                      background: "#4b5563",
                      color: "white",
                      border: "none",
                      borderRadius: "50px",
                      fontWeight: 600,
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1f2937";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#4b5563";
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{ marginBottom: "3rem" }}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "#64748b",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                  }}
                >
                  PHONE
                </p>
                <div
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "#0a2463",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  <span>+5016031924</span>
                </div>

                <a
                  href="tel:+5016031924"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    color: "#0a2463",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4b5563")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#0a2463")
                  }
                ></a>
              </div>

              <div style={{ marginBottom: "3rem" }}>
                <p
                  style={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "#64748b",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                  }}
                >
                  Email
                </p>
                <div
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "#0a2463",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  <span>secretary@brhs.edu.bz</span>
                </div>
                <a
                  href="mailto:secretary@brhs.edu.bz"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "#0a2463",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#4b5563")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#0a2463")
                  }
                ></a>
              </div>

              <div style={{ marginBottom: "3rem" }}>
                <p
                  style={{
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "#64748b",
                    fontWeight: 600,
                    marginBottom: "0.75rem",
                  }}
                >
                  Address
                </p>
                <div
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "#0a2463",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    lineHeight: 1.4,
                  }}
                >
                  <span>
                    Double Head Cabbage Belize District Central America
                  </span>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
