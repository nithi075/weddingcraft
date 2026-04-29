
import "./blog.css";

export default function Blog() {
  return (
    <section className="blog">
      <span className="tag">FROM THE JOURNAL</span>
      <h2>BLOG & STORY</h2>

      <div className="blogGrid">
        {/* Card 1: Image Card */}
       

        {/* Card 2: THE STORY CARD (Center Highlight) */}
        <div className="blog-card story-card">
          <div className="story-inner">
            <span className="est">ESTD 2024</span>
            <h3>OUR STORY</h3>
            <p>
              Founded by <strong>Issac Prem Kumar & Jeevan</strong>, what started as 
              passion between two friends grew into a team of <strong>25+ creatives</strong>. 
              From the first click to <strong>250+ weddings</strong>, we craft timeless memories.
            </p>
            <div className="founder-sign">The Wedding Craft</div>
          </div>
        </div>

       
      </div>

    </section>

  )
}
  
