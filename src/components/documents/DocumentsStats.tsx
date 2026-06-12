import { Clock3, Globe2, Lock } from 'lucide-react';

export function DocumentsStats() {
  return (
    <div className="stats-grid">
      <article className="stat-card highlighted">
        <span className="stat-icon">
          <Globe2 size={29} />
        </span>
        <div>
          <p>Public Documents</p>
          <strong>24</strong>
          <span>Visible to everyone</span>
        </div>
      </article>
      <article className="stat-card">
        <span className="stat-icon">
          <Lock size={28} />
        </span>
        <div>
          <p>Private Documents</p>
          <strong>15</strong>
          <span>Only visible to you</span>
        </div>
      </article>
      <article className="stat-card">
        <span className="stat-icon">
          <Clock3 size={29} />
        </span>
        <div>
          <p>Pending Review</p>
          <strong>7</strong>
          <span>Waiting for admin review</span>
        </div>
      </article>
    </div>
  );
}
