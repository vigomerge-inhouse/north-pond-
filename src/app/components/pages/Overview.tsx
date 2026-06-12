import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
// ── HERO IMAGE IMPORTS ───────────────────────────────────────
import HeroImg from "../../../imports/HM_HE1.jpg";
import hero3 from "../../../imports/hero/hero3.jpg";
//import h52 from "../../../imports/hero/h52.png";
import hero2 from "../../../imports/hero/hero2.png";
// ── GALLERY IMAGE IMPORTS ───────────────────────────────────────
import lvkt from "../../../imports/hero/lvkt.jpg";
import H51 from "../../../imports/hero/h51.png";
import hg2 from "../../../imports/hero/hg2.png";
import H52 from "../../../imports/hero/h52.png";
import imgHg20 from "../../../imports/hg20.jpg";
// ── PROPERTY HIGHLIGHTS STRIP IMAGE IMPORTS ───────────────────────────────────────
import io from "../../../imports/hero/io.jpg";
import pf1 from "../../../imports/hero/pf1.jpg";
import ps from "../../../imports/hero/ps.jpg";
//----view highlights strip images --------------
import am1 from "../../../imports/hero/am1.jpg";
import am2 from "../../../imports/hero/am2.jpg";
import am3 from "../../../imports/hero/am3.jpg";
import am4 from "../../../imports/hero/am4.png";
//before footer image
import EndImg from "../../../imports/HomePageEnd.jpg";



const heroSlides = [
  { src: hero3, alt: "Gourmet kitchen", label: "Brand New Kitchen" },
  { src: HeroImg, alt: "Private forest — Maine Retreat", label: "Exceptional Country Living" },
  //{ src: hero2, alt: "Ranch home exterior", label: "Move-In Ready" },
];

const stats = [
{
value: "1975",
label: "Founded",
sub: "North Pond Realty Trust"
},
{
value: "Oxford",
label: "County",
sub: "Western Maine"
},
{
value: "50+",
label: "Years",
sub: "Property Stewardship"
},
{
value: "Trusted",
label: "Legacy",
sub: "Generations"
},
];

const driveStats = [
  { value: "1 hr", label: "to Portland" },
  { value: "45 min", label: "Ski & Golf" },
  { value: "3 hrs", label: "to Boston" },
  { value: "2 min", label: "Boat Ramps" },
];
const features = [
"Recreational Properties",
"Buildable Shorefront Lots",
"Mountain-View Parcels",
"Timberland",
"Farmland",
"Woodlots",
"Oxford Hills Region",
"Western Maine",
];

const galleryImages = [
  { src: H52, alt: "Exceptional Country Living" },
  { src: hg2, alt: "Brand New Kitchen" },
  { src: lvkt, alt: "Living Room to Kitchen" },
  { src: imgHg20, alt: "Guest Bathroom" },
];

