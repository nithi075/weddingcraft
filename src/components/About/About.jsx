import "./About.css";

import mainImg from "../../assets/about1.png";
import smallImg from "../../assets/about2.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="about-content">
        <h2>ABOUT US</h2>

        <div className="about-text">
          <p>
            At <strong>The Wedding Craft Photography</strong>, we specialize in
            crafting timeless wedding stories with a cinematic and luxurious
            touch. Every celebration is unique, and our approach is centered on
            capturing genuine emotions, elegant details, and unforgettable
            moments in their most authentic form.
          </p>
          <p>
            Blending candid storytelling with a refined visual style, we create
            imagery that feels both natural and artistically composed. From
            intimate glances to grand celebrations, our focus is to preserve
            every moment with depth, beauty, and precision.
          </p>
          <p>
            Driven by creativity, professionalism, and a passion for excellence,
            we ensure a seamless and comfortable journey, delivering cinematic
            visuals that you will cherish for a lifetime.
          </p>
        </div>
{/* 
        <button>READ MORE</button> */}
      </div>

      {/* Updated image layout */}
      <div className="about-images">
        <img src={mainImg} alt="Wedding Main" className="main-img" />

        <div className="experience-box">
          <h3>08</h3>
          <p>YEARS OF MASTERY</p>
        </div>

        <img src={smallImg} alt="Wedding Detail" className="small-img" />
      </div>
    </section>
  );
}