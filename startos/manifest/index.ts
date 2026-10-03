import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'empires',
  title: 'Empires',
  license: 'MIT',
  packageRepo: 'https://github.com/DigiMonk73/empires-startos',
  upstreamRepo: 'https://github.com/DigiMonk73/Empires',
  marketingUrl: 'https://github.com/DigiMonk73/Empires',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: { dockerBuild: { workdir: './upstream-project' } },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
