import { T } from '@start9labs/start-sdk'
import { i18n } from './i18n'
import { sdk } from './sdk'
import { uiPort } from './utils'

/** GET /healthz on the game's static server; quiet on failure (no stack traces in the service log). */
async function serverHealth(): Promise<Omit<T.NamedHealthCheckResult, 'name'>> {
  try {
    const res = await fetch(`http://127.0.0.1:${uiPort}/healthz`, {
      signal: AbortSignal.timeout(3000),
    })
    if (res.ok) return { result: 'success', message: i18n('The game is ready to play') }
  } catch {}
  return { result: 'failure', message: i18n('The game server is not responding') }
}

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting Empires!'))

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer: sdk.SubContainer.of(
      effects,
      { imageId: 'main' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/data',
        readonly: false,
      }),
      'empires-sub',
    ),
    exec: { command: sdk.useEntrypoint() },
    ready: {
      display: i18n('Web Interface'),
      gracePeriod: 10_000,
      fn: serverHealth,
    },
    requires: [],
  })
})
