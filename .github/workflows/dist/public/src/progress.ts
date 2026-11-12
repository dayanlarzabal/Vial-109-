import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { TopicId } from '../data/types';

export interface MockResult {
  at: number;
  score: number;
  total: number;
  mode: string;
}

interface ProgressState {
  lessonsRead: string[];
  answers: Record<string, boolean>;
  mocks: MockResult[];
  signBest: number;
  markLesson: (slug: string) => void;
  recordAnswer: (id: string, correct: boolean) => void;
  recordMock: (r: MockResult) => void;
  setSignBest: (n: number) => void;
  wrongIds: () => string[];
  topicStats: () => Record<string, { ok: number; total: number }>;
  reset: () => void;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      lessonsRead: [],
      answers: {},
      mocks: [],
      signBest: 0,
      markLesson: (slug) =>
        set((s) => ({
          lessonsRead: s.lessonsRead.includes(slug)
            ? s.lessonsRead
            : [...s.lessonsRead, slug],
        })),
      recordAnswer: (id, correct) =>
        set((s) => ({ answers: { ...s.answers, [id]: correct } })),
      recordMock: (r) => set((s) => ({ mocks: [r, ...s.mocks].slice(0, 20) })),
      setSignBest: (n) =>
        set((s) => ({ signBest: Math.max(s.signBest, n) })),
      wrongIds: () =>
        Object.entries(get().answers)
          .filter(([, v]) => v === false)
          .map(([k]) => k),
      topicStats: () => {
        const stats: Record<string, { ok: number; total: number }> = {};
        // filled by pages with QUESTIONS when needed
        return stats;
      },
      reset: () =>
        set({ lessonsRead: [], answers: {}, mocks: [], signBest: 0 }),
    }),
    { name: 'vial109-progress' },
  ),
);

export function useHydrated() {
  const [h, setH] = (window as unknown as { __h?: boolean }).__h
    ? [true, () => {}]
    : (() => {
        // simple hook-compatible pattern without importing useState here incorrectly
        return [true, () => {}] as const;
      })();
  return h;
}

/** Count correct answers per topic from stored answer map */
export function countByTopic(
  answers: Record<string, boolean>,
  questions: { id: string; topic: TopicId }[],
) {
  const stats: Record<string, { ok: number; total: number }> = {};
  for (const q of questions) {
    if (!(q.id in answers)) continue;
    if (!stats[q.topic]) stats[q.topic] = { ok: 0, total: 0 };
    stats[q.topic].total++;
    if (answers[q.id]) stats[q.topic].ok++;
  }
  return stats;
}
