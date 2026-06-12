import { Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { sidebarItems } from '@/data/navigation';
import { routePath } from '@/models/routePath';

type DocumentsSidebarProps = {
  activeItem?: string;
};

const sidebarPaths: Record<string, string> = {
  Dashboard: routePath.home,
  'My Documents': routePath.documents,
  'Upload Document': routePath.upload,
  Community: routePath.community,
  Bookmarks: routePath.bookmarks,
};

export function DocumentsSidebar({ activeItem = 'My Documents' }: DocumentsSidebarProps) {
  return (
    <aside className="sidebar">
      <a className="logo" href="/">
        <img src="/img/LOGO.png" alt="ASH Logo" />
      </a>

      <nav className="sidebar-nav" aria-label="Dashboard navigation">
        {sidebarItems.map((item) => (
          <a
            className={item.label === activeItem ? 'active' : ''}
            href={sidebarPaths[item.label] ?? '#'}
            key={item.label}
          >
            <span className="nav-icon">
              <item.icon size={20} strokeWidth={2.2} />
            </span>
            <span>{item.label}</span>
            {item.label === 'Notifications' ? <span className="nav-badge">3</span> : null}
          </a>
        ))}
      </nav>

      <div className="theme-toggle">
        <span>Light Mode</span>
        <Button className="theme-button" variant="ghost" type="button" aria-label="Toggle light mode">
          <Sun size={20} />
        </Button>
      </div>
    </aside>
  );
}
