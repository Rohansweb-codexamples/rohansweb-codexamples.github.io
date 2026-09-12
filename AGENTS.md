# Base44 Dev Environment

## Project Type
Static HTML/CSS/JS website with a Node.js/Express backend for authentication, per-student product management, and a super admin website editor.

## Running
```
docker compose -f docker-compose.base44.yml up -d
```
- Runs a `node:22-slim` container that installs npm deps in `server/` and starts `server/server.js`.
- Serves static files from repo root + API routes under `/api/` on port 3000.
- Uses a JSON file database at `server/data.json` (auto-created, gitignored).

## Architecture
- **Backend**: `server/server.js` (Express + file API), `server/db.js` (JSON storage), `server/package.json`
- **Shared frontend**: `js/api.js` (auth/API utilities), `css/app.css` (shared theme)
- **Auth pages**: `login.html`, `signup.html`, `dashboard.html`, `admin.html`
- **Landing pages** (public): `coding.html`, `builder.html`, `coding-kids.html`
- **Editor pages** (login + product access required): `coding-editor.html`, `builder-editor.html`, `coding-kids-editor.html`
- **Super admin website editor**: `website-editor.html`

## User Roles
- `super_admin` — pre-seeded (`rohanwest@rohansweb.co.uk` / `Ewanandlam100`), creates admins, manages all students, edits website
- `admin` — creates students (username-based), manages own students (change password, set class, enable products per student)
- `student` — logs in with username, accesses only products assigned by admin
- `user` — self-signup with email, accesses all products

## Per-Student Product Access
Products are assigned to students individually by admins (not global enable/disable):
- Admin creates student with: username, password, class, product checkboxes
- Admin can edit student: change password, update class, toggle products
- Students only see products assigned to them on dashboard
- Admins/super_admin see all products

## Products
- Coding Site (`coding-editor.html`) — HTML/CSS/JS editor with live preview
- Website Builder (`builder-editor.html`) — visual block-based page builder with HTML export
- Coding for Kids (`coding-kids-editor.html`) — turtle graphics coding for children

## Super Admin Website Editor
`website-editor.html` — super admin can read and write any `.html` file in the repo root via the API at `/api/superadmin/page`.

## Notes
- No live-reload — Express serves files directly. After editing, refresh the preview.
- After changes to `server.js`, restart: `docker compose -f docker-compose.base44.yml restart`
- `app.html` has been removed (no separate app page).
- Landing pages are public; editor pages require login + product access.
