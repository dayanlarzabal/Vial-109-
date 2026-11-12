export type TopicId =
  | "tramite"
  | "categorias"
  | "velocidad"
  | "prioridad"
  | "semaforos"
  | "senales"
  | "maniobras"
  | "vehiculo"
  | "usuarios"
  | "sanciones";

export type Topic = {
  id: TopicId;
  title: string;
  short: string;
  blurb: string;
};

export type LessonBlock = {
  heading: string;
  body: string;
  trap?: boolean;
};

export type Lesson = {
  slug: TopicId;
  title: string;
  summary: string;
  scene?: string;
  blocks: LessonBlock[];
};

export type Question = {
  id: string;
  topic: TopicId;
  prompt: string;
  options: string[];
  answer: number;
  explain: string;
  article: string;
  hot?: boolean;
  scene?: string;
  sign?: string;
};

export type SignGroup =
  | "peligro"
  | "prioridad"
  | "prohibicion"
  | "obligacion"
  | "informacion"
  | "marca";

export type Sign = {
  id: string;
  name: string;
  group: SignGroup;
  meaning: string;
  tip?: string;
  draw: string;
  mark?: string;
};
