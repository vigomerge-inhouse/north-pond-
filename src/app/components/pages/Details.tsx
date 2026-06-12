import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import PVImg from "../../../imports/Details/DetailPV.png";
import IntImg from "../../../imports/Details/DetailInt.png";
import GImg from "../../../imports/Details/DetailG.png";
import PFImg from "../../../imports/Details/DetailPF.png";
import HeroImg from "../../../imports/Details/DetailHero.jpg";

type SpecRow = { label: string; value: string };
type SpecGroup = { title: string; rows: SpecRow[] };

const specs: SpecGroup[] = [
  {
    title: "Property",
    rows: [
      { label: "Property type", value: "Masterfully renovated ranch — single story" },
      // CHANGED: clarified "master" label for king bedroom
      { label: "Bedrooms", value: "3 Bedrooms (1 king master primary + 2 queen guest)" },
      { label: "Bathrooms", value: "2 Full Baths" },
      { label: "Garage", value: "Two-car detached with ample storage" },
      { label: "Lot size", value: "Private 2-acre parcel" },
      { label: "Basement", value: "Partially finished full basement" },
      { label: "Style", value: "Ranch — single story, open-concept living" },
    ],
  },
  {
    title: "Interior",
    rows: [
      { label: "Kitchen", value: "High-end stainless appliances, spacious island, quartz countertops" },
      { label: "Master suite", value: "King-sized with walk-in closet; cast iron soaking tub & ceramic marble shower" },
      { label: "Guest bedrooms", value: "Two spacious queen-sized rooms with generous closets" },
      // CHANGED: "Brand-new throughout" → "Hardwood floors throughout entire home"
      { label: "Flooring", value: "Hardwood floors throughout entire home" },
      // CHANGED: added Skylights to living & dining
      { label: "Living & dining", value: "Open-concept, abundant windows, skylights, private acreage views" },
      { label: "Laundry", value: "Dedicated laundry room with pantry storage" },
      { label: "Finishes", value: "Designer lighting, contemporary fixtures, fresh neutral palette" },
    ],
  },
  {
    title: "Utilities & Systems",
    rows: [
      { label: "Water", value: "Recently tested drilled well — provided by landlord" },
      { label: "Electricity", value: "Tenant responsibility — easily activated" },
      { label: "Heating", value: "Tenant responsibility — easily activated" },
      { label: "Internet", value: "Tenant responsibility — easily activated" },
      // CHANGED: updated trash info from screenshot
      { label: "Trash", value: "Municipal service — Dump only 3 miles away" },
    ],
  },
  {
    title: "Outdoor & Grounds",
    rows: [
      { label: "Porch", value: "Wrap-around porch — full perimeter access" },
      { label: "Deck", value: "Spacious entertainment deck" },
      { label: "Private land", value: "2 full acres — mature trees, open green space" },
      { label: "Yard maintenance", value: "Landlord-maintained year-round" },
      { label: "Snowplowing", value: "Winter snowplowing included — landlord provided" },
      { label: "Pet fence", value: "Pet-friendly perimeter fence planned for installation" },
      // CHANGED: wildlife note kept, "f/ulo" unclear — keeping original + note
      { label: "Wildlife", value: "Active wildlife — deer, birds, Maine forest fauna" },
    ],
  },
  {
    title: "Location & Access",
    rows: [
      { label: "Road access", value: "300 ft from Crockett Ridge Road" },
      { label: "Water access", value: "Norway Lake & North Pond — 2 miles (public boat ramps)" },
      { label: "Nearest town", value: "Norway, Maine (est. 1797) — 10 minutes" },
      // CHANGED: "1 hour" → "3½ hours" from screenshot
      { label: "Portland", value: "3½ hours" },
      { label: "Boston", value: "3 hours" },
      { label: "Ski areas & Golf", value: "45 minutes (Sunday River, Shawnee Peak)" },
      { label: "Oxford Hills region", value: "Hiking, canoeing, fishing, mountain biking nearby" },
    ],
  },
  {
    title: "Rental Terms",
    rows: [
      { label: "Availability", value: "Immediately available — move-in ready" },
      { label: "Rental type", value: "Long-term rental" },
      { label: "Pets", value: "Pet-friendly · perimeter fence planned" },
      { label: "Landlord support", value: "Amenable to working with you to make this your home" },
      { label: "Lease", value: "Contact for terms and pricing details" },
//{ label: "Price", value: "3000$/month with utility fees" },
    ],
  },
];

const galleryImages = [
  { src: PVImg, label: "Property View" },
  { src: IntImg, label: "Interior" },
  { src: GImg, label: "Grounds" },
  { src: PFImg, label: "Private Forest" },
];

export function Details() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90svh] min-h-[550px]">
        <ImageWithFallback
          src={HeroImg}
          alt="Property Details — Ranch Retreat"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-14 px-6 sm:px-12 lg:px-20">
<nav className="flex items-center gap-2 text-white/90 text-[13px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Details</span>
          </nav>
<p className="text-[13px] tracking-[0.3em] uppercase text-white/90 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Property</p>
          <h1 className="text-5xl sm:text-6xl text-white leading-none" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Property Details · Full Specifications
          </h1>
        </div>
      </section>

      {/* Specs Tables */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="mb-10">
<p className="text-[13px] tracking-[0.3em] uppercase text-gray-700 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>Complete</p>
          <h2 className="text-4xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Property Specifications
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {specs.map((group) => (
            <div key={group.title} className="border border-gray-100">
              <div className="bg-black text-white px-6 py-3">
<h3 className="text-[15px] tracking-[0.2em] uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{group.title}</h3>
              </div>
              <table className="w-full">
                <tbody>
                  {group.rows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                    >
                      {/* FONT FIX: text-[12px] → text-[14px] */}
                      <td
className="px-6 py-3 text-[14px] text-gray-700 w-2/5"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {row.label}
                      </td>
                      {/* FONT FIX: text-sm → text-base */}
                      <td
                        className="px-6 py-3 text-base text-black"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                      >
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-10 px-6 sm:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
<p className="text-[13px] tracking-[0.3em] uppercase text-gray-600 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>All Photos</p>

<h2 className="text-2xl text-black mb-6" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
  Complete Property Gallery
</h2>

<p className="text-[14px] text-gray-600 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
  4 photos — interior, exterior & grounds
</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {galleryImages.map((img) => (
              <div key={img.label} className="group">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
<p className="text-[13px] tracking-[0.08em] uppercase text-gray-700 mt-2 text-center" style={{ fontFamily: "Inter, sans-serif" }}>
  {img.label}
</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
<section className="py-20 px-6 text-center">
  <div className="max-w-2xl mx-auto">
    <p
      className="text-[13px] tracking-[0.3em] uppercase text-gray-600 mb-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Don't miss this renovated ranch gem
    </p>

    <h2
      className="text-4xl text-black mb-4"
      style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}
    >
      A rare opportunity —<br />
      <em>move-in ready, immediately available.</em>
    </h2>

    <p
      className="text-base text-gray-600 mb-8"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      Landlord is amenable to working with you to make this house your home.
      Schedule your private showing today.
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      <Link
        to="/schedule-showing"
        className="px-10 py-4 bg-black text-white text-[14px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
      >
        Schedule Your Private Showing
      </Link>

      <Link
        to="/"
        className="px-8 py-4 border border-black text-black text-[14px] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-colors"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Back to Overview
      </Link>
    </div>
  </div>
</section>
    </div>
  );
}