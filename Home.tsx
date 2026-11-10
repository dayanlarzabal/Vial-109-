import { Link } from 'react-router-dom';
import { LESSONS } from '../data/lessons';
import { QUESTIONS } from '../data/questions';
import { SIGNS } from '../data/signs';
import { useProgress } from '../lib/progress';

export function Home() {
  const lessonsRead = useProgress((s) => s.lessonsRead);
  const answers = useProgress((s) => s.answers);
  const mocks = useProgress((s) => s.mocks);
  const answered = Object.keys(answers).length;
  const correct = Object.values(answers).filter(Boolean).length;
  const lessonPct = Math.round((lessonsRead.length / LESSONS.length) * 100) || 0;

  return (
    <div>
      <h1>Prepara tu licencia</h1>
      <p className="muted">
        Material de estudio basado en la Ley 109 (Código de Seguridad Vial). El examen oficial lo define el
        MININT.
      </p>

      <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <div className="progress-ring" style={{ ['--p' as string]: lessonPct }}>
          <div>{lessonPct}%</div>
        </div>
        <div>
          <div className="card-title">Lecciones leídas</div>
          <div className="muted">
            {lessonsRead.length} de {LESSONS.length}
          </div>
          <div className="muted" style={{ marginTop: 6 }}>
            Respuestas guardadas: {correct}/{answered || 0}
          </div>
        </div>
      </div>

      <div className="grid2">
        <Link className="btn" to="/examen">
          Hacer prueba
        </Link>
        <Link className="btn btn-ghost" to="/senales">
          Ver señales
        </Link>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="card-title">Velocidades clave (art. 126)</div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Vía</th>
                <th>Autos ≤ 3500 kg</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Urbana</td>
                <td>50 km/h</td>
              </tr>
              <tr>
                <td>Carretera</td>
                <td>90 km/h</td>
              </tr>
              <tr>
                <td>Autopista</td>
                <td>100 km/h</td>
              </tr>
              <tr>
                <td>Escuela (niños a la vista)</td>
                <td>20 km/h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Contenido de la app</div>
        <p className="muted">
          {LESSONS.length} lecciones · {SIGNS.length} señales · {QUESTIONS.length} preguntas ·{' '}
          {mocks.length} simulacros guardados
        </p>
      </div>
    </div>
  );
}
