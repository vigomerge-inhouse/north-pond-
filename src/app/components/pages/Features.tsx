import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgForest from "../../../imports/Private_Forest-1.jpg";
import imgHome from "../../../imports/Neat_and_clean_home_with_peace-1.jpg";
import imgKitchen from "../../../imports/Features/livingrmkit.jpg";
import imgH3 from "../../../imports/h3.jpeg";
import imgH5 from "../../../imports/h5.jpg";
import imgHg1 from "../../../imports/hg1.jpg";
import imgHg3 from "../../../imports/hg3.jpg";
import imgHg20 from "../../../imports/hg20.jpg";
import GarageImg from "../../../imports/AmentiesGarage.jpg";
import OLImg from "../../../imports/OutdoorLiving/OLHero1.jpg";
import FSPAImg from "../../../imports/Features/FBATHSPA.jpg";
import FGRImg from "../../../imports/Features/FGR.jpg";
import FSUITESPAImg from "../../../imports/Features/FSUITESPA.jpg";
import imageKitchen from "../../../imports/Features/ls.jpg";

const features = [
  {
  num: "01",
  title: "Modern Gourmet Kitchen",
  sub: "Heart of the home",
  body: "",
  bullets: [],
  img: imageKitchen,
},
  {
    num: "02",
   title: "Master Bedroom with Spa-Like Bath",
sub: "Private retreat",
    body: "Serene owner's oasis sized for a king bed with walk-in closet. Luxurious bath features a cast iron soaking tub and ceramic marble shower, bathed in soft natural light.",
    bullets: ["King-size space", "Walk-in closet", "Cast iron soaking tub", "Ceramic marble shower"],
    img: imageKitchen,
  },
  {
    num: "03",
    title: "Generous Guest Bedrooms & Full Bath",
    sub: "Comfort spaces",
    body: "Two spacious guest bedrooms, each sized for a queen bed with generous clean closets. Updated full guest bath with bright, modern finishes.",
    bullets: ["Two queen-ready bedrooms", "Generous clean closets", "Updated full guest bath", "Bright modern finishes"],
    img: imageKitchen,
  },
  {
    num: "04",
    title: "Den, Office & Dining Room",
    sub: "Open concept",
    body: "Open layout with gleaming new floors, fresh neutral palettes, and abundant windows that create clean, bright spaces framing stunning views of your private acreage.",
    bullets: ["Open floor plan", "Gleaming new floors", "Fresh neutral palettes", "Abundant natural light"],
    img: imageKitchen,
  },
  {
    num: "05",
    title: "Guest Bathroom & Private Spaces",
    sub: "Fully updated",
    body: "Modern bathrooms with elegant fixtures and a dedicated separate laundry room pantry for added convenience.",
    bullets: ["2 full bathrooms", "Elegant new fixtures", "Separate laundry room pantry", "Clean modern design"],
    img: imageKitchen,
  },
  {
    num: "06",
    title: "Wrap-Around Porch & Private Grounds",
    sub: "Outdoor living",
    body: "True seclusion on two private acres with wrap-around porch and spacious deck. Landlord maintains the yard, provides winter snowplowing, and will install a dog-friendly perimeter fence.",
    bullets: ["Two fully private acres", "Wrap-around porch", "Spacious outdoor deck", "Yard maintenance & snowplowing included"],
    img:imageKitchen,
  },
  {
    num: "07",
    title: "Endless Landscaping Possibilities",
    sub: "Natural surroundings",
    body: "Create gardens, trails, or meadows that enhance the natural beauty. Mature trees and open space invite wildlife and seasonal color while supporting a peaceful outdoor lifestyle.",
    bullets: ["Create gardens & meadows", "Mature trees & open space", "Wildlife & seasonal color", "Walking trails potential"],
    img: imageKitchen,
  },
  {
    num: "08",
    title: "Two-Car Garage & All-Weather Storage",
    sub: "Storage & parking",
    body: "Secure two-car garage with generous all-weather storage for tools, hobbies, or seasonal gear. Clean and updated, it complements the modern ranch style.",
    bullets: ["2-car parking", "Generous all-weather storage", "Secure updated structure", "Seasonal gear & hobby use"],
    img: imageKitchen,
  },
];

export function Features() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90svh] min-h-[550px]">
        <ImageWithFallback
          src={imgKitchen}
          alt="Home Features — Ranch Retreat"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white/90 text-[13px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Features</span>
          </nav>
          <p className="text-[13px] tracking-[0.3em] uppercase text-white/80 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Home Features</p>
          <h1 className="text-5xl sm:text-6xl text-white leading-none mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Every detail
          </h1>
          <p className="text-3xl text-white/80 italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            thoughtfully refreshed
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-7xl">
        
          <p className="text-gray-600 leading-relaxed text-5sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Designed for comfort and convenience, this beautifully updated ranch offers effortless single-story living with bright, open spaces and exceptional functionality. New flooring throughout, fresh neutral finishes, and abundant natural light create a warm and inviting atmosphere while showcasing views of the surrounding private acreage.
          </p>
        </div>
      </section>

      {/* Move-In Ready Checklist */}
      <section className="pb-10 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="bg-black text-white p-8 lg:p-12">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-400 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Included</p>
          <h2 className="text-3xl text-white mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>Move-In Ready Upgrades</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
            {[
              "Brand-new stainless-steel appliances",
              "Elegant quartz countertops",
              "Designer lighting and fixtures",
              "Beautiful new flooring throughout",
              "Fresh contemporary finishes",
              "Drilled private well (landlord-provided)",
              "Partially finished full basement",
              "Dedicated laundry room & pantry",
              "Detached two-car garage",
              "Wrap-around porch & spacious deck",
              "Professional snow removal included",
              "Dog-friendly perimeter fence planned",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 py-1.5 border-b border-gray-800">
                <span className="w-1 h-1 bg-white rounded-full mt-2 shrink-0" />
                <span className="text-2sm text-gray-300" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Explorer */}
      <section className="py-10 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>All Features</p>
          <h2 className="text-4xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>Explore Every Room</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-1">
            {features.map((f, i) => (
              <button
                key={f.num}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-4 px-4 py-3 text-left transition-all ${
                  active === i ? "bg-black text-white" : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                <span
                  className={`text-2xl shrink-0 ${active === i ? "text-white/40" : "text-gray-400"}`}
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {f.num}
                </span>
                <div>
                  <p className="text-[18px] tracking-wide" style={{ fontFamily: "Inter, sans-serif", fontWeight: active === i ? 600 : 500 }}>{f.title}</p>
                  <p className={`text-[15px] ${active === i ? "text-gray-400" : "text-gray-600"}`} style={{ fontFamily: "Inter, sans-serif" }}>{f.sub}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="aspect-[14/10] overflow-hidden mb-6">
              <ImageWithFallback
                src={current.img}
                alt={current.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-start gap-4 mb-4">
              <span className="text-4xl text-gray-500" style={{ fontFamily: "Playfair Display, serif" }}>{current.num}</span>
              <div>
                <p className="text-[13px] tracking-[0.2em] uppercase text-gray-700 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>{current.sub}</p>
                <h3 className="text-3xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>{current.title}</h3>
              </div>
            </div>
            <p className="text-[17px] text-gray-600 leading-relaxed mb-5" style={{ fontFamily: "Inter, sans-serif" }}>{current.body}</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {current.bullets.map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                  <span className="text-2sm text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <div className="max-w-xl mx-auto">
          <p className="text-[14px] tracking-[0.3em] uppercase text-gray-800 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Love what you see?</p>
          <p className="text-[18px] text-gray-700 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            This turnkey ranch is move-in ready and immediately available for long-term rental. Schedule your private showing today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/schedule-showing"
              className="px-8 py-3 bg-black text-white text-[12px] tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Schedule a Showing
            </Link>
            <Link
              to="/outdoor-living"
              className="px-8 py-3 border border-black text-black text-[12px] tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              View Outdoor Living
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
