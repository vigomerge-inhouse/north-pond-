import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgForest from "../../../imports/Private_Forest-1.jpg";
import HeroImg from "../../../imports/OutdoorLivingHero.png";
import Hero1Img from "../../../imports/OLHero1.jpg"; // ⚠️ REPLACE with nicer porch photo
import WinterImg from "../../../imports/DetailPF.png";
import AutumnImg from "../../../imports/DetailHero.png"; // ⚠️ REPLACE with rich fall colors photo
import SpringImg from "../../../imports/OLSpring.jpg";
import imgHome from "../../../imports/Neat_and_clean_home_with_peace-1.jpg";
import imgH3 from "../../../imports/h3.jpeg";
import PEImg from "../../../imports/OLPE.jpg";
import imgH5 from "../../../imports/h5.jpg";
import imgHg1 from "../../../imports/hg1.jpg";
import imgHg3 from "../../../imports/hg3.jpg";
import imgHg20 from "../../../imports/hg20.jpg";
import imgKitchen from "../../../imports/livingrmkit.jpg";
import GImg from "../../../imports/OLG.jpg";
import OBImg from "../../../imports/OLOB.jpg";
import OSImg from "../../../imports/OLOS.jpg"
import OLNVImg from "../../../imports/OLNV.jpeg";
import StorageImg from "../../../imports/OLStorage.jpg";

const outdoorAmenities = [
  { name: "Wrap-around porch", sub: "Classic Maine porch living — morning coffee to evening sunset" },
  { name: "Spacious entertainment deck", sub: "Large deck for outdoor dining and gathering" },
  { name: "Mature trees & open space", sub: "Established tree canopy plus open green lawn areas" },
  { name: "Landlord yard maintenance", sub: "Professional lawn care provided" }, // ✅ removed "year-round"
  { name: "Winter snowplowing included", sub: "Driveway and access routes maintained all season" },
  { name: "Dog-friendly perimeter fence", sub: "Planned installation — safe secure pet space" },
  { name: "Wildlife watching", sub: "Deer, birds, and Maine wildlife visit regularly" },
  { name: "Stargazing", sub: "Dark sky — brilliant night sky viewing from the deck" },
  { name: "Garden potential", sub: "Fertile land ready for vegetable or flower gardens" },
  { name: "Nooks", sub: "Charming private nooks throughout the wooded acres" }, // ✅ added
  { name: "Picnic area", sub: "Perfect spots for outdoor dining and relaxing on the grounds" }, // ✅ added
  // ✅ "Walking trails possible" REMOVED
];

const seasons = [
  {
    name: "Spring",
    color: "bg-green-50",
    body: "Watch the property bloom with wildflowers, birdsong returns, and the woods fill with fresh green life. Ideal for starting your garden on the private 2-acre lot.",
    img: SpringImg,
  },
  {
    name: "Summer",
    color: "bg-blue-50",
    body: "Relax on the wrap-around porch, entertain on the deck, and take a short 2-mile drive to North Pond or Norway Lake for boating, swimming, and paddling.",
    img: imgH3,
  },
  {
    name: "Autumn",
    color: "bg-orange-50",
    body: "Maine's legendary foliage transforms the private woods into a palette of reds, oranges, and golds. The Oxford Hills region is renowned for spectacular fall color.",
    img: AutumnImg, // ⚠️ swap with rich fall colors image
  },
  {
    name: "Winter",
    color: "bg-slate-50",
    body: "Snow-covered acreage becomes a peaceful winter wonderland. Snowplowing is landlord-provided. Maine's premier ski resorts are just 45 minutes away.",
    img: WinterImg,
  },
];

const gallery = [
  { src: PEImg, label: "Property Exterior" },
  { src: GImg, label: "Grounds" },
  { src: imgHg3, label: "Barn & Garage" },
  { src: StorageImg, label: "Storage" },
  { src: OBImg, label: "Outbuilding" },
  { src: imgKitchen, label: "Interior Access" },
  { src: OSImg, label: "Outdoor Space" },
  { src: OLNVImg, label: "Natural Views" },
];

