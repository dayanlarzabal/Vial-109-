import { createFileRoute, Link } from "@tanstack/react-router";
import { QuizView } from "@/components/quiz-view";

export const Route = createFileRoute("/prueba/$mode")({ component: QuizPage });

function QuizPage() {
  const { mode } = Route.useParams();
  return (
    <div>
      <Link to="/examen" className="mb-3 inline-block text-sm text-muted">
        Salir de la prueba
      </Link>
      <QuizView key={mode} mode={mode} />
    </div>
  );
}
