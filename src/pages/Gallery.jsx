import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

// Images
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";

export default function Gallery() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Updated Gallery Items (matches upload categories)
  const items = [
   
   {
  title: "Wedding Photography",
  category: "Wedding Photography",
  slug: "wedding-photography",
  img: img2,
  desc: "Capturing timeless wedding moments with elegance and emotion.",
},
    {
      title: "Reception Moments",
      category: "Reception",
      slug: "reception",
      img: img3,
      desc: "Grand reception celebrations captured beautifully.",
    },
   
    {
      title: "Pre Wedding Shoot",
      category: "Pre Wedding",
      slug: "pre-wedding",
      img: img5,
      desc: "Romantic pre wedding storytelling sessions.",
    },
    {
      title: "Maternity Shoot",
      category: "Maternity Photography",
      slug: "maternity",
      img: img8,
      desc: "Capturing the beauty of motherhood.",
    },
    {
      title: "Baby Shoot",
      category: "Baby Photography",
      slug: "baby-shoots",
      img: img1,
      desc: "Cute baby memories captured forever.",
    },
    {
      title: "Portrait Session",
      category: "Portrait Photography",
      slug: "bridal",
      img: img7,
      desc: "Elegant bridal and portrait photography.",
    },
   
  ];

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  // Handle card click
  const handleCardClick = (index, slug) => {
    if (index === activeIndex) {
      navigate(`/galleryDetails/${slug}`);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="portfolio">
      {/* Header */}
      <div className="portfolio-header">
        <span className="p-tag">
          Our Signature Collection
        </span>

        <h2>
          Timeless Photography Stories
        </h2>

      </div>

      {/* Slider */}
      <div className="portfolio-slider-container">
        <div className="portfolio-slider">
          {items.map((item, index) => {
            const position = index - activeIndex;

            let cardClass = "portfolio-card";

            if (index === activeIndex) {
              cardClass += " active";
            } else if (
              position === -1 ||
              (activeIndex === 0 &&
                index === items.length - 1)
            ) {
              cardClass += " left-side";
            } else if (
              position === 1 ||
              (activeIndex === items.length - 1 &&
                index === 0)
            ) {
              cardClass += " right-side";
            } else {
              cardClass += " hidden";
            }

            return (
              <div
                key={index}
                className={cardClass}
                onClick={() =>
                  handleCardClick(index, item.slug)
                }
              >
                <div className="image-wrapper">
                  <img
                    src={item.img}
                    alt={item.title}
                  />

                  <div className="glass-shine"></div>

                  <div className="card-overlay">
                    <span className="cat-label">
                      {item.category}
                    </span>

                    <h3 className="card-title">
                      {item.title}
                    </h3>

                    <p className="card-desc-short">
                      {item.desc}
                    </p>

                    <div className="view-story-btn">
                      View Gallery
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <div className="pagination">
        {items.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}