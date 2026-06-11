export const weeklyLeaderboard = [
  { rank: 1, name: "Nguyen Van B", title: "Elite Scholar", score: 1285, badge: "Top Weekly Contributor", downloads: 156, bookmarks: 72, rating: "4.9" },
  { rank: 2, name: "Tran Minh K", title: "Gold Mentor", score: 1110, badge: "Trusted Author", downloads: 132, bookmarks: 61, rating: "4.8" },
  { rank: 3, name: "Le Anh T", title: "Gold Mentor", score: 980, badge: "Helpful Student", downloads: 118, bookmarks: 44, rating: "4.7" },
  { rank: 4, name: "Nguyen Van A", title: "Elite Scholar", score: 870, badge: "Trusted Author", downloads: 95, bookmarks: 38, rating: "4.6" },
];

export const topContributorLeaderboard = [
  { rank: 1, name: "Nguyen Van A", title: "Elite Scholar", score: 12450, badge: "Elite Scholar", downloads: 1420, bookmarks: 610, rating: "4.9" },
  { rank: 2, name: "Pham Gia H", title: "Elite Scholar", score: 11980, badge: "Trusted Author", downloads: 1360, bookmarks: 540, rating: "4.8" },
  { rank: 3, name: "Nguyen Van B", title: "Elite Scholar", score: 10880, badge: "Top Contributor", downloads: 1245, bookmarks: 511, rating: "4.8" },
  { rank: 4, name: "Tran Minh K", title: "Gold Mentor", score: 8350, badge: "Helpful Student", downloads: 920, bookmarks: 388, rating: "4.7" },
];

export const reputationRules = [
  { action: "Document downloaded", points: "+5" },
  { action: "Document bookmarked", points: "+2" },
  { action: "Valid subject report", points: "-5" },
  { action: "Duplicate content confirmed", points: "-20" },
  { action: "Advertising document", points: "-20" },
];

export const contributorRewards = [
  { rank: "Top 1", reward: "Exclusive avatar frame and early feature access" },
  { rank: "Top 2", reward: "Priority document display" },
  { rank: "Top 3", reward: "Top Weekly Contributor badge" },
];

export type LeaderboardItem = (typeof weeklyLeaderboard)[number];
