import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logoimg from "../../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileExpanded(null);
  }, [location]);

  /* Updated Navigation Items */
  const navItems = [
    { title: "Home", link: "/" },

    {
      title: "Weddings",
      link: "/gallery",
      submenu: [
        {
          title: "Traditional Wedding",
          link: "/galleryDetails/traditional-wedding",
        },
        {
          title: "Destination Wedding",
          link: "/galleryDetails/destination-wedding",
        },
        {
          title: "Reception",
          link: "/galleryDetails/reception",
        },
        {
          title: "Sangeet & Haldi",
          link: "/galleryDetails/sangeet-haldi",
        },
      ],
    },

    {
      title: "Pre Wedding",
      link: "/gallery",
      submenu: [
        {
          title: "Pre Wedding",
          link: "/galleryDetails/pre-wedding",
        },
      ],
    },

    {
      title: "Maternity & Baby",
      link: "/gallery",
      submenu: [
        {
          title: "Maternity Photography",
          link: "/galleryDetails/maternity",
        },
        {
          title: "Baby Photography",
          link: "/galleryDetails/baby-shoots",
        },
      ],
    },

    {
      title: "Portraits",
      link: "/gallery",
      submenu: [
        {
          title: "Portrait Photography",
          link: "/galleryDetails/bridal",
        },
      ],
    },

    {
      title: "Events",
      link: "/gallery",
      submenu: [
        {
          title: "Event Photography",
          link: "/galleryDetails/birthday",
        },
      ],
    },

    { title: "Packages", link: "/#packages" },
    { title: "Contact", link: "/#contact" },
  ];

  return (
    <nav className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logoimg} alt="Studio Logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="desktop-nav">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={item.submenu ? "has-submenu" : ""}
            >
              {item.link.includes("#") ? (
                <NavHashLink smooth to={item.link}>
                  {item.title}
                  {item.submenu && (
                    <ChevronDown size={14} className="chevron" />
                  )}
                </NavHashLink>
              ) : (
                <Link
                  to={item.link}
                  className={
                    location.pathname.includes(item.link)
                      ? "active"
                      : ""
                  }
                >
                  {item.title}
                  {item.submenu && (
                    <ChevronDown size={14} className="chevron" />
                  )}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {item.submenu && (
                <div className="mega-dropdown">
                  <ul className="dropdown-content">
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link to={sub.link}>
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <a
            href="tel:9840767566"
            className="action-btn call-btn"
          >
            <Phone size={16} />
            <span>9840767566</span>
          </a>

          <NavHashLink
            smooth
            to="/#contact"
            className="action-btn book-btn"
          >
            <Calendar size={16} />
            <span>BOOK NOW</span>
          </NavHashLink>

          {/* Mobile Menu Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`mobile-sidebar-overlay ${
          menuOpen ? "show" : ""
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`mobile-sidebar ${
          menuOpen ? "open" : ""
        }`}
      >
        <div className="mobile-header">
          <img
            src={logoimg}
            alt="Logo"
            className="mobile-logo"
          />

          <X
            size={28}
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="mobile-nav-content">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="mobile-item-group"
            >
              <div className="mobile-link-row">
                {item.link.includes("#") ? (
                  <NavHashLink
                    smooth
                    to={item.link}
                    onClick={() =>
                      !item.submenu &&
                      setMenuOpen(false)
                    }
                  >
                    {item.title}
                  </NavHashLink>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() =>
                      !item.submenu &&
                      setMenuOpen(false)
                    }
                  >
                    {item.title}
                  </Link>
                )}

                {item.submenu && (
                  <button
                    className="expand-btn"
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === index
                          ? null
                          : index
                      )
                    }
                  >
                    <ChevronDown
                      size={20}
                      className={
                        mobileExpanded === index
                          ? "rotate"
                          : ""
                      }
                    />
                  </button>
                )}
              </div>

              {item.submenu &&
                mobileExpanded === index && (
                  <div className="mobile-sub-list">
                    {item.submenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.link}
                        onClick={() =>
                          setMenuOpen(false)
                        }
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}