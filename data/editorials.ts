export type Editorial = {
  id: string;
  category: string;
  title: string;
  author: string;
  time: string;
};

export const editorials: Editorial[] = [
  {
    id: "1",
    category: "Opinion",
    title: "The Case for Building Technology We Can Actually Trust",
    author: "Maya Chen",
    time: "Today",
  },
  {
    id: "2",
    category: "Column",
    title: "Why the Next Decade Will Belong to Systems Thinkers",
    author: "Daniel Brooks",
    time: "Yesterday",
  },
  {
    id: "3",
    category: "Ideas",
    title: "What We Get Wrong About Progress",
    author: "Elena Morris",
    time: "Yesterday",
  },
  {
    id: "4",
    category: "Perspective",
    title: "The Human Side of an Increasingly Automated World",
    author: "Arjun Mehta",
    time: "2 days ago",
  },
];
