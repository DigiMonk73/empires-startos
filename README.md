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
answers `GET /healthz` with `{"ok":true,"service":"empires"}`.

## Volume and Data Layout

The package declares one volume so that future server-side features (saved games, multiplayer lobbies) have a
home; the current game stores nothing on the server.

| Volume | Mount point | Contents                                                   |
| ------ | ----------- | ---------------------------------------------------------- |
| `main` | `/data`     | Empty today. Reserved for server-side saves (`DATA_DIR`). |

Saved games and settings live in each player's browser storage, not on the server.

## File Models

None. The package writes no configuration files.

## Dependencies

None.

## Network Access and Interfaces

One HTTP interface serves the game. It is not password-protected: anyone who can reach the address can load
and play the game, which exposes no data from the server.

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

The `main` volume is backed up. It holds no data yet, so a restore returns the service to a working state with
nothing to recover; players' saved games live in their browsers and are not part of StartOS backups.

## Limitations and Differences

- Single-player against computer opponents only; multiplayer is not available yet.
- Saved games are stored per browser (IndexedDB). Clearing site data, or switching browser or device, loses them.
- A saved game records the game's simulation version; saves from a different version refuse to load after an
  update.
- The game needs a browser with WebGL2 (any current desktop browser).

---

## Quick Reference for AI Consumers

```yaml
package_id: empires
image: built from upstream-project/Dockerfile
architectures: [x86_64, aarch64]
subcontainers: [empires-sub]
volumes:
  main: /data
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