export function Overview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    const timer = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(timer);
    };
  }, [emblaApi]);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[90svh] min-h-[550px]">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {heroSlides.map((slide, i) => (
              <div key={i} className="relative flex-[0_0_100%] h-full">
                <ImageWithFallback
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-10 lg:px-16">
          <div className="max-w-2xl">
            <p
              className="text-[13px] tracking-[0.3em] uppercase text-white/80 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              North Pond Realty Trust · Norway, Maine · Oxford Hills
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-2 leading-none"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
            >
             Welcome to North Pond Realty Trust
            </h1>
            <p
              className="text-xl sm:text-2xl text-white/90 mb-1 italic"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              
            </p>
            <p
              className="text-[12px] tracking-[0.2em] uppercase text-white/80 mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              
            </p>
            
            <div className="flex gap-4 mt-8">
              <Link
                to="/property-highlights"
                className="px-6 py-3 bg-white text-black text-[12px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Explore  Properties
              </Link>
              <Link
                to="/schedule-showing"
                className="px-6 py-3 border border-white text-white text-[12px] tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 flex gap-1.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-0.5 transition-all duration-300 ${i === selectedIndex ? "w-8 bg-white" : "w-3 bg-white/40"
                }`}
            />
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "Inter, sans-serif" }}>Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </section>

      {/* Drive Stats Bar */}
      <section className="bg-black text-white py-5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {driveStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl text-white"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
              >
                {stat.value}
              </p>
              <p
                className="text-[12px] tracking-[0.2em] uppercase text-gray-300 mt-0.5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Property Summary */}
      <section className="pt-20 pb-8 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
           <p
              className="text-semibold[20px] tracking-[0.3em] uppercase text-gray-700 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              North Pond Realty Trust
            </p>


            <h2
              className="text-4xl lg:text-5xl text-black mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
            >
              Our Story,
              <br />
              <em>Since 1975</em>
            </h2>
            <p
              className="text-gray-600 leading-relaxed text-2sm mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
             Our story begins in 1975 when North Pond Realty Trust quietly started acquiring and curating exceptional properties across Oxford County, Maine.It began with the purchase of land in the Norway, Maine at North Pond—the 273-acre spring-fed drainage that feeds Lake Pennesseewassee (Norway Lake).The second acquisition was a stunning mountain parcel in Andover, Maine, just 30 minutes from Sunday River Ski and Golf Resort.The rest is history.
Today we offer carefully selected:
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-black rounded-full shrink-0" />
                  <span
                    className="text-2sm text-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-[15px] tracking-[0.15em] uppercase text-black border-b border-black pb-0.5 hover:gap-4 transition-all"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
               Featured Property:
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-100 p-6 sm:p-8 text-center hover:shadow-lg transition-shadow duration-300"
                style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}
              >
                <p
                  className="text-4xl sm:text-5xl text-black mb-1"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[13px] tracking-[0.1em] uppercase text-black mb-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {stat.label}
                </p>
                <p
                  className="text-[13px] sm:text-[14px] text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {/*<section className="px-10 xl:px-2 lg:px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <div key={i} className="relative group overflow-hidden aspect-square">
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p
                  className="text-[11px] tracking-[0.1em] uppercase text-white"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      */}

      {/* Modern Living Preview */}
      {/*<section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={H51}
                alt="Modern living — master bathroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 bg-white p-6 shadow-xl w-48 hidden lg:block"
              style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
            >
              <p
                className="text-3xl text-black mb-1"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Move-In
              </p>
              <p
                className="text-[11px] tracking-[0.2em] uppercase text-green-600"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Ready Now
              </p>
            </div>
          </div>
          <div>
            <p
              className="text-[27px] tracking-[0.2em] uppercase text-gray-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The Experience
            </p>
            <h2
              className="text-4xl text-black mb-6"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
            >
              Modern Living
              <br />
              <em>Elevated by Design</em>
            </h2>
            <p
              className="text-gray-600 leading-relaxed mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Every room has been reimagined from scratch — thoughtfully designed
              for comfort, warmth, and effortless daily living. From the rich
              white oak hardwood floors underfoot to the soaring natural light
              throughout, this home feels like home the moment you walk through
              the door.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "White oak hardwood floors throughout — warm, enduring, exceptional",
                "Gourmet kitchen with quartz countertops and premium appliances",
                "Spa-inspired bathrooms — soaking tub, marble shower",
                "King-size primary suite with walk-in closet and natural light",
                "Single-story ranch flow — open, airy, no stairs",
                "Indoor-outdoor living with wrap-around porch & private deck",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/modern-living"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-[12px] tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              Explore Modern Living
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* Property Highlights Strip */}
      <section className="pt-4 pb-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <p
              className="text-bold[49px] tracking-[0.2em] uppercase text-gray-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              The Property
            </p>
            <h2
              className="text-4xl text-black"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
            >
              Property Highlights
            </h2>
            <p
              className="text-gray-500 mt-2 italic"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.2rem" }}
            >
              A perfect blend of style and convenience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: ps,
                label: "Primary Suite",
                desc: "King · Walk-in Closet · Ensuite Bath",
                path: "/bedrooms",
              },
              {
                img: pf1,
                label: "Wrap-Around Porch",
                desc: "Indoor-Outdoor Living · Full Perimeter",
                path: "/outdoor-living",
              },
              {
                img: io,
                label: "Private Forest",
                desc: "2 Wooded Acres · Wildlife & Privacy",
                path: "/location",
              },
            ].map((card) => (
              <Link
                key={card.label}
                to={card.path}
                className="group block relative overflow-hidden"
                style={{
                  boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={card.img}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 border border-t-0 border-gray-100">
                  <p
                    className="text-[13px] tracking-[0.08em] uppercase text-black mb-1"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                  >
                    {card.label}
                  </p>
                  <p
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/property-highlights"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-black border-b border-black pb-0.5 hover:gap-4 transition-all"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              View All Highlights
            </Link>
          </div>
        </div>
      </section>
      {/*end image*/}
     <section className="relative mb-8 md:mb-12">
  <div className="max-w-full mx-full overflow-hidden rounded-xl">
    <ImageWithFallback
      src={EndImg}
      alt="Featured Property"
      className="w-full h-full md:h-[650px] object-cover"
    />
  </div>
</section>

      {/* Amenities Preview */}
     {/* <section className="bg-black text-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-bold[17px] tracking-[0.3em] uppercase text-gray-500 mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Amenities
              </p>
              <h2
                className="text-4xl text-white mb-6"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
              >
                Everything you need,
                <br />
                <em>nothing you don't</em>
              </h2>
              <p
                className="text-gray-400 leading-relaxed mb-8"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Premium amenities designed for comfort and convenience — from
                white oak hardwood floors and spa-inspired bathrooms to
                landscaped outdoor spaces, secure parking, and high-speed
                connectivity. Four-season living at its finest.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "2 Private Acres",
                  "Lake Access — 2 mi",
                  "3 Bedrooms",
                  "Hardwood Floors",
                  "Spa Bathrooms",
                  "Gourmet Kitchen",
                  "Turnkey Ready",
                  "Dog Friendly",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 border border-gray-700 text-[11px] tracking-wider text-gray-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/amenities"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-[12px] tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                View All Amenities
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[am1, am2, am3, am4].map((src, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={src}
                    alt="Amenity"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/*<section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-[14px] tracking-[0.3em] uppercase text-gray-600 mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            North Pond Realty Trust
          </p>
          <h2
            className="text-5xl text-black mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
          >
            Discover Exceptional
            <br />
            <em>Properties Across Western Maine</em>
          </h2>
          <p
            className="text-gray-700 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A rare opportunity to lease a move-in-ready home perfectly balancing
            modern comfort, white oak hardwood floors, private nature-filled
            living, and four-season appeal.
          </p>
          <p
            className="font-semibold text-[12px] text-gray-700 mb-8 italic"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
          >
            Serving Western Maine Since 1975
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["3 Beds", "2 Baths", "2-Car Garage", "2 Acres"].map((s) => (
              <span
                key={s}
                className="px-4 py-2 border border-gray-200 text-[12px] tracking-wider text-gray-600"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            to="/schedule-showing"
            className="inline-block px-10 py-4 bg-black text-white text-[13px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
          >
            Browse Current Properties
          </Link>
        </div>
      </section>*/}
    </div>
  );
}