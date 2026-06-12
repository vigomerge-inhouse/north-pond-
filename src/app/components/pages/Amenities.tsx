import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import hero1 from "../../../imports/ameneties/hero1.png";
import imgHome from "../../../imports/Neat_and_clean_home_with_peace-1.jpg";
import imgKitchen from "../../../imports/livingrmkit.jpg";
import imgHg1 from "../../../imports/hg1.jpg";
//import imgH5 from "../../../imports/h5.jpg";
import GarageImg from "../../../imports/AmentiesGarage.jpg";

const amenityGroups = [
  {
    title: "Kitchen & Cooking",
    items: [
      { name: "Brand-new stainless appliances", sub: "Full suite — range, refrigerator, dishwasher" },
      { name: "Quartz countertops", sub: "Premium surface — beautiful & durable" },
      //{ name: "Center island", sub: "Spacious prep & dining island" },
      { name: "Abundant cabinetry", sub: "Generous storage throughout kitchen" },
      { name: "Pantry storage", sub: "Dedicated pantry adjacent to kitchen" },
      { name: "Modern  hardware", sub: "Designer selections throughout" },
    ],
  },
  {
    title: "Storage & Organization",
    items: [
      { name: "Walk-in closet", sub: "Primary bedroom — generous size" },
      { name: "Guest room closets", sub: "Spacious closets in both guest rooms" },
      { name: "Dedicated laundry room", sub: "Separate room with full washer/dryer hookups" },
      { name: "Pantry room", sub: "Adjacent to kitchen for dry goods" },
      { name: "Full basement", sub: "Partially finished — excellent storage" },
      //{ name: "2-car garage", sub: "Detached — clean, organized, full-size bays" },
    ],
  },
  {
    title: "Parking & Garage",
    items: [
      { name: "Two-car detached garage", sub: "Full-size bays with interior access" },
     // { name: "Recreational vehicle storage", sub: "Space for boats, ATVs, snowmobiles" },
      //{ name: "Workshop capability", sub: "Ample space for tools & projects" },
      { name: "Seasonal storage", sub: "Perfect for Maine's four seasons of gear" },
      //{ name: "Driveway parking", sub: "Additional off-street parking available" },
      { name: "Easy road access", sub: "300 ft from Crockett Ridge Road" },
    ],
  },
  {
    title: "Outdoor & Grounds",
    items: [
      { name: "Wrap-around porch", sub: "Full perimeter — morning to sunset" },
      { name: "Spacious  deck", sub: "Large, private outdoor entertaining space" },
      { name: "2 private wooded acres", sub: "Mature trees, open lawns, privacy" },
      { name: "Wildlife & nature", sub: "Active deer, birds, Maine wildlife" },
      { name: "Stargazing", sub: "Dark-sky property — brilliant night skies" },
      { name: "Garden potential", sub: "Fertile land ready for your garden vision" },
    ],
  },
//  {
   // title: "Landlord Services",
    //items: [
      //{ name: "Professional yard maintenance", sub: "Landlord-provided, year-round" },
      //{ name: "Winter snowplowing", sub: "Driveway & access — included" },
      //{ name: "Well water system", sub: "Recently tested drilled well — landlord provided" },
     // { name: "Pet-friendly fence", sub: "Perimeter fence planned for installation" },
      //{ name: "Collaborative landlord", sub: "Amenable to personalizing your home" },
      //{ name: "Immediate availability", sub: "Move-in ready — no waiting" },
   // ],
//  },
  {
    title: "Recreation & Access",
    items: [
      { name: "North Pond", sub: "Public boat ramp — 2 miles" },
      { name: "Norway Lake", sub: "Public boat ramp — 2 miles" },
      { name: "Ski areas", sub: "Sunday River, Shawnee Peak — 45 min" },
      { name: "Golf courses", sub: "Multiple courses — 45 min" },
      { name: "Hiking trails", sub: "Oxford Hills — at your doorstep" },
      { name: "Portland, ME", sub: "Maine's premier city — 1 hour" },
    ],
  },
  {
    title: "Pet-Friendly",
    items: [
      { name: "Dogs welcome", sub: "Genuinely dog-friendly property" },
      { name: "Perimeter fence planned", sub: "Safe, secure space for your dog" },
      { name: "2 acres to explore", sub: "Room for dogs to run and roam" },
      { name: "Private, secure setting", sub: "No traffic, no neighbors — true privacy" },
      { name: "solo surroundings", sub: "Trails, woods, and wildlife to discover" },
      { name: "Collaborative approach", sub: "Landlord works with pet owners" },
    ],
  },
  {
    title: "Utilities & Connectivity",
    items: [
      { name: "High-speed internet", sub: "Available in Norway, ME — tenant activates" },
      { name: "Electricity", sub: "Tenant responsibility — easy activation" },
      { name: "Heating system", sub: "Tenant responsibility — ready for use" },
      { name: "Well water", sub: "Landlord provided — recently tested" },
      { name: "Modern electrical", sub: "Updated electrical systems throughout" },
      { name: "Efficient systems", sub: "Modern, clean utility infrastructure" },
    ],
  },
  {
    title: "Four-Season Living",
    items: [
      { name: "Spring", sub: "Wildflowers, bird arrivals, garden planting" },
      { name: "Summer", sub: "Lake access, porch life, outdoor entertaining" },
      { name: "Autumn", sub: "Legendary Maine foliage — Oxford Hills" },
      { name: "Winter", sub: "Snowplowing included, skiing 45 min away" },
      { name: "Wildlife year-round", sub: "Deer, birds, and Maine fauna" },
      { name: "Stargazing", sub: "Dark skies in every season" },
    ],
  },
  {
    title: "Security & Privacy",
    items: [
      { name: "Private 2-acre lot", sub: "No shared walls or common areas" },
      { name: "300 ft from road", sub: "Distance from Crockett Ridge Road" },
      { name: "Mature tree canopy", sub: "Natural privacy screen from neighbors" },
      { name: "Detached garage", sub: "Secure parking and storage" },
      { name: "Private driveway", sub: "Your own dedicated access" },
      { name: "Single-family home", sub: "No apartment building — no shared spaces" },
    ],
  },
];

const showcaseImages = [imgKitchen,  imgHg1, GarageImg].map((src, i) => ({
  src,
  alt: ["Gourmet Kitchen", "Spa Bathroom", "Outdoor Living", "Ranch Exterior"][i],
}));

export function Amenities() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90svh] min-h-[550px]">
        <ImageWithFallback
          src={hero1}
          alt="Amenities — Ranch Retreat"
          className="w-full h-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-16 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white/90 text-[11px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="font-semibold hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Amenities</span>
          </nav>
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/90 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Amenities</p>
          <h1 className="text-5xl sm:text-6xl text-white leading-none mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Premium amenities,
          </h1>
          <p className="text-3xl text-white/90 italic" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            exceptional everyday life
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-700 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>All Amenities</p>
          <h2 className="text-4xl text-black mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Everything You Need,<br /><em>Nothing You Don't</em>
          </h2>
          <p className="text-[17px] text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            Enhance your daily lifestyle with premium amenities designed for convenience and relaxation. From landscaped outdoor spaces and secure parking to high-speed connectivity, recreational access, and modern community features — this home delivers on every level.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="px-6 sm:px-12 lg:px-20 pb-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {showcaseImages.map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden">
              <ImageWithFallback
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Amenity Groups Grid */}
      <section className="py-10 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenityGroups.map((group) => (
            <div key={group.title} className="border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <h3
                className="text-[17px] tracking-[0.2em] uppercase text-black mb-4 pb-3 border-b border-gray-100"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2.5">
                    <span className="w-1 h-1 bg-black rounded-full mt-2 shrink-0" />
                    <div>
                      <p className="text-2sm text-black" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>{item.name}</p>
                      <p className="text-[14px] text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-[13px] tracking-[0.3em] uppercase text-gray-300 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>Experience all the amenities in person.</p>
          <h2 className="text-4xl mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Schedule your private showing and discover<br />
            <em>why Ranch Retreat offers a lifestyle that simply cannot be replicated.</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/schedule-showing" className="px-8 py-3 bg-white text-black text-[13px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
              Schedule a Showing
            </Link>
            <Link to="/outdoor-living" className="px-8 py-3 border border-gray-700 text-white text-[13px] tracking-[0.15em] uppercase hover:border-white transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
              Explore Outdoor Living
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
