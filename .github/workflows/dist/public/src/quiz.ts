import { QUESTIONS } from "./content/questions";
import { SIGNS } from "./content/signs";
import { TOPICS } from "./content/topics";
import type { Question } from "./content/types";

export type QuizPack = {
  title: string;
  minutes: number;
  passRatio: number;
  questions: Question[];
};

function shuffle<T>(list: T[]): T[] {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function takeBalanced(pool: Question[], count: number) {
  const buckets = new Map<string, Question[]>();
  for (const item of shuffle(pool)) {
    const list = buckets.get(item.topic) ?? [];
    list.push(item);
    buckets.set(item.topic, list);
  }
  const keys = [...buckets.keys()];
  const out: Question[] = [];
  let guard = 0;
  while (out.length < count && keys.length && guard < count * 12) {
    const key = keys[guard % keys.length];
    const next = buckets.get(key)?.shift();
    if (next) out.push(next);
    guard += 1;
  }
  return out.slice(0, count);
}

export function signQuestion(signId: string): Question | null {
  const sign = SIGNS.find((item) => item.id === signId);
  if (!sign) return null;
  const wrong = shuffle(SIGNS.filter((item) => item.id !== sign.id)).slice(0, 3);
  const options = shuffle([sign.name, ...wrong.map((item) => item.name)]);
  return {
    id: `sig-${sign.id}`,
    topic: "senales",
    prompt: "¿Qué señal es esta?",
    options,
    answer: options.indexOf(sign.name),
    explain: `${sign.name}. ${sign.meaning}`,
    article: sign.group,
    sign: sign.id,
    hot: true,
  };
}

function signRound(ids: string[]) {
  return ids.map((id) => signQuestion(id)).filter((item): item is Question => item !== null);
}

export function buildQuiz(mode: string, answers: Record<string, boolean>): QuizPack {
  const hot = QUESTIONS.filter((item) => item.hot);
  const withScene = QUESTIONS.filter((item) => item.scene);

  if (mode === "simulacro") {
    const core = takeBalanced(hot, 24);
    const filler = takeBalanced(
      QUESTIONS.filter((item) => !core.includes(item)),
      6,
    );
    return {
      title: "Simulacro de las que caen",
      minutes: 40,
      passRatio: 0.7,
      questions: shuffle([...core, ...filler]).slice(0, 30),
    };
  }
  if (mode === "intenso") {
    return {
      title: "Simulacro intenso",
      minutes: 55,
      passRatio: 0.7,
      questions: takeBalanced(QUESTIONS, 40),
    };
  }
  if (mode === "caen") {
    return {
      title: "Las que casi siempre caen",
      minutes: 25,
      passRatio: 0.7,
      questions: takeBalanced(hot, 20),
    };
  }
  if (mode === "rapido") {
    return {
      title: "Práctica rápida",
      minutes: 12,
      passRatio: 0.7,
      questions: shuffle(QUESTIONS).slice(0, 10),
    };
  }
  if (mode === "fotos") {
    return {
      title: "Situaciones en la vía",
      minutes: 12,
      passRatio: 0.7,
      questions: shuffle(withScene).slice(0, 8),
    };
  }
  if (mode === "senales") {
    const ids = shuffle(SIGNS).slice(0, 12).map((item) => item.id);
    return {
      title: "Identificar señales",
      minutes: 12,
      passRatio: 0.7,
      questions: signRound(ids),
    };
  }
  if (mode === "fallos") {
    const missed = QUESTIONS.filter((item) => answers[item.id] === false);
    const missedSigns = SIGNS.filter((item) => answers[`sig-${item.id}`] === false).map((item) => item.id);
    const questions = [...shuffle(missed).slice(0, 12), ...signRound(missedSigns).slice(0, 6)];
    const pack = questions.length ? questions : shuffle(hot).slice(0, 10);
    return {
      title: questions.length ? "Repaso de fallos" : "Todavía no hay fallos: un adelanto",
      minutes: 15,
      passRatio: 0.7,
      questions: shuffle(pack),
    };
  }
  if (mode === "repaso") {
    const missed = QUESTIONS.filter((item) => answers[item.id] === false);
    const fresh = hot.filter((item) => answers[item.id] === undefined);
    const pool = [...missed, ...fresh];
    return {
      title: "Repaso del día",
      minutes: 10,
      passRatio: 0.7,
      questions: shuffle(pool.length >= 5 ? pool : hot).slice(0, 8),
    };
  }
  if (mode.startsWith("tema-")) {
    const topic = mode.slice(5);
    const found = TOPICS.find((item) => item.id === topic);
    const pool = QUESTIONS.filter((item) => item.topic === topic);
    return {
      title: found ? found.title : "Tema",
      minutes: 15,
      passRatio: 0.7,
      questions: shuffle(pool).slice(0, Math.min(12, pool.length)),
    };
  }
  return {
    title: "Práctica",
    minutes: 12,
    passRatio: 0.7,
    questions: shuffle(QUESTIONS).slice(0, 10),
  };
}