export function OutdoorLiving() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px]">
        <ImageWithFallback
          src={HeroImg}
          alt="Outdoor Living — Ranch Retreat"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white/50 text-[13px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}> {/* ✅ font size up */}
            <Link to="/" className="font-semibold hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Outdoor Living</span>
          </nav>
          <p className="text-[14px] tracking-[0.3em] uppercase text-white/60 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Wrap-Around Porch</p> {/* ✅ font size up */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}> {/* ✅ font size up */}
            Outdoor
          </h1>
          <p className="text-4xl text-white/80 italic mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}> {/* ✅ font size up */}
            Outdoor Living
          </p>
          <p className="text-2xl text-white/70 italic" style={{ fontFamily: "Cormorant Garamond, serif" }}> {/* ✅ font size up */}
            Two private acres,<br />yours to enjoy
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}> {/* ✅ text-base for readability */}
              True seclusion on two private acres with a charming wrap-around porch and spacious deck. Whether watching wildlife, stargazing, or simply breathing in the fresh Maine air, this private oasis celebrates every season of the year.
            </p>
            <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: "Inter, sans-serif" }}> {/* ✅ text-base */}
              The landlord maintains the yard, provides professional winter snowplowing, and will install a dog-friendly perimeter fence. The property's generous acreage offers countless possibilities — create flower gardens, nooks, picnic spots, gathering spaces, or natural meadows. {/* ✅ added nooks + picnic */}
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden">
              <ImageWithFallback
                src={Hero1Img}
                alt="Outdoor living — wrap-around porch"
                className="w-full h-full object-cover"
              />
              {/* ⚠️ Replace Hero1Img with a nicer porch photo */}
            </div>
            <blockquote className="mt-6 border-l-2 border-black pl-5">
              <p className="text-gray-600 italic" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.15rem" }}>
                 {/* ✅ added nooks + picnic */}
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Outdoor Amenities */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-[12px] tracking-[0.3em] uppercase text-gray-400 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Included</p> {/* ✅ font size up */}
          <h2 className="text-4xl text-black mb-8" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>Outdoor Amenities</h2> {/* ✅ font size up */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4">
            {outdoorAmenities.map((item) => (
              <div key={item.name} className="flex items-start gap-3 py-3 border-b border-gray-200">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
                <div>
                  <p className="text-base text-black" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{item.name}</p> {/* ✅ text-base up from text-sm */}
                  <p className="text-sm text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>{item.sub}</p> {/* ✅ text-sm up from text-[12px] */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Seasons */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[12px] tracking-[0.3em] uppercase text-gray-400 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Four Seasons of Beauty</p>
            <h2 className="text-3xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
              Maine's finest seasons at your door
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((season) => (
              <div key={season.name} className={`${season.color} p-0 overflow-hidden`}>
                <div className="aspect-[2/2] overflow-hidden">
                  <ImageWithFallback
                    src={season.img}
                    alt={season.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl text-black mb-2" style={{ fontFamily: "Playfair Display, serif", fontWeight: 600 }}>{season.name}</h3> {/* ✅ text-xl up from text-lg */}
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{season.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dog & Cat Friendly */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-black text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase text-gray-500 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Pet Friendly Property</p> {/* ✅ changed from Dog to Pet */}
            <h2 className="text-3xl mb-5" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
              A genuinely pet-friendly property. {/* ✅ updated */}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              The landlord plans to install a perimeter fence to create a safe, secure space for your pets. With 2 private wooded acres, your dogs and cats will have space to roam, explore, and thrive in a true Maine country setting. If you have a dog or a cat, this is the property for you. {/* ✅ added cats */}
            </p>
            <Link
              to="/schedule-showing"
              className="inline-block px-6 py-3 bg-white text-black text-[12px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Schedule Showing
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <ImageWithFallback
              src={imgForest}
              alt="Private wooded acres — pet friendly"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Gallery Slider */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[12px] tracking-[0.3em] uppercase text-gray-400 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Outdoor Gallery</p>
              <h2 className="text-2xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>All Seasons</h2>
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
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="pl-4 flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_28%]"
                >
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
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-xl mx-auto">
          <p className="text-gray-700 mb-2 text-base" style={{ fontFamily: "Inter, sans-serif" }}>Experience it yourself</p>
          <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Schedule a private showing and see why this outdoor retreat is truly one-of-a-kind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/schedule-showing" className="px-8 py-3 bg-black text-white text-[12px] tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
              Book a Showing
            </Link>
            <Link to="/location" className="px-8 py-3 border border-black text-black text-[12px] tracking-[0.15em] uppercase hover:bg-black hover:text-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
              Explore Location
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}