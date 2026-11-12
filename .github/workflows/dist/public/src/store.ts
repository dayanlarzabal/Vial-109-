import { create } from "zustand";
import { persist } from "zustand/middleware";

export type MockResult = {
  at: number;
  score: number;
  total: number;
  mode: string;
};

type ProgressState = {
  hydrated: boolean;
  answers: Record<string, boolean>;
  mocks: MockResult[];
  sound: boolean;
  streak: number;
  lastDay: string;
  record: (id: string, ok: boolean) => void;
  recordMock: (m: MockResult) => void;
  toggleSound: () => void;
  reset: () => void;
  setHydrated: (v: boolean) => void;
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function yesterday() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      hydrated: false,
      answers: {},
      mocks: [],
      sound: true,
      streak: 0,
      lastDay: "",
      record: (id, ok) =>
        set((s) => {
          const day = today();
          let streak = s.streak;
          if (s.lastDay !== day) {
            streak = s.lastDay === yesterday() ? s.streak + 1 : 1;
          }
          return {
            answers: { ...s.answers, [id]: ok },
            streak,
            lastDay: day,
          };
        }),
      recordMock: (m) => set((s) => ({ mocks: [m, ...s.mocks].slice(0, 24) })),
      toggleSound: () => set((s) => ({ sound: !s.sound })),
      reset: () => set({ answers: {}, mocks: [], streak: 0, lastDay: "" }),
      setHydrated: (v) => set({ hydrated: v }),
    }),
    {
      name: "vial-109",
      skipHydration: true,
      partialize: (s) => ({
        answers: s.answers,
        mocks: s.mocks,
        sound: s.sound,
        streak: s.streak,
        lastDay: s.lastDay,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    },
  ),
);
