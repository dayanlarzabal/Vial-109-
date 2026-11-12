import type { Topic } from "./types";

export const TOPICS: Topic[] = [
  {
    id: "tramite",
    title: "Trámite y licencia",
    short: "Trámite",
    blurb: "Médico, teórico, práctico y revisiones.",
  },
  {
    id: "categorias",
    title: "Categorías",
    short: "Categorías",
    blurb: "A, A1, B, C, D, E, F y la vista.",
  },
  {
    id: "velocidad",
    title: "Velocidad",
    short: "Velocidad",
    blurb: "Artículos 126 a 128, con las trampas.",
  },
  {
    id: "prioridad",
    title: "Prioridad",
    short: "Prioridad",
    blurb: "Agente, derecha, T y emergencias.",
  },
  {
    id: "semaforos",
    title: "Semáforos y agentes",
    short: "Semáforos",
    blurb: "Luces, intermitentes y brazos.",
  },
  {
    id: "senales",
    title: "Señales y marcas",
    short: "Señales",
    blurb: "Forma, color y qué manda sobre qué.",
  },
  {
    id: "maniobras",
    title: "Maniobras",
    short: "Maniobras",
    blurb: "Giros, adelantamiento y parqueo.",
  },
  {
    id: "vehiculo",
    title: "Luces, carga y vehículo",
    short: "Vehículo",
    blurb: "Alumbrado, cinturón y carga saliente.",
  },
  {
    id: "usuarios",
    title: "Peatones y accidentes",
    short: "Usuarios",
    blurb: "Pasos, deberes y el artículo 69.",
  },
  {
    id: "sanciones",
    title: "Alcohol y sanciones",
    short: "Sanciones",
    blurb: "Cero profesional, puntos y negativa.",
  },
];

export const TOPIC_MAP = Object.fromEntries(TOPICS.map((t) => [t.id, t])) as Record<
  Topic["id"],
  Topic
>;
