import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.11.0:0',
  releaseNotes: {
    en_US:
      'Sound comes alive: music composed as you play in each culture\'s own mode, calm in peace and driving in battle; units answer in the voice of their civilization — villagers, soldiers and priests; horses, elephants, lions, catapults, ships, fire and coins all have their own sounds. New Options on the main menu (and in the game menu) set the master, music, effects and voice volumes. Games saved with 0.8.0 or later still load.',
    es_ES:
      'El sonido cobra vida: música compuesta mientras juegas en el modo propio de cada cultura, tranquila en paz y enérgica en batalla; las unidades responden con la voz de su civilización —aldeanos, soldados y sacerdotes—; caballos, elefantes, leones, catapultas, barcos, fuego y monedas tienen sus propios sonidos. Las nuevas Opciones del menú principal (y del menú de partida) ajustan el volumen general, de la música, de los efectos y de las voces. Las partidas guardadas con la 0.8.0 o posterior siguen cargándose.',
    de_DE:
      'Der Klang erwacht: Musik, die beim Spielen im eigenen Modus jeder Kultur entsteht, ruhig im Frieden und treibend in der Schlacht; Einheiten antworten mit der Stimme ihrer Zivilisation – Dorfbewohner, Soldaten und Priester; Pferde, Elefanten, Löwen, Katapulte, Schiffe, Feuer und Münzen klingen jeweils eigen. Neue Optionen im Hauptmenü (und im Spielmenü) regeln Gesamt-, Musik-, Effekt- und Stimmenlautstärke. Spielstände ab 0.8.0 lassen sich weiterhin laden.',
    pl_PL:
      'Dźwięk ożywa: muzyka komponowana w trakcie gry w skali właściwej każdej kulturze, spokojna w czasie pokoju i porywająca w bitwie; jednostki odpowiadają głosem swojej cywilizacji — wieśniacy, żołnierze i kapłani; konie, słonie, lwy, katapulty, statki, ogień i monety mają własne dźwięki. Nowe Opcje w menu głównym (i w menu gry) ustawiają głośność ogólną, muzyki, efektów i głosów. Gry zapisane w 0.8.0 lub nowszej nadal się wczytują.',
    fr_FR:
      'Le son prend vie : une musique composée pendant la partie dans le mode propre à chaque culture, paisible en temps de paix et entraînante au combat ; les unités répondent avec la voix de leur civilisation — villageois, soldats et prêtres ; chevaux, éléphants, lions, catapultes, navires, feu et pièces ont chacun leur son. Les nouvelles Options du menu principal (et du menu de jeu) règlent le volume général, de la musique, des effets et des voix. Les parties sauvegardées avec la 0.8.0 ou ultérieure se chargent toujours.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
