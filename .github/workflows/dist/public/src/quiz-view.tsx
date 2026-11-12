import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SignFace } from "@/components/sign-face";
import { playSfx } from "@/lib/audio";
import { SCENES, type SceneId } from "@/lib/content/scenes";
import { SIGN_MAP } from "@/lib/content/signs";
import { buildQuiz, type QuizPack } from "@/lib/quiz";
import { useProgress } from "@/lib/store";

function clock(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function QuizView({ mode }: { mode: string }) {
  const sound = useProgress((s) => s.sound);
  const record = useProgress((s) => s.record);
  const recordMock = useProgress((s) => s.recordMock);
  const [pack, setPack] = useState<QuizPack | null>(null);
  const [index, setIndex] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [left, setLeft] = useState(-1);
  const [misses, setMisses] = useState<number[]>([]);
  const scoreRef = useRef(0);
  const closed = useRef(false);

  useEffect(() => {
    const next = buildQuiz(mode, useProgress.getState().answers);
    setPack(next);
    setIndex(0);
    setPick(null);
    setScore(0);
    scoreRef.current = 0;
    setDone(false);
    setLeft(next.minutes * 60);
    setMisses([]);
    closed.current = false;
  }, [mode]);

  function close(finalScore: number) {
    if (closed.current || !pack) return;
    closed.current = true;
    setDone(true);
    recordMock({ at: Date.now(), score: finalScore, total: pack.questions.length, mode });
    if (useProgress.getState().sound) {
      playSfx(finalScore / pack.questions.length >= pack.passRatio ? "pass" : "fail");
    }
  }

  useEffect(() => {
    if (!pack || done || left > 0) return;
    if (left === 0) close(scoreRef.current);
    // Timer reaches zero once per attempt; close() is guarded.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left, pack, done]);

  useEffect(() => {
    if (!pack || done || left < 0) return;
    const id = window.setInterval(() => {
      setLeft((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [pack, done, left < 0]);

  if (!pack) {
    return <p className="text-muted">Preparando la prueba…</p>;
  }

  const current = pack.questions[index];
  if (!current) {
    return (
      <div className="card">
        <p>No hay preguntas para este modo.</p>
        <Link className="btn mt-4" to="/examen">
          Volver
        </Link>
      </div>
    );
  }

  const scene = current.scene && current.scene in SCENES ? SCENES[current.scene as SceneId] : undefined;
  const sign = current.sign ? SIGN_MAP[current.sign] : undefined;
  const passed = score / pack.questions.length >= pack.passRatio;

  function choose(option: number) {
    if (pick !== null || done) return;
    const ok = option === current.answer;
    setPick(option);
    if (ok) {
      scoreRef.current += 1;
      setScore(scoreRef.current);
    } else {
      setMisses((list) => [...list, index]);
    }
    record(current.id, ok);
    if (sound) playSfx(ok ? "ok" : "bad");
  }

  function next() {
    if (index + 1 >= pack.questions.length) {
      close(scoreRef.current);
      return;
    }
    setIndex((value) => value + 1);
    setPick(null);
  }

  if (done) {
    return (
      <div className="q-enter">
        <p className="text-sm text-muted">{pack.title}</p>
        <div
          className={`stamp mt-3 inline-flex rounded-full px-4 py-2 font-display text-2xl ${passed ? "bg-ok-soft text-ok" : "bg-bad-soft text-primary"}`}
        >
          {passed ? "Aprobado" : "A repasar"} · {score}/{pack.questions.length}
        </div>
        <p className="mt-3 text-muted">
          Corte de práctica: {Math.round(pack.passRatio * 100)}%. El examen oficial lo califica el MININT.
        </p>
        <div className="mt-4 grid gap-2">
          {pack.questions.map((item, i) => (
            <div key={`${item.id}-${i}`} className="card">
              <p className="font-semibold">{item.prompt}</p>
              <p className={`mt-1 text-sm ${misses.includes(i) ? "text-primary" : "text-ok"}`}>
                {misses.includes(i) ? `Correcta: ${item.options[item.answer]}` : "Bien"}
              </p>
              <p className="mt-1 text-sm text-muted">
                {item.explain} · {item.article}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn" to="/examen">
            Otra prueba
          </Link>
          <Link className="btn btn-ghost" to="/avance">
            Ver avance
          </Link>
        </div>
      </div>
    );
  }

  const width = `${((index + (pick !== null ? 1 : 0)) / pack.questions.length) * 100}%`;

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3 text-sm">
        <span className="font-semibold">{pack.title}</span>
        <span className={left < 60 ? "font-semibold text-primary" : "text-muted"}>{clock(left)}</span>
      </div>
      <div className="bar mb-4" aria-hidden>
        <span style={{ width }} />
      </div>
      <div key={`${current.id}-${index}`} className={`q-enter ${pick !== null && pick !== current.answer ? "shake" : ""}`}>
        <p className="text-sm text-muted">
          {index + 1} / {pack.questions.length}
          {current.hot ? " · cae mucho" : ""}
        </p>
        <h1 className="mt-1 font-display text-2xl leading-tight">{current.prompt}</h1>
        {scene ? <img className="scene mt-4" src={scene.src} alt={scene.alt} /> : null}
        {sign ? (
          <div className="mt-4 flex justify-center">
            <SignFace sign={sign} size={148} />
          </div>
        ) : null}
        <div className="mt-4 grid gap-2">
          {current.options.map((option, i) => {
            let cls = "option";
            if (pick !== null && i === current.answer) cls += " is-good";
            else if (pick !== null && i === pick) cls += " is-bad";
            return (
              <button key={option} type="button" className={cls} onClick={() => choose(i)}>
                {option}
              </button>
            );
          })}
        </div>
        {pick !== null ? (
          <div className="card mt-4">
            <p className="font-semibold">{pick === current.answer ? "Correcto" : "No es esa"}</p>
            <p className="mt-1 text-sm">{current.explain}</p>
            <p className="mt-1 text-sm text-muted">{current.article}</p>
            <button type="button" className="btn mt-3" onClick={next}>
              {index + 1 === pack.questions.length ? "Ver resultado" : "Siguiente"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
