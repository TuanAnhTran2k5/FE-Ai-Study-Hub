import { Bell, ChevronDown, MessageCircle } from 'lucide-react';

export function DocumentsTopbar() {
  return (
    <header className="topbar">
      <div />
      <div className="topbar-actions">
        <button className="icon-button" type="button" aria-label="Notifications">
          <Bell size={23} />
          <span>3</span>
        </button>
        <button className="icon-button" type="button" aria-label="Messages">
          <MessageCircle size={23} />
        </button>
        <div className="profile">
          <div className="avatar">NA</div>
          <div>
            <strong>Nguyen Cong Khanh</strong>
            <span>Elite Scholar</span>
          </div>
          <button type="button" aria-label="Open profile menu">
            <ChevronDown size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
