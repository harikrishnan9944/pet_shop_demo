export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  imagePath: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "premium-dog-kibble",
    name: "Active Puppy Premium Kibble",
    category: "Dog Food",
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviewsCount: 124,
    badge: "Best Seller",
    imagePath: "/images/dog_food.webp",
    description: "High-protein, grain-free kibble formulated with real salmon and sweet potato for growing puppies.",
    features: ["Real salmon is #1 ingredient", "Rich in DHA for brain development", "No artificial colors or preservatives"]
  },
  {
    id: "organic-cat-feast",
    name: "Salmon & Tuna Organic Feast",
    category: "Cat Food",
    price: 34.99,
    rating: 4.8,
    reviewsCount: 88,
    badge: "New Choice",
    imagePath: "/images/cat_food.webp",
    description: "Gently steam-cooked wet cat food pack loaded with omega-3 fatty acids for a glossy, healthy coat.",
    features: ["100% organic ingredients", "Added taurine for eye & heart health", "High moisture content for hydration"]
  },
  {
    id: "interactive-chew-set",
    name: "Ultra-Durable Interactive Toy Set",
    category: "Pet Toys",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviewsCount: 156,
    badge: "Popular",
    imagePath: "/images/pet_toys.webp",
    description: "A pack of 3 natural non-toxic rubber chew toys designed to clean teeth and ease anxiety.",
    features: ["Made from 100% natural rubber", "Menthol infused for fresh breath", "Nearly indestructible design"]
  },
  {
    id: "orthopedic-memory-bed",
    name: "Luxury Orthopedic Memory Foam Bed",
    category: "Pet Beds",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Top Rated",
    imagePath: "/images/pet_bed.webp",
    description: "Therapeutic memory foam pet bed with a removable, water-resistant, machine-washable plush cover.",
    features: ["Joint-relieving medical grade foam", "Non-skid bottom safety design", "Hypoallergenic plush material"]
  },
  {
    id: "pro-grooming-kit",
    name: "Professional Home Grooming Kit",
    category: "Pet Grooming Kits",
    price: 44.99,
    rating: 4.8,
    reviewsCount: 72,
    imagePath: "/images/grooming_kit.webp",
    description: "All-in-one grooming set featuring low-noise rechargeable clippers, steel combs, scissors, and nail file.",
    features: ["Ultra-quiet motor (< 50dB)", "4 guide combs for all hair lengths", "Cordless, USB rechargeable battery"]
  }
];
