import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgForest from "../../../imports/property/Private_Forest-1.jpg";
import imgHome from "../../../imports/property/Neat_and_clean_home_with_peace-1.jpg";
import imgKitchen from "../../../imports/property/livingrmkit.jpg";
import imgH3 from "../../../imports/property/h3.jpeg";
import imgH5 from "../../../imports/property/h5.jpg";
import imgHg1 from "../../../imports/property/hg1.jpg";

//gallery
import g1 from "../../../imports/property/g1.jpg";
import g2 from "../../../imports/property/g2.jpg";
import g3 from "../../../imports/property/g3.jpg";
import g4 from "../../../imports/property/g4.jpg";
import g5 from "../../../imports/property/g5.jpg";
import g6 from "../../../imports/property/g6.jpg";
import g7 from "../../../imports/property/g7.jpg";
import g8 from "../../../imports/property/g8.png";
import g9 from "../../../imports/property/g9.png";
import g10 from "../../../imports/property/g10.jpg";
import g11 from "../../../imports/property/g11.jpg";



const stats = [
  { value: "3", label: "Bedrooms", sub: "King + 2 Queen" },
  { value: "2", label: "Full Baths", sub: "Primary & Guest" },
  { value: "2", label: "Car Garage", sub: "Detached" },
  { value: "2", label: "Private Acres", sub: "Wooded lot" },
  { value: "300ft", label: "to Road", sub: "Crockett Ridge" },
  { value: "2min", label: "to Lake", sub: "North Pond" },
];

const cards = [
  {
    title: "Fully Renovated Ranch",
    body: "Every inch of this single-story home has been masterfully renovated — from the foundation finishes to the roof. Brand-new appliances, flooring, fixtures, and systems throughout.",
    img: g9,
  },
  {
    title: "Private 2-Acre Lot",
    body: "Surrounded by mature trees and open green space on a private 2-acre parcel. Your land, your privacy, your peace — with landlord-maintained grounds and snow plowing included.",
    img: imgForest,
  },
  {
    title: "Waterfront Access Nearby",
    body: "Norway Lake and North Pond are just 2 miles from the driveway. Public boat ramps, swimming, fishing, kayaking, and paddleboarding are all within easy reach.",
    img: g8,
  },
  {
    title: "Premier Location",
    body: "Set in the Oxford Hills of Norway, Maine — a region celebrated for its natural beauty, four-season recreation, and authentic New England character — with Portland just 1 hour away.",
    img: imgH3,
  },
];

const checklist = [
  "Masterfully renovated — completely turnkey",
  "3 bedrooms / 2 full bathrooms",
  "Private 2-acre wooded parcel",
  "Single-story ranch — no stairs",
  "Brand-new kitchen with quartz countertops",
  "Premium stainless-steel appliances",
  "King-size primary suite with walk-in closet",
  "Spa-inspired primary bathroom",
  "Two queen-sized guest bedrooms",
  "Detached 2-car garage with storage",
  "Wrap-around porch & spacious deck",
  "Partially finished full basement",
  "Dedicated laundry room & pantry",
  "Drilled well water — landlord provided",
  "Professional yard maintenance included",
  "Winter snowplowing included",
  "Dog-friendly — perimeter fence planned",
  "Immediately available for long-term rental",
];

const galleryImages = [
  //{ src: imgKitchen,  },
  //{ src: imgH5,  },
  //{ src: imgHome, },
  //{ src: imgForest,  },
  //{ src: imgH3,  },
 // { src: g8,  },
  //{ src: g9,  },
  
  //{ src: g1,  },
  //{ src: g2,  },
  //{ src: g3,  },
  { src: g4,  },
  { src: g5,  },
  { src: g6,  },
  //{ src: g7,  },
  { src: g10,  },
  {src: g11,},
];

export function PropertyHighlights() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90svh] min-h-[450px]">
        <ImageWithFallback
          src={g8}
          alt="Property Highlights — Ranch Retreat"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white/90 text-[12px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Property Highlights</span>
          </nav>
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/90 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Property Highlights</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            An exceptional property,
          </h1>
          <p className="text-3xl sm:text-5xl text-white italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            every detail considered
          </p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="bg-black">
        <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-2 px-4 text-center text-white ${i < stats.length - 1 ? "border-r border-gray-800" : ""}`}
            >
              <p className="text-2xl sm:text-3xl" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>{stat.value}</p>
              <p className="text-[14px] tracking-[0.2em] uppercase text-gray-300 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{stat.label}</p>
              <p className="text-[12.6px] text-gray-300 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[13px] tracking-[0.3em] uppercase text-gray-600 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>The Property</p>
            <h2 className="text-4xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>Property Highlights</h2>
            <p className="text-gray-800 italic mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem" }}>A cut above the rest</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl text-black mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{card.title}</h3>
                  <p className="text-1sm text-gray-800 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Checklist */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[13px] tracking-[0.3em] uppercase text-gray-600 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Everything Included</p>
            <h2 className="text-3xl text-black mb-8" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
              Complete Property Checklist
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-black mt-0.5 shrink-0" />
                  <span className="text-3sm text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <ImageWithFallback
                src={imgHome}
                alt="Ranch Retreat — property view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-black text-white p-6 w-48">
              <p className="text-2xl mb-1" style={{ fontFamily: "Playfair Display, serif" }}>Move-In</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-green-400" style={{ fontFamily: "Inter, sans-serif" }}>Ready Now</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Slider */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[12px] tracking-[0.3em] uppercase text-gray-700 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Photo Preview</p>
              <h2 className="text-3xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>Gallery</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => emblaApi?.scrollPrev()} className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black hover:text-white transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button onClick={() => emblaApi?.scrollNext()} className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:bg-black hover:text-white transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          <div className="overflow-hidden" ref={emblaRef}>
           <div className="flex -ml-4">
              {galleryImages.map((img, i) => (
                <div key={i} 
        className="pl-4 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_28%]">
                  <div className="aspect-[3/4] overflow-hidden">
                    <ImageWithFallback src={img.src} alt={img.label} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[11px] tracking-[0.1em] uppercase text-gray-500 mt-2 text-center" style={{ fontFamily: "Inter, sans-serif" }}>{img.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-300 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>A rare Maine rental opportunity</p>
          <h2 className="text-4xl mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Masterfully renovated, move-in ready,<br />
            <em>surrounded by nature.</em>
          </h2>
          <p className="text-gray-450 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Schedule your private showing today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/schedule-showing"
              className="px-8 py-3 bg-white text-black text-[14px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Schedule Showing
            </Link>
            <Link
              to="/premium-features"
              className="px-8 py-3 border border-gray-700 text-white text-[14px] tracking-[0.15em] uppercase hover:border-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Premium Features
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
