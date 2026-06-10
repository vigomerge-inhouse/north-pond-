import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const pageTitles: Record<string, string> = {
  "/": "Ranch Retreat · Norway, Maine — North Pond Realty Trust",
  "/modern-living": "Modern Living · Contemporary Comfort — North Pond Realty Trust",
  "/property-highlights": "Property Highlights · 3 Bed 2 Bath 2 Acres — North Pond Realty Trust",
  "/features": "Home Features · Fully Renovated Ranch — North Pond Realty Trust",
  "/bedrooms": "Bedrooms · King & Queen Suites — North Pond Realty Trust",
  "/premium-features": "Premium Features · Luxury Finishes — North Pond Realty Trust",
  "/amenities": "Amenities · Everything You Need — North Pond Realty Trust",
  "/outdoor-living": "Outdoor Living · Wrap-Around Porch — North Pond Realty Trust",
  "/location": "Location · Norway, Maine Oxford Hills — North Pond Realty Trust",
  "/details": "Full Property Details — North Pond Realty Trust",
  "/schedule-showing": "Schedule a Private Showing — North Pond Realty Trust",
};

const pageMeta: Record<string, string> = {
  "/": "Masterfully renovated ranch retreat in Norway, Maine. 3 bed, 2 bath, 2 private acres. Immediately available for long-term rental.",
  "/modern-living": "Contemporary comfort, beautifully crafted. Open-concept living, gourmet kitchen, natural light throughout.",
  "/property-highlights": "An exceptional property — every detail considered. 3 beds, 2 baths, 2-car garage, 2 private acres.",
  "/features": "Brand-new appliances, quartz countertops, spa bathrooms, and elegant finishes throughout this masterfully renovated ranch.",
  "/bedrooms": "Three beautifully designed bedrooms: king-size primary suite with spa ensuite, two queen guest rooms.",
  "/premium-features": "Luxury at every turn — gourmet kitchen, spa bathrooms, designer finishes, and smart systems.",
  "/amenities": "Premium amenities including wrap-around porch, 2-car garage, lake access, dog-friendly grounds, and more.",
  "/outdoor-living": "Two private wooded acres, wrap-around porch, spacious deck, and four seasons of Maine outdoor beauty.",
  "/location": "Norway, Maine — close to everything, private by nature. Portland 1hr, ski areas 45min, lake 2mi.",
  "/details": "Complete property specifications for Ranch Retreat — Norway, Maine long-term rental.",
  "/schedule-showing": "Schedule a private showing for Ranch Retreat in Norway, Maine. Available immediately.",
};

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || pageTitles["/"];
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      pageMeta[location.pathname] || pageMeta["/"]
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
