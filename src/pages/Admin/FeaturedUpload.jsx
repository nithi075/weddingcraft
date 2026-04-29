import React, { useState } from "react";
import api from "../../services/api";

export default function FeaturedUpload() {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(
      e.target.files
    );

    if (selectedFiles.length > 8) {
      alert(
        "Maximum 8 images only allowed"
      );
      return;
    }

    setImages(selectedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("videoUrl", videoUrl);

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const res = await api.post(
        "/featured/add",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

      console.log(res.data);

      alert(
        "Featured uploaded successfully"
      );

      setTitle("");
      setVideoUrl("");
      setImages([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f5ef"
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "400px"
        }}
      >
        <h2>Featured Upload</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        <input
          type="text"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) =>
            setVideoUrl(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px"
          }}
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          style={{
            marginBottom: "20px"
          }}
        />

        <p>
          Selected Images:
          {images.length}/8
        </p>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            border: "none"
          }}
        >
          Upload Featured
        </button>
      </form>
    </div>
  );
}