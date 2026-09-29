# Updating the upstream version

Upstream is the Empires game repository, included as the `upstream-project` git submodule (a local path while
the repos have no GitHub home). The package builds the image from `upstream-project/Dockerfile`, so the
submodule commit *is* the pin.

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
