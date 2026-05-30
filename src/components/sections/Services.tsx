"use client";

import React from "react";
import { services } from "@/data/services";
import * as Icons from "lucide-react";

export default function Services() {
  const whatsappNumber = "1234567890";

  return (
    <section id="services" className="py-20 bg-[#f8fafc] relative">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-display font-extrabold text-sm uppercase tracking-wider mb-3 block">
            Our Premium Services
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            How We Pamper Your Best Friends
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            We provide comprehensive care solutions to keep your pets healthy, active, and looking their best. 
            Select any service to book or request custom advice.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => {
            // Dynamically resolve Lucide Icon
            // @ts-expect-error - index signature access
            const IconComponent = Icons[service.iconName] || Icons.PawPrint;
            
            const message = encodeURIComponent(`Hi Happy Paws! I would like to inquire/book the "${service.title}" service.`);
            const queryUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top: Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary-50 text-primary-500 p-4 rounded-2xl group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">
                        {service.title}
                      </h3>
                      <span className="inline-block mt-1 text-xs font-semibold text-secondary-600 bg-secondary-50 px-2.5 py-0.5 rounded-full">
                        {service.pricing}
                      </span>
                    </div>
                  </div>

                  {/* Descriptions */}
                  <p className="text-slate-600 text-sm sm:text-base mb-4 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Bullet features */}
                  <div className="border-t border-slate-100 pt-5 mb-8">
                    <h4 className="font-display font-bold text-slate-800 text-xs uppercase tracking-wider mb-3">
                      What's Included:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                          <Icons.Check className="w-4 h-4 text-secondary-500 shrink-0 stroke-[3]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Button */}
                <a
                  href={queryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-primary-500 text-white font-semibold py-3 px-5 rounded-2xl transition-colors duration-300 group-hover:shadow-lg shadow-slate-100"
                >
                  <Icons.MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Book or Inquire on WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
