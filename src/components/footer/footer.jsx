import "./footer.css";

import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import logo from "../../assets/logo.png";

export default function Footer() {
  const navigate = useNavigate();
  const clickTimeout = useRef(null);
  const clickCount = useRef(0);

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/theweddingcraft.in/",
      "_blank"
    );
  };

  const handleContactClick = () => {
    window.open(
      "https://wa.me/917092263880",
      "_blank"
    );
  };

  const handleAdminAccess = () => {
    clickCount.current += 1;

    if (clickCount.current === 2) {
      navigate("/admin");
      clickCount.current = 0;
      clearTimeout(clickTimeout.current);
    } else {
      clickTimeout.current = setTimeout(() => {
        clickCount.current = 0;
      }, 500); // 0.5 sec within double click
    }
  };

  return (
    <footer className="footer">
      <div className="footer-curve">
        <div className="footer-content">

          {/* Logo Image */}
          <div
            className="footer-logo"
            onClick={handleAdminAccess}
          >
            <img
              src={logo}
              alt="The Wedding Craft Logo"
              className="footer-logo-img"
            />
          </div>

          {/* Buttons */}
          <div className="footer-buttons">
            <button onClick={handleInstagramClick}>
              INSTAGRAM
            </button>

            <button onClick={handleContactClick}>
              CONTACT
            </button>
          </div>

          {/* Copyright */}
          <p className="copyright">
            © 2026 The Wedding Craft Photography
          </p>

        </div>
      </div>
    </footer>
  );
}