export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  read: string;
  img: string;
  author: string;
  excerpt?: string;
}

export const articles: Article[] = [
  {
    id: "preventive-cardiology",
    title: "5 Essential Tips for Preventive Heart Health",
    category: "Health Tips",
    date: "Feb 14, 2026",
    read: "6 min read",
    img: "/images/articles/article-1-hero.jpg",
    author: "Dr. Mark Williams",
  },
  {
    id: "diabetes-management",
    title: "New Breakthrough in Diabetes Management Using AI Technology",
    category: "Research",
    date: "Jan 12, 2026",
    read: "7 min read",
    img: "/images/articles/article-2-hero.jpg",
    author: "Dr. Mark Williams",
  },
  {
    id: "immune-system",
    title: "5 Superfoods to Boost Your Immune System This Winter",
    category: "Health Tips",
    date: "Nov 08, 2025",
    read: "4 min read",
    img: "/images/articles/article-3-hero.jpg",
    author: "Dr. Emily Rodriguez",
  },
  {
    id: "pediatric-wing",
    title: "EverLeaf Opens New Pediatric Wing in West Wing",
    category: "Announcements",
    date: "Nov 01, 2025",
    read: "2 min read",
    img: "/images/articles/article-4-hero.jpg",
    author: "Dr. Emily Chen",
  },
  {
    id: "anxiety-in-teens",
    title: "Recognizing the Early Signs of Anxiety in Teenagers",
    category: "Medical Awareness",
    date: "Oct 28, 2025",
    read: "6 min read",
    img: "/images/articles/article-5-hero.jpg",
    author: "Dr. Rachel Green",
  },
  {
    id: "flu-season",
    title: "Flu Season 2025: Why the Vaccine is More Important Than Ever",
    category: "Health Tips",
    date: "Oct 15, 2025",
    read: "3 min read",
    img: "/images/articles/article-6-hero.jpg",
    author: "Dr. Bereket Kinfe",
  },
  {
    id: "senior-mobility",
    title: "Mobility in Seniors: The Link Between Walking and Cognitive Health",
    category: "Research",
    date: "Oct 10, 2025",
    read: "7 min read",
    img: "/images/articles/article-7-hero.jpg",
    author: "Dr. Sarah Johnson",
  },
];
