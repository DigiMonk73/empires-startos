import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.0:0',
  releaseNotes: {
    en_US: 'First playable skirmish: Stone, Tool and Bronze Ages against computer opponents (Easiest to Hardest), conquest victory, save and load, sound.',
    es_ES: 'Primera escaramuza jugable: Edad de Piedra, de las Herramientas y del Bronce contra oponentes controlados por el ordenador (de Muy fácil a Muy difícil), victoria por conquista, guardar y cargar partidas, sonido.',
    de_DE: 'Erstes spielbares Gefecht: Stein-, Werkzeug- und Bronzezeit gegen Computergegner (sehr leicht bis sehr schwer), Sieg durch Eroberung, Spielstände speichern und laden, Ton.',
    pl_PL: 'Pierwsza grywalna potyczka: epoka kamienia, narzędzi i brązu przeciwko przeciwnikom komputerowym (od bardzo łatwego do bardzo trudnego), zwycięstwo przez podbój, zapis i wczytywanie gry, dźwięk.',
    fr_FR: 'Première escarmouche jouable : âges de pierre, des outils et du bronze contre des adversaires contrôlés par l’ordinateur (de très facile à très difficile), victoire par conquête, sauvegarde et chargement, son.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
