# 🎓 Belize Rural High School Website

Modern, responsive, and feature-rich website for Belize Rural High School, located in Double Head Cabbage, Belize District, Central America.

![Belize Rural](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap)

---

## 🌟 Features

- ✅ **Hero Section** - Full-screen background image with dark overlay and animated text effects
- ✅ **Animated Statistics** - Counter animation from 0 to target numbers (15+ years, 500+ graduates, 10+ awards, 98% success)
- ✅ **About Section** - Three-part comprehensive layout with school history, statistics, mission and values
- ✅ **Services Section** - Four academic programs with alternating zigzag layout design
- ✅ **Blog Section** - Latest news and updates with modal system for detailed content viewing
- ✅ **Contact Form** - Interactive contact form with school location and information
- ✅ **Smooth Scroll Navigation** - One-page design with seamless section transitions
- ✅ **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- ✅ **Modern UI/UX** - Framer Motion animations and Bootstrap 5 components

---

## 🛠️ Technologies Used

### Core

- **React 18.3** - JavaScript library for building user interfaces
- **Vite 6.0** - Next-generation frontend tooling
- **Bootstrap 5.3** - CSS framework for responsive design
- **React Bootstrap** - Bootstrap components as React components

### Libraries & Tools

- **Framer Motion** - Animation library for smooth transitions
- **React Icons** - Icon library (Font Awesome icons)
- **IntersectionObserver API** - Scroll-triggered counter animations
- **JavaScript ES6+** - Modern JavaScript features

---

## 📂 Project Structure

```
belize-rural-high-school/
├── public/
│   └── Images/              # School images and assets
│       ├── Belize_Rural_Logo.jpg
│       ├── Belize_Rural_Img_1.jpg
│       ├── Belize_Rural_Image__3.jpg
│       ├── Belize_Rural_High_School_Image_6.jpg
│       ├── Belize_Rural_Image_5.jpg
│       ├── Belize_Rural_Image_8.jpeg
│       ├── Belize_Rural_Image_9.jpeg
│       └── Belize_Rural_Image_7.jpeg
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation with scroll effect
│   │   ├── Home.jsx         # Hero section
│   │   ├── About.jsx        # Three-part about section
│   │   ├── Services.jsx     # Four service cards
│   │   ├── Blog.jsx         # Blog posts with modal
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer with social links
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Base CSS
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/belize-rural-high-school.git
cd belize-rural-high-school
```

2. **Install dependencies**

```bash
npm install
```

3. **Add images** (⚠️ Required)

Place the following images in `public/Images/`:

```
public/Images/
├── Belize_Rural_Logo.jpg
├── Belize_Rural_Img_1.jpg
├── Belize_Rural_Image__3.jpg
├── Belize_Rural_High_School_Image_6.jpg
├── Belize_Rural_Image_5.jpg
├── Belize_Rural_Image_8.jpeg
├── Belize_Rural_Image_9.jpeg
└── Belize_Rural_Image_7.jpeg
```

4. **Run development server**

```bash
npm run dev
```

5. **Open in browser**

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

---

## 📱 Sections Overview

### 1. **Hero / Home**

- Full-screen hero section with background image
- Dark semi-transparent overlay (rgba(0,0,0,0.5))
- Animated welcome text with Framer Motion
- School name in large, bold typography
- Tagline: "Empowering students for a successful future"
- Orange "Join Us" CTA button that scrolls to contact section
- Responsive font sizing with CSS clamp()

### 2. **About**

**Three distinct parts with unique styling:**

**Part 1: Learn About BRHS**

- Two-column layout (text left, image right)
- School history and description
- Gray background (#e5e7eb)
- Fade-in animations on scroll

**Part 2: Statistics**

- Four animated stat cards in a row
- Counter animation from 0 to target value
- Icons: Years, Graduates, Awards, Success Rate
- Orange accent icons (#f59e0b)
- Dark background (#1f2937)
- Glassmorphism effect on cards
- IntersectionObserver triggers animation on scroll

**Part 3: Mission and Values**

- Two-column layout
- "Our Mission" and "Core Values"
- White background
- Playfair Display serif font for headings

### 3. **Services**

- Four service cards with zigzag alternating layout
- Numbered services (01, 02, 03, 04)
- Dark gray cards (rgba(31,41,55,0.95))
- Left-image, right-content for even cards
- Right-image, left-content for odd cards
- Staggered fade-in animations
- Box shadow on cards

**Services:**

1. Academic Programs
2. Extracurricular Activities
3. College and Career Guidance
4. Parental Involvement

### 4. **Blog**

- Three blog post cards in grid layout
- Each card contains:
  - Featured image at top
  - Date badge in orange
  - Post title
  - Excerpt text
  - "Read More" button
- Click "Read More" to open modal
- Modal features:
  - Image at top (no overlay)
  - Full blog title
  - Date stamp
  - Complete blog content
  - Scrollable content area
  - Close button
  - Blur backdrop effect

### 5. **Contact**

- Two-column responsive layout
- **Left Column: Contact Form**

  - First Name input (required)
  - Email input (required)
  - Message textarea (required)
  - Submit button with hover effect
  - Dark form container (rgba(31,41,55,0.95))
  - White input fields with rounded corners

- **Right Column: School Information**
  - Phone number (clickable tel: link)
  - Email address (clickable mailto: link)
  - Physical address with icon
  - All text elements have hover color change
  - Navy blue text (#0a2463)
  - Gray labels (#64748b)

### 6. **Footer**

- Dark background (#1a1a1a)
- Facebook social link with icon
- Icon changes color on hover (white → #1877f2)
- Copyright text with year range
- GLP Software House credits
- School name in bold
- "All Rights Reserved" text

---

## 🎨 Key Features Explained

### Animated Statistics Counter

```javascript
// Uses IntersectionObserver to trigger when section enters viewport
// Animates numbers from 0 to target value over 2 seconds
// 60 steps for smooth 60 FPS animation

const animateCounters = () => {
  const duration = 2000; // Total animation time
  const steps = 60; // Number of animation steps (60 FPS)
  const interval = duration / steps; // Time between each step (33.33ms)

  let step = 0;
  const timer = setInterval(() => {
    step++;
    const progress = step / steps; // Calculate progress (0 to 1)

    setCounts({
      years: Math.floor(targetCounts.years * progress),
      graduates: Math.floor(targetCounts.graduates * progress),
      awards: Math.floor(targetCounts.awards * progress),
      success: Math.floor(targetCounts.success * progress),
    });

    if (step >= steps) {
      clearInterval(timer);
      setCounts(targetCounts); // Set final values
    }
  }, interval);
};

// IntersectionObserver watches for section visibility
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        animateCounters();
        setHasAnimated(true); // Prevent re-animation
      }
    },
    { threshold: 0.5 } // Trigger when 50% visible
  );

  if (statsRef.current) {
    observer.observe(statsRef.current);
  }

  return () => observer.disconnect();
}, [hasAnimated]);
```

### Modal System for Blog

```jsx
// State management for modal
const [showModal, setShowModal] = useState(false);
const [selectedBlog, setSelectedBlog] = useState(null);

// Open modal with selected blog data
const OpenModal = (blog) => {
  setSelectedBlog(blog);
  setShowModal(true);
};

// Close modal and clear selection
const CloseModal = () => {
  setShowModal(false);
  setSelectedBlog(null);
};

// Bootstrap Modal component
<Modal
  show={showModal}
  onHide={CloseModal}
  size="lg"
  centered
  backdrop="static"
>
  {selectedBlog && (
    <>
      <div style={{ backgroundImage: `url(${selectedBlog.image})` }} />
      <Modal.Header closeButton>
        <Modal.Title>{selectedBlog.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{selectedBlog.date}</p>
        <div>{selectedBlog.fullContent}</div>
      </Modal.Body>
    </>
  )}
</Modal>

// Custom CSS for transparent blur backdrop
<style>{`
  .modal-backdrop.show {
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background-color: transparent;
  }
`}</style>
```

### Smooth Scroll Navigation

```javascript
// Navbar links scroll smoothly to target sections
// Uses native scrollIntoView with smooth behavior

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Usage in Navbar
<Nav.Link onClick={() => scrollToSection("home")}>Home</Nav.Link>
<Nav.Link onClick={() => scrollToSection("about")}>About</Nav.Link>
<Nav.Link onClick={() => scrollToSection("services")}>Services</Nav.Link>
<Nav.Link onClick={() => scrollToSection("blog")}>Blog</Nav.Link>
<Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
```

### Responsive Navbar with Scroll Effect

```javascript
// Navbar changes from transparent to solid white on scroll
// Triggered at 50px scroll position

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true); // Add 'scrolled' class
    } else {
      setScrolled(false); // Remove 'scrolled' class
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Apply conditional className
<BootstrapNavbar
  expand="lg"
  fixed="top"
  className={scrolled ? "scrolled" : ""}
>
```

### Framer Motion Animations

```jsx
// Fade-in and slide-up animations triggered on scroll
// viewport={{ once: true }} ensures animation plays only once

<motion.div
  initial={{ opacity: 0, y: 30 }} // Start invisible and 30px down
  whileInView={{ opacity: 1, y: 0 }} // Fade in and slide up
  viewport={{ once: true }} // Animate only on first view
  transition={{ duration: 0.8 }} // 800ms animation duration
>
  {/* Content */}
</motion.div>;

// Staggered animations for multiple items
{
  servicesData.map((service, index) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }} // Stagger by 100ms
      key={index}
    >
      {/* Service card */}
    </motion.div>
  ));
}
```

---

## 📸 Screenshots

### Desktop View

![Desktop Hero](screenshots/desktop-hero.png)
![Desktop About](screenshots/desktop-about.png)
![Desktop Services](screenshots/desktop-services.png)

### Mobile View

![Mobile](screenshots/mobile-view.png)

---

## 🌐 Live Demo

Visit the live website: [Belize Rural High School](https://your-domain.com)

---

## 📝 Configuration

### Update School Information

- **Logo**: Replace `/public/Images/Belize_Rural_Logo.jpg`
- **Hero Background**: Replace `/public/Images/Belize_Rural_Img_1.jpg`
- **About Image**: Replace `/public/Images/Belize_Rural_Image__3.jpg`
- **Statistics**: Edit `targetCounts` object in `About.jsx`
- **Blog Posts**: Edit `blogData` array in `Blog.jsx`
- **Services**: Edit `servicesData` array in `Services.jsx`

### Update Content

- **School Name**: Search and replace "Belize Rural High School" across all files
- **Contact Info**: Edit phone, email, address in `Contact.jsx`
- **Facebook Link**: Edit URL in `Footer.jsx`
- **Colors**: Modify color variables in component styles

### Update Images

All images should be placed in `public/Images/` directory with these exact names:

```bash
public/Images/
├── Belize_Rural_Logo.jpg               # Navbar logo (recommended: 200x80px)
├── Belize_Rural_Img_1.jpg              # Hero background (1920x1080px or higher)
├── Belize_Rural_Image__3.jpg           # About section image (800x600px)
├── Belize_Rural_High_School_Image_6.jpg # Service 1 image
├── Belize_Rural_Image_5.jpg            # Service 2 image (add more as needed)
├── Belize_Rural_Image_8.jpeg           # Blog post 1 image (16:9 ratio)
├── Belize_Rural_Image_9.jpeg           # Blog post 2 image
└── Belize_Rural_Image_7.jpeg           # Blog post 3 image
```

---

## 🌐 Browser Support

- Chrome/Edge 61+
- Firefox 60+
- Safari 11+
- iOS Safari 10+
- Android Chrome 6+

Optimized for older devices with:

- ES2015 target compilation
- CSS fallbacks for modern properties
- Responsive design principles

---

## 🐛 Known Issues

- None currently reported

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

© Copyright 2023 - 2025 | Designed & Managed by **GLP Software House**

**Belize Rural High School** | All Rights Reserved

---

## 👨‍💻 Developer

Developed with ❤️ by **GLP Software House**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: contact@glpsoftware.com

---

## 🏫 About Belize Rural High School

Belize Rural High School is located in Double Head Cabbage, Belize District, Central America. With over 15 years of educational excellence, the school has produced 500+ successful graduates and continues to provide quality education to students.

**Contact Information:**

- 📍 Double Head Cabbage, Belize District, Central America
- 📞 +5016031924
- 📧 secretary@brhs.edu.bz
- 🌐 Facebook: [Belize Rural High School](https://www.facebook.com/belizerural/)

**Our Achievements:**

- **15+ Years** of Experience
- **500+ Happy** Graduates
- **10+ Award** Winning
- **98% Success** Rate

---

## ⭐ Acknowledgments

- Bootstrap team for the amazing CSS framework
- Framer Motion for smooth animations
- React Icons for the comprehensive icon library
- Anthropic Claude for development assistance
- All the students, teachers, and staff of Belize Rural High School

---

**Made with React ⚛️ | Powered by Vite ⚡ | Styled with Bootstrap 💅**
