import { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaUserGraduate, FaTrophy, FaAward, FaChartLine } from "react-icons/fa";

function About() {
  const [counts, setCounts] = useState({
    years: 0,
    graduates: 0,
    awards: 0,
    success: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const targetCounts = {
    years: 15,
    graduates: 500,
    awards: 10,
    success: 98,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60; // I entered 60 because of the speed of the animation if I'd entered 70 it'll be faster or low if I entered 50 it'll be slower and it's like 60hz 60 frames per second
    const interval = duration / steps; // Each step time is interval and we know how many steps we did it's like 2000/60 2000 is total animation time I mean it's duration divided by steps 60 that's the frame per second and equals 33.33 ms it's 30 update for a second

    let step = 0; // it's first step we start from 0
    const timer = setInterval(() => {
      // Timer is interval ID and setInterval is a function that run the same code at certain intervals
      step++; // That's the advance the step
      const progress = step / steps; // progress is from 0 to 1 that's the ratio of the current step to the total number of steps I mean total steps 60 and for example we're in 32th step so progress calculate the 32/60 equals 0.53 is done

      setCounts({
        // That's the update the counts state I mean students counts teacher counts staff counts and years counts setCounts update them and they re-render
        years: Math.floor(targetCounts.years * progress),
        graduates: Math.floor(targetCounts.graduates * progress),
        awards: Math.floor(targetCounts.awards * progress),
        success: Math.floor(targetCounts.success * progress),
      });

      if (step >= steps) {
        // If our current step equals total steps clearInterval stops the interval
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, interval);
  };

  const statsData = [
    {
      icon: FaAward,
      count: counts.years,
      label: "Years of Experience",
      color: "#FFFFFF",
    },
    {
      icon: FaUserGraduate,
      count: counts.graduates,
      label: "Happy Customers",
      color: "#FFFFFF",
    },
    {
      icon: FaTrophy,
      count: counts.awards,
      label: "Award Winning",
      color: "#FFFFFF",
    },
    {
      icon: FaChartLine,
      count: counts.success,
      label: "Success Rate",
      suffix: "%",
      color: "#FFFFFF",
    },
  ];

  return (
    <section id="about" style={{ background: "#f8fafc" }}>
      <div style={{ background: "#e5e7eb", padding: "6rem 0" }}>
        <Container>
          <Row className="g-5 align-items-center">
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
                  Explore BRHS History
                </p>
                <h2
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(2rem, 5vw, 3rem)",
                    color: "#0a2463",
                    marginBottom: "1.5rem",
                  }}
                >
                  Learn About Belize Rural High School
                </h2>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: "#475569",
                    marginBottom: 0,
                  }}
                >
                  Belize Rural High School is dedicated to providing quality
                  education and fostering a supportive community for all
                  students. Our commitment to excellence has yielded exceptional
                  results, with our graduates excelling in various fields and
                  making a positive impact in society.
                </p>{" "}
                {/* I used clamp for fontSize because clamp is keeping value within a specific range so first is minimal range for mobile devices second one is for tablet and third one for desktop */}
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  background: "url(/Images/Belize_Rural_Image__3.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "20px",
                  boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.15)",
                }}
              ></motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        ref={statsRef}
        style={{
          background: "#1f2937",
          padding: "6rem 0",
        }}
      >
        <Container>
          <Row className="g-4">
            {statsData.map((stat, index) => {
              // That's render stats and into the statistics table's index numbers
              const Icon = stat.icon;
              return (
                <Col key={index} xs={6} md={3}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center text-white p-4"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "15px",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <Icon
                      size={50}
                      style={{ color: "#f59e0b", marginBottom: "15px" }}
                    />
                    <h2
                      className="fw-bold mb-2"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        color: "white",
                      }}
                    >
                      {stat.count}
                      {stat.suffix || "+"}
                    </h2>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "1rem",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <div style={{ background: "#f8fafc", padding: "6rem 0" }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-5"
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
              Our Beliefs
            </p>

            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: "#000000",
                fontWeight: 700,
              }}
            >
              Missions and Values
            </h2>
          </motion.div>

          <Row className="g-5">
            <Col lg={6}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }} /* that's for column in the left animation I mean left column's text will come from the left a bit */
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2rem",
                    color: "#0a2463",
                    marginBottom: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  Our Mission
                </h3>

                <p
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: 1.9,
                    color: "#475569",
                  }}
                >
                  {" "}
                  To empower students with knowledge, skills, and values
                  necessary for success in a dynamic world, fostering a culture
                  of lifelong learning and community service.
                </p>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "2rem",
                    color: "#0a2463",
                    marginBottom: "1.75rem",
                    fontWeight: 700,
                  }}
                >
                  Core Values
                </h3>
                <p
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: 1.7,
                    color: "#475569",
                  }}
                >
                  {" "}
                  Integrity, respect, perseverance, and community engagement are
                  the core values that guide us in nurturing responsible,
                  compassionate, and contributing members of society.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default About;
