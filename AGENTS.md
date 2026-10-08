# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- The app is our own code: change gameplay in `upstream-project/` (the Empires repo), commit there, then move
  the submodule here — never edit files inside the submodule checkout from this repo.
- `make arm` needs start-cli 2.x on PATH (2.3.0 is the default since 2026-10-08). From Claude's shell, Docker needs a
  temporary `DOCKER_CONFIG` holding `{}` and a `cli-plugins` link to `~/.docker/cli-plugins`, plus `DOCKER_HOST` from
  `docker context inspect` (the Desktop credential helper hangs there); without the link `s9pk pack` fails with
  "unknown shorthand flag: 'f'".
- `LICENSE` and `icon.svg` are symlinks into `upstream-project/`; update them upstream.
