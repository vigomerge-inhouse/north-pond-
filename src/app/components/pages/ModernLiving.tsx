import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgForest from "../../../imports/modernliving/Private_Forest-1.jpg";
import imgHome from "../../../imports/modernliving/Neat_and_clean_home_with_peace-1.jpg";
import imgKitchen from "../../../imports/modernliving/livingrmkit.jpg";
import imgH3 from "../../../imports/modernliving/h3.jpeg";
import imgH5 from "../../../imports/modernliving/h5.jpg";
import imgHg1 from "../../../imports/modernliving/hg1.jpg";
import imgHg3 from "../../../imports/modernliving/hg3.jpg";
import inot from "../../../imports/modernliving/inot.jpg";
import relax from "../../../imports/modernliving/relax.png";
import GallImg from "../../../imports/modernliving/MLGallery.jpg";


const sections = [
  {
    label: "Gourmet Kitchen Life",
    sublabel: "Kitchen",
    title: "Gourmet Kitchen Life",
    body: "Morning coffee at the island. Weekend cooking with friends. Sunday baking while the sun streams through large windows overlooking the yard. The brand-new kitchen with quartz countertops and premium stainless appliances is designed around how you actually live — not just how a kitchen looks in a photograph.",
    cta: "Schedule a Showing",
    ctaPath: "/schedule-showing",
    img: imgHome,
    imgAlt: "Gourmet kitchen with quartz countertops",
    reverse: false,
  },
  {
    label: "Work, Dine & Relax",
    sublabel: "Den & Dining",
    title: "Work, Dine & Relax",
    body: "The flexible den and dining space adapts to your lifestyle. Use it as a dedicated home office with a serene view, a formal dining room for hosting, or an everyday family gathering space. The clean, bright finishes make it equally suited for focused work and relaxed living.",
    cta: "Schedule a Showing",
    ctaPath: "/schedule-showing",
    img: relax,
    imgAlt: "Den and dining room",
    reverse: true,
  },
  {
    label: "Indoor-Outdoor Living",
    sublabel: "Outdoor Living",
    title: "Indoor-Outdoor Living",
    body: "Step through the door onto a full wrap-around porch and the separation between inside and outside disappears. Your living space extends naturally into the Maine outdoors — four seasons of fresh air, birdsong, and privacy on two wooded acres.",
    cta: "Schedule a Showing",
    ctaPath: "/schedule-showing",
    img: inot,
    imgAlt: "Wrap-around porch and outdoor living",
    reverse: false,
  },
  
];

const highlights = [
  { title: "Elevated Interiors", body: "Every room has been reimagined from the ground up with designer fixtures, warm neutral palettes, and premium materials that create a cohesive, polished aesthetic throughout." },
  { title: "Open-Concept Flow", body: "Living, dining, and kitchen areas flow seamlessly into one another, creating a spacious, connected environment perfect for daily living and entertaining alike." },
  { title: "Natural Light & Air", body: "Large windows throughout flood every room with natural Maine light and frame views of the private wooded acreage — turning the landscape into living art." },
  { title: "Move-In Ready", body: "Brand-new appliances, fresh finishes, new flooring, and updated systems mean you walk in, unpack, and start living. No projects. No waiting. Just home." },
];



export function ModernLiving() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div>
      {/* Page Hero */}
      <section className="relative h-[90svh] min-h-[450px]">
    
        <ImageWithFallback
          src={imgHg1}
          alt="Modern Living — Ranch Retreat"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white/90 text-[11px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Modern Living</span>
          </nav>
          <p className="text-[11px] tracking-[0.3em] uppercase text-white mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Modern Living</p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-3"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
          >
            Contemporary comfort,
          </h1>
          <p
            className="text-3xl sm:text-4xl text-white/90 italic"
            style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}
          >
            beautifully crafted
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-bold[18px] tracking-[0.3em] uppercase text-gray-700 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>The Experience</p>
          <h2 className="text-4xl text-black mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Modern Living<br /><em>Elevated by Design</em>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Experience contemporary comfort with thoughtfully designed spaces, elegant interiors, and seamless functionality. Every detail is crafted to enhance your lifestyle while creating a warm and inviting atmosphere that feels like home the moment you walk through the door.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {highlights.map((h) => (
            <div key={h.title} className="border-t-2 border-black pt-5">
              <h3 className="text-4sm text-black mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{h.title}</h3>
              <p className="text-2sm text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      
      {/* Feature Sections */}
      {sections.map((sec, i) => (
        <section
          key={sec.label}
          className={`py-16 px-6 sm:px-12 lg:px-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div
            className={`max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center ${sec.reverse ? "lg:grid-flow-dense" : ""}`}
          >
            <div className={sec.reverse ? "lg:col-start-2" : ""}>
              <p className="text-[14px] tracking-[0.3em] uppercase text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>{sec.sublabel}</p>
              <h2 className="text-3xl lg:text-4xl text-black mb-5" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>{sec.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-base" style={{ fontFamily: "Inter, sans-serif" }}>{sec.body}</p>
              <Link
                to={sec.ctaPath}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-[12px] tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                {sec.cta}
              </Link>
            </div>
            <div className={`relative ${sec.reverse ? "lg:col-start-1" : ""}`}>
              <div
                className="aspect-[4/3] overflow-hidden"
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                <ImageWithFallback
                  src={sec.img}
                  alt={sec.imgAlt}
                  className="w-full h-full object-cover"
                  style={{ transform: "rotateY(-2deg) rotateX(1deg)" }}
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-200 -z-10"
                style={{ transform: "translate(8px, 8px)" }}
              />
            </div>
          </div>
        </section>
      ))}

      {/* Quote */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-3xl sm:text-4xl italic leading-relaxed mb-6" style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400 }}>
            "This is not your average rental. This is a masterfully renovated home that lives, breathes, and feels like a permanent residence — designed for a life well-lived in Maine's finest landscape."
          </p>
          <p className="text-[13px] tracking-[0.25em] uppercase text-gray-200" style={{ fontFamily: "Inter, sans-serif" }}>
            Maine Retreat · Norway, Maine
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[12px] tracking-[0.3em] uppercase text-gray-600 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>Ready to experience it in person?</p>
          <h2 className="text-3xl text-black mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Modern living starts with<br /><em>a single showing.</em>
          </h2>
          <p className="text-3sm text-gray-700 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Maine Retreat — Norway, Maine · Long-Term Rental · Oxford Hills · Immediately Available
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
              to="/bedrooms"
              className="px-8 py-3 border border-black text-black text-[12px] tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              View Bedrooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
