import { createFileRoute, Link } from "@tanstack/react-router";
import { QUESTIONS } from "@/lib/content/questions";
import { SIGNS } from "@/lib/content/signs";
import { SCENES } from "@/lib/content/scenes";
import { useProgress } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const hydrated = useProgress((s) => s.hydrated);
  const answers = useProgress((s) => s.answers);
  const streak = useProgress((s) => s.streak);
  const mocks = useProgress((s) => s.mocks);
  const known = hydrated ? Object.values(answers).filter(Boolean).length : 0;
  const hotLeft = hydrated
    ? QUESTIONS.filter((item) => item.hot && answers[item.id] !== true).length
    : QUESTIONS.filter((item) => item.hot).length;
  const last = mocks[0];

  return (
    <div className="grid gap-4">
      <img className="scene" src={SCENES.malecon.src} alt={SCENES.malecon.alt} />
      <div>
        <p className="text-sm font-semibold text-primary">Ley 109 · Código de Seguridad Vial</p>
        <h1 className="mt-1 font-display text-4xl leading-tight">El teórico, con las que de verdad caen.</h1>
        <p className="mt-2 text-muted">
          {QUESTIONS.length} preguntas, {SIGNS.length} señales y situaciones con foto. El simulacro prioriza lo que se
          repite en la prueba: prioridad, luces, velocidad y alcohol.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="card">
          <p className="text-xs text-muted">Aciertos</p>
          <p className="font-display text-2xl">{hydrated ? known : "—"}</p>
        </div>
        <div className="card">
          <p className="text-xs text-muted">Por afianzar</p>
          <p className="font-display text-2xl">{hydrated ? hotLeft : "—"}</p>
        </div>
        <div className="card">
          <p className="text-xs text-muted">Racha</p>
          <p className="font-display text-2xl">{hydrated ? streak : "—"}</p>
        </div>
      </div>
      <Link className="btn" to="/prueba/$mode" params={{ mode: "caen" }}>
        Las que casi siempre caen
      </Link>
      <div className="grid grid-cols-2 gap-2">
        <Link className="btn btn-ghost" to="/prueba/$mode" params={{ mode: "simulacro" }}>
          Simulacro 30
        </Link>
        <Link className="btn btn-ghost" to="/prueba/$mode" params={{ mode: "fotos" }}>
          Fotos de la vía
        </Link>
        <Link className="btn btn-ghost" to="/senales">
          Catálogo de señales
        </Link>
        <Link className="btn btn-ghost" to="/prueba/$mode" params={{ mode: "repaso" }}>
          Repaso del día
        </Link>
      </div>
      {last ? (
        <p className="text-sm text-muted">
          Última prueba: {last.score}/{last.total}
          {last.score / last.total >= 0.7 ? " · por encima del corte" : " · por debajo del corte"}
        </p>
      ) : null}
      <div className="trap text-sm">
        Trampa que los temarios viejos siguen diciendo mal: en zona de niños el tope es 40 km/h en ciudad y 60 en
        carretera, no 20. Los 20 km/h son la salida de un garaje y los tractores o equipos.
      </div>
      <p className="text-xs text-muted">
        Material de estudio, no el examen oficial. Cifras de velocidad según la Ley 109 en su edición anotada. La
        licencia la otorga el MININT.
      </p>
    </div>
  );
}
