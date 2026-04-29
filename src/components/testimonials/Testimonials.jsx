import "./Testimonials.css";
import {
  useEffect,
  useState
} from "react";
import api from "../../services/api";

export default function Testimonials() {
  const [testimonials, setTestimonials] =
    useState([]);
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials =
    async () => {
      try {
        const res =
          await api.get(
            "/testimonial/all"
          );

        console.log(
          "Testimonials:",
          res.data
        );

        setTestimonials(
          Array.isArray(
            res.data
          )
            ? res.data
            : []
        );
      } catch (error) {
        console.error(
          "Error fetching testimonials:",
          error
        );
      }
    };

  // Auto slide every 4 sec
  useEffect(() => {
    if (
      testimonials.length ===
      0
    )
      return;

    const interval =
      setInterval(() => {
        setActiveIndex(
          (prev) =>
            prev ===
            testimonials.length -
              1
              ? 0
              : prev + 1
        );
      }, 4000);

    return () =>
      clearInterval(
        interval
      );
  }, [testimonials]);

  const activeTestimonial =
    testimonials[
      activeIndex
    ];

  const getImageUrl = () => {
    if (
      activeTestimonial?.image &&
      activeTestimonial.image.startsWith(
        "http"
      )
    ) {
      return activeTestimonial.image;
    }

    if (
      activeTestimonial?.image
    ) {
      return `http://localhost:5000/uploads/${activeTestimonial.image}`;
    }

    if (
      activeTestimonial?.imageUrl
    ) {
      return activeTestimonial.imageUrl;
    }

    return "";
  };

  return (
    <section className="testimonials">
      <span className="tag">
        WHAT CLIENTS SAY
      </span>

      <h2>
        TESTIMONIALS
      </h2>

      {activeTestimonial ? (
        <div className="testimonial-banner">
          <img
            src={getImageUrl()}
            alt={
              activeTestimonial.clientName
            }
          />

          <div className="testimonial-overlay">
            <h3>
              {
                activeTestimonial.clientName
              }
            </h3>

            <p>
              {
                activeTestimonial.review
              }
            </p>
          </div>
        </div>
      ) : (
        <p>
          No testimonials
          available
        </p>
      )}

      {/* Dots */}
      <div className="testimonial-dots">
        {testimonials.map(
          (
            _,
            index
          ) => (
            <button
              key={index}
              className={`dot ${
                activeIndex ===
                index
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveIndex(
                  index
                )
              }
            />
          )
        )}
      </div>
    </section>
  );
}