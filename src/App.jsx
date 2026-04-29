import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";


import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Packages from "./components/packages/Packages";   // NEW
import Featured from "./components/featured/featured";
import About from "./components/About/About";
import Portfolio from "./components/portfolio/Portfolio";
import Packages from "./components/packages/Packages";   // NEW
import Testimonials from "./components/testimonials/Testimonials";
import Instagram from "./components/instagram/Instagram";
import Blog from "./components/blog/blog";
import Footer from "./components/footer/footer";
import Gallery from "./pages/Gallery";

// Home page components
import Portfolio from "./components/portfolio/Portfolio";
import Packages from "./components/packages/Packages";
import Video from "./components/video/Video";
import Testimonials from "./components/testimonials/Testimonials";
import Instagram from "./components/instagram/Instagram";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

import Location from "./components/location/Location";
import Featured from "./components/featured/Featured";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

// Pages
import Gallery from "./pages/Gallery";
import GalleryDetails from "./pages/gallerypage/gallerypage";
import GalleryUpload from "./pages/Admin/GalleryUpload";
import FeaturedUpload from "./pages/Admin/FeaturedUpload";
import TestimonialUpload from "./pages/Admin/TestimonialUpload";
import InstagramUpload from "./pages/Admin/InstagramUpload";
import Dashboard from "./pages/Admin/Dashboard";
import FloatingChat from "./components/floating/floating";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section id="home">
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <Hero />
      </section>

      {/* <section id="portfolio">
        <Portfolio />
      </section> */}

      <section id="services">
        <Services />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="featured">
        <Featured />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="packages">
        <Packages />
      </section>

      {/* <section id="video">
        <Video />
      </section> */}

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="instagram">
        <Instagram />
      </section>

      <section id="blog">
        <Blog />
      </section>

      <section id="location">
        <Location />
      </section>

      <section id="contact">
        <Footer />
      </section>
       <FloatingChat/>
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<HomePage />} />

      {/* Gallery main page */}
      <Route path="/gallery" element={<Gallery />} />

      {/* Dynamic gallery page */}
      <Route
        path="/galleryDetails/:category"
        element={<GalleryDetails />}
      />
      <Route path="/admin" element={<Dashboard/>} />
      <Route path="/gallery-upload" element={<GalleryUpload />  } />
      <Route path="/featured-upload" element={<FeaturedUpload />} />
      <Route path="/instagram-upload" element={<InstagramUpload />} />
      <Route path="/testimonial-upload" element={<TestimonialUpload    />} />
    </Routes>
  
  );
}

export default App;
>>>>>>> f392c94 (init)
