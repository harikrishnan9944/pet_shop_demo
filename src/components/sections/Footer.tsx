"use client";

import { PawPrint, MapPin, Phone, Mail, ChevronRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Featured Products", href: "#products" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact Us", href: "#contact" },
  ];

  const socialLinks = [
    {
      customIcon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
      href: "https://facebook.com",
      label: "Facebook"
    },
    {
      customIcon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
      href: "https://instagram.com",
      label: "Instagram"
    },
    {
      customIcon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://twitter.com",
      label: "Twitter"
    },
    {
      customIcon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: "https://youtube.com",
      label: "YouTube"
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="bg-primary-500 p-2 rounded-full text-white shadow-md transition-transform group-hover:rotate-12 duration-300">
                <PawPrint className="w-5 h-5 fill-current" />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-tight">
                Happy<span className="text-primary-400">Paws</span>
              </span>
            </a>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2">
              Everything your pet needs to thrive. We supply organic foods, premium gear, 
              and professional low-stress grooming. Voted Sunnyvale's favorite local pet boutique.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-display font-bold text-white text-sm sm:text-base tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2 mt-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 text-xs sm:text-sm transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:translate-x-0.5 group-hover:text-primary-400 transition-all shrink-0" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-display font-bold text-white text-sm sm:text-base tracking-wider uppercase">
              Contact Info
            </h4>
            
            <ul className="space-y-3 mt-2 text-xs sm:text-sm text-slate-400">
              <li className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>123 Pet Care Lane, Sunnyvale, CA 94087</span>
              </li>
              <li className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <a href="mailto:hello@happypawspetshop.com" className="hover:text-white transition-colors">
                  hello@happypawspetshop.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-display font-bold text-white text-sm sm:text-base tracking-wider uppercase">
              Newsletter
            </h4>
            <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed">
              Subscribe to get grooming discounts and nutrition tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2 mt-1">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 active:scale-[0.98] text-white font-bold text-xs py-2 rounded-lg transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Copyright notice */}
          <p className="text-slate-500 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Happy Paws Pet Shop. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 hover:bg-primary-500 hover:text-white p-2.5 rounded-full text-slate-400 transition-colors shadow-xs"
                aria-label={social.label}
              >
                {social.customIcon}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}
