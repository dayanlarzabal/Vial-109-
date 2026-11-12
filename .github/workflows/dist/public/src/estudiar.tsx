import { createFileRoute, Link } from "@tanstack/react-router";
import { LESSONS } from "@/lib/content/lessons";
import { QUESTIONS } from "@/lib/content/questions";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/estudiar")({ component: Study });

function Study() {
  const answers = useProgress((s) => s.answers);
  const hydrated = useProgress((s) => s.hydrated);

  return (
    <div className="grid gap-3">
      <h1 className="font-display text-3xl">Leyes</h1>
      <p className="text-muted">Diez bloques cortos. Lo marcado como trampa es lo que más se confunde el día de la prueba.</p>
      {LESSONS.map((lesson) => {
        const related = QUESTIONS.filter((item) => item.topic === lesson.slug);
        const ok = hydrated ? related.filter((item) => answers[item.id] === true).length : 0;
        return (
          <Link key={lesson.slug} to="/leccion/$slug" params={{ slug: lesson.slug }} className="card block text-inherit no-underline">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-xl">{lesson.title}</h2>
              <span className="text-sm text-muted">
                {hydrated ? `${ok}/${related.length}` : `${related.length} preg.`}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{lesson.summary}</p>
          </Link>
        );
      })}
    </div>
  );
}
