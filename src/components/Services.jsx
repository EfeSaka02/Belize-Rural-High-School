import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Services() {
  const servicesData = [
    {
      number: "01",
      title: "Academic Programs",
      description:
        "Our academic programs offer a comprehensive curriculum designed to meet the unique needs of each student,ensuring their success in their educational journey. We provide a variety of courses and supportive resources to facilitate their learning and personal growth.",
      image: "/Images/Belize_Rural_Image__3.jpg",
    },
    {
      number: "02",
      title: "Extracurricular Activities",
      description:
        "We believe in holistic development and provide a wide range of extracurricular activities to foster the talents and interests of our students. From sports teams to clubs and community service initiatives, we offer opportunities for students to explore their passions, develop leadership skills, and create lasting memories.",
      image: "/Images/Belize_Rural_High_School_Image_6.jpg",
    },
    {
      number: "03",
      title: "College and Career Guidance",
      description:
        "We are committed to helping our students achieve their post-secondary goals. Our College and Career Guidance program provides personalized counseling, resources, and workshops to assist students in making informed decisions about their educational and career pathways. We strive to empower them to pursue their dreams and thrive in their chosen fields.",
      image: "/Images/Belize_Rural_Img_1.jpg",
    },
    {
      number: "04",
      title: "Parental Involvement",
      description:
        "At BRHS, we value the partnership between parents and our school community. We encourage parental involvement through various initiatives such as parent-teacher conferences, workshops, and volunteering opportunities. Together, we work towards fostering a supportive environment for student growth, well-being, and academic achievement.",
      image: "/Images/Belize_Rural_Image_5.jpg",
    },
  ];

  return (
    <section id="services" style={{ background: "#f8fafc", padding: "6rem 0" }}>
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
              color: "black",
              fontWeight: 700,
              textAlign: "left",
              marginBottom: 0,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Our Services
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {servicesData.map(
            (
              service,
              index // The reason we use a map here is because we define the contents of the service section with const so we render each one individually with this map Instead of writing separate motion.div files for each we write one motion.div file and use a map to render all four
            ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Row
                  className={
                    index === 1 || index === 3
                      ? "g-0 align-items-center flex-row-reverse"
                      : "g-0 align-items-center"
                  }
                  style={{
                    background: "rgba(31, 41, 55, 0.95)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Col lg={6}>
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "4/3",
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "400px",
                      }}
                    ></div>
                  </Col>

                  <Col lg={6}>
                    <div style={{ padding: "3rem" }}>
                      <h3
                        style={{
                          fontFamily: "Playfair Display, serif",
                          fontSize: "clamp(2rem, 4vw, 3rem)",
                          color: "white",
                          marginBottom: "1.5rem",
                          fontWeight: 700,
                        }}
                      >
                        {service.number}
                      </h3>

                      <h4
                        style={{
                          fontFamily: "Playfair Display, serif",
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          color: "white",
                          marginBottom: "1.5rem",
                          fontWeight: 600,
                        }}
                      >
                        {service.title}
                      </h4>

                      <p
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: 1.7,
                          color: "rgba(255, 255, 255, 0.9)",
                          marginBottom: 0,
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </Col>
                </Row>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

export default Services;
