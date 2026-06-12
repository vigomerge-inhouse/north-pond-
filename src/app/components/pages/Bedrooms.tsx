import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

//hero
import bd1 from "../../../imports/bedrooms/bd1.jpg";
//3bedrooms
import bd2 from "../../../imports/bedrooms/bd2.jpg";
import bd3 from "../../../imports/bedrooms/bd3.jpg";
import bd4 from "../../../imports/bedrooms/bd4.jpg";
import bd5 from "../../../imports/bedrooms/bd5.jpg";
import bd6 from "../../../imports/bedrooms/bd6.jpg";
import bd7 from "../../../imports/bedrooms/bd7.jpg";
import bd8 from "../../../imports/bedrooms/bd8.jpg";
import bd9 from "../../../imports/bedrooms/bd9.jpg";
import bd10 from "../../../imports/bedrooms/bd10.jpg";
import bd11 from "../../../imports/bedrooms/bd11.jpg";
import bd12 from "../../../imports/bedrooms/bd12.jpg";
import bd13 from"../../../imports/bedrooms/bd13.jpg";
import bd14 from"../../../imports/bedrooms/bd14.jpg";


import imgH3 from "../../../imports/bedrooms/h3.jpeg";
import imgH5 from "../../../imports/bedrooms/h5.jpg";
import imgHg1 from "../../../imports/bedrooms/hg1.jpg";
import imgHg3 from "../../../imports/bedrooms/hg3.jpg";
import imgHg20 from "../../../imports/bedrooms/hg20.jpg";
import imgKitchen from "../../../imports/bedrooms/livingrmkit.jpg";

const TYPO = {
  number: "text-4xl text-gray-400 font-serif",
  type: "font-semibold text-[13px] tracking-[0.25em] uppercase text-gray-700",
  size: "text-[14px] tracking-[0.1em] uppercase text-black font-semibold",
  title: "text-2xl lg:text-3xl text-black font-serif font-medium mb-5",
  body: "text-gray-600 leading-relaxed text-[18px]",
  bullet: "text-[17px] text-gray-700",
  sublabel: "text-[11px] tracking-[0.2em] uppercase text-white"
};

const bedrooms = [
  {
    num: "01",
    type: "Master Bedroom",
    size: "King-Size",
    title: "King-Size Master Suite with Spa-Inspired Ensuite",
    sublabel: "Primary Suite",
    images: [bd6, bd7, bd8,bd9,bd10],
    body: "Retreat to a spacious primary suite designed for relaxation and comfort. The bedroom easily accommodates a king-size bed and features generous walk-in closet storage that will exceed your expectations. Natural light fills the room throughout the day, creating a warm, serene environment.\n\nThe luxurious ensuite bath is a private spa. A cast-iron soaking tub sits bathed in soft light. The ceramic marble shower offers a hotel-quality experience. Elegant modern fixtures, quartz vanity, and warm neutral finishes complete the picture of a true personal sanctuary.",
    bullets: [
      "King-size bed configuration",
      "Generous walk-in closet",
      "Private ensuite bathroom",
      "Cast-iron soaking tub",
      "Ceramic marble shower",
      "Abundant natural light",
      "Premium modern fixtures",
      "Private, quiet setting",
    ],
  },
  {
    num: "02",
    type: "Guest Bedroom",
    size: "Queen-Size",
    title: "Spacious First Guest Bedroom",
    sublabel: "Guest Bedroom",
    images: [ bd3, ],
    body: "The first guest bedroom offers generous space for a queen-size bed with room to spare. Clean, well-organized closet space, fresh neutral finishes, and abundant natural light create an inviting environment — equally suited for a family member, guest, or home office.\n\nThe guest wing is served by a fully updated full bathroom with modern fixtures, bright design, and clean, contemporary finishes. Private, quiet, and comfortable — your guests will feel genuinely at home.",
    bullets: [
      "Queen-size bed configuration",
      "Generous closet space",
      "Fresh, contemporary finishes",
      "Abundant natural light",
      "Quiet, private location",
      "Access to full guest bath",
      "Flexible home-office option",
      "Warm neutral palette",
    ],
  },
  {
    num: "03",
    type: "Guest Bedroom",
    size: "Queen-Size",
    title: "Spacious Second Guest Bedroom",
    sublabel: "Guest Bedroom ",
    images: [bd4],
    body: "The second guest bedroom mirrors the same generous proportions, quality finishes, and natural light that define the rest of this home. Whether used for guests, family members, or as a dedicated home office or creative studio, this room provides real, usable space.\n\nBoth guest rooms share the updated guest full bathroom, which has been completely refreshed with new fixtures, bright design, and a clean contemporary style. This is a home designed for real living — not just for looking good in photographs.",
    bullets: [
      "Queen-size bed configuration",
      "Spacious clean closet",
      "Contemporary finishes",
      "Natural light throughout",
      "Versatile use — office or bedroom",
      "Shared access to guest bath",
      "Connected to living areas",
      "Peaceful, private atmosphere",
    ],
  },
];

