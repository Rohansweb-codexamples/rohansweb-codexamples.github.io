# Base44 Dev Environment

## Project Type
Static HTML/CSS/JS website with a Node.js/Express backend for authentication and product management.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
- Runs a `node:22-slim` container that installs npm deps in `server/` and starts `server/server.js`.
- Serves static files from repo root + API routes under `/api/` on port 3000.
- Uses a JSON file database at `server/data.json` (auto-created, gitignored).

## Architecture
- **Backend**: `server/server.js` (Express), `server/db.js` (JSON file storage), `server/package.json`
- **Shared frontend**: `js/api.js` (auth/API utilities), `css/app.css` (shared theme)
- **Auth pages**: `login.html`, `signup.html`, `dashboard.html`, `admin.html`
- **Product pages** (admin-gated): `coding.html`, `builder.html`, `coding-kids.html`
- **Hidden app page**: `app.html` (not in nav — mobile app shell)

## User Roles
- `super_admin` — pre-seeded (`rohanwest@rohansweb.co.uk` / `Ewanandlam100`), creates admins, manages products, sees all users
- `admin` — creates students (username-based), manages products, sees own students
- `student` — logs in with username (not email), accesses enabled products
- `user` — self-signup with email, accesses enabled products

## Products
Three products disabled by default; admins toggle them in the admin panel:
- Coding Site (`coding.html`)
- Website Builder (`builder.html`)
- Coding for Kids (`coding-kids.html`)

## Notes
- No live-reload needed — Express serves files directly from the bind mount. After editing, refresh the preview.
- No external secrets required. JWT_SECRET has a dev default in server.js.
- `app.html` is intentionally not linked from navigation.
- After code changes to `server.js`, restart the container: `docker compose -f docker-compose.base44.yml restart`
