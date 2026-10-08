export type NewsArticle = {
  id: string;
  category: string;
  title: string;
  image: string;
  time: string;
  readTime?: string;
};

export const latestNews: NewsArticle[] = [
  {
    id: "1",
    category: "Technology",
    title: "The New Race to Build Smarter Machines",
    image: "/images/news-1.jpg",
    time: "2 hours ago",
    readTime: "4 min read",
  },
  {
    id: "2",
    category: "Science",
    title: "Inside the Technologies Reshaping Our Future",
    image: "/images/news-2.jpg",
    time: "3 hours ago",
    readTime: "6 min read",
  },
  {
    id: "3",
    category: "Policy",
    title: "What New Regulations Mean for Emerging Technology",
    image: "/images/news-3.jpg",
    time: "4 hours ago",
    readTime: "5 min read",
  },
  {
    id: "4",
    category: "World",
    title: "The Global Forces Changing the Way We Work",
    image: "/images/news-4.jpg",
    time: "5 hours ago",
    readTime: "7 min read",
  },
  {
    id: "5",
    category: "Business",
    title: "The Companies Betting on the Next Big Shift",
    image: "/images/news-5.jpg",
    time: "6 hours ago",
    readTime: "5 min read",
  },
  {
    id: "6",
    category: "Innovation",
    title: "A New Generation of Builders Is Emerging",
    image: "/images/news-6.jpg",
    time: "7 hours ago",
    readTime: "4 min read",
  },
];

export const heroArticle = {
  category: "Technology",
  title: "Autonomous Governance",
  description:
    "How intelligent systems are beginning to reshape the way decisions are made, managed, and governed.",
  image: "/images/hero.jpg",
  time: "Today",
  readTime: "8 min read",
};
