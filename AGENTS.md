# Base44 Dev Environment

## Project Type
Static HTML/CSS/JS website (GitHub Pages site). No build system, no backend, no database.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
Serves static files via nginx:alpine on host port 3000.

## Notes
- All pages are standalone HTML files (`index.html`, `projects.html`, `games.html`, `videos.html`, `code-library.html`).
- `snippets.js` is loaded by `code-library.html`.
- No live-reload needed — nginx serves files directly from the bind mount. After editing HTML/CSS/JS, refresh the preview.
- No external secrets or credentials required.
