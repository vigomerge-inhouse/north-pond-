import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import logo1 from "../../imports/logo/logo1.png";

const navItems = [
  {
    label: "Property",
    children: [
      { label: "Overview", path: "/" },
      { label: "Modern Living", path: "/modern-living" },
      { label: "Property Highlights", path: "/property-highlights" },
    ],
  },
  {
    label: "Interior",
    children: [
      { label: "Bedrooms", path: "/bedrooms" },
      { label: "Premium Features", path: "/premium-features" },
      { label: "Amenities", path: "/amenities" },
      { label: "Features", path: "/features" },
    ],
  },
  {
    label: "Outdoors",
    children: [
      { label: "Outdoor Living", path: "/outdoor-living" },
      { label: "Location", path: "/location" },
    ],
  },
  { label: "Details", path: "/details" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-extrabold">
        <div className="flex items-center justify-between h-28 lg:h-30">
          {/* Logo */}
<Link to="/" className="flex items-center gap-3">
  <img
    src={logo1}
    alt="North Pond Realty Trust"
    className="h-22 lg:h-24 w-auto object-contain"
  />
  <div className="flex flex-col leading-tight">
    
  </div>
</Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-[13px] tracking-[0.1em] uppercase text-gray-700 hover:text-black transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-1 min-w-[180px]">
                      <div className="bg-white border border-gray-100 shadow-xl rounded-sm overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-5 py-3 text-[12px] tracking-[0.08em] uppercase transition-colors ${location.pathname === child.path
                                ? "bg-black text-white"
                                : "text-gray-700 hover:bg-gray-50 hover:text-black"
                              }`}
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path!}
                  className={`px-4 py-2 text-[13px] tracking-[0.1em] uppercase transition-colors ${location.pathname === item.path
                      ? "text-black border-b-2 border-black"
                      : "text-gray-700 hover:text-black"
                    }`}
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/schedule-showing"
              className="ml-4 px-5 py-2.5 bg-black text-white text-[12px] tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              Schedule Showing
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-[12px] tracking-[0.1em] uppercase text-gray-700"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                    onClick={() =>
                      setMobileExpanded(
                        mobileExpanded === item.label ? null : item.label
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-3 py-2 text-[11px] tracking-[0.08em] uppercase text-gray-600 hover:text-black"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.path!}
                  className="block px-3 py-2.5 text-[12px] tracking-[0.1em] uppercase text-gray-700 hover:text-black"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-2">
              <Link
                to="/schedule-showing"
                className="block w-full text-center px-5 py-3 bg-black text-white text-[12px] tracking-[0.15em] uppercase"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
              >
                Schedule Showing
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
