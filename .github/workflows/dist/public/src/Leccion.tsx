import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { lessonBySlug } from '../data/lessons';
import { useProgress } from '../lib/progress';

export function Leccion() {
  const { slug = '' } = useParams();
  const lesson = lessonBySlug[slug];
  const markLesson = useProgress((s) => s.markLesson);

  useEffect(() => {
    if (lesson) markLesson(lesson.slug);
  }, [lesson, markLesson]);

  if (!lesson) {
    return (
      <div className="card">
        <p>Lección no encontrada.</p>
        <Link to="/estudiar">Volver</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/estudiar" className="muted">
        ← Lecciones
      </Link>
      <h1 style={{ marginTop: 8 }}>{lesson.title}</h1>
      <p className="muted">{lesson.summary}</p>
      {lesson.blocks.map((b, i) => (
        <div className="card" key={i}>
          {b.heading && <div className="card-title">{b.heading}</div>}
          <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{b.body}</p>
        </div>
      ))}
      <Link className="btn" to={`/prueba/tema-${lesson.slug}`}>
        Practicar este tema
      </Link>
    </div>
  );
}
