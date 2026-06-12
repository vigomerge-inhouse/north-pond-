import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo2 from "../../imports/logo/logo2.png";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
  <img
    src={logo2}
    alt="North Pond Realty Trust"
    className="h-28 lg:h-28 w-auto object-contain"
  />
  <div className="flex flex-col leading-tight">
    
  </div>
</div>
            <p
              className="text-gray-200 text-2sm leading-relaxed max-w-xs"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Presenting Maine Retreat — a masterfully renovated single-story
              home on a private 2-acre parcel in the scenic Oxford Hills of
              Norway, Maine. Immediately available for long-term rental.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 text-[14px] tracking-[0.1em] uppercase text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available Now · Move-In Ready
              </span>
            </div>
          </div>

          {/* Property Pages */}
          <div>
            <p
              className="text-[14px] tracking-[0.25em] uppercase text-white mb-4 font-semibold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Property Pages
            </p>
            <ul className="space-y-2">
              {[
                { label: "Overview", path: "/" },
                { label: "Features", path: "/features" },
                { label: "Outdoor Living", path: "/outdoor-living" },
                { label: "Location", path: "/location" },
                { label: "Details", path: "/details" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[14px] tracking-wide text-white hover:text-yellow-400 transition-colors font-semibold"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/schedule-showing"
                  className="text-[16px] tracking-wide text-white hover:text-yellow-400 transition-colors font-semibold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Schedule Showing →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              className="text-[14px] tracking-[0.25em] uppercase text-white mb-4 font-semibold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gray-500 mt-0.5 shrink-0" />
                <span
                  className="text-[14px] text-gray-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Crockett Ridge Road
                  <br />
                  Norway, Maine 04268
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-gray-500 shrink-0" />
                <a
                  href="mailto:contact@northpondrealty.com"
                  className="text-[16px] text-gray-200 hover:text-yellow-400 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Info@NorthPondRealtyTrust.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-gray-500 shrink-0" />
                <a
                  href="tel:12022583575"
                  className="text-[16px] text-gray-200 hover:text-yellow-400 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  +1 (202) 258-3575
                </a>
              </li>
            </ul>
            {/*<div className="mt-5">
              <Link
                to="/schedule-showing"
                className="inline-block px-5 py-2.5 bg-white text-black text-[12.6px] tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
              >
                Schedule Private Showing
              </Link>
            </div>*/}
          </div>
        </div>

       <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
  <p
    className="text-[13px] text-yellow-400 font-medium"
    style={{ fontFamily: "Inter, sans-serif" }}
  >
    © 2026 North Pond Realty Trust · {" "}
    <a
      href="https://www.vigomerge.com/"
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:text-white transition-colors"
    >
      Developed By Vigomerge Inc
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}
