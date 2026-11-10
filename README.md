# Vial 109 — Licencia de conducción (Cuba)

PWA para estudiar el **examen teórico** de la licencia de conducción en Cuba, basada en la **Ley 109 (Código de Seguridad Vial)**.

> Material de estudio. El examen oficial lo aplica el Ministerio del Interior (MININT).

## Contenido

- 10 lecciones (trámite, categorías, velocidad, prioridad, semáforos, señales, maniobras, vehículo, usuarios, sanciones)
- Galería de señales de tránsito con filtros
- Banco de preguntas con simulacro (30 preguntas, 60 min, umbral 70 %)
- Práctica por tema, repaso de fallos y quiz de señales
- Progreso guardado en el dispositivo (localStorage)
- Instalable en Android como app (Añadir a pantalla de inicio)

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm

## Inicio rápido

```bash
chmod +x project.sh
./project.sh build      # instala dependencias y genera dist/
./project.sh preview    # abre http://localhost:4173
```

O manualmente:

```bash
npm install
npm run dev       # desarrollo
npm run build     # producción → carpeta dist/
npm run preview   # previsualizar dist/
```

## Subir a GitHub

```bash
git init
git add -A
git commit -m "Vial 109 — preparador licencia Cuba (Ley 109)"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vial-109.git
git push -u origin main
```

Para **GitHub Pages** (sitio estático desde `dist/`):

1. En `vite.config.ts`, si el repo no es usuario.github.io, pon:
   ```ts
   base: '/vial-109/',
   ```
2. `./project.sh build`
3. Settings → Pages → Deploy from branch `gh-pages`, o usa una Action que publique `dist/`.

También puedes arrastrar la carpeta `dist/` a [https://app.netlify.com/drop](https://app.netlify.com/drop) para un enlace público en segundos.

## Estructura

```
src/
  data/          # lecciones, señales, preguntas
  components/    # Shell, QuizRunner, SignArt
  pages/         # Inicio, Estudiar, Señales, Examen, Avance
  lib/           # progreso (zustand) y motor de quiz
public/          # manifest PWA e iconos
dist/            # build de producción (generado)
project.sh       # script install / build / preview
```

## Licencia del contenido

El texto de estudio se inspira en la normativa pública cubana (Ley 109 y resoluciones complementarias). Esta app no es un producto oficial del MININT ni del MINSAP.
