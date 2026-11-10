import type { Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    slug: 'tramite',
    title: 'Trámite de la licencia',
    summary: 'Médico, teórico, práctico y requisitos del aspirante.',
    blocks: [
      {
        heading: 'Qué examenes hay',
        body: 'Según el art. 270, el aspirante se somete a examen médico, teórico y práctico. El MINSAP regula el médico (Res. 906/2022). El MININT realiza el teórico y el práctico (arts. 273–274).',
      },
      {
        heading: 'Curso de educación vial',
        body: 'Hace falta el curso avalado por la autoridad competente. Aprobar el curso no sustituye el examen teórico oficial del MININT.',
      },
      {
        heading: 'Revisiones por edad',
        body: 'A los 65 y a los 70 años debe presentarse el resultado del examen de salud. Después de los 70, cada dos años. El incumplimiento puede llevar a suspensión o cancelación (arts. 286–289).',
      },
    ],
  },
  {
    slug: 'categorias',
    title: 'Categorías de licencia',
    summary: 'A, A1, B, C, C1, D, D1, E, F y requisitos de experiencia.',
    blocks: [
      {
        heading: 'Categorías principales',
        body: 'A/A1: motocicletas. B: autos hasta 8 asientos (sin conductor) y hasta 3 500 kg. C/C1: carga. D/D1: pasajeros (D1: 9–16 asientos). E: combinaciones y articulados. F: tractores y maquinaria.',
      },
      {
        heading: 'Experiencia',
        body: 'Las categorías profesionales exigen tiempo mínimo en categorías inferiores (art. 265). Por ejemplo, E requiere experiencia en C y en D.',
      },
      {
        heading: 'Visión (Res. 906/2022)',
        body: 'B: 0,6 en ambos ojos. A: 0,8 y 0,5. C: 1,0 y 0,8. Debe distinguirse rojo, verde y amarillo.',
      },
    ],
  },
  {
    slug: 'velocidad',
    title: 'Límites de velocidad',
    summary: 'Art. 126–128: ciudad, carretera, autopista y casos especiales.',
    blocks: [
      {
        heading: 'Tabla básica (autos ≤ 3 500 kg)',
        body: 'Urbana: 50 km/h. Carretera: 90 km/h. Autopista: 100 km/h. Escuelas con niños a la vista: 20 km/h. El MININT puede fijar máximos distintos mediante señalización.',
      },
      {
        heading: 'Velocidad inadecuada',
        body: 'Art. 127: tampoco se circula tan despacio que se obstaculice el tránsito sin justificación. Art. 128: se modera cerca de ómnibus detenidos, peatones, animales, lluvia o pavimento resbaloso.',
      },
    ],
  },
  {
    slug: 'prioridad',
    title: 'Prioridad y derecho de paso',
    summary: 'Orden del art. 62, intersecciones y vehículos de emergencia.',
    blocks: [
      {
        heading: 'Orden de prioridad',
        body: '1) Agentes de la PNR, reguladores militares y guardacruceros. 2) Régimen provisional. 3) Semáforos y señales luminosas/sonoras. 4) Señales verticales. 5) Marcas horizontales.',
      },
      {
        heading: 'Sin señales',
        body: 'Se cede al que viene por la derecha (vías de igual categoría). En T, cede quien llega por el tramo sin continuidad. Se cede a emergencias con sirena/baliza: orilla derecha y detenerse.',
      },
    ],
  },
  {
    slug: 'semaforos',
    title: 'Semáforos y agentes',
    summary: 'Luces, intermitentes y señales del agente.',
    blocks: [
      {
        heading: 'Luces',
        body: 'Roja: detenerse antes de la línea o del paso peatonal. Amarilla: detenerse si es seguro. Verde: pasar con precaución. Roja intermitente ≈ PARE. Verde intermitente: el verde termina.',
      },
      {
        heading: 'Agente',
        body: 'Brazo vertical: alto para todos. Brazos horizontales: se detienen quienes están de frente o de espalda. El agente prevalece sobre el semáforo (art. 62).',
      },
    ],
  },
  {
    slug: 'senales',
    title: 'Señales y marcas',
    summary: 'Peligro, prioridad, prohibición, obligación e información.',
    blocks: [
      {
        heading: 'Formas',
        body: 'Peligro: triángulo rojo. PARE: octágono rojo. Prohibición: círculo con orla roja. Obligación: círculo azul. Información: rectángulos de colores según el tipo.',
      },
      {
        heading: 'Marcas',
        body: 'Línea continua: no invadir. Discontinua: se puede cambiar de carril. Línea de PARE: detenerse ANTES. Cebra: prioridad peatonal. Zona rayada: no circular ni estacionar.',
      },
    ],
  },
  {
    slug: 'maniobras',
    title: 'Maniobras y estacionamiento',
    summary: 'Giros, adelantamientos y dónde no parquear.',
    blocks: [
      {
        heading: 'Reglas básicas',
        body: 'Señalizar con anticipación. Adelantar solo si la maniobra se completa con seguridad. El rebasado no acelera ni cierra el paso.',
      },
      {
        heading: 'Estacionamiento',
        body: 'Doble sentido: contén derecho. Un sentido: puede usarse el izquierdo si no hay prohibición. Prohibido a menos de 4 m de hidrante, en paradas de ómnibus, pasos a nivel, etc. (art. 139).',
      },
    ],
  },
  {
    slug: 'vehiculo',
    title: 'Vehículo, luces y carga',
    summary: 'Iluminación, carga saliente y pasajeros.',
    blocks: [
      {
        heading: 'Luces',
        body: 'Posición visibles a ~300 m. Cruce alumbra ~40 m. Carretera ~100 m. Cambiar a cruce para no deslumbrar.',
      },
      {
        heading: 'Carga y pasajeros',
        body: 'Carga saliente: banderas rojas de día; luces/reflectores de noche. Con barandas bajas (< 120 cm) los pasajeros van sentados.',
      },
    ],
  },
  {
    slug: 'usuarios',
    title: 'Peatones y accidentes',
    summary: 'Deberes del peatón y actuación tras un siniestro.',
    blocks: [
      {
        heading: 'Peatones',
        body: 'Cruzar por pasos marcados o esquinas. Prohibido cruzar entre vehículos parqueados. Ante sirena: volver a la acera.',
      },
      {
        heading: 'Accidentes (art. 69)',
        body: 'Detenerse, auxiliar, no alterar evidencias, avisar a la autoridad. Si se traslada a un herido, regresar al lugar o presentarse en la unidad de la demarcación.',
      },
    ],
  },
  {
    slug: 'sanciones',
    title: 'Sanciones, alcohol y puntos',
    summary: 'Prohibiciones graves y régimen de puntos.',
    blocks: [
      {
        heading: 'Alcohol',
        body: 'Cero para profesionales, carga, transporte público y sector estatal. En particular, no conducir bajo niveles que afecten la capacidad. Negarse a la prueba se sanciona.',
      },
      {
        heading: 'Puntos',
        body: 'El Consejo de Ministros fija los valores. Los noveles alcanzan el límite antes (dos tercios). La Res. 36/2019 regula reducciones por buena conducta o reexamen voluntario.',
      },
    ],
  },
];

export const lessonBySlug = Object.fromEntries(LESSONS.map((l) => [l.slug, l]));
