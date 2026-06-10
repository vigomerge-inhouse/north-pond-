import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgForest from "../../../imports/Private_Forest-1.jpg";
import imgHome from "../../../imports/Neat_and_clean_home_with_peace-1.jpg";
import imgKitchen from "../../../imports/livingrmkit.jpg";
import imgH3 from "../../../imports/h3.jpeg";
import imgH5 from "../../../imports/h5.jpg";
import imgHg1 from "../../../imports/hg1.jpg";
import imgHg3 from "../../../imports/hg3.jpg";
import imgHg20 from "../../../imports/hg20.jpg";

const heroSlides = [
  { src: imgForest, alt: "Private forest — Ranch Retreat", label: "Exceptional Country Living" },
  { src: imgHome, alt: "Ranch home exterior", label: "Move-In Ready" },
  { src: imgKitchen, alt: "Gourmet kitchen", label: "Brand New Kitchen" },
  { src: imgH3, alt: "Property exterior", label: "Private 2-Acre Parcel" },
];

const stats = [
  { value: "3", label: "Bedrooms", sub: "King + 2 Queen" },
  { value: "2", label: "Full Baths", sub: "Primary & Guest" },
  { value: "2", label: "Car Garage", sub: "Detached" },
  { value: "2", label: "Private Acres", sub: "Wooded Lot" },
];

const driveStats = [
  { value: "1 hr", label: "to Portland" },
  { value: "45 min", label: "Ski & Golf" },
  { value: "3 hrs", label: "to Boston" },
  { value: "2 mi", label: "Boat Ramps" },
];

const features = [
  "3 Bed / 2 Bath",
  "2-Acre lot",
  "Full basement",
  "Single story",
  "Laundry pantry",
  "Detached garage",
  "Drilled well water",
  "Quartz countertops",
];

const galleryImages = [
  { src: imgHg1, alt: "Exceptional Country Living" },
  { src: imgH5, alt: "Brand New Kitchen" },
  { src: imgHg3, alt: "Living Room to Kitchen" },
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
      <section className="relative h-[100svh] min-h-[600px]">
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
              className="text-[11px] tracking-[0.3em] uppercase text-white/70 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Long-Term Rental · Norway, Maine · Oxford Hills
            </p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-2 leading-none"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
            >
              Ranch Retreat
            </h1>
            <p
              className="text-xl sm:text-2xl text-white/80 mb-1 italic"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Masterfully Renovated
            </p>
            <p
              className="text-[12px] tracking-[0.2em] uppercase text-white/60 mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Turnkey · Move-in Ready · Immediately Available
            </p>
            <div className="flex flex-wrap gap-3">
              {["3 Bedrooms", "2 Full Baths", "2-Car Garage", "2 Private Acres", "Wrap-Around Porch", "Dog Friendly"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-[11px] tracking-wider border border-white/30"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <div className="flex gap-4 mt-8">
              <Link
                to="/property-highlights"
                className="px-6 py-3 bg-white text-black text-[12px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Explore the Property
              </Link>
              <Link
                to="/schedule-showing"
                className="px-6 py-3 border border-white text-white text-[12px] tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                Schedule a Showing
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
              className={`h-0.5 transition-all duration-300 ${
                i === selectedIndex ? "w-8 bg-white" : "w-3 bg-white/40"
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
                className="text-[10px] tracking-[0.2em] uppercase text-gray-400 mt-0.5"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Property Summary */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Norway, Maine · Est. 1797
            </p>
            <h2
              className="text-4xl lg:text-5xl text-black mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
            >
              Timeless charm,
              <br />
              <em>completely reimagined</em>
            </h2>
            <p
              className="text-gray-600 leading-relaxed text-base mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Discover the perfect blend of timeless ranch charm and contemporary
              luxury in this masterfully renovated single-story home. Minutes
              from Norway, Maine in the scenic Oxford Hills, with Norway Lake and
              North Pond's public boat ramps just a two-mile drive away. Set on a
              private 2-acre parcel just 300 feet from well-known Crockett Ridge
              Road.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-black rounded-full shrink-0" />
                  <span
                    className="text-sm text-gray-700"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-black border-b border-black pb-0.5 hover:gap-4 transition-all"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              See All Features
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-100 p-8 text-center hover:shadow-lg transition-shadow duration-300"
                style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}
              >
                <p
                  className="text-5xl text-black mb-1"
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
                  className="text-[11px] text-gray-400"
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
      <section className="px-6 sm:px-10 lg:px-16 pb-20 max-w-7xl mx-auto">
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

      {/* Modern Living Preview */}
      <section className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={imgH5}
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
              className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3"
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
              Experience contemporary comfort with thoughtfully designed spaces,
              elegant interiors, and seamless functionality. Every detail is
              crafted to enhance your lifestyle while creating a warm and inviting
              atmosphere that feels like home the moment you walk through the
              door.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Thoughtfully designed spaces — every room reimagined from scratch",
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

      {/* Property Highlights Strip */}
      <section className="py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3"
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
                img: imgH3,
                label: "Primary Suite",
                desc: "King · Walk-in Closet · Ensuite Bath",
                path: "/bedrooms",
              },
              {
                img: imgForest,
                label: "Wrap-Around Porch",
                desc: "Indoor-Outdoor Living · Full Perimeter",
                path: "/outdoor-living",
              },
              {
                img: imgHg1,
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

      {/* Amenities Preview */}
      <section className="bg-black text-white py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-3"
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
                Enhance your daily lifestyle with premium amenities designed for
                convenience and relaxation, including landscaped outdoor spaces,
                secure parking, high-speed connectivity, recreational areas, and
                modern community features.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "2 Private Acres",
                  "Lake Access — 2 mi",
                  "3 Bedrooms",
                  "Fully Renovated",
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
              {[imgHg3, imgHg20, imgForest, imgHome].map((src, i) => (
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
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            RanchRetreat
          </p>
          <h2
            className="text-5xl text-black mb-4"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
          >
            Don't miss this
            <br />
            <em>renovated ranch gem</em>
          </h2>
          <p
            className="text-gray-500 mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A rare opportunity to rent a move-in-ready home perfectly balancing
            modern comfort, private nature-filled living, and four-season appeal.
          </p>
          <p
            className="text-sm text-gray-400 mb-8 italic"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem" }}
          >
            Norway, Maine · Oxford Hills · Contact for Pricing
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
            Schedule Your Private Showing
          </Link>
        </div>
      </section>
    </div>
  );
}
