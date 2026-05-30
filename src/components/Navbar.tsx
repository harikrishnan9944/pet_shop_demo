"use client";

import React, { useState, useEffect } from "react";
import { PawPrint, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="bg-primary-500 p-2 rounded-full text-white shadow-md shadow-primary-300 transition-transform group-hover:rotate-12 duration-300">
              <PawPrint className="w-6 h-6 fill-current" />
            </div>
            <span className="font-display font-extrabold text-2xl text-slate-800 tracking-tight group-hover:text-primary-600 transition-colors">
              Happy<span className="text-primary-500">Paws</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-600 hover:text-primary-500 transition-colors text-sm relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-5 py-2.5 rounded-full shadow-md shadow-secondary-100 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white shadow-2xl p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-primary-500 p-2 rounded-full text-white">
              <PawPrint className="w-5 h-5 fill-current" />
            </div>
            <span className="font-display font-extrabold text-xl text-slate-800">
              Happy<span className="text-primary-500">Paws</span>
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700 hover:text-primary-500 transition-colors text-base py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-4 py-3 rounded-xl mt-4 shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call +1 (234) 567-890</span>
          </a>
        </div>
      </div>

      {/* Dark overlay when mobile menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 z-30 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        />
      )}
    </nav>
  );
}
