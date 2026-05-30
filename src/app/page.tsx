import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <FeaturedProducts />
        <WhyChooseUs />
        <Reviews />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating Action Button */}
      <WhatsAppButton />
    </>
  );
}
