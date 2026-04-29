import "./featured.css";

// your gallery images
import img1 from "../../assets/featured/img1.jpg";
import img2 from "../../assets/featured/img2.jpg";
import img3 from "../../assets/featured/img3.jpg";
import img4 from "../../assets/featured/img4.jpg";
import img5 from "../../assets/featured/img5.jpg";
import img6 from "../../assets/featured/img6.jpg";
import img7 from "../../assets/featured/img7.jpg";
import img8 from "../../assets/featured/img8.jpg";

// your video
import "./Featured.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import weddingVideo from "../../assets/featured/wedding-video.mp4";

export default function Featured() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [videoSource, setVideoSource] =
    useState(weddingVideo);

  useEffect(() => {
    fetchFeaturedImages();
  }, []);

  const fetchFeaturedImages = async () => {
    try {
      const res = await api.get(
        "/featured/all"
      );

      console.log(
        "Featured API Response:",
        res.data
      );

      const featuredData = res.data;

      if (!featuredData) {
        setGalleryImages([]);
        return;
      }

      // dynamic video from backend
      if (
        featuredData.videoUrl &&
        featuredData.videoUrl.trim() !== ""
      ) {
        setVideoSource(
          featuredData.videoUrl
        );
      }

      if (
        !featuredData.images ||
        featuredData.images.length === 0
      ) {
        setGalleryImages([]);
        return;
      }

      const allImages =
        featuredData.images.map((img) => {
          // already full URL
          if (
            typeof img === "string" &&
            img.startsWith("http")
          ) {
            return img;
          }

          // only filename
          if (typeof img === "string") {
            return `http://localhost:5000/uploads/${img}`;
          }

          return null;
        });

      setGalleryImages(
        allImages.filter(Boolean)
      );
    } catch (error) {
      console.error(
        "Error fetching featured images:",
        error
      );
    }
  };

  const handleInstagramRedirect = () => {
    window.open(
      "https://www.instagram.com/theweddingcraft.in/",
      "_blank"
    );
  };

  return (
    <section className="featured">
      <span className="tag">
        OUR FAVORITE MOMENTS
      </span>

      <h2>FEATURED WEDDING</h2>

      {/* Video */}
      <div className="featured-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="featured-video"
        >
          <source
            src={videoSource}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Gallery */}
      <div className="featuredGrid">
        {galleryImages.length > 0 ? (
          <>
            {/* First 3 images */}
            {galleryImages
              .slice(0, 3)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`featured-${index}`}
                />
              ))}

            {/* Quote Box */}
            <div className="quote-box">
              MEMORIES
              <br />
              THAT LAST
              <br />
              FOREVER
            </div>

            {/* Remaining images */}
            {galleryImages
              .slice(3)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`featured-${index + 3}`}
                />
              ))}
          </>
        ) : (
          <div className="no-images">
            <p>
              No featured images available
            </p>
          </div>
        )}
      </div>

      <button
        className="featured-btn"
        onClick={
          handleInstagramRedirect
        }
      >
        View More ↗
      </button>
    </section>
  );
}
