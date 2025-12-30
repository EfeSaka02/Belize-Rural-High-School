import { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { motion } from "framer-motion";

function Blog() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogData = [
    {
      id: 1,
      image: "/Images/Belize_Rural_Image_8.jpeg",
      title: "Crafting Captivating Headlines",
      date: "June 2024",
      excerpt:
        "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction...",
      fullContent: (
        <div>
          <h4
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#0a2463",
            }}
          >
            Engaging Introductions: Capturing Your Audience’s Interest
          </h4>
          <p>
            The initial impression your blog post makes is crucial, and that’s
            where your introduction comes into play. Hook your readers with a
            captivating opening that sparks curiosity or emotion. Address their
            pain points or questions to establish a connection. Outline the
            purpose of your post and give a sneak peek into what they can
            expect. A well-crafted introduction sets the tone for an immersive
            reading experience.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      image: "/Images/Belize_Rural_Image_9.jpeg",
      title:
        "The Art of Drawing Readers In: Your attractive post title goes here",
      date: "June 2024",
      excerpt:
        "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction...",
      fullContent: (
        <div>
          <h4
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#0a2463",
            }}
          >
            Engaging Introductions: Capturing Your Audience’s Interest
          </h4>
          <p>
            The initial impression your blog post makes is crucial, and that’s
            where your introduction comes into play. Hook your readers with a
            captivating opening that sparks curiosity or emotion. Address their
            pain points or questions to establish a connection. Outline the
            purpose of your post and give a sneak peek into what they can
            expect. A well-crafted introduction sets the tone for an immersive
            reading experience.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      image: "/Images/Belize_Rural_Image_7.jpeg",
      title:
        "Mastering the First Impression: Your intriguing post title goes here",
      date: "June 2024",
      excerpt:
        "Engaging Introductions: Capturing Your Audience’s Interest The initial impression your blog post makes is crucial, and that’s where your introduction...",
      fullContent: (
        <div>
          <h4
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
              color: "#0a2463",
            }}
          >
            Engaging Introductions: Capturing Your Audience’s Interest
          </h4>
          <p>
            The initial impression your blog post makes is crucial, and that’s
            where your introduction comes into play. Hook your readers with a
            captivating opening that sparks curiosity or emotion. Address their
            pain points or questions to establish a connection. Outline the
            purpose of your post and give a sneak peek into what they can
            expect. A well-crafted introduction sets the tone for an immersive
            reading experience.
          </p>
        </div>
      ),
    },
  ];

  const OpenModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const CloseModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <section id="blog" style={{ background: "#f8fafc", padding: "6rem 0" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: "4rem" }}
        >
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#0a2463",
              fontWeight: 700,
              textAlign: "left",
              marginBottom: 0,
            }}
          >
            Discover the Latest News and Updates
          </h2>
        </motion.div>

        <Row className="g-4">
          {blogData.map((blog, index) => (
            <Col key={blog.id} lg={4} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                style={{
                  background: "rgba(31, 41, 55, 0.95)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    backgroundImage: `url(${blog.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div
                  style={{
                    // I used flex here to line up the elements inside the container from top the bottom
                    padding: "2rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#f59e0b",
                      fontWeight: 600,
                      marginBottom: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    {blog.date}
                  </p>

                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.5rem",
                      color: "white",
                      marginBottom: "1rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      color: "rgba(255, 255, 255, 0.8)",
                      marginBottom: "1.5rem",
                      flex: 1,
                    }}
                  >
                    {blog.excerpt}
                  </p>

                  <Button
                    onClick={() => OpenModal(blog)}
                    style={{
                      padding: "0.75rem 1.5rem", // I didn't want to type seperatlety so I wrote like this to save time
                      background: "#4b5563",
                      color: "white",
                      border: "none",
                      borderRadius: "50px",
                      fontWeight: 600,
                      fontSize: "1rem",
                      transition: "all 0.3s ease",
                      alignSelf: "flex-start",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1f2937";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#4b5563";
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal Section for blog's details */}
      <Modal
        show={showModal}
        onHide={CloseModal}
        size="lg"
        centered
        backdrop="static"
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        {selectedBlog && (
          <>
            <div
              style={{
                width: "100%",
                aspectRatio: "16/9",
                backgroundImage: `url(${selectedBlog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            ></div>

            <Modal.Header
              closeButton
              style={{ borderBottom: "1px solid #e5e7eb" }}
            >
              <Modal.Title
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "2rem",
                  color: "#0a2463",
                  fontWeight: 700,
                }}
              >
                {selectedBlog.title}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body
              style={{
                maxHeight: "60vh",
                overflowY: "auto",
                padding: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#f59e0b",
                  fontWeight: 600,
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {selectedBlog.date}
              </p>

              <div
                style={{
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  color: "#475569",
                }}
              >
                {selectedBlog.fullContent}
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>

      <style>{`.modal-backdrop.show {
      backdrio-filter: blur(8px); -webkit-backdrop-filter: blur(8px); background-color: transparent;}`}</style>
    </section>
  );
}

export default Blog;
