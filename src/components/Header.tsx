import { NavLink } from 'react-router-dom';

import { routePath } from '@/models/routePath';

export function Header() {
  return (
    <header className="home-header">
      <div className="home-header__inner">
        <NavLink className="home-brand" to={routePath.home}>
          <img src="/img/LOGO.png" alt="ASH Logo" />
          <span>AI Study Hub</span>
        </NavLink>

        <nav className="home-nav" aria-label="Main navigation">
          <NavLink to={routePath.home}>Home</NavLink>
          <NavLink to={routePath.documents}>Documents</NavLink>
        </nav>
      </div>
    </header>
  );
}
