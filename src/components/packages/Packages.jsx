import "./Packages.css";

const packagesData = [
  {
    title: "Package 1",
    subtitle: "WEDDING & RECEPTION",
    price: "₹99,999",
    features: [
      "1 Traditional Photographer",
      "1 Traditional Videographer",
      "1 Assistant",
      "1 Video Editor",
      "1 Photo Editor",
      "Album: Reception (250-300) Photos",
      "Album: Wedding (200-250) Photos"
    ]
  },
  {
    title: "Package 2",
    subtitle: "PRE/POST WEDDING INCLUDED",
    price: "₹1,59,999",
    features: [
      "1 Traditional Photographer",
      "1 Traditional Videographer",
      "1 Candid Photographer (or) Videographer",
      "FREE Pre/Post Wedding (1 Photo + 1 Video + 1 Editor)",
      "1 Assistant, 1 Video Editor, 1 Photo Editor",
      "Album: Reception (250-300) Photos",
      "Album: Wedding (200-250) Photos"
    ]
  },
  {
    title: "Package 3",
    subtitle: "CINEMATIC COVERAGE",
    price: "₹2,14,999",
    features: [
      "1 Traditional Photographer & 1 Traditional Videographer",
      "1 Candid Photographer & 1 Candid Videographer",
      "FREE Pre/Post Wedding (Full Team & Editor)",
      "1 Assistant, 1 Video Editor, 1 Photo Editor",
      "Album: Reception (250-300) Photos",
      "Album: Wedding (200-250) Photos"
    ]
  },
  {
    title: "Package 4",
    subtitle: "FULL DRONE COVERAGE",
    price: "₹2,29,999",
    features: [
      "1 Drone Videographer",
      "1 Traditional Photo & 1 Traditional Video",
      "1 Candid Photo & 1 Candid Video",
      "FREE Pre/Post Wedding (Full Team & Editor)",
      "1 Assistant, 1 Video Editor, 1 Photo Editor",
      "Album: Reception (250-300) Photos",
      "Album: Wedding (200-250) Photos"
    ]
  },
  {
    title: "Package 5",
    subtitle: "THE ULTIMATE CRAFT",
    price: "₹2,59,999",
    features: [
      "1 Traditional Photo & 1 Traditional Video",
      "2 Candid Photographers & 1 Candid Videographer",
      "FREE Pre/Post Wedding (Full Team & Editor)",
      "1 Assistant, 1 Video Editor, 1 Photo Editor",
      "Album: Reception (250-300) Photos",
      "Album: Wedding (200-250) Photos"
    ]
  }
];

export default function Packages() {
  const whatsappNumber = "917092263880"; // Unga number-ah inga kudunga (with 91)

  const handleBooking = (pkg) => {
    const message = `Hello The Wedding Craft! I'm interested in ${pkg.title} (${pkg.subtitle}) priced at ${pkg.price}. Please provide more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="packages" id="packages">
      <div className="packages-header">
        <p>PRICING</p>
        <h2>The Wedding Craft Packages</h2>
      </div>

      <div className="packages-container">
        {packagesData.map((item, index) => (
          <div
            className={`package-card ${item.badge ? "featured" : ""}`}
            key={index}
          >
            {item.badge && <div className="badge">{item.badge}</div>}

            <h3>{item.title}</h3>
            <p className="subtitle">{item.subtitle}</p>

         

            <div className="features">
              {item.features.map((feature, i) => (
                <p key={i}>{feature}</p>
              ))}
            </div>

            <button 
              className="package-btn" 
              onClick={() => handleBooking(item)}
            >
              Book now ↗
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
