import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { QuizMode } from '../data/types';
import { buildQuiz } from '../lib/quiz';
import { useProgress } from '../lib/progress';

export function QuizRunner({ mode }: { mode: QuizMode }) {
  const recordAnswer = useProgress((s) => s.recordAnswer);
  const recordMock = useProgress((s) => s.recordMock);
  const answersMap = useProgress((s) => s.answers);

  const built = useMemo(() => buildQuiz(mode, answersMap), [mode]);
  const { questions, minutes, passRatio, title } = built;

  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [left, setLeft] = useState(minutes * 60);

  useEffect(() => {
    if (done) return;
    const t = setInterval(() => {
      setLeft((s) => {
        if (s <= 1) {
          clearInterval(t);
          finish(score);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  function finish(finalScore: number) {
    setDone(true);
    recordMock({
      at: Date.now(),
      score: finalScore,
      total: questions.length,
      mode,
    });
  }

  function choose(option: number) {
    if (picked !== null || done) return;
    const q = questions[idx];
    const ok = option === q.answer;
    setPicked(option);
    if (ok) setScore((s) => s + 1);
    if (!q.id.startsWith('sign-q-')) {
      recordAnswer(q.id, ok);
    }
  }

  function next() {
    if (idx + 1 >= questions.length) {
      finish(score + (picked === questions[idx]?.answer ? 0 : 0));
      // score already updated on choose
      setDone(true);
      recordMock({
        at: Date.now(),
        score: score + (picked === questions[idx].answer ? 0 : 0),
        // fix: use current score state carefully
        total: questions.length,
        mode,
      });
      return;
    }
    setIdx((i) => i + 1);
    setPicked(null);
  }

  function goNext() {
    if (idx + 1 >= questions.length) {
      setDone(true);
      recordMock({ at: Date.now(), score, total: questions.length, mode });
      return;
    }
    setIdx((i) => i + 1);
    setPicked(null);
  }

  if (!questions.length) {
    return (
      <div className="card">
        <p>No hay preguntas para este modo.</p>
        <Link className="btn" to="/examen">
          Volver
        </Link>
      </div>
    );
  }

  if (done) {
    const ratio = score / questions.length;
    const pass = ratio >= passRatio;
    return (
      <div className="card">
        <h1>{pass ? 'Aprobado' : 'A practicar'}</h1>
        <p className="muted">{title}</p>
        <p style={{ fontSize: '1.4rem', fontWeight: 700 }}>
          {score} / {questions.length} ({Math.round(ratio * 100)}%)
        </p>
        <p className="muted">Umbral orientativo: {Math.round(passRatio * 100)}%</p>
        <div className="grid2" style={{ marginTop: 12 }}>
          <Link className="btn" to={`/prueba/${mode}`}>
            Repetir
          </Link>
          <Link className="btn btn-ghost" to="/examen">
            Otros modos
          </Link>
        </div>
      </div>
    );
  }

  const q = questions[idx];
  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');

  return (
    <div>
      <div className="topbar" style={{ marginBottom: 8 }}>
        <div>
          <div className="muted">
            {idx + 1} / {questions.length}
          </div>
          <strong>{title}</strong>
        </div>
        <div className="timer">
          {mm}:{ss}
        </div>
      </div>
      <div className="card">
        <p style={{ whiteSpace: 'pre-wrap', fontWeight: 600 }}>{q.prompt}</p>
        {q.options.map((opt, i) => {
          let cls = 'option';
          if (picked !== null) {
            if (i === q.answer) cls += ' correct';
            else if (i === picked) cls += ' wrong';
          }
          return (
            <button
              key={i}
              type="button"
              className={cls}
              disabled={picked !== null}
              onClick={() => choose(i)}
            >
              {opt}
            </button>
          );
        })}
        {picked !== null && (
          <div style={{ marginTop: 12 }}>
            <p className="muted">{q.explain}</p>
            {q.article && (
              <p className="muted" style={{ fontSize: 12 }}>
                Ref: {q.article}
              </p>
            )}
            <button type="button" className="btn" style={{ marginTop: 10 }} onClick={goNext}>
              {idx + 1 >= questions.length ? 'Ver resultado' : 'Siguiente'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
