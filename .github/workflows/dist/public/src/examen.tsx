import { createFileRoute, Link } from "@tanstack/react-router";
import { QUESTIONS } from "@/lib/content/questions";
import { SIGNS } from "@/lib/content/signs";
import { TOPICS } from "@/lib/content/topics";

export const Route = createFileRoute("/examen")({ component: ExamHome });

const MODES = [
  { mode: "caen", title: "Las que caen", text: "20 preguntas que se repiten en casi todos los temarios." },
  { mode: "simulacro", title: "Simulacro", text: "30 preguntas, 40 minutos, corte 70%. Prioriza las frecuentes." },
  { mode: "intenso", title: "Intenso", text: "40 preguntas repartidas por todos los temas." },
  { mode: "fotos", title: "Con foto", text: "Cruces, cebra, lluvia, tren, garaje, terraplén." },
  { mode: "senales", title: "Señales", text: `${SIGNS.length} en el catálogo. Aquí se identifican 12.` },
  { mode: "rapido", title: "Rápida", text: "10 preguntas, sin ceremonia." },
  { mode: "fallos", title: "Mis fallos", text: "Solo lo que ya marcó mal en este dispositivo." },
  { mode: "repaso", title: "Repaso del día", text: "Fallos más las frecuentes que aún no afianza." },
];

function ExamHome() {
  const hot = QUESTIONS.filter((item) => item.hot).length;
  return (
    <div className="grid gap-3">
      <h1 className="font-display text-3xl">Examen</h1>
      <p className="text-muted">
        Banco de {QUESTIONS.length} preguntas, {hot} marcadas como frecuentes. Al responder suena un tono: agudo si
        acierta, grave si no. Puede silenciarlo arriba.
      </p>
      {MODES.map((mode) => (
        <Link key={mode.mode} to="/prueba/$mode" params={{ mode: mode.mode }} className="card block text-inherit no-underline">
          <h2 className="font-display text-xl">{mode.title}</h2>
          <p className="text-sm text-muted">{mode.text}</p>
        </Link>
      ))}
      <h2 className="mt-2 font-display text-xl">Por tema</h2>
      {TOPICS.map((topic) => (
        <Link key={topic.id} to="/prueba/$mode" params={{ mode: `tema-${topic.id}` }} className="card flex items-center justify-between text-inherit no-underline">
          <span>{topic.title}</span>
          <span className="text-sm text-muted">12</span>
        </Link>
      ))}
    </div>
  );
}
