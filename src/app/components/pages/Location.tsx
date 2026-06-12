import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgForest from "../../../imports/Private_Forest-1.jpg";
import imgHome from "../../../imports/Neat_and_clean_home_with_peace-1.jpg";
import imgH3 from "../../../imports/h3.jpeg";
import imgH5 from "../../../imports/h5.jpg";
import imgHg1 from "../../../imports/hg1.jpg";
import imgHg3 from "../../../imports/hg3.jpg";
import imgHg20 from "../../../imports/hg20.jpg";
import imgKitchen from "../../../imports/livingrmkit.jpg";
import locationhero from "../../../imports/Location/locationhero.jpg";
import HeroImg from "../../../imports/OutdoorLiving/OutdoorLivingHero.png";
import GImg from "../../../imports/Details/DetailG.png";
import WAImg from "../../../imports/Location/LOCWA.jpg";
import Hero1Img from "../../../imports/OutdoorLiving/OLHero1.jpg";
import OBImg from "../../../imports/OutdoorLiving/OLOB.jpg";
import SpringImg from "../../../imports/OutdoorLiving/OLSpring.jpg";

const driveTimes = [
  { value: "1hr", label: "Portland, ME", sub: "Maine's largest city" },
  { value: "45min", label: "Ski Areas & Golf", sub: "Sunday River, Shawnee Peak" },
  { value: "3hrs", label: "Boston, MA", sub: "Major metro access" },
  { value: "2min", label: "Public Boat Ramps", sub: "Norway Lake & North Pond" },
  { value: "300ft", label: "Crockett Ridge Rd", sub: "Road access from driveway" },
  { value: "10min", label: "Downtown Norway", sub: "Shops, dining & services" },
];

const areaHighlights = [
  {
    title: "Public Boat Ramps",
    sub: "Norway Lake & North Pond",
    body: "Two public boat ramps just 2 miles from the driveway. Norway Lake and North Pond offer boating, fishing, swimming, kayaking, and paddleboarding through all warm-weather months. This is Maine lake country at its finest.",
    stat: "2 miles away",
    img: WAImg,
  },
  {
    title: "Ski & Golf",
    sub: "World-Class Recreation",
    body: "Maine's premier ski areas including Sunday River and Shawnee Peak are within 45 minutes. Multiple championship golf courses are equally accessible. Four-season recreation is not just a promise — it's a reality here.",
    stat: "45 minutes",
    img: HeroImg,
  },
  {
    title: "Portland, Maine",
    sub: "Maine's Cultural Hub",
    body: "Portland — Maine's largest city and one of America's most celebrated small cities — is just one hour away. World-class dining, arts, Old Port, Jetport, shopping, and Maine Medical Center are all within easy reach.",
    stat: "1 hour",
    img: imgForest,
  },
  {
    title: "Oxford Hills Nature",
    sub: "Scenic Oxford County",
    body: "The Oxford Hills region offers endless outdoor recreation: hiking, canoeing, wildlife watching, fly fishing, mountain biking, and snowmobiling. The White Mountains of NH are also within a short drive for alpine adventures.",
    stat: "At your door",
    img: imgHg3,
  },
  {
    title: "Norway, Maine",
    sub: "Est. 1797 · Oxford County Seat",
    body: "Norway is a charming New England town with deep history, dating to 1797. Downtown Norway offers grocery, pharmacy, hardware, local restaurants, healthcare, and the full suite of everyday conveniences — just 10 minutes away.",
    stat: "10 minutes",
    img: imgH3,
  },
  {
    title: "Private Parcel",
    sub: "300 ft from Crockett Ridge Road",
    body: "The property sits on a private 2-acre parcel approximately 300 feet from well-maintained Crockett Ridge Road. Access is easy year-round with landlord-provided snowplowing, yet the home feels truly private and secluded.",
    stat: "300 ft to road",
    img: imgH5,
  },
];

const galleryImages = [
 // { src: imgForest, label: "Private Woods" },
  { src: OBImg, label: "Forest Views" },
  //{ src: imgH3, label: "Nature Trails" },
  { src: SpringImg, label: "Woodland Edge" },
  //{ src: imgHg3, label: "Country Access Road" },
  { src: Hero1Img, label: "Secluded Acres" },
  //{ src: imgH5, label: "Nature Escape" },
];

export function Location() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px]">
        <ImageWithFallback
          src={locationhero}
          alt="Location — Norway, Maine"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white/90 text-[11px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Location</span>
          </nav>
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/90 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Two Wooded Acres</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Location ·Norway, Maine
          </h1>
          <p className="text-3xl text-white/90 italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            Close to everything, private by nature
          </p>
        </div>
      </section>

      {/* Drive Times */}
      <section className="bg-black py-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[14px] tracking-[0.3em] uppercase text-gray-200 text-center mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            At a Glance · Drive Times from Property
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-800">
            {driveTimes.map((dt) => (
              <div key={dt.label} className="bg-black py-8 px-4 text-center">
                <p className="text-2xl text-white" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>{dt.value}</p>
                <p className="text-[14px] tracking-[0.1em] uppercase text-gray-300 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{dt.label}</p>
                <p className="text-[13px] text-gray-300 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{dt.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-300 text-[14px] mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Set 300 feet from Crockett Ridge Road on a private 2-acre parcel — worlds away yet conveniently close. Minutes from Norway, Maine (est. 1797) in the scenic Oxford Hills.
          </p>
        </div>
      </section>

      {/* Area Highlights */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[13px] tracking-[0.3em] uppercase text-gray-600 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Oxford Hills · Norway, Maine</p>
            <h2 className="text-4xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
              Area Highlights
            </h2>
            <p className="text-gray-900 italic mt-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem" }}>
              Everything Maine has to offer
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {areaHighlights.map((item) => (
              <div key={item.title} className="group">
                <div className="aspect-[14/9] overflow-hidden mb-4">
                  <ImageWithFallback
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{item.title}</h3>
                    <p className="text-[12px] tracking-[0.1em] uppercase text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>{item.sub}</p>
                  </div>
                  <span className="shrink-0 text-[11px] tracking-[0.1em] uppercase text-black bg-gray-100 px-2 py-1 ml-3" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                    {item.stat}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Map */}
      <section className="px-6 sm:px-12 lg:px-20 pb-10 max-w-7xl mx-auto">
        <div className="bg-gray-900 text-white p-10 text-center">
          <p className="text-[12px] tracking-[0.3em] uppercase text-gray-300 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Oxford County · Est. 1797 · Lakes District</p>
          <h2 className="text-3xl mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>Norway, Maine</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Crockett Ridge Road · Norway, Maine 04268 · Oxford Hills · 300 ft from road · 2 acres private
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
            {[
              { v: "2 min", l: "to Lake" },
              { v: "10 min", l: "to Norway" },
              { v: "45 min", l: "to Skiing" },
              { v: "1 hr", l: "to Portland" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-2xl text-white" style={{ fontFamily: "Playfair Display, serif" }}>{s.v}</p>
                <p className="text-[12px] tracking-[0.2em] uppercase text-gray-300 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{s.l}</p>
              </div>
            ))}
          </div>

          {/* Clickable map — opens Google Maps in a new tab */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=44.265598,-70.576293"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-3xl mx-auto group relative overflow-hidden"
            aria-label="Open property location in Google Maps"
          >
            <iframe
              src="https://maps.google.com/maps?q=44.265598,-70.576293&z=15&output=embed"
              className="w-full h-[400px] pointer-events-none"
              loading="lazy"
              style={{ border: 0 }}
              title="Property location map"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[13px] tracking-[0.2em] uppercase bg-white text-black px-5 py-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                Open in Google Maps
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[13px] tracking-[0.3em] uppercase text-gray-700 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Area Photos</p>
              <h2 className="text-2xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>The Oxford Hills Region</h2>
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
                <div key={i} className="pl-4 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_28%]">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback src={img.src} alt={img.label} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[14px] tracking-[0.1em] uppercase text-gray-700 mt-2 text-center" style={{ fontFamily: "Inter, sans-serif" }}>{img.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-600 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>Visit this remarkable retreat</p>
          <h2 className="text-3xl text-black mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Ideally located for those seeking<br />
            <em>peace without sacrificing convenience.</em>
          </h2>
          <p className="text-2sm text-gray-600 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Maine Retreat — Norway, Maine · Long-Term Rental · Oxford Hills · Immediately Available
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/schedule-showing" className="px-8 py-3 bg-black text-white text-[14px] tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
              Schedule a Showing
            </Link>
            <Link to="/details" className="px-8 py-3 border border-black text-black text-[14px] tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
              Full Specifications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}