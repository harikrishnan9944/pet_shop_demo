"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products";
import { Star, MessageCircle, ArrowUpRight } from "lucide-react";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const whatsappNumber = "1234567890";

  // Categories extraction
  const categories = ["All", "Dog Food", "Cat Food", "Pet Toys", "Pet Beds", "Pet Grooming Kits"];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <span className="text-primary-600 font-display font-extrabold text-sm uppercase tracking-wider mb-3 block">
              Featured Catalog
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-4 tracking-tight">
              Best-Selling Pet Favorites
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Explore our collection of top-rated supplies, food formulas, and luxury comforts, tried and loved by local pet parents.
            </p>
          </div>
          
          {/* Decorative Paw details */}
          <div className="hidden md:block bg-secondary-50 text-secondary-600 px-4 py-2 rounded-2xl border border-secondary-100 font-bold text-xs uppercase tracking-wide">
            🚚 Free Local Shipping over $50
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full font-display font-bold text-sm transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-primary-500 text-white shadow-md shadow-primary-200"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const waText = encodeURIComponent(`Hi Happy Paws! I would like to order the "${product.name}" (${product.category}) priced at $${product.price}. Please let me know the delivery process.`);
            const purchaseUrl = `https://wa.me/${whatsappNumber}?text=${waText}`;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Product Image Panel */}
                <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
                  <Image
                    src={product.imagePath}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-primary-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  )}
                  
                  {/* Quick-category badge */}
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-md shadow-xs">
                    {product.category}
                  </span>
                </div>

                {/* Product Information */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Rating & Review counts */}
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 fill-current ${
                              i < Math.floor(product.rating) ? "text-amber-400" : "text-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-slate-700 text-xs font-bold">{product.rating}</span>
                      <span className="text-slate-400 text-xs">({product.reviewsCount} reviews)</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2 leading-snug group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Bullet features */}
                    <ul className="space-y-1.5 mb-6">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-[11px] sm:text-xs text-slate-600 flex items-start gap-1.5 leading-tight">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-500 mt-1.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Button Row */}
                  <div className="border-t border-slate-50 pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-slate-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-slate-400 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <a
                      href={purchaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 active:scale-95 shadow-md shadow-slate-100 hover:shadow-green-100"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Order on WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
