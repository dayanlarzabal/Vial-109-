export const SCENES = {
  malecon: {
    src: "/scenes/malecon.jpg",
    alt: "Malecón de La Habana al atardecer, con autos clásicos junto al muro",
  },
  cruce: {
    src: "/scenes/cruce.jpg",
    alt: "Cruce sin señales visto desde el volante; un auto se aproxima por la derecha",
  },
  ninos: {
    src: "/scenes/ninos.jpg",
    alt: "Niños con mochilas caminando por la acera de una calle urbana",
  },
  noche: {
    src: "/scenes/noche.jpg",
    alt: "Carretera de noche con un auto de frente usando luces que deslumbran",
  },
  lluvia: {
    src: "/scenes/lluvia.jpg",
    alt: "Avenida bajo lluvia fuerte, vista a través del parabrisas",
  },
  emergencia: {
    src: "/scenes/emergencia.jpg",
    alt: "Ambulancia con balizas encendidas acercándose por detrás en el tráfico",
  },
  cebra: {
    src: "/scenes/cebra.jpg",
    alt: "Peatón que empieza a cruzar por un paso marcado",
  },
  terraplen: {
    src: "/scenes/terraplen.jpg",
    alt: "Auto en un camino de tierra entre palmas",
  },
  garaje: {
    src: "/scenes/garaje.jpg",
    alt: "Auto saliendo de un garaje hacia la calle, con un ciclista pasando",
  },
  ferrocarril: {
    src: "/scenes/ferrocarril.jpg",
    alt: "Paso a nivel con las barreras bajadas y luces rojas",
  },
} as const;

export type SceneId = keyof typeof SCENES;
