import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSON_MAP } from "@/lib/content/lessons";
import { SCENES, type SceneId } from "@/lib/content/scenes";

export const Route = createFileRoute("/leccion/$slug")({ component: LessonPage });

function LessonPage() {
  const { slug } = Route.useParams();
  const lesson = LESSON_MAP[slug];
  if (!lesson) {
    return (
      <div className="card">
        <p>Esa lección no está.</p>
        <Link className="btn mt-3" to="/estudiar">
          Volver
        </Link>
      </div>
    );
  }
  const scene = lesson.scene && lesson.scene in SCENES ? SCENES[lesson.scene as SceneId] : undefined;
  return (
    <div className="grid gap-4">
      <Link to="/estudiar" className="text-sm text-muted">
        Volver a las leyes
      </Link>
      <h1 className="font-display text-3xl leading-tight">{lesson.title}</h1>
      <p className="text-muted">{lesson.summary}</p>
      {scene ? <img className="scene" src={scene.src} alt={scene.alt} /> : null}
      {lesson.blocks.map((block) =>
        block.trap ? (
          <div key={block.heading} className="trap">
            <h2 className="font-display text-lg">{block.heading}</h2>
            <p className="mt-1 text-sm">{block.body}</p>
          </div>
        ) : (
          <section key={block.heading}>
            <h2 className="font-display text-xl">{block.heading}</h2>
            <p className="mt-1">{block.body}</p>
          </section>
        ),
      )}
      <Link className="btn" to="/prueba/$mode" params={{ mode: `tema-${lesson.slug}` }}>
        Practicar este tema
      </Link>
    </div>
  );
}
