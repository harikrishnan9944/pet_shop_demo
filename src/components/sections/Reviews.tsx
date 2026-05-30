import React from "react";
import Image from "next/image";
import { reviews } from "@/data/reviews";
import { Quote, Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-display font-extrabold text-sm uppercase tracking-wider mb-3 block">
            Client Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
            Loved By Pets & Parents
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Read stories from local pet owners who have trusted Happy Paws with their pet's health, diet, and grooming needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#fdfbf7] p-8 rounded-[32px] border border-slate-100 shadow-xs flex flex-col justify-between hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative group"
            >
              {/* Quote Icon Overlay */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-100 group-hover:text-primary-200 transition-colors" />

              <div>
                {/* Review Stars */}
                <div className="flex text-amber-400 gap-0.5 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src={review.avatarUrl}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm sm:text-base leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-slate-400 text-[10px] sm:text-xs mt-0.5 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
