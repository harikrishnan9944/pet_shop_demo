import React from "react";
import { ShieldCheck, Tag, HeartHandshake, Truck, Star } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      iconBg: "bg-orange-50 text-orange-500",
      title: "Quality Products",
      desc: "We handpick every item on our shelves. From 100% organic meals to chew-proof toys, safety is our primary metric.",
    },
    {
      icon: Tag,
      iconBg: "bg-teal-50 text-teal-600",
      title: "Affordable Prices",
      desc: "Premium pet care shouldn't cost a fortune. We offer competitive rates, loyalty rewards, and match local prices.",
    },
    {
      icon: HeartHandshake,
      iconBg: "bg-rose-50 text-rose-500",
      title: "Friendly Support",
      desc: "Our passionate staff are always available in-store or on WhatsApp to give nutritional or grooming tips.",
    },
    {
      icon: Truck,
      iconBg: "bg-blue-50 text-blue-500",
      title: "Fast Service",
      desc: "Need kibble urgently? We offer free, same-day home delivery within a 5-mile radius on orders above $50.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-[#f8fafc] relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-100/20 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Area (Left side) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <span className="text-primary-600 font-display font-extrabold text-sm uppercase tracking-wider mb-3 block">
              The Happy Paws Promise
            </span>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight mb-6">
              Why Local Pet Owners <br />
              <span className="text-secondary-600">Choose Happy Paws</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed">
              We understand that your pets are family. That's why we have established strict standards for quality control, 
              expert advice, and seamless customer service. Discover what makes us different from the rest.
            </p>

            {/* Quick Stat Counter card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:scale-[1.02] transition-transform max-w-sm mx-auto lg:mx-0">
              <div className="bg-amber-100 text-amber-500 p-3 rounded-full">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-extrabold text-slate-900">4.9 / 5.0</p>
                <p className="text-slate-500 text-xs font-semibold">Average customer rating from 1,200+ local pet owners.</p>
              </div>
            </div>
          </div>

          {/* Grid Area (Right side) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`inline-block p-3.5 rounded-2xl ${item.iconBg} mb-5 group-hover:scale-110 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
