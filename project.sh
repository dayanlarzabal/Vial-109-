#!/usr/bin/env bash
# Vial 109 — script de instalación y build
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

cmd="${1:-help}"

install_deps() {
  echo "→ Instalando dependencias..."
  npm install
  echo "✓ Listo"
}

build_app() {
  echo "→ Compilando producción (dist/)..."
  npm run build
  echo "✓ Build en: $ROOT/dist"
}

dev_server() {
  echo "→ Servidor de desarrollo (Ctrl+C para salir)"
  npm run dev -- --host
}

preview_server() {
  if [[ ! -d dist ]]; then
    build_app
  fi
  echo "→ Preview de producción en http://localhost:4173"
  npm run preview -- --host --port 4173
}

gh_pages_hint() {
  cat <<'TXT'
Para GitHub Pages:
  1. git remote add origin https://github.com/USUARIO/vial-109.git
  2. git add -A && git commit -m "Vial 109 — app licencia Cuba"
  3. git branch -M main && git push -u origin main
  4. En el repo: Settings → Pages → Source: GitHub Actions
     o sube la carpeta dist/ a la rama gh-pages.

  Si usas base path (repo no-root):
    en vite.config.ts pon: base: '/vial-109/'
    y vuelve a ejecutar: ./project.sh build
TXT
}

case "$cmd" in
  install)
    install_deps
    ;;
  build)
    install_deps
    build_app
    ;;
  dev)
    install_deps
    dev_server
    ;;
  preview)
    install_deps
    preview_server
    ;;
  github)
    gh_pages_hint
    ;;
  all)
    install_deps
    build_app
    echo ""
    gh_pages_hint
    ;;
  help|*)
    cat <<'TXT'
Uso: ./project.sh <comando>

  install   Instala npm dependencies
  build     Instala + genera dist/ para producción
  dev       Servidor de desarrollo con hot reload
  preview   Sirve dist/ en local (puerto 4173)
  github    Instrucciones para subir a GitHub Pages
  all       install + build + tips de GitHub

Ejemplos:
  chmod +x project.sh
  ./project.sh build
  ./project.sh preview
TXT
    ;;
esac
