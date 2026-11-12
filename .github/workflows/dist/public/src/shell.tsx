import { Link } from "@tanstack/react-router";
import { BookOpen, ChartColumn, ClipboardCheck, House, Octagon, Volume2, VolumeX } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { useProgress } from "@/lib/store";

const LINKS = [
  { to: "/", label: "Inicio", icon: House, exact: true },
  { to: "/estudiar", label: "Leyes", icon: BookOpen, exact: false },
  { to: "/senales", label: "Señales", icon: Octagon, exact: false },
  { to: "/examen", label: "Examen", icon: ClipboardCheck, exact: false },
  { to: "/avance", label: "Avance", icon: ChartColumn, exact: false },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const sound = useProgress((s) => s.sound);
  const toggle = useProgress((s) => s.toggleSound);

  useEffect(() => {
    void useProgress.persist.rehydrate();
  }, []);

  return (
    <div className="shell">
      <header className="topbar">
        <Link to="/" className="brand">
          <span className="brand-mark">109</span>
          <span>
            <span className="block font-display text-lg leading-none">Vial 109</span>
            <span className="text-xs text-muted">Licencia · Cuba</span>
          </span>
        </Link>
        <button type="button" className="icon-btn" onClick={toggle} aria-label={sound ? "Silenciar" : "Activar sonido"}>
          {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>
      </header>
      <div className="page">{children}</div>
      <nav className="bottom-nav" aria-label="Principal">
        {LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="nav-item"
              activeProps={{ className: "nav-item is-active" }}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
