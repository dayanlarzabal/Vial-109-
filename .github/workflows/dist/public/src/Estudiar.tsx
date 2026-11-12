import { Link } from 'react-router-dom';
import { LESSONS } from '../data/lessons';
import { useProgress } from '../lib/progress';

export function Estudiar() {
  const lessonsRead = useProgress((s) => s.lessonsRead);
  return (
    <div>
      <h1>Leyes y temas</h1>
      <p className="muted">Resúmenes del Código de Seguridad Vial para el teórico.</p>
      <div className="card">
        {LESSONS.map((l) => {
          const read = lessonsRead.includes(l.slug);
          return (
            <Link key={l.slug} to={`/leccion/${l.slug}`} className="list-link">
              <div>
                <div style={{ fontWeight: 600 }}>{l.title}</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  {l.summary}
                </div>
              </div>
              <span className={`badge${read ? ' ok' : ''}`}>{read ? 'Leída' : 'Nueva'}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
