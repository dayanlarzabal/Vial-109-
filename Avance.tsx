import { Link } from 'react-router-dom';
import { QUESTIONS } from '../data/questions';
import { TOPICS } from '../data/catalog';
import { LESSONS } from '../data/lessons';
import { countByTopic, useProgress } from '../lib/progress';

export function Avance() {
  const lessonsRead = useProgress((s) => s.lessonsRead);
  const answers = useProgress((s) => s.answers);
  const mocks = useProgress((s) => s.mocks);
  const reset = useProgress((s) => s.reset);
  const stats = countByTopic(answers, QUESTIONS);

  return (
    <div>
      <h1>Tu avance</h1>
      <p className="muted">Se guarda en este dispositivo (localStorage).</p>

      <div className="card">
        <div className="card-title">Resumen</div>
        <p>
          Lecciones: {lessonsRead.length}/{LESSONS.length}
        </p>
        <p>
          Preguntas respondidas: {Object.keys(answers).length} · Aciertos:{' '}
          {Object.values(answers).filter(Boolean).length}
        </p>
        <p>Simulacros guardados: {mocks.length}</p>
      </div>

      <div className="card">
        <div className="card-title">Por tema</div>
        {TOPICS.map((t) => {
          const s = stats[t.id];
          const label = s ? `${s.ok}/${s.total}` : '—';
          return (
            <div key={t.id} className="list-link">
              <span>{t.short}</span>
              <span className="badge">{label}</span>
            </div>
          );
        })}
      </div>

      {mocks.length > 0 && (
        <div className="card">
          <div className="card-title">Últimos resultados</div>
          {mocks.slice(0, 8).map((m, i) => (
            <div key={i} className="list-link">
              <span>
                {m.mode} · {new Date(m.at).toLocaleDateString('es-CU')}
              </span>
              <span className={`badge${m.score / m.total >= 0.7 ? ' ok' : ''}`}>
                {m.score}/{m.total}
              </span>
            </div>
          ))}
        </div>
      )}

      <Link className="btn" to="/examen">
        Seguir practicando
      </Link>
      <button
        type="button"
        className="btn btn-ghost"
        style={{ marginTop: 10 }}
        onClick={() => {
          if (confirm('¿Borrar todo el progreso de este dispositivo?')) reset();
        }}
      >
        Reiniciar progreso
      </button>
    </div>
  );
}
