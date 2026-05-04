import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Hero.css";

// Background Video - Unga video file path-ai inge kudunga
import heroVideo from "../../assets/featured/wedding-video.mp4"; 

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Click handlers
  const handlePortfolioClick = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917092263880", "_blank");
  };

  return (
    <section className="hero" id="home">
      
      {/* ================= 1. BACKGROUND VIDEO ================= */}
      <div className="hero-bg">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ================= 2. HERO CONTENT SECTION ================= */}
      <div className="hero-overlay">
        <span className="sub-title">Luxury Wedding Photography</span>
        
        <h1>
          Capturing Love,<br />
          One Frame at a Time
        </h1>

        <p>
          From intimate moments to grand celebrations, 
          we preserve every emotion beautifully so your 
          memories last forever.
        </p>

        <div className="hero-btns">
          <button className="hero-btn" onClick={handlePortfolioClick}>
            View Portfolio
          </button>
          <button className="hero-btn-outline" onClick={handleWhatsAppClick}>
            Book Consultation
          </button>
        </div>
      </div>

    </section>
  );
}