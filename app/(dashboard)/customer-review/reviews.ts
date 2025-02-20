export interface ReviewProps {
  clientName: string;
  profession: string;
  reviewText: string;
}

export const reviews: ReviewProps[] = [
  {
    clientName: "John Doe",
    profession: "Software Engineer",
    reviewText: "Great service and support. Highly recommend!",
  },
  {
    clientName: "Jane Smith",
    profession: "Graphic Designer",
    reviewText: "Amazing experience, very professional and creative.",
  },
  {
    clientName: "Michael Johnson",
    profession: "Project Manager",
    reviewText:
      "Efficient and reliable. Delivered on time and exceeded expectations.",
  },
  {
    clientName: "Emily Davis",
    profession: "Content Writer",
    reviewText: "Excellent quality of work and very responsive.",
  },
  {
    clientName: "David Brown",
    profession: "Marketing Specialist",
    reviewText: "Outstanding service, very knowledgeable and helpful.",
  },
];

