import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Hero.css";
import logoimg from "../../assets/logo.png";

// hero images
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import hero3 from "../../assets/hero3.jpg";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const heroImages = [hero1, hero2, hero3];

  // Auto slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Click handlers
  const handlePortfolioClick = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917092263880", "_blank");
  };

  return (
    <section className="hero" id="home">
      
      {/* ================= 1. NAVBAR SECTION ================= */}
    
      {/* ================= 2. BACKGROUND SLIDER ================= */}
      <div className="hero-bg">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`hero-${index}`}
            className={index === currentImage ? "active-slide" : ""}
          />
        ))}
      </div>

      {/* ================= 3. HERO CONTENT SECTION ================= */}
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