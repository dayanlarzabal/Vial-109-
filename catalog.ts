import type { TopicId } from './types';

export const TOPICS: { id: TopicId; title: string; short: string }[] = [
  { id: 'tramite', title: 'Trámite y licencia', short: 'Trámite' },
  { id: 'categorias', title: 'Categorías de licencia', short: 'Categorías' },
  { id: 'velocidad', title: 'Límites de velocidad', short: 'Velocidad' },
  { id: 'prioridad', title: 'Prioridad y derecho de paso', short: 'Prioridad' },
  { id: 'semaforos', title: 'Semáforos y agentes', short: 'Semáforos' },
  { id: 'senales', title: 'Señales y marcas', short: 'Señales' },
  { id: 'maniobras', title: 'Maniobras y estacionamiento', short: 'Maniobras' },
  { id: 'vehiculo', title: 'Vehículo y carga', short: 'Vehículo' },
  { id: 'usuarios', title: 'Peatones y accidentes', short: 'Usuarios' },
  { id: 'sanciones', title: 'Sanciones y puntos', short: 'Sanciones' },
];

export const topicById = Object.fromEntries(TOPICS.map((t) => [t.id, t])) as Record<
  TopicId,
  (typeof TOPICS)[number]
>;

export const SIGN_GROUPS: { id: string; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'peligro', label: 'Peligro' },
  { id: 'prioridad', label: 'Prioridad' },
  { id: 'prohibicion', label: 'Prohibición' },
  { id: 'obligacion', label: 'Obligación' },
  { id: 'informacion', label: 'Información' },
  { id: 'marca', label: 'Marcas' },
];
