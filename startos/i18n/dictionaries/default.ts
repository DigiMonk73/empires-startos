export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'Starting Empires!': 0,
  'Web Interface': 1,
  'The game is ready to play': 2,
  'The game server is not responding': 3,
  // interfaces.ts
  'Play Empires in your browser': 4,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
