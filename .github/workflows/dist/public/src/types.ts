export type TopicId =
  | 'tramite'
  | 'categorias'
  | 'velocidad'
  | 'prioridad'
  | 'semaforos'
  | 'senales'
  | 'maniobras'
  | 'vehiculo'
  | 'usuarios'
  | 'sanciones';

export type SignGroup =
  | 'peligro'
  | 'prioridad'
  | 'prohibicion'
  | 'obligacion'
  | 'informacion'
  | 'marca';

export interface Question {
  id: string;
  topic: TopicId;
  prompt: string;
  options: string[];
  answer: number;
  explain: string;
  article?: string;
}

export interface Sign {
  id: string;
  name: string;
  group: SignGroup;
  meaning: string;
  tip?: string;
}

export interface Lesson {
  slug: string;
  title: string;
  summary: string;
  blocks: { heading?: string; body: string }[];
}

export type QuizMode =
  | 'simulacro'
  | 'rapido'
  | 'fallos'
  | 'senales'
  | `tema-${TopicId}`;
