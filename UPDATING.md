# Updating the upstream version

Upstream is the Empires game repository, included as the `upstream-project` git submodule
(`https://github.com/DigiMonk73/Empires.git`). The package builds the image from `upstream-project/Dockerfile`,
so the submodule commit *is* the pin. A push to `main` whose message starts with `Pin Empires` is the game
repository moving that pin; GitHub then builds the `.s9pk` and attaches it to a release.

## Determining the upstream version

- `git -C upstream-project log -1 --oneline` shows the pinned commit.
- `git -C upstream-project fetch && git -C upstream-project tag --sort=-creatordate | head` lists upstream tags
  (`m<N>` milestone tags, later `v<version>`).
- The upstream version string is `version` in `upstream-project/package.json`.

## Applying the bump

1. `git -C upstream-project fetch && git -C upstream-project checkout <tag-or-commit>`
2. Set `version` in `startos/versions/current.ts` to `<upstream package.json version>:0` (bump the `:N`
   revision instead when only the package changed), and update the release notes in all five locales.
3. `make arm` (or `make`) and install to verify; commit the submodule move with the version change.
