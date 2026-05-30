import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Address",
      text: "123 Pet Care Lane, Sunnyvale, CA 94087",
      actionLabel: "Get Directions",
      actionUrl: "https://maps.google.com/?q=Sunnyvale+Dog+Park",
    },
    {
      icon: Phone,
      title: "Phone Number",
      text: "+1 (234) 567-890",
      actionLabel: "Call Store",
      actionUrl: "tel:+1234567890",
    },
    {
      icon: Mail,
      title: "Email Address",
      text: "hello@happypawspetshop.com",
      actionLabel: "Send Email",
      actionUrl: "mailto:hello@happypawspetshop.com",
    },
  ];

  const openingHours = [
    { days: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { days: "Sunday", hours: "10:00 AM - 4:00 PM" },
  ];

  return (
    <section id="contact" className="py-20 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-display font-extrabold text-sm uppercase tracking-wider mb-3 block">
            Get In Touch
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            We'd Love To Hear From You
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Stop by our store, call us, or send us a message. We're here to help you find exactly what your pet needs.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Side (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Contact Details List */}
            <div className="space-y-6">
              {contactDetails.map((detail, idx) => {
                const IconComp = detail.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs flex gap-4 items-start hover:shadow-md transition-shadow"
                  >
                    <div className="bg-primary-50 text-primary-500 p-3 rounded-xl shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base mb-1">
                        {detail.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm mb-2.5">
                        {detail.text}
                      </p>
                      <a
                        href={detail.actionUrl}
                        target={detail.actionUrl.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-secondary-600 hover:text-secondary-700 hover:underline transition-all flex items-center gap-1"
                      >
                        {detail.actionLabel} &rarr;
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-xs">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="bg-secondary-50 text-secondary-600 p-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-base">Opening Hours</h4>
              </div>
              
              <div className="space-y-3">
                {openingHours.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-slate-500 font-medium">{row.days}</span>
                    <span className="text-slate-800 font-extrabold">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Google Map Side (Right) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full flex-1 min-h-[350px] lg:min-h-[420px] rounded-[32px] overflow-hidden border border-slate-100 shadow-md relative">
              <iframe
                title="Happy Paws Pet Shop Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325335515286!2d-122.02638848469499!3d37.38202597983226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb63d5c6439b1%3A0xcb0653d9e03d4a0b!2sSunnyvale%20Dog%20Park!5e0!3m2!1sen!2sus!4v1685458000000!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
