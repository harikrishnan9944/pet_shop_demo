export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  pricing: string;
  features: string[];
  imagePath: string;
}

export const services: Service[] = [
  {
    id: "pet-food",
    title: "Premium Pet Food",
    description: "Nutritious, high-quality organic pet food customized for your pet's age, breed, and health requirements.",
    longDescription: "We stock premium organic formulas, grain-free choices, and veterinary-recommended prescription diets. Our team provides free nutrition consultations to find the absolute best match for your pet's dietary needs.",
    iconName: "Beef",
    pricing: "Starts from $15",
    features: [
      "Grain-free & organic options",
      "Prescription diets",
      "Free nutritional consulting",
      "Top-tier global brands"
    ],
    imagePath: "/images/service_food.webp"
  },
  {
    id: "pet-accessories",
    title: "Pet Accessories",
    description: "Stylish, durable, and safe accessories including leashes, collars, toys, and custom tags.",
    longDescription: "From chew-resistant chew toys to luxury leather collars and high-visibility safety harnesses, we curate accessories that keep your pets entertained, stylish, and safe during walkies and playtime.",
    iconName: "Gift",
    pricing: "Starts from $8",
    features: [
      "Ergonomic harnesses & collars",
      "Durable chew & interactive toys",
      "Personalized ID tags",
      "Travel accessories & crates"
    ],
    imagePath: "/images/service_accessories.webp"
  },
  {
    id: "pet-grooming",
    title: "Professional Grooming",
    description: "Stress-free grooming sessions including soothing baths, hair clipping, nail trims, and ear cleaning.",
    longDescription: "Our certified groomers use organic, hypoallergenic shampoos and gentle techniques to ensure a relaxing experience. We cater to all dog and cat breeds with personalized styling options.",
    iconName: "Scissors",
    pricing: "Starts from $35",
    features: [
      "Hypoallergenic warm baths",
      "Professional breed-specific styling",
      "Nail grinding & ear cleaning",
      "Deshedding treatments"
    ],
    imagePath: "/images/service_grooming.webp"
  },
  {
    id: "pet-healthcare",
    title: "Pet Healthcare Products",
    description: "Vitamins, dental care, coat supplements, and veterinary-approved flea, tick, and worming treatments.",
    longDescription: "Maintain your pet's vitality with our premium range of wellness products. We supply joint supplements, probiotic formulas, dental hygiene kits, and essential wellness treatments.",
    iconName: "HeartPulse",
    pricing: "Starts from $12",
    features: [
      "Joint & coat supplements",
      "Dental care kits & treats",
      "Flea, tick & worm prevention",
      "Anxiety & calming aids"
    ],
    imagePath: "/images/service_healthcare.webp"
  }
];
