import { useState } from "react";
import { Link } from "react-router";
import { Check, Phone, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import emailjs from "@emailjs/browser";
import img1 from "../../../imports/schedule/img1.jpg";
import img2 from "../../../imports/schedule/img2.jpg";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  household: string;
  message: string;
  hasPets: boolean;
};

const timeOptions = [
  "9:00 AM – 10:00 AM",
  "10:00 AM – 11:00 AM",
  "11:00 AM – 12:00 PM",
  "12:00 PM – 1:00 PM",
  "1:00 PM – 2:00 PM",
  "2:00 PM – 3:00 PM",
  "3:00 PM – 4:00 PM",
  "4:00 PM – 5:00 PM",
  "5:00 PM – 6:00 PM",
];

export function ScheduleShowing() {
const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    household: "1",
    message: "",
    hasPets: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_ujoaycd",
        "template_s7j9g18",
        {
          name: `${form.firstName} ${form.lastName}`,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          date: form.preferredDate,
          time: form.preferredTime,
          household: form.household,
          message: form.message,
          hasPets: form.hasPets ? "Yes" : "No",
        },
        "Vu5r565yJJY1yQGTw"
      );
      setSubmitted(true);
    } catch (error: any) {
      console.error("EmailJS Error:", JSON.stringify(error));
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-white" />
          </div>
          <h2 className="text-4xl text-black mb-4" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Request Sent
          </h2>
          <p className="text-gray-600 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Thank you, {form.firstName}. Your showing request for Ranch Retreat has been received. We'll reach out to confirm your appointment within 24 hours.
          </p>
          <p className="text-gray-400 text-sm mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            If you have any immediate questions, reach us at{" "}
            <a href="mailto:contact@northpondrealty.com" className="text-black underline">contact@northpondrealty.com</a>
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-black text-white text-[13px] tracking-[0.15em] uppercase hover:bg-gray-900 transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            Return to Property
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[90svh] min-h-[450px]">
        <ImageWithFallback
          src={img1}
          alt="Schedule a Showing — Ranch Retreat"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col items-start justify-end pb-14 px-6 sm:px-12 lg:px-20">
          <nav className="flex items-center gap-2 text-white text-[13px] tracking-wider uppercase mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Schedule Showing</span>
          </nav>
          {/* CHANGE 1: text-[11px] → text-[13px] */}
          <p className="text-[15px] tracking-[0.3em] uppercase text-white/100 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Schedule Showing</p>
          <h1 className="text-4xl sm:text-5xl text-white leading-none" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
            Schedule a Private Showing
          </h1>
        </div>
      </section>

      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="aspect-[4/3] overflow-hidden mb-6">
                <ImageWithFallback
                  src={img2}
                  alt="Ranch Retreat — private wooded acres"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="border border-gray-100 p-6 mb-6">
                {/* CHANGE 1: text-[10px] → text-[13px] */}
                <p className="text-[13px] tracking-[0.3em] uppercase text-gray-600 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>Ranch Retreat</p>
                <h3 className="text-2xl text-black mb-3" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>Norway, Maine</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { v: "3", l: "Bedrooms" },
                    { v: "2", l: "Bathrooms" },
                    { v: "2", l: "Car Garage" },
                    { v: "2", l: "Acres" },
                    // CHANGE 4: added hardwood floors + skylights
                    { v: "✓", l: "Hardwood Floors" },
                    { v: "✓", l: "Skylights" },
                  ].map((s) => (
                    <div key={s.l} className="text-center p-3 bg-gray-50">
                      <p className="text-xl text-black" style={{ fontFamily: "Playfair Display, serif" }}>{s.v}</p>
                      {/* CHANGE 1: text-[10px] → text-[13px] */}
                      <p className="text-[13px] tracking-[0.15em] uppercase text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>{s.l}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {/* CHANGE 1: text-[11px] → text-[13px] */}
                  <span className="text-[13px] tracking-[0.1em] uppercase text-green-600" style={{ fontFamily: "Inter, sans-serif" }}>Available Now · Move-In Ready</span>
                </div>
              </div>
              <div className="space-y-3">
                <a href="tel:12022583575" className="flex items-center gap-3 text-3sm text-gray-700 hover:text-black transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Phone size={14} className="text-gray-400" />
                  +1 12022583575
                </a>
                <a href="mailto:Info@NorthPondRealtyTrust.com" className="flex items-center gap-3 text-3sm text-gray-700 hover:text-black transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Mail size={14} className="text-gray-400" />
                  Info@NorthPondRealtyTrust.com
                </a>
                <div className="flex items-start gap-3 text-3sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                  <MapPin size={14} className="text-gray-400 mt-0.5 shrink-0" />
                  Crockett Ridge Road · Norway, Maine 04268
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              {/* CHANGE 1: text-[10px] → text-[13px] */}
              <p className="text-[13px] tracking-[0.3em] uppercase text-gray-700 mb-2" style={{ fontFamily: "Inter, sans-serif" }}>North Pond Realty Trust</p>
              <h2 className="text-3xl text-black" style={{ fontFamily: "Playfair Display, serif", fontWeight: 500 }}>
                Schedule a Private Showing
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  {/* CHANGE 1: text-[11px] → text-[13px] */}
                  <label className="block text-[13px] tracking-[0.15em] uppercase text-gray-700 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    First Name
                  </label>
                  {/* CHANGE 2: text-sm → text-base */}
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-base text-black placeholder-gray-300 focus:outline-none focus:border-black transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] tracking-[0.15em] uppercase text-gray-700 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-base text-black placeholder-gray-300 focus:outline-none focus:border-black transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] tracking-[0.15em] uppercase text-gray-700 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@email.com"
                    required
                    className="w-full border border-gray-200 px-4 py-3 text-base text-black placeholder-gray-300 focus:outline-none focus:border-black transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] tracking-[0.15em] uppercase text-gray-700 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full border border-gray-200 px-4 py-3 text-base text-black placeholder-gray-300 focus:outline-none focus:border-black transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[13px] tracking-[0.15em] uppercase text-gray-700 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-base text-black focus:outline-none focus:border-black transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div>
                  <label className="block text-[13px] tracking-[0.15em] uppercase text-gray-700 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className="w-full border border-gray-200 px-4 py-3 text-base text-black focus:outline-none focus:border-black transition-colors bg-white appearance-none"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <option value="">Select...</option>
                    {timeOptions.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Household */}
              <div>
                <label className="block text-[13px] tracking-[0.15em] uppercase text-gray-700 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  How many people in your household?
                </label>
                <input
                  type="number"
                  name="household"
                  value={form.household}
                  onChange={handleChange}
                  min="1"
                  max="20"
                  className="w-full sm:w-32 border border-gray-200 px-4 py-3 text-base text-black focus:outline-none focus:border-black transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[13px] tracking-[0.15em] uppercase text-gray-700 mb-1.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  Message / Questions (optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about yourself and any questions you have…"
                  rows={5}
                  className="w-full border border-gray-200 px-4 py-3 text-base text-black placeholder-gray-300 focus:outline-none focus:border-black transition-colors resize-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>

              {/* Pets checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input
                      type="checkbox"
                      name="hasPets"
                      checked={form.hasPets}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${
                        form.hasPets ? "bg-black border-black" : "border-gray-300 group-hover:border-gray-500"
                      }`}
                    >
                      {form.hasPets && <Check size={11} className="text-white" />}
                    </div>
                  </div>
                  <span className="text-base text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                    I have pets (dog-friendly property — perimeter fence planned)
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 bg-black text-white text-[14px] tracking-[0.2em] uppercase hover:bg-gray-900 transition-colors"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  Send Request
                </button>
                {/* CHANGE 1: text-[11px] → text-[13px] */}
                <p className="text-[14px] text-gray-600 mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
                  We'll confirm your showing within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom reassurance strip */}
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: "🏡", title: "Move-In Ready", sub: "No projects. No waiting. Just home." },
            { icon: "🐕", title: "Dog Friendly", sub: "Perimeter fence planned. 2 acres to roam." },
            { icon: "✉️", title: "Quick Response", sub: "Confirmation within 24 hours." },
          ].map((item) => (
            <div key={item.title}>
              <p className="text-3xl mb-2">{item.icon}</p>
              {/* CHANGE 1: text-[12px] → text-[14px] */}
              <p className="text-[14px] tracking-[0.15em] uppercase text-white mb-1" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>{item.title}</p>
              <p className="text-[13px] text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}