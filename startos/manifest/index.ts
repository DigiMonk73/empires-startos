import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'empires',
  title: 'Empires',
  license: 'MIT',
  // TODO(user): no GitHub home chosen yet — the repos are local-only for now (see AGENTS.local.md).
  packageRepo: 'https://github.com/REPLACE_ME/empires-startos',
  upstreamRepo: 'https://github.com/REPLACE_ME/empires',
  marketingUrl: 'https://github.com/REPLACE_ME/empires',
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
