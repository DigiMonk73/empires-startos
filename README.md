<p align="center">
  <img src="icon.svg" alt="Empires Logo" width="21%">
</p>

# Empires on StartOS

> Everything not listed in this document should behave the same as upstream
> Empires. If a feature, setting, or behavior is not mentioned here,
> the upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

Empires is an original ancient-world real-time strategy game that runs entirely in the player's browser. This
package serves the built game from a small static web server; all gameplay runs client-side. Upstream is the
`Empires` repository, included here as the `upstream-project` git submodule.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The image is built from upstream's own `Dockerfile` in `upstream-project/` for both architectures; nothing is
patched.

| Property      | Value                                                                  |
| ------------- | ---------------------------------------------------------------------- |
| Image source  | Custom build from `upstream-project/Dockerfile` (`dockerBuild`)        |
| Architectures | x86_64, aarch64                                                        |
| Entrypoint    | The image's own `CMD`: `node /app/server/serve.mjs` on port 80         |

One subcontainer, `empires-sub`, runs the static server. The server has no dependencies beyond Node.js and
answers `GET /healthz` with `{"ok":true,"service":"empires"}`. It gzips text files (the sprite metadata
`baked/metas.json` is ~2 MB raw). Only the hashed bundles under `assets/` are cached as immutable; the sprite
atlases under `baked/` keep their file names from one version to the next, so browsers revalidate them
(`Last-Modified` → `304`) and an update never shows old sprites against new metadata.

## Volume and Data Layout

| Volume | Mount point | Contents |
| ------ | ----------- | -------- |
| `main` | `/data`     | `saves/` — games saved **on the server** (one `<id>.save` file each; `DATA_DIR=/data`). Empty until a player saves there. |

Players choose where a game is saved: **This device** (the browser's own storage — including the rolling
autosave) or **Server** (this volume, shared by everyone who opens the interface). A save file is the game's own
format: `EMPS`, a version byte, a JSON header (name, time, map, age, the computer players' memory, the post-game
graph samples) and the simulation's bytes. The server reads only the header to list saves.

## File Models

None. The package writes no configuration files.

## Dependencies

None.

## Network Access and Interfaces

One HTTP interface serves the game. It is not password-protected: anyone who can reach the address can load
and play the game, and can list, load, overwrite and delete the games saved **on the server** (games saved on a
player's own device are not visible to anyone else). The server holds nothing else.

The same port answers the saved-games API used by the game:

| Request | Does |
| ------- | ---- |
| `GET /api/saves` | Lists the server's saves, newest first (details only) |
| `GET /api/saves/<id>` | Returns one save file |
| `PUT /api/saves/<id>` | Stores or replaces a save (ids `[A-Za-z0-9_-]`, at most 64 characters; the file's own id must match) |
| `DELETE /api/saves/<id>` | Deletes a save |

Limits: 16 MB per save and 100 saves on the server (a new save beyond that is refused until some are deleted);
each write goes to a temporary file of its own first, so a save is never left half-written and two players saving
the same game at once don't clash.

| Interface | ID   | Type | Container port | Purpose                     |
| --------- | ---- | ---- | -------------- | --------------------------- |
| Web Interface | `ui` | ui | 80 | The game, played in the browser |

The game uses only relative URLs, so it works at any address StartOS gives the interface.

## Installation and First-Run Flow

No setup is required. The server starts immediately and the game loads on first visit to the web interface.

## Actions

None.

## Tasks

None.

## Health Checks

| Check           | Method                                         | Passes when                  |
| --------------- | ---------------------------------------------- | ---------------------------- |
| Web Interface   | HTTP `GET http://127.0.0.1:80/healthz` (10 s grace at start) | The static server answers 200 |

A failing check means the Node server is not running; the service log shows why.

## Backups and Restore

The `main` volume is backed up, so games saved **on the server** are in StartOS backups and come back with a
restore. Games saved on a player's device (and the autosave) live in that browser and are not part of backups.

## Limitations and Differences

- Single-player against computer opponents only; multiplayer is not available yet.
- Games saved on **This device** are stored per browser (IndexedDB): clearing site data, or switching browser or
  device, loses them. Save on the **Server** to keep a game across devices.
- Server saves have no accounts: everyone who can open the interface shares one list of server saves.
- A saved game records the game's simulation version; saves from a different version refuse to load after an
  update.
- The game needs a browser with WebGL2 (any current desktop browser). Its sprites are decoded in the browser's
  graphics memory: a long game with many civilizations holds up to about 500 MB of them (sprites nothing on the map
  shows are released as it goes); a device short of graphics memory slows down in such games.

---

## Quick Reference for AI Consumers

```yaml
package_id: empires
image: built from upstream-project/Dockerfile
architectures: [x86_64, aarch64]
subcontainers: [empires-sub]
volumes:
  main: /data   # saves/ = server-side saved games (GET/PUT/DELETE /api/saves)
file_models: []
startos_managed_env_vars: []
dependencies: none
interfaces:
  ui: { type: ui, port: 80 }
actions: []
tasks: []
health_checks:
  - primary
```
