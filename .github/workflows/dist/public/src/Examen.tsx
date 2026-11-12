import { Link } from 'react-router-dom';
import { TOPICS } from '../data/catalog';
import { QUESTIONS } from '../data/questions';

export function Examen() {
  return (
    <div>
      <h1>Exámenes y prácticas</h1>
      <p className="muted">
        Banco: {QUESTIONS.length} preguntas. Umbral orientativo del simulacro: 70%.
      </p>

      <div className="card">
        <div className="card-title">Simulacro completo</div>
        <p className="muted">30 preguntas equilibradas · 60 minutos · 70% para aprobar</p>
        <Link className="btn" to="/prueba/simulacro">
          Empezar simulacro
        </Link>
      </div>

      <div className="grid2">
        <Link className="btn btn-ghost" to="/prueba/rapido">
          Rápida (10)
        </Link>
        <Link className="btn btn-ghost" to="/prueba/fallos">
          Mis fallos
        </Link>
      </div>

      <div className="card" style={{ marginTop: 12 }}>
        <div className="card-title">Por tema</div>
        {TOPICS.map((t) => (
          <Link key={t.id} to={`/prueba/tema-${t.id}`} className="list-link">
            <span>{t.title}</span>
            <span className="badge">→</span>
          </Link>
        ))}
      </div>

      <Link className="btn btn-ghost" to="/prueba/senales">
        Quiz de identificación de señales
      </Link>
    </div>
  );
}
