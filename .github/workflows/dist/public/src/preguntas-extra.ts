/**
 * Vial 109 — Preguntas extra para pegar en src/data/questions.ts
 * Temas alineados con la app: tramite, categorias, velocidad, prioridad,
 * semaforos, senales, maniobras, vehiculo, usuarios, sanciones
 */

export const PREGUNTAS_EXTRA = [
  // —— Trámite ——
  {
    id: "tr-8",
    topic: "tramite",
    prompt: "¿Cuántas oportunidades tiene el aspirante para aprobar el examen teórico, según la práctica habitual del trámite?",
    options: [
      "Una sola",
      "Hasta tres oportunidades",
      "Ilimitadas mientras pague",
      "Dos al año y no más",
    ],
    answer: 1,
    explain:
      "En la práctica del trámite se contempla hasta tres oportunidades para el teórico. Confirme siempre en la oficina de Licencia de Conducción de su provincia, porque el MININT fija el método del examen.",
    article: "Práctica del trámite / Art. 274",
  },
  {
    id: "tr-9",
    topic: "tramite",
    prompt: "Aprobar el curso de la Escuela de Educación Vial y Conducción…",
    options: [
      "Sustituye el examen teórico del MININT",
      "Es requisito previo, pero no sustituye el examen oficial del MININT",
      "Solo sirve para la categoría A",
      "Exime del examen médico",
    ],
    answer: 1,
    explain:
      "El curso y su certificado son necesarios para el permiso de aprendizaje y el proceso, pero el examen teórico oficial lo realiza el Ministerio del Interior.",
    article: "Arts. 273–274 y 281",
  },
  {
    id: "tr-10",
    topic: "tramite",
    prompt: "Si al cumplir 65 años no presenta el resultado del examen de salud en la oficina de licencia…",
    options: [
      "No pasa nada hasta los 70",
      "Pueden suspenderle la licencia; si persiste, pueden cancelarla",
      "Solo le ponen una multa simbólica",
      "La licencia se renueva sola por correo",
    ],
    answer: 1,
    explain:
      "A los 65 y a los 70 hay que presentar el resultado. Después de los 70, cada dos años. El incumplimiento puede llevar a suspensión y, si continúa, a cancelación.",
    article: "Arts. 286, 288 y 289",
  },

  // —— Categorías ——
  {
    id: "cat-8",
    topic: "categorias",
    prompt: "Un microbús de 12 asientos de pasajeros (sin contar al conductor) requiere, como mínimo, la categoría…",
    options: ["B", "D1", "C1", "A"],
    answer: 1,
    explain:
      "D1 cubre transporte de pasajeros de 9 a 16 asientos. B solo llega hasta 8 asientos sin contar al conductor.",
    article: "Art. 264",
  },
  {
    id: "cat-9",
    topic: "categorias",
    prompt: "Para obtener la categoría E se exigen, como mínimo…",
    options: [
      "Dos años en B solamente",
      "Dos años en C y en D",
      "Cinco años en cualquier categoría",
      "Solo el examen práctico de articulado",
    ],
    answer: 1,
    explain:
      "E es para combinaciones y ómnibus articulados. La ley pide experiencia mínima de dos años en C y en D.",
    article: "Art. 265",
  },
  {
    id: "cat-10",
    topic: "categorias",
    prompt: "Según la Resolución 906/2022, para la licencia B la agudeza visual mínima es…",
    options: [
      "0,8 en un ojo y 0,5 en el otro",
      "0,6 en ambos ojos",
      "1,0 en ambos ojos",
      "No se exige visión binocular",
    ],
    answer: 1,
    explain:
      "Licencia B: 0,6 en los dos ojos y campo visual de 140 grados. Además hay que distinguir rojo, verde y amarillo en cada ojo.",
    article: "Resolución 906/2022 MINSAP",
  },

  // —— Velocidad ——
  {
    id: "vel-9",
    topic: "velocidad",
    prompt: "En autopista, un automóvil de hasta 3 500 kg puede circular como máximo a…",
    options: ["80 km/h", "90 km/h", "100 km/h", "120 km/h"],
    answer: 2,
    explain:
      "Art. 126: en autopista, autos de hasta 3 500 kg y ómnibus → 100 km/h. La carga rígida/articulada → 90; con remolque/grúa → 80.",
    article: "Art. 126.5",
  },
  {
    id: "vel-10",
    topic: "velocidad",
    prompt: "El Ministerio del Interior, mediante señalización, puede…",
    options: [
      "Solo bajar los límites, nunca subirlos",
      "Fijar un máximo menor para todos, o uno mayor solo para ligeros y ómnibus",
      "Eliminar todos los límites en zona rural",
      "Autorizar cualquier velocidad de noche",
    ],
    answer: 1,
    explain:
      "La señal puede imponer un máximo más bajo para todo tipo de vehículo, o uno superior limitado a vehículos ligeros y ómnibus.",
    article: "Art. 126 (párrafo final)",
  },
  {
    id: "vel-11",
    topic: "velocidad",
    prompt: "Al aproximarse a un ómnibus detenido en una parada, el conductor debe…",
    options: [
      "Mantener la misma velocidad si no hay niños a la vista",
      "Moderar la velocidad y extremar la precaución",
      "Adelantar siempre por la izquierda sin reducir",
      "Tocar bocina de forma continua",
    ],
    answer: 1,
    explain:
      "Hay que moderar la velocidad cerca de ómnibus detenidos, peatones, animales, con lluvia o pavimento resbaloso, entre otras situaciones del Código.",
    article: "Art. 128",
  },

  // —— Prioridad ——
  {
    id: "pr-9",
    topic: "prioridad",
    prompt: "Orden de prioridad cuando las indicaciones se contradicen:",
    options: [
      "Marca del pavimento → vertical → semáforo → agente",
      "Agente → provisional → semáforo/luces → vertical → horizontal",
      "Semáforo siempre manda sobre el agente",
      "La más antigua de las dos señales",
    ],
    answer: 1,
    explain:
      "1) Agentes de la PNR, reguladores militares y guardacruceros; 2) régimen provisional; 3) semáforos y señales luminosas/sonoras; 4) verticales; 5) horizontales.",
    article: "Art. 62",
  },
  {
    id: "pr-10",
    topic: "prioridad",
    prompt: "En un estrechamiento sin señales, ¿quién suele tener que ceder?",
    options: [
      "Siempre el más grande",
      "Quien se encuentra con dificultad para pasar; en la práctica se cede al que ya entró o al que la señal priorice",
      "El de la izquierda siempre",
      "Nadie: se pasa a la vez",
    ],
    answer: 1,
    explain:
      "Sin señal específica, no se fuerza el paso. Si hay señal de prioridad o de ceder en el estrecho, esa manda. No se entra si el otro ya está dentro.",
    article: "Arts. 78–79 y señalización de estrecho",
  },
  {
    id: "pr-11",
    topic: "prioridad",
    prompt: "Ante una caravana militar, cortejo escolar o fúnebre, el conductor…",
    options: [
      "Puede intercalarse si va con prisa",
      "Debe detenerse o no interrumpir, salvo vehículos de emergencia en servicio",
      "Solo cede si hay un agente",
      "Tiene prioridad por ser vehículo particular",
    ],
    answer: 1,
    explain:
      "Se detiene o no interrumpe esas formaciones. Los vehículos de emergencia en servicio urgente son la excepción.",
    article: "Art. 81",
  },

  // —— Semáforos ——
  {
    id: "se-10",
    topic: "semaforos",
    prompt: "Una luz verde intermitente en el semáforo indica…",
    options: [
      "Que puede acelerar sin límite",
      "Que el tiempo de verde está por concluir",
      "Que el semáforo está averiado",
      "Que debe detenerse de inmediato",
    ],
    answer: 1,
    explain:
      "El verde intermitente alerta de que la fase verde termina. Prepárese a detenerse si aún puede hacerlo con seguridad.",
    article: "Art. 152",
  },
  {
    id: "se-11",
    topic: "semaforos",
    prompt: "El semáforo de ocupación de carril con luz roja significa…",
    options: [
      "Que ese carril está libre",
      "Prohibición de ocupar ese carril; debe abandonarlo lo antes posible",
      "Que puede girar a la derecha",
      "Que el límite es 20 km/h",
    ],
    answer: 1,
    explain:
      "Rojo sobre el carril: no lo use. Verde: permitido. No exime de obedecer un semáforo de intersección en rojo ni otras señales de detención.",
    article: "Art. 153",
  },
  {
    id: "se-12",
    topic: "semaforos",
    prompt: "El agente balancea una luz roja hacia usted. Debe…",
    options: [
      "Acelerar para salir del cruce",
      "Detenerse",
      "Solo reducir a 20 km/h",
      "Ignorarla si el semáforo está en verde",
    ],
    answer: 1,
    explain:
      "La luz roja balanceada por el agente obliga a detenerse a quienes va dirigida. El agente manda sobre el semáforo.",
    article: "Art. 63.5 y 62",
  },
  {
    id: "se-13",
    topic: "semaforos",
    prompt: "Banderas desde un vehículo policial: la roja significa…",
    options: [
      "Peligro, reduzca",
      "La calzada queda temporalmente cerrada a partir del paso de ese vehículo",
      "Vía libre",
      "Solo afecta a peatones",
    ],
    answer: 1,
    explain:
      "Roja: cierre temporal de la calzada (salvo escoltas). Verde: se reabre. Amarilla: peligro, extreme la atención.",
    article: "Art. 63.9",
  },

  // —— Señales ——
  {
    id: "sen-8",
    topic: "senales",
    prompt: "Las señales de obligación son, por regla general…",
    options: [
      "Triángulos de borde rojo",
      "Círculos de fondo azul con símbolo blanco",
      "Rectángulos verdes",
      "Octágonos rojos",
    ],
    answer: 1,
    explain:
      "Grupo de obligación: forma circular, fondo azul, orla y símbolo en blanco. Indican el sentido o la conducta obligatoria.",
    article: "Arts. 165–166",
  },
  {
    id: "sen-9",
    topic: "senales",
    prompt: "Una señal rectangular azul con “P” blanca indica…",
    options: [
      "Prohibido parquear",
      "Zona de estacionamiento permitido",
      "Paso de peatones",
      "Prioridad de paso",
    ],
    answer: 1,
    explain:
      "Es señal de información de estacionamiento. Dentro de las marcas y sin otras prohibiciones, sí se puede parquear.",
    article: "Señales de información",
  },
  {
    id: "sen-10",
    topic: "senales",
    prompt: "Las marcas horizontales que prohíben circular sobre ellas (rayado oblicuo)…",
    options: [
      "Se pueden pisar si no viene nadie",
      "Indican zona donde no se circula ni se estaciona",
      "Solo prohíben a camiones",
      "Son decorativas",
    ],
    answer: 1,
    explain:
      "Las zonas de circulación prohibida marcadas en el pavimento no se invaden ni para “acortar” la curva.",
    article: "Art. 180",
  },
  {
    id: "sen-11",
    topic: "senales",
    prompt: "La línea de PARE pintada en el pavimento obliga a detenerse…",
    options: [
      "Encima de la línea",
      "Después de la línea, ya en el cruce",
      "Antes de la línea",
      "Solo si hay un agente",
    ],
    answer: 2,
    explain:
      "La detención es antes de la línea de PARE (o antes del paso de peatones si no hay línea). No se invade el cruce.",
    article: "Arts. 150 y 179",
  },

  // —— Maniobras ——
  {
    id: "man-8",
    topic: "maniobras",
    prompt: "En una vía de un solo sentido, el estacionamiento…",
    options: [
      "Siempre es en el lado derecho",
      "Puede ser en el lado izquierdo, salvo que la norma local o la señal digan otra cosa",
      "Está prohibido en toda la ciudad",
      "Solo se permite en diagonal",
    ],
    answer: 1,
    explain:
      "En doble sentido se parquea al contén derecho. En un solo sentido puede usarse el izquierdo, respetando señales y distancias.",
    article: "Art. 137",
  },
  {
    id: "man-9",
    topic: "maniobras",
    prompt: "Al estacionar cuesta arriba, la marcha que se deja metida es…",
    options: [
      "Reversa",
      "Primera (o la marcha hacia adelante que corresponda)",
      "Punto muerto",
      "Cualquiera da igual",
    ],
    answer: 1,
    explain:
      "Cuesta arriba: marcha hacia adelante. Cuesta abajo: reversa. Siempre freno de mano, motor apagado y, cuesta abajo, ruedas hacia el contén.",
    article: "Art. 138",
  },
  {
    id: "man-10",
    topic: "maniobras",
    prompt: "Está prohibido estacionar a menos de… de un hidrante.",
    options: ["1 metro", "4 metros", "10 metros", "40 metros"],
    answer: 1,
    explain:
      "No se estaciona a menos de 4 m de un hidrante, ni a 40 m antes y 10 m después de una parada de ómnibus, ni en un radio de 10 m de un paso a nivel, entre otras prohibiciones.",
    article: "Art. 139",
  },
  {
    id: "man-11",
    topic: "maniobras",
    prompt: "Al adelantar, el vehículo rebasado…",
    options: [
      "Puede acelerar para no dejarse pasar",
      "No debe aumentar la velocidad ni cerrar el paso; facilita la reincorporación",
      "Debe detenerse en el acto",
      "Debe tocar bocina",
    ],
    answer: 1,
    explain:
      "Quien es adelantado no acelera ni obstaculiza. Si hay peligro, facilita que el otro vuelva al carril.",
    article: "Art. 86",
  },

  // —— Vehículo ——
  {
    id: "ve-8",
    topic: "vehiculo",
    prompt: "Las luces de posición deben distinguirse, como mínimo, a…",
    options: ["40 metros", "100 metros", "300 metros", "10 metros"],
    answer: 2,
    explain:
      "Posición: visibles a unos 300 m. Cruce (baja): alumbrar al menos unos 40 m. Carretera (larga): unos 100 m cuando se circula a más de 40 km/h.",
    article: "Art. 184",
  },
  {
    id: "ve-9",
    topic: "vehiculo",
    prompt: "Un vehículo de tracción animal debe llevar de noche…",
    options: [
      "Solo una linterna en la mano del conductor",
      "Luz o reflector blanco adelante y rojo detrás",
      "Ninguna luz, porque no es de motor",
      "Solo luces de carretera",
    ],
    answer: 1,
    explain:
      "De noche o con mala visibilidad: indicador blanco al frente y rojo atrás (reflector u otro medio previsto).",
    article: "Art. 187",
  },
  {
    id: "ve-10",
    topic: "vehiculo",
    prompt: "Una carga que sobresale del vehículo, de día, se señala con…",
    options: [
      "Nada, si no sobresale más de 1 m",
      "Banderas rojas",
      "Solo con el triángulo de avería",
      "Pintura blanca en el suelo",
    ],
    answer: 1,
    explain:
      "De día: banderas rojas. De noche: luz o reflector blanco adelante y rojo atrás en la parte que sobresale.",
    article: "Art. 134",
  },
  {
    id: "ve-11",
    topic: "vehiculo",
    prompt: "En un vehículo con barandas de menos de 120 cm de altura, los pasajeros…",
    options: [
      "Pueden ir de pie sin problema",
      "Deben permanecer sentados",
      "Solo los niños deben sentarse",
      "La ley no dice nada",
    ],
    answer: 1,
    explain:
      "Si la baranda es inferior a 120 cm, los pasajeros van sentados. No se saca el cuerpo ni se arrojan objetos a la vía.",
    article: "Art. 148",
  },

  // —— Usuarios ——
  {
    id: "us-8",
    topic: "usuarios",
    prompt: "Un peatón puede cruzar entre vehículos parqueados…",
    options: [
      "Sí, si mira a ambos lados",
      "No: está prohibido cruzar entre vehículos parqueados o por delante/detrás de uno que se detiene",
      "Solo de noche",
      "Solo si no hay cebra a menos de 100 m",
    ],
    answer: 1,
    explain:
      "El art. 146 prohíbe cruzar entre vehículos parqueados, por delante o detrás de uno que se detiene, formar grupos que tapen la visibilidad e invadir la calzada.",
    article: "Art. 146",
  },
  {
    id: "us-9",
    topic: "usuarios",
    prompt: "Si tras un accidente con lesionados usted se ve obligado a llevar un herido al médico…",
    options: [
      "Ya no debe volver al lugar",
      "Debe regresar de inmediato al lugar; si no está la patrulla, presentarse en la unidad de la demarcación",
      "Solo basta con llamar por teléfono",
      "Puede irse a su casa después del hospital",
    ],
    answer: 1,
    explain:
      "La excepción de trasladar a un herido no libera de regresar al sitio del accidente y cooperar con la PNR.",
    article: "Art. 69",
  },
  {
    id: "us-10",
    topic: "usuarios",
    prompt: "Al oír una sirena de emergencia, el peatón que está cruzando la calzada…",
    options: [
      "Sigue hasta el otro lado sin mirar",
      "Regresa o alcanza de inmediato la acera o una zona de seguridad",
      "Se queda en el centro para no estorbar",
      "Corre en el mismo sentido del vehículo de emergencia",
    ],
    answer: 1,
    explain:
      "Conductores: orilla derecha y detenerse. Peatones en la calzada: volver a la acera o zona de seguridad.",
    article: "Art. 67",
  },

  // —— Sanciones ——
  {
    id: "sa-10",
    topic: "sanciones",
    prompt: "Conducir un vehículo estatal, de carga o de transporte público bajo cualquier efecto de alcohol…",
    options: [
      "Solo se multa si supera 0,5 g/L",
      "Está prohibido; la tolerancia es cero y puede suspender la licencia",
      "Está permitido si el viaje es corto",
      "Solo afecta a conductores noveles",
    ],
    answer: 1,
    explain:
      "Para profesionales, carga, transporte colectivo y sector estatal: cero alcohol. En el particular, se prohíbe conducir bajo niveles que afecten la capacidad (MINSAP).",
    article: "Arts. 93 y 288",
  },
  {
    id: "sa-11",
    topic: "sanciones",
    prompt: "Negarse a la prueba de alcohol cuando se la exige un agente…",
    options: [
      "No tiene consecuencia si no ha bebido",
      "Es por sí sola causal de sanción grave, incluida la suspensión",
      "Solo genera una advertencia",
      "Obliga al agente a llevarlo al hospital y nada más",
    ],
    answer: 1,
    explain:
      "Hay obligación de someterse a las pruebas. La negativa se sanciona; no es un derecho del conductor en ese contexto.",
    article: "Arts. 70 y 288",
  },
  {
    id: "sa-12",
    topic: "sanciones",
    prompt: "Después de una cancelación de la licencia, para volver a obtenerla hace falta…",
    options: [
      "Solo pagar una multa",
      "Aprobar de nuevo el curso de educación vial (y el resto del proceso que corresponda)",
      "Esperar 30 días y pedir un duplicado",
      "Nada: se reactiva sola",
    ],
    answer: 1,
    explain:
      "Cancelada la licencia, el camino de regreso incluye el curso de educación vial y los requisitos que fije el MININT.",
    article: "Art. 290",
  },
  {
    id: "sa-13",
    topic: "sanciones",
    prompt: "Un conductor novel (menos de 2 años de licencia) llega al límite de puntos…",
    options: [
      "Con el mismo total que un experimentado",
      "Antes: al alcanzar dos tercios de los puntos del régimen general",
      "Solo si comete una infracción “muy peligrosa”",
      "Los noveles no acumulan puntos",
    ],
    answer: 1,
    explain:
      "El novato tiene un umbral más bajo (dos tercios). Los valores exactos de puntos los fija el Consejo de Ministros.",
    article: "Art. 288",
  },
  {
    id: "sa-14",
    topic: "sanciones",
    prompt: "Según la Resolución 36/2019 del MININT, bajar hasta 12 puntos con reexamen voluntario exige, entre otras cosas…",
    options: [
      "Tener más de 36 puntos acumulados",
      "No superar 36 puntos, no tener multas fuera de término, y aprobar teórico y práctico (una vez en el año natural)",
      "Solo no manejar durante 15 días",
      "Cambiar de categoría de licencia",
    ],
    answer: 1,
    explain:
      "También puede reducirse hasta 12 puntos por 180 días sin infracciones, con las mismas condiciones de expediente. No borra una suspensión ya impuesta cuando corresponde.",
    article: "Resolución 36/2019 MININT",
  },
] as const;
