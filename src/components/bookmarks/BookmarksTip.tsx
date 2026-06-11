import { Bookmark } from 'lucide-react';

export function BookmarksTip() {
  return (
    <div className="tip-bar">
      <span>
        <Bookmark size={20} />
        Bookmark important resources to access them quickly anytime!
      </span>
    </div>
  );
}
