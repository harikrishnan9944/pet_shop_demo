export interface Review {
  id: string;
  name: string;
  role: string; // e.g., "Owner of Bella (Golden Retriever)"
  rating: number;
  comment: string;
  avatarUrl: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Sarah Jenkins",
    role: "Owner of Bella (Golden Retriever)",
    rating: 5,
    comment: "Happy Paws is a lifesaver! Bella absolutely loves their Premium Kibble, and the grooming service is top-notch. She always comes home smelling amazing and looking so fluffy. The staff is incredibly friendly and knowledgeable!",
    avatarUrl: "/images/review_sarah.webp",
    date: "May 12, 2026"
  },
  {
    id: "review-2",
    name: "Michael Chen",
    role: "Owner of Milo & Simba (Tabby Cats)",
    rating: 5,
    comment: "I order all my cat food and accessories here. Their home delivery is super fast, and the prices are very reasonable compared to big-box stores. The interactive toys keep my cats active for hours. Highly recommended local business!",
    avatarUrl: "/images/review_michael.webp",
    date: "April 28, 2026"
  },
  {
    id: "review-3",
    name: "Emily Rodriguez",
    role: "Owner of Coco (French Bulldog)",
    rating: 5,
    comment: "Coco has very sensitive skin, and the team suggested the perfect hypoallergenic shampoo and raw diet. His coat has never looked shinier or healthier! It's so clear that everyone at Happy Paws genuinely cares about the pets.",
    avatarUrl: "/images/review_emily.webp",
    date: "May 19, 2026"
  }
];
