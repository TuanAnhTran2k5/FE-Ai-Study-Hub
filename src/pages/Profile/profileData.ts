import {
  Bell,
  Bookmark,
  Bot,
  FileText,
  Gauge,
  Home,
  Medal,
  MessageCircle,
  Settings,
  ShieldCheck,
  Trophy,
  Upload,
  User,
} from "lucide-react";

export const profileUser = {
  name: "Nguyen Van A",
  username: "nguyenvana",
  title: "Elite Scholar",
  email: "nguyenvana@example.com",
  phone: "+84 912 345 678",
  location: "Ho Chi Minh City, Vietnam",
  website: "https://nguyenvana.dev",
  joinedDate: "March 15, 2024",
  bio: "Passionate about programming, AI, and helping others learn.",
  quote: "Learning never exhausts the mind.",
  quoteAuthor: "Leonardo da Vinci",
  avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
};

export type ProfileUser = typeof profileUser;

export const profileNavItems = [
  { label: "Dashboard", icon: Home },
  { label: "My Documents", icon: FileText },
  { label: "Upload Document", icon: Upload },
  { label: "Community", icon: Medal },
  { label: "AI Chat", icon: MessageCircle },
  { label: "Bookmarks", icon: Bookmark },
  { label: "Notifications", icon: Bell, badge: "3" },
  { label: "Leaderboard", icon: Trophy },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

export const profileStats = [
  { label: "Documents", value: "128", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Views", value: "24.5K", icon: Gauge, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Downloads", value: "3.2K", icon: Upload, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Reputation Points", value: "1,250", icon: ShieldCheck, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Leaderboard Rank", value: "#12", icon: Trophy, color: "text-orange-600", bg: "bg-orange-50" },
];

export const accountStatus = [
  ["Member Since", "Mar 15, 2024"],
  ["Account Status", "Active"],
  ["Email Verified", "Verified"],
  ["Two-Factor Auth", "Enabled"],
];

export const weeklyRankingUsers = [
  {
    rank: 1,
    name: "Nguyen Van B",
    title: "Elite Scholar",
    score: 1285,
    downloads: 156,
    bookmarks: 72,
    ratingBonus: 80,
    reports: 0,
    reward: "Top Weekly Contributor",
  },
  {
    rank: 2,
    name: "Tran Minh K",
    title: "Gold Mentor",
    score: 1110,
    downloads: 132,
    bookmarks: 61,
    ratingBonus: 70,
    reports: 0,
    reward: "Gold Mentor Highlight",
  },
  {
    rank: 3,
    name: "Le Anh T",
    title: "Gold Mentor",
    score: 980,
    downloads: 118,
    bookmarks: 44,
    ratingBonus: 65,
    reports: 1,
    reward: "Top Weekly Contributor",
  },
  {
    rank: 4,
    name: "Nguyen Van A",
    title: "Elite Scholar",
    score: 870,
    downloads: 95,
    bookmarks: 38,
    ratingBonus: 55,
    reports: 0,
    reward: "Trusted Author",
  },
];

export const topContributors = [
  { rank: "#1", name: "Nguyen Van B", title: "Elite Scholar", score: "2,450", reward: "Exclusive avatar frame" },
  { rank: "#2", name: "Tran Minh K", title: "Gold Mentor", score: "2,180", reward: "Priority document display" },
  { rank: "#3", name: "Le Anh T", title: "Gold Mentor", score: "1,960", reward: "Premium name color" },
];

export const recentBadges = [
  { title: "Top Contributor", description: "Top 10% contributors", earned: "Earned May 10, 2024", icon: Trophy, bg: "bg-amber-50", color: "text-amber-500" },
  { title: "Quality Author", description: "High quality documents", earned: "Earned Apr 20, 2024", icon: ShieldCheck, bg: "bg-emerald-50", color: "text-emerald-500" },
  { title: "Community Helper", description: "Active in community", earned: "Earned Apr 5, 2024", icon: Bot, bg: "bg-purple-50", color: "text-purple-500" },
];
