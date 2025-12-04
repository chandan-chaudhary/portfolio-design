export interface ReviewProps {
  clientName: string;
  profession: string;
  reviewText: string;
}

export const reviews: ReviewProps[] = [
  {
    clientName: "Yasahwee",
    profession: "Trader & Developer",
    reviewText:
      "Chandan delivered a polished, production-ready frontend and helped integrate smart-contract flows cleanly — communication was excellent.",
  },
  {
    clientName: "Pratik",
    profession: "Full-Stack Developer",
    reviewText:
      "Highly professional and pragmatic. Rebuilt critical flows and improved performance across our stack.",
  },
  {
    clientName: "Harshit",
    profession: "Product Lead",
    reviewText:
      "Great to work with — shipped features fast, provided useful suggestions for UX improvements and backend reliability.",
  },
  {
    clientName: "Himnashu",
    profession: "Operations Manager",
    reviewText:
      "Delivered a robust solution with clear documentation. Our team appreciated the attention to detail and quick turnaround.",
  },
];
