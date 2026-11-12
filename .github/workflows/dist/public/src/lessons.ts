import type { Lesson } from "./types";

export const LESSONS: Lesson[] = [
  {
    slug: "tramite",
    title: "Trámite de la licencia",
    summary: "Tres exámenes. El curso no sustituye al teórico del MININT.",
    blocks: [
      {
        heading: "Qué hay que vencer",
        body: "El aspirante se somete a examen médico, teórico y práctico. El médico lo regula el MINSAP (Resolución 906/2022). El teórico y el práctico los hace el Ministerio del Interior, que también fija el contenido y la forma.",
      },
      {
        heading: "El curso no alcanza",
        body: "Hace falta el curso de educación vial avalado. Aprobarlo no sustituye el examen teórico oficial. El día de la prueba se presentan la identidad, el certificado médico y la constancia del curso.",
      },
      {
        heading: "Edad y revisiones",
        body: "La edad mínima general es 18 años. A los 65 y a los 70 hay que presentar el examen de salud. Después de los 70, cada dos años. Incumplir puede llevar a suspensión o cancelación.",
      },
      {
        heading: "La licencia no se presta",
        body: "Es personal e intransferible. Circular sin ella, o dejar que otra persona conduzca con la suya, es infracción. El vehículo, además, debe circular con su documentación.",
      },
    ],
  },
  {
    slug: "categorias",
    title: "Categorías de licencia",
    summary: "Qué puede manejar cada letra y qué vista piden.",
    blocks: [
      {
        heading: "Las letras",
        body: "A1: motocicletas de cilindrada y potencia limitadas (el temario usual: hasta 125 cm³). A: el resto de las motos. B: autos hasta 8 asientos sin contar al conductor y hasta 3 500 kg. C y C1: carga. D y D1: pasajeros (D1, el rango intermedio de asientos). E: combinaciones y articulados. F: tractores y maquinaria.",
      },
      {
        heading: "No se salta de categoría",
        body: "Las profesionales piden tiempo mínimo en una inferior. C exige experiencia en B. E exige experiencia en C y en D. No se obtiene «de entrada» solo con el médico.",
      },
      {
        heading: "La vista (Resolución 906/2022)",
        body: "A: 0,8 en un ojo y 0,5 en el otro. B: 0,6 en los dos ojos. C: 1,0 en un ojo y 0,8 en el otro. Hay que distinguir rojo, verde y amarillo. El examen médico incluye oftalmología, psicología y el criterio del médico de la familia.",
      },
    ],
  },
  {
    slug: "velocidad",
    title: "Límites de velocidad",
    summary: "La tabla del 126 y las cinco excepciones del 127.",
    scene: "terraplen",
    blocks: [
      {
        heading: "Artículo 126, la tabla",
        body: "Urbana: 50 km/h para todos los vehículos de motor, no solo los ligeros. Carretera: 90 los autos de hasta 3 500 kg y los ómnibus; 80 la carga rígida y articulada; 70 con remolque, grúas y similares. Autopista: 100, 90 y 80 en ese mismo orden. Equipos de construcción, industriales, tractores y maquinaria agrícola: 20 km/h. El MININT puede bajar cualquier límite con señal, y subirlo solo para ligeros y ómnibus.",
      },
      {
        heading: "Zona de niños no es 20",
        body: "Artículo 127: en zona de niños, máximo 40 km/h en urbana y 60 km/h en rural. Los 20 km/h son la salida de garajes, edificios y parqueos interiores, y también el tope de tractores y equipos. En terraplén o camino de tierra no se pasan de 60. En túnel la mínima obligatoria es 60; la máxima la pone la señal.",
        trap: true,
      },
      {
        heading: "Ni muy rápido ni muy lento",
        body: "No se circula tan despacio que se afecte la fluidez, salvo que la seguridad lo exija. El artículo 128 obliga a moderar y, si hace falta, a detenerse: poca visibilidad, lluvia, curva, pendiente, peatones, ómnibus detenido, deslumbramiento u obras.",
      },
    ],
  },
  {
    slug: "prioridad",
    title: "Prioridad y derecho de paso",
    summary: "Quién manda cuando todo se contradice.",
    scene: "cruce",
    blocks: [
      {
        heading: "El orden del artículo 62",
        body: "1) Agentes de la PNR, reguladores militares y guardacruceros. 2) Régimen provisional. 3) Semáforos y señales luminosas o sonoras. 4) Señales verticales. 5) Marcas en el pavimento. El agente manda aunque el semáforo diga verde.",
      },
      {
        heading: "Si no hay nada",
        body: "En vías de igual categoría se cede al que se aproxima por la derecha. En una T, cede quien llega por el tramo que no continúa. Dentro de una glorieta, salvo señal contraria, tiene preferencia quien ya está circulando.",
      },
      {
        heading: "Emergencias",
        body: "Sirena y baliza: arrimarse al borde derecho y detenerse. No vale «voy en verde». Los peatones regresan a la acera. No se aprovecha el hueco para pegarse a la ambulancia.",
      },
    ],
  },
  {
    slug: "semaforos",
    title: "Semáforos y el agente",
    summary: "Roja, ámbar, verde y lo que hacen los brazos.",
    blocks: [
      {
        heading: "Luces fijas",
        body: "Roja: detenerse antes de la línea de PARE o del paso de peatones, sin invadir el cruce. Ámbar fija: detenerse si todavía se puede con seguridad; si no, terminar el cruce. Verde: pasar con precaución. El verde no es un permiso para no mirar.",
      },
      {
        heading: "Intermitentes",
        body: "Roja intermitente equivale a PARE: detención y ceder. Verde intermitente avisa que el verde está por terminar. Ámbar intermitente pide precaución y no otorga prioridad. Semáforo apagado: el cruce se trata como intersección sin señales.",
        trap: true,
      },
      {
        heading: "El agente",
        body: "Brazo vertical: alto para todos, de inmediato. Brazos extendidos en horizontal: se detienen los que vienen de frente y de espalda; pueden seguir los que llegan de lado. Un balanceo invita a continuar o a acelerar el despeje. El silbato refuerza; no hace falta para obedecer.",
      },
    ],
  },
  {
    slug: "senales",
    title: "Señales y marcas",
    summary: "La forma dice el grupo antes de leer el dibujo.",
    blocks: [
      {
        heading: "Formas que caen siempre",
        body: "Peligro: triángulo con borde rojo. PARE: octágono rojo, detención total. Ceda el paso: triángulo invertido; se detiene solo si hace falta. Prohibición: círculo con orla roja. Obligación: círculo azul. Información: rectángulos. La vertical manda sobre la marca del piso.",
      },
      {
        heading: "Dos prohibidos que se confunden",
        body: "Acceso prohibido (no entrar) es el disco rojo con barra blanca horizontal: no se entra en ese sentido. Circulación prohibida es el círculo blanco con orla roja, vacío: no circula ningún vehículo. Prohibido estacionar es azul con una barra roja; prohibido detenerse es azul con una cruz roja.",
        trap: true,
      },
      {
        heading: "El piso",
        body: "Línea continua: no invadir ni adelantar sobre ella. Discontinua: se puede cambiar de carril si es seguro. La línea de PARE se respeta antes, no encima. La cebra da prioridad al peatón. La zona rayada no se pisa ni se usa para parquear. Las flechas de carril obligan el movimiento que dibujan.",
      },
    ],
  },
  {
    slug: "maniobras",
    title: "Maniobras y estacionamiento",
    summary: "Señalizar, mirar, y no inventar el adelantamiento.",
    blocks: [
      {
        heading: "Antes de moverse",
        body: "Todo giro o cambio de carril se señaliza con anticipación y solo se hace si cabe con seguridad. El retroceso es corto, sin molestar, y no es una forma de incorporarse a una vía principal.",
      },
      {
        heading: "Adelantar",
        body: "Por la izquierda, cuando se puede terminar la maniobra y volver al carril. Prohibido en curva, cambio de rasante, paso de peatones, paso a nivel, intersección y sobre línea continua. El rebasado no acelera ni cierra el paso. Por la derecha solo en los casos que la vía lo permite, no «porque va lento».",
      },
      {
        heading: "Dónde no se deja el auto",
        body: "Doble sentido: junto al contén derecho. Un solo sentido: también el izquierdo si no hay prohibición. Prohibido a menos de 4 m de un hidrante, en parada de ómnibus, acera, paso peatonal, cruce, puente, túnel, curva y doble fila.",
      },
    ],
  },
  {
    slug: "vehiculo",
    title: "Luces, carga y vehículo",
    summary: "Ver y no deslumbrar. La carga que sobresale se marca.",
    scene: "noche",
    blocks: [
      {
        heading: "Qué luz va",
        body: "De noche o con poca visibilidad se usan cruce o carretera, no solo las de posición. Las de posición se perciben a unos 300 m. El cruce alumbra unos 40 m sin deslumbrar. La carretera, unos 100 m. Se baja a cruce al cruzarse o al alcanzar a alguien.",
        trap: true,
      },
      {
        heading: "Cinturón, casco, teléfono",
        body: "Cinturón para conductor y pasajeros cuando el vehículo lo tiene. Casco para quien maneja moto y para el acompañante. El teléfono en la mano está prohibido: la distracción es la falla que el teórico repite junto al factor humano.",
      },
      {
        heading: "Carga",
        body: "Si sobresale, de día banderas rojas; de noche luz o reflector blanco adelante y rojo atrás. No puede tapar luces, chapa ni la vista del conductor. Con barandas bajas los pasajeros van sentados, no de pie asomados.",
      },
    ],
  },
  {
    slug: "usuarios",
    title: "Peatones y accidentes",
    summary: "La cebra no se negocia. El lugar del accidente no se abandona.",
    scene: "cebra",
    blocks: [
      {
        heading: "El peatón",
        body: "Circula por la acera. Si no hay, por el borde de la calzada. Cruza por la esquina o por el paso marcado, no entre vehículos parqueados ni por delante de un auto que acaba de detenerse. En la cebra tiene prioridad. Ante una emergencia, vuelve a la acera.",
      },
      {
        heading: "Artículo 69",
        body: "Quien se vea en un accidente se detiene, auxilia, no altera evidencias y avisa a la autoridad. No se mueven los vehículos si hay heridos o si cambia la prueba, salvo para proteger una vida. Si se traslada a un herido, hay que regresar al lugar o presentarse en la unidad de la demarcación.",
      },
      {
        heading: "Paso a nivel",
        body: "Barrera baja o luz roja: detención total, aunque no se vea el tren. No se rodea la barrera. La cruz de San Andrés avisa el cruce; los paneles de aproximación (tres, dos y una barra) dicen que falta menos.",
      },
    ],
  },
  {
    slug: "sanciones",
    title: "Alcohol, puntos y sanciones",
    summary: "Cero para quien trabaja con el vehículo. Negarse también cuenta.",
    blocks: [
      {
        heading: "Alcohol",
        body: "Tolerancia cero para transporte público, carga, vehículos estatales y conductores profesionales. Negarse a la prueba que exige el agente se sanciona y puede llevar a suspensión. La Resolución 905/2022 del MINSAP usa miligramos por litro: hasta 24 mg/L se considera negativo; de 25 a 49, positivo con riesgo; de 50 a 99, positivo con afectación, aunque no sea embriaguez.",
        trap: true,
      },
      {
        heading: "Puntos",
        body: "Los valores los fija el Consejo de Ministros. El conductor novel (menos de dos años) llega al límite antes: a los dos tercios. La Resolución 36/2019 permite, con expediente limpio y sin pasar de 36 puntos, bajar hasta 12 por reexamen voluntario (teórico y práctico, una vez en el año) o por 180 días sin infracciones. Eso no borra una suspensión ya impuesta.",
      },
      {
        heading: "La causa que pone el temario",
        body: "La Ley trata la seguridad vial como sistema, y el teórico responde que la causa principal de los accidentes es el factor humano: velocidad, alcohol, distracción y no ceder. No es «la vía» ni «el carro viejo» como primera opción.",
      },
    ],
  },
];

export const LESSON_MAP = Object.fromEntries(LESSONS.map((l) => [l.slug, l]));
