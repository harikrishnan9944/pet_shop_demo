import React from "react";
import Image from "next/image";
import { ArrowRight, MessageSquare, ShieldCheck, Heart, Award } from "lucide-react";

export default function Hero() {
  const whatsappNumber = "1234567890";
  const whatsappMessage = encodeURIComponent("Hi! I would like to chat about services/products for my pet.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-br from-primary-50/70 via-white to-secondary-50/50"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl -z-10" />
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[60px] text-[#fcfbfa] fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,120 600,100 C850,80 1050,110 1200,90 L1200,120 L0,120 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (Left side) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-20">
            {/* Playful top badge */}
            <div className="inline-flex items-center gap-2 self-center lg:self-start bg-primary-100/80 border border-primary-200 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-xs">
              <Heart className="w-4 h-4 fill-current text-primary-500 animate-pulse" />
              <span>Your Pet's Happy Place</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight mb-6">
              Happy Paws <span className="text-primary-500 relative inline-block">
                Pet Shop
                <svg className="absolute left-0 bottom-0.5 w-full h-2.5 text-primary-200 -z-10 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" />
                </svg>
              </span>
            </h1>

            <p className="font-display font-semibold text-xl sm:text-2xl text-slate-700 mb-4">
              Everything Your Pets Need in One Place
            </p>
            
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Discover premium organic foods, stylish accessories, stress-free grooming services, 
              and veterinary-approved healthcare products. We treat your furry friends like family!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary-300 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA56] active:bg-[#1E9F4A] text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-green-100 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="text-secondary-600 flex items-center gap-1.5 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>100% Safe</span>
                </div>
                <span className="text-slate-500 text-xs text-center lg:text-left">Premium Quality</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="text-secondary-600 flex items-center gap-1.5 font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>Rated 4.9/5</span>
                </div>
                <span className="text-slate-500 text-xs text-center lg:text-left">By Local Owners</span>
              </div>
              
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="text-secondary-600 flex items-center gap-1.5 font-bold text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Certified</span>
                </div>
                <span className="text-slate-500 text-xs text-center lg:text-left">Expert Groomers</span>
              </div>
            </div>
          </div>

          {/* Hero Image (Right side) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background shape */}
            <div className="absolute w-[80%] h-[80%] bg-primary-100 rounded-[40px] rotate-6 -z-10" />
            <div className="absolute w-[85%] h-[85%] bg-secondary-100 rounded-[50px] -rotate-3 -z-20" />
            
            {/* Main Hero Photo Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white transition-transform hover:scale-[1.02] duration-300">
              <Image
                src="/images/hero_pets.webp"
                alt="Happy dog and cat together in a clean modern pet shop"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
            
            {/* Float Card 1: Grooming Info */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[180px] hover:scale-105 transition-transform">
              <div className="bg-primary-100 p-2.5 rounded-xl text-primary-600">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-xs">Pet Care</p>
                <p className="text-slate-500 text-[10px]">100% Loving Care</p>
              </div>
            </div>

            {/* Float Card 2: Satisfied Clients */}
            <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-1 max-w-[140px] hover:scale-105 transition-transform">
              <p className="text-slate-900 font-extrabold text-sm">2,500+</p>
              <p className="text-slate-500 text-[10px] font-semibold">Happy Furry Clients</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
