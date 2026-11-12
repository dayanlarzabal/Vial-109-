import { createFileRoute } from "@tanstack/react-router";
import { QUESTIONS } from "@/lib/content/questions";
import { TOPICS } from "@/lib/content/topics";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/avance")({ component: ProgressPage });

function ProgressPage() {
  const hydrated = useProgress((s) => s.hydrated);
  const answers = useProgress((s) => s.answers);
  const mocks = useProgress((s) => s.mocks);
  const reset = useProgress((s) => s.reset);
  const streak = useProgress((s) => s.streak);

  return (
    <div className="grid gap-3">
      <h1 className="font-display text-3xl">Avance</h1>
      <p className="text-muted">
        {hydrated ? `Racha de ${streak} día${streak === 1 ? "" : "s"}. ` : ""}
        Queda guardado en este dispositivo.
      </p>
      {TOPICS.map((topic) => {
        const related = QUESTIONS.filter((item) => item.topic === topic.id);
        const ok = related.filter((item) => answers[item.id] === true).length;
        const bad = related.filter((item) => answers[item.id] === false).length;
        const width = related.length ? `${(ok / related.length) * 100}%` : "0%";
        return (
          <div key={topic.id} className="card">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-lg">{topic.short}</h2>
              <span className="text-sm text-muted">
                {ok} bien · {bad} mal
              </span>
            </div>
            <div className="bar mt-2">
              <span style={{ width }} />
            </div>
          </div>
        );
      })}
      <h2 className="font-display text-xl">Últimas pruebas</h2>
      {mocks.length === 0 ? <p className="text-muted">Todavía no hay un simulacro guardado.</p> : null}
      {mocks.slice(0, 8).map((mock) => (
        <div key={mock.at} className="card flex items-center justify-between">
          <span>
            {mock.mode} · {new Date(mock.at).toLocaleDateString("es-CU")}
          </span>
          <span className={mock.score / mock.total >= 0.7 ? "text-ok" : "text-primary"}>
            {mock.score}/{mock.total}
          </span>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => {
          if (window.confirm("¿Borrar el progreso de este dispositivo?")) reset();
        }}
      >
        Reiniciar progreso
      </button>
    </div>
  );
}
