import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
//hero
//import bd1 from "../../../imports/bd1.jpg";
import imgKitchen from "../../../imports/livingrmkit.jpg";
import imgH5 from "../../../imports/premium/h5.jpg";
import imgHg1 from "../../../imports/premium/hg1.jpg";
import imgHg3 from "../../../imports/premium/hg3.jpg";
import imgHg20 from "../../../imports/premium/hg20.jpg";
import pk1 from "../../../imports/premium/pk1.png";



const premiumSections = [
  {
    label: "Premium",
    title: "Gourmet Kitchen",
    img: pk1,
    imgAlt: "Gourmet kitchen — quartz countertops",
    bullets: [
      "Brand-new stainless-steel appliances",
      "Spacious center island with seating",
      "Elegant quartz countertops",
      "Abundant custom cabinetry",
      "Large windows — yard & porch views",
      "Dedicated pantry storage",
      "Designer pendant lighting",
      "Premium faucet & hardware",
    ],
  },
  {
    label: "Premium",
    title: "Spa Bathrooms",
    img: imgH5,
    imgAlt: "Spa bathroom — cast-iron tub",
    bullets: [
      "Cast-iron soaking tub (primary)",
      "Ceramic marble shower (primary)",
      "Modern vanities with quartz",
      "Heated-look designer tile",
      "Premium fixtures & hardware",
      "Soft-close cabinetry",
      "Abundant natural light",
      "Updated guest bath with new fixtures",
    ],
  },
  {
    label: "Premium",
    title: "Living Spaces",
    img: imgHg3,
    imgAlt: "Open-concept living spaces",
    bullets: [
      "Brand-new flooring throughout",
      "Open-concept living & dining flow",
      "Abundant windows & natural light",
      "Fresh neutral paint throughout",
      "High ceilings & airy proportions",
      "Flexible den / home office",
      "Dedicated dining space",
      "Views of private wooded acreage",
    ],
  },
  {
    label: "Premium",
    title: "Smart Systems & Utility",
    img: imgHg1,
    imgAlt: "Modern utility systems",
    bullets: [
      "Recently tested drilled well water",
      "Dedicated laundry room",
      "Separate pantry storage",
      "Full basement — partially finished",
      "Energy-efficient design",
      "Modern electrical systems",
      "Easily activated utilities",
      "Detached 2-car garage",
    ],
  },
  {
    label: "Premium",
    title: "Designer Finishes",
    img: imgHg20,
    imgAlt: "Designer finishes throughout",
    bullets: [
      "Quartz countertops (kitchen & bath)",
      "New flooring throughout entire home",
      "Contemporary light fixtures",
      "Premium door hardware",
      "Fresh paint — warm neutral palette",
      "Architectural trim details",
      "Cohesive design language",
      "Quality materials top to bottom",
    ],
  },
];

export function PremiumFeatures() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90svh] min-h-[450px]">
    
        <ImageWithFallback
          src={imgKitchen}
          alt="Premium Features — Ranch Retreat"
          className="w-full h-full object-cover"
        />
       
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white/90 text-[13px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Premium Features</span>
          </nav>
          <p className="text-[13px] tracking-[0.3em] uppercase text-white/90 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Premium Features</p>
          <h1 className="text-5xl sm:text-6xl text-white leading-none mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Luxury at every turn,
          </h1>
          <p className="text-3xl text-white/90 italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            in every detail
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-700 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Premium Features</p>
          <h2 className="text-4xl text-black mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Exceptional Quality<br /><em>Throughout Every Room</em>
          </h2>
          <p className="text-[17px] text-gray-800 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Enjoy luxury at every turn with high-end materials, designer finishes, thoughtfully curated upgrades, and carefully selected details that elevate everyday living from ordinary to extraordinary. This is what a truly premium rental looks like.
          </p>
        </div>
      </section>

      {/* Premium Feature Sections */}
      {premiumSections.map((sec, i) => (
        <section
          key={sec.title}
          className={`py-14 px-6 sm:px-12 lg:px-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <span
                className="inline-block px-3 py-1 text-[14px] tracking-[0.25em] uppercase bg-black text-white mb-4"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {sec.label}
              </span>
              <h2
                className="text-3xl text-black mb-6"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
              >
                {sec.title}
              </h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                {sec.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                    <span className="text-3sm text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                  transform: i % 2 === 0 ? "perspective(1000px) rotateY(-3deg)" : "perspective(1000px) rotateY(3deg)",
                }}
              >
                <ImageWithFallback
                  src={sec.img}
                  alt={sec.imgAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-300 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>Premium features deserve a personal visit.</p>
          <h2 className="text-4xl mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Photographs capture the beauty.
            <br />
            <em>A showing lets you feel the quality.</em>
          </h2>
          <p className="text-gray-200 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>Schedule yours today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/schedule-showing" className="px-8 py-3 bg-white text-black text-[13px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              Schedule a Showing
            </Link>
            <Link to="/bedrooms" className="px-8 py-3 border border-gray-700 text-white text-[13px] tracking-[0.15em] uppercase hover:border-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
              View Bedrooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
