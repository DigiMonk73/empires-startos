import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.0:0',
  releaseNotes: {
    en_US: 'First StartOS build of Empires (early development preview).',
    es_ES: 'Primera versión de Empires para StartOS (vista previa de desarrollo).',
    de_DE: 'Erster StartOS-Build von Empires (frühe Entwicklungsvorschau).',
    pl_PL: 'Pierwsza wersja Empires dla StartOS (wczesna wersja rozwojowa).',
    fr_FR: 'Première version d’Empires pour StartOS (aperçu de développement).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
