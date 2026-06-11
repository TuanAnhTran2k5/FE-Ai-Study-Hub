import {
  BarChart3,
  BookOpenText,
  Cloud,
  GraduationCap,
  Search,
  Share2,
  Sparkles,
  Upload,
} from "lucide-react";

export const features = [
  {
    title: "AI Chatbot Assistant",
    description:
      "Interactive AI that answers questions based specifically on your uploaded lecture notes, textbooks, and research papers.",
    icon: Sparkles,
    className: "lg:col-span-2 min-h-[270px]",
    body: true,
  },
  {
    title: "Cloud Storage",
    description:
      "Access your study materials from any device, anywhere, anytime with secure encrypted storage.",
    icon: Cloud,
    className: "min-h-[270px]",
  },
  {
    title: "Smart Search",
    description:
      "Deep search within documents to find exact concepts, formulas, or keywords in seconds.",
    icon: Search,
    className: "min-h-[185px]",
  },
  {
    title: "Document Sharing",
    description:
      "Collaborate with peers by sharing folders and document sets with controlled access.",
    icon: Share2,
    className: "min-h-[185px]",
  },
  {
    title: "Learning Analytics",
    description:
      "Track your study progress and see which topics you need to focus on more.",
    icon: BarChart3,
    className: "min-h-[185px]",
  },
];

export const steps = [
  {
    title: "Upload",
    description: "Upload PDFs, docs, or images of your notes.",
    icon: Upload,
  },
  {
    title: "Organize",
    description: "Sort documents into smart subject folders.",
    icon: BookOpenText,
  },
  {
    title: "Ask AI",
    description: "Query the AI about any concept in your files.",
    icon: Sparkles,
  },
  {
    title: "Learn Faster",
    description: "Absorb complex topics with AI-generated summaries.",
    icon: GraduationCap,
  },
];

export const topRatedDocuments = [
  {
    title: "Advanced Algorithms",
    subjectName: "CSD201",
    description: "A focused revision set covering greedy methods, graphs, and dynamic programming.",
    uploader: "Tran Nam",
    semester: 3,
  },
  {
    title: "History of Art",
    subjectName: "SSL101c",
    description: "A concise learning pack for presentation, reading, and academic communication skills.",
    uploader: "Le Anh",
    semester: 1,
  },
  {
    title: "Cloud Computing Basics",
    subjectName: "NWC204",
    description: "Core cloud concepts, deployment models, and networking foundations for modern systems.",
    uploader: "Vu Hieu",
    semester: 2,
  },
];

export const studySubjects = [
  { code: "CSI106", name: "Introduction to Computer Science", semester: 1 },
  { code: "SSL101c", name: "Academic Skills for University Success", semester: 1 },
  { code: "PRF192", name: "Programming Fundamentals", semester: 1 },
  { code: "MAE101", name: "Mathematics for Engineering", semester: 1 },
  { code: "CEA201", name: "Computer Organization and Architecture", semester: 1 },
  { code: "PRO192", name: "Object-Oriented Programming", semester: 2 },
  { code: "MAD101", name: "Discrete Mathematics", semester: 2 },
  { code: "OSG202", name: "Operating Systems", semester: 2 },
  { code: "WED201c", name: "Web Design", semester: 2 },
  { code: "NWC204", name: "Computer Networking", semester: 2 },
  { code: "JPD113", name: "Elementary Japanese 1 - A1.1", semester: 3 },
  { code: "CSD201", name: "Data Structures and Algorithms", semester: 3 },
  { code: "DBI202", name: "Database Systems", semester: 3 },
  { code: "MAS291", name: "Statistics & Probability", semester: 3 },
  { code: "LAB211", name: "OOP with Java Lab", semester: 3 },
  { code: "JPD123", name: "Elementary Japanese 1 - A1.2", semester: 4 },
  { code: "IOT102", name: "Internet of Things", semester: 4 },
  { code: "PRJ301", name: "Java Web Application Development", semester: 4 },
  { code: "SSG104", name: "Communication and In-Group Working Skills", semester: 4 },
  { code: "SWE202c", name: "Introduction to Software Engineering", semester: 4 },
];

export const popularSubjects = ["SWP391", "SWP362", "DBI202", "OOP", "AI", "Networking"];

export const studyDocuments = [
  {
    title: "Introduction to Computer Science Handbook",
    subjectCode: "CSI106",
    subjectName: "Introduction to Computer Science",
    description: "Foundations of computing, algorithms, and problem solving for first-year students.",
    uploader: "Nguyen An",
    semester: 1,
  },
  {
    title: "Programming Fundamentals Practice Pack",
    subjectCode: "PRF192",
    subjectName: "Programming Fundamentals",
    description: "Core exercises covering syntax, control flow, functions, and debugging basics.",
    uploader: "Tran Minh",
    semester: 1,
  },
  {
    title: "Computer Organization Study Notes",
    subjectCode: "CEA201",
    subjectName: "Computer Organization and Architecture",
    description: "A compact revision set for CPU structure, memory systems, and low-level concepts.",
    uploader: "Le Hoang",
    semester: 1,
  },
  {
    title: "Object-Oriented Programming Project Guide",
    subjectCode: "PRO192",
    subjectName: "Object-Oriented Programming",
    description: "Design patterns, class relationships, and Java project structure explained clearly.",
    uploader: "Pham Linh",
    semester: 2,
  },
  {
    title: "Database Systems Revision Sheet",
    subjectCode: "DBI202",
    subjectName: "Database Systems",
    description: "ER modeling, SQL queries, normalization rules, and query optimization notes.",
    uploader: "Do Khoa",
    semester: 3,
  },
  {
    title: "Java Web Application Development Roadmap",
    subjectCode: "PRJ301",
    subjectName: "Java Web Application Development",
    description: "Build, connect, and deploy modern Java web applications with practical steps.",
    uploader: "Vu Anh",
    semester: 4,
  },
];

export const topContributors = [
  { name: "Nguyen Van A", role: "Elite Scholar", score: "2,450" },
  { name: "Tran Van B", role: "Gold Mentor", score: "1,980" },
  { name: "Le Van C", role: "Silver Contributor", score: "1,560" },
];

export const weeklyLeaderboard = [
  ["4", "Pham Van D", "1,250"],
  ["5", "Hoang Van E", "980"],
  ["6", "Nguyen Van F", "870"],
  ["7", "Tran Van G", "760"],
];
