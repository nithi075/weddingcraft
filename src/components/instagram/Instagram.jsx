import React, {
  useState,
  useEffect
} from "react";
import "./Instagram.css";
import api from "../../services/api";

export default function Instagram() {
  const instaProfile =
    "https://www.instagram.com/theweddingcraft.in/";

  const [images, setImages] =
    useState([]);
  const [activeIndex, setActiveIndex] =
    useState(0);

  useEffect(() => {
    fetchInstagramImages();
  }, []);

  const fetchInstagramImages =
    async () => {
      try {
        const res =
          await api.get(
            "/instagram/all"
          );

        console.log(
          "Instagram API Response:",
          res.data
        );

        setImages(
          Array.isArray(
            res.data
          )
            ? res.data
            : []
        );
      } catch (error) {
        console.error(
          "Error fetching instagram images:",
          error
        );
      }
    };

  const handleCardClick = (
    index
  ) => {
    const selectedPost =
      images[index];

    if (
      index === activeIndex
    ) {
      if (
        selectedPost?.postLink
      ) {
        window.open(
          selectedPost.postLink,
          "_blank"
        );
      } else {
        window.open(
          instaProfile,
          "_blank"
        );
      }
    } else {
      setActiveIndex(index);
    }
  };

  const getImageUrl = (
    item
  ) => {
    // backend already stores full URL
    if (
      item?.image &&
      item.image.startsWith(
        "http"
      )
    ) {
      return item.image;
    }

    // filename only
    if (item?.image) {
      return `http://localhost:5000/uploads/${item.image}`;
    }

    // if backend stores imageUrl
    if (
      item?.imageUrl
    ) {
      return item.imageUrl;
    }

    return "";
  };

  return (
    <section className="instagram-section">
      <div className="insta-header">
        <h2>
          Follow Our Journey
        </h2>

        <p className="insta-sub">
          Capturing the soul of
          traditions, one frame
          at a time.
        </p>

        <div className="accent-line-gold"></div>
      </div>

      <div className="insta-slider-container">
        <div className="insta-slider">
          {images.length >
          0 ? (
            images.map(
              (
                item,
                index
              ) => {
                const position =
                  index -
                  activeIndex;

                let cardClass =
                  "insta-card";

                if (
                  index ===
                  activeIndex
                ) {
                  cardClass +=
                    " active";
                } else if (
                  position ===
                    -1 ||
                  (activeIndex ===
                    0 &&
                    index ===
                      images.length -
                        1)
                ) {
                  cardClass +=
                    " left-side";
                } else if (
                  position ===
                    1 ||
                  (activeIndex ===
                    images.length -
                      1 &&
                    index ===
                      0)
                ) {
                  cardClass +=
                    " right-side";
                } else {
                  cardClass +=
                    " hidden";
                }

                return (
                  <div
                    key={
                      item._id ||
                      index
                    }
                    className={
                      cardClass
                    }
                    onClick={() =>
                      handleCardClick(
                        index
                      )
                    }
                  >
                    <div className="insta-wrapper">
                      <img
                        src={getImageUrl(
                          item
                        )}
                        alt={
                          item?.title ||
                          "Instagram"
                        }
                      />

                      <div className="insta-badge-overlay">
                        <h3>
                          INSTA
                        </h3>
                        <p>
                          VIEW
                          STORY
                        </p>
                      </div>

                      <div className="insta-bottom-label">
                        {/* <span>
                          {item?.title ||
                            "Instagram Post"}
                        </span> */}
                      </div>
                    </div>
                  </div>
                );
              }
            )
          ) : (
            <p>
              No Instagram
              images available
            </p>
          )}
        </div>
      </div>

      <div className="insta-footer">
        <button
          className="insta-follow-btn"
          onClick={() =>
            window.open(
              instaProfile,
              "_blank"
            )
          }
        >
          FOLLOW ON INSTAGRAM
        </button>

        <div className="insta-pagination">
          {images.map(
            (
              _,
              index
            ) => (
              <button
                key={
                  index
                }
                className={`insta-dot ${
                  index ===
                  activeIndex
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
      </div>
    </section>
  );
}