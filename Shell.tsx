import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/', label: 'Inicio', icon: '🏠', end: true },
  { to: '/estudiar', label: 'Leyes', icon: '📖' },
  { to: '/senales', label: 'Señales', icon: '🛑' },
  { to: '/examen', label: 'Examen', icon: '📝' },
  { to: '/avance', label: 'Avance', icon: '📊' },
];

export function Shell() {
  return (
    <>
      <div className="app-shell">
        <header className="topbar">
          <div className="brand">
            <div className="brand-badge">109</div>
            <div>
              <div>Vial 109</div>
              <div className="muted" style={{ fontSize: 12, fontWeight: 400 }}>
                Licencia · Cuba
              </div>
            </div>
          </div>
        </header>
        <Outlet />
      </div>
      <nav className="bottom-nav" aria-label="Principal">
        <div className="bottom-nav-inner">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <span className="icon">{l.icon}</span>
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
}
