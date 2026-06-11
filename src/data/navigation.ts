import {
  Bell,
  Bookmark,
  Bot,
  FileText,
  Home,
  Medal,
  Settings,
  UploadCloud,
  User,
  Users,
} from 'lucide-react';

import type { SidebarItem } from '@/models/document';

export const sidebarItems: SidebarItem[] = [
  { label: 'Dashboard', icon: Home },
  { label: 'My Documents', icon: FileText },
  { label: 'Upload Document', icon: UploadCloud },
  { label: 'Community', icon: Users },
  { label: 'AI Chat', icon: Bot },
  { label: 'Bookmarks', icon: Bookmark },
  { label: 'Notifications', icon: Bell },
  { label: 'Leaderboard', icon: Medal },
  { label: 'Profile', icon: User },
  { label: 'Settings', icon: Settings },
];
