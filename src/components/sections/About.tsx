import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, HeartHandshake } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Loving & Passionate Staff",
      desc: "Our team is comprised of certified pet lovers, groomers, and dietary experts.",
    },
    {
      title: "Premium Select Supplies",
      desc: "Every food brand and toy we sell undergoes rigorous safety and quality checks.",
    },
    {
      title: "Community Focused",
      desc: "We support local shelters and organize pet adoption drives twice a year.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* About Image Area (Left) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[380px] lg:max-w-full aspect-[4/5] rounded-[32px] overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/about_shop.webp"
                alt="Friendly pet shop owner carrying a happy dog"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
            
            {/* Overlay card */}
            <div className="absolute -bottom-8 right-4 lg:-right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary-100 p-2.5 rounded-xl text-secondary-600">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-slate-800 text-sm">Award-Winning Store</h4>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Voted best local pet supplies and grooming boutique for 3 consecutive years.
              </p>
            </div>
          </div>

          {/* About Content Area (Right) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section label */}
            <span className="text-primary-600 font-display font-extrabold text-sm uppercase tracking-wider mb-3 block">
              About Happy Paws
            </span>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight mb-6">
              Your Trusted Neighborhood <br />
              <span className="text-secondary-600">Pet Care Partner</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              Founded in 2021, Happy Paws Pet Shop started with a simple mission: to provide the highest-quality, 
              healthiest products for your furry, feathered, and scaled family members. We believe that happy, 
              healthy pets bring unparalleled joy to our lives, which is why we curate only the best.
            </p>

            <p className="text-slate-500 text-sm sm:text-base mb-8 leading-relaxed">
              We aren't just a retail store; we are a community hub for pet parents. From expert grooming care that 
              prioritizes your pet's comfort, to organic diet plans curated by our experienced staff, we support 
              you through every stage of your pet parenting journey.
            </p>

            {/* Highlights Grid */}
            <div className="space-y-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="mt-1 text-primary-500 bg-primary-50 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 fill-current text-primary-500" style={{ color: 'white', fill: 'rgb(249 115 22)' }} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote / Promise Banner */}
            <div className="bg-secondary-50/50 border-l-4 border-secondary-500 p-4 rounded-r-xl flex items-center gap-3">
              <HeartHandshake className="w-8 h-8 text-secondary-600 shrink-0" />
              <p className="text-slate-700 italic text-xs sm:text-sm font-medium">
                "We promise to treat every pet who walks through our doors with the same love, respect, and care that we give our own."
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
