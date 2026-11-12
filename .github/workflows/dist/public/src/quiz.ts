import { QUESTIONS } from '../data/questions';
import { SIGNS } from '../data/signs';
import type { Question, QuizMode, TopicId } from '../data/types';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Balanced selection across topics for simulacro */
function balanced(n: number): Question[] {
  const byTopic = new Map<string, Question[]>();
  for (const q of QUESTIONS) {
    const list = byTopic.get(q.topic) ?? [];
    list.push(q);
    byTopic.set(q.topic, list);
  }
  const topics = [...byTopic.keys()];
  const per = Math.max(1, Math.floor(n / topics.length));
  const picked: Question[] = [];
  for (const t of topics) {
    picked.push(...shuffle(byTopic.get(t)!).slice(0, per));
  }
  while (picked.length < n) {
    const extra = shuffle(QUESTIONS).find((q) => !picked.includes(q));
    if (!extra) break;
    picked.push(extra);
  }
  return shuffle(picked).slice(0, n);
}

export function buildQuiz(
  mode: QuizMode,
  answers: Record<string, boolean>,
): { questions: Question[]; minutes: number; passRatio: number; title: string } {
  if (mode === 'simulacro') {
    return {
      questions: balanced(30),
      minutes: 60,
      passRatio: 0.7,
      title: 'Simulacro (30 preguntas)',
    };
  }
  if (mode === 'rapido') {
    return {
      questions: shuffle(QUESTIONS).slice(0, 10),
      minutes: 15,
      passRatio: 0.7,
      title: 'Práctica rápida (10)',
    };
  }
  if (mode === 'fallos') {
    const wrong = QUESTIONS.filter((q) => answers[q.id] === false);
    const pool = wrong.length >= 5 ? wrong : QUESTIONS;
    return {
      questions: shuffle(pool).slice(0, Math.min(15, pool.length)),
      minutes: 20,
      passRatio: 0.7,
      title: 'Repaso de fallos',
    };
  }
  if (mode === 'senales') {
    // Convert signs into short questions
    const sample = shuffle(SIGNS).slice(0, 15);
    const qs: Question[] = sample.map((s, i) => {
      const distractors = shuffle(SIGNS.filter((x) => x.id !== s.id))
        .slice(0, 3)
        .map((x) => x.name);
      const options = shuffle([s.name, ...distractors]);
      return {
        id: `sign-q-${s.id}-${i}`,
        topic: 'senales' as TopicId,
        prompt: `¿Qué significa esta señal?\n«${s.meaning.slice(0, 120)}${s.meaning.length > 120 ? '…' : ''}»`,
        options,
        answer: options.indexOf(s.name),
        explain: `${s.name}: ${s.meaning}`,
        article: s.group,
      };
    });
    return {
      questions: qs,
      minutes: 15,
      passRatio: 0.7,
      title: 'Identificar señales',
    };
  }
  if (mode.startsWith('tema-')) {
    const topic = mode.slice(5) as TopicId;
    const pool = QUESTIONS.filter((q) => q.topic === topic);
    return {
      questions: shuffle(pool).slice(0, Math.min(15, pool.length)),
      minutes: 20,
      passRatio: 0.7,
      title: `Tema: ${topic}`,
    };
  }
  return {
    questions: shuffle(QUESTIONS).slice(0, 10),
    minutes: 15,
    passRatio: 0.7,
    title: 'Práctica',
  };
}