function BedroomSection({ room }: { room: typeof bedrooms[0] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const isSlider = room.images.length > 1;

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Slider */}
<div className="relative">
  {isSlider ? (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {room.images.map((src, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] aspect-[4/3] overflow-hidden"
            >
              <ImageWithFallback
                src={src}
                alt={`${room.sublabel} ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm shadow hover:bg-white transition-colors"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm shadow hover:bg-white transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </>
  ) : (
    <div className="aspect-[4/3] overflow-hidden">
      <ImageWithFallback
        src={room.images[0]}
        alt={room.sublabel}
        className="w-full h-full object-cover"
      />
    </div>
  )}

  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5">
    <p
      className="text-[11px] tracking-[0.2em] uppercase text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {room.sublabel}
    </p>
  </div>
</div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className={TYPO.number}>
  {room.num}
</span>
              <div>
                <p className={TYPO.type}>{room.type}</p>
                <p className={TYPO.size}>{room.size}</p>
              </div>
            </div>
            <h2 className={TYPO.title}>
              {room.title}
            </h2>
           {room.body.split("\n\n").map((para, i) => (
  <p key={i} className={TYPO.body}>
    {para}
  </p>
))}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-5 mb-6">
  {room.bullets.map((b) => (
    <div key={b} className="flex items-start gap-2">
      <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
      <span className={TYPO.bullet}>
        {b}
      </span>
    </div>
  ))}
</div>
            <Link
              to="/schedule-showing"
              className="inline-flex items-center gap-2 text-[12px] tracking-[0.15em] uppercase text-black border-b border-black pb-0.5 hover:gap-4 transition-all"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
            >
              Schedule to see this room
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bedrooms() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90svh] min-h-[450px]">
    
        <ImageWithFallback
          src={bd1}
          alt="Bedrooms — Ranch Retreat"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white/90 text-[12px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Bedrooms</span>
          </nav>
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/90 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Bedrooms</p>
          <h1 className="text-5xl sm:text-6xl text-white leading-none mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Rest, privacy,
          </h1>
          <p className="text-3xl text-white/80 italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            beautifully designed
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black py-6">
  <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
    <div className="flex flex-wrap justify-center gap-8 md:gap-10">
  {[
    { v: "3", l: "Bedrooms Total" },
    { v: "1 King", l: "Primary + 2 Queen Guest" },
    { v: "✓", l: "Natural light in every room" },
  ].map((s) => (
    <div key={s.l} className="text-center text-white">
      <p
        className="text-2xl"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {s.v}
      </p>
      <p
        className="text-[12px] tracking-[0.2em] uppercase text-gray-300 mt-0.5"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {s.l}
      </p>
    </div>
  ))}
</div>

    <Link
      to="/schedule-showing"
      className="inline-block px-5 py-2.5 bg-white text-black text-[13px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
    >
      Schedule a Showing
    </Link>
  </div>
</section>

      {/* Intro */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-600 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Bedrooms</p>
          <h2 className="text-4xl text-black mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Three Bedrooms,<br /><em>Designed for Comfort</em>
          </h2>
          <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Relax in spacious, beautifully designed bedrooms that provide comfort, privacy, and tranquility. Generous layouts, ample storage, and elegant finishes create the perfect personal retreat — from the king-size primary suite to the flexible guest rooms that adapt to your life.
          </p>
        </div>
      </section>

      {/* Bedroom Sections */}
      {bedrooms.map((room, i) => (
        <div key={room.num} className={i % 2 === 1 ? "bg-gray-50" : "bg-white"}>
          <BedroomSection room={room} />
        </div>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-black text-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-300 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>Three rooms. One exceptional home.</p>
          <h2 className="text-4xl mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            See the primary suite, guest rooms,<br />
            <em>and the full home in person.</em>
          </h2>
          <p className="text-gray-200 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Schedule your private showing today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/schedule-showing" className="px-8 py-3 bg-white text-black text-[14px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              Schedule a Showing
            </Link>
            <Link to="/amenities" className="px-8 py-3 border border-gray-700 text-white text-[14px] tracking-[0.15em] uppercase hover:border-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
              View Amenities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
