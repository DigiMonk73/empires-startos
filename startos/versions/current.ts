import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.12.0:0',
  releaseNotes: {
    en_US:
      'Save games on your StartOS server and continue them on any device (they are included in backups); an autosave keeps your skirmish every 5 minutes. Diplomacy: set each player to Ally, Neutral or Enemy and send tribute through a Market. New Options: scrolling, starting speed, Classic or Grid hotkeys, and each modern convenience on or off — or all off with the Classic preset. Messages tell you about attacks out of sight, new ages and Wonders; the results screen graphs the whole game; Help and Credits join the main menu. Games saved with 0.8.0 or later still load.',
    es_ES:
      'Guarda partidas en tu servidor StartOS y continúalas en cualquier dispositivo (se incluyen en las copias de seguridad); un autoguardado conserva tu escaramuza cada 5 minutos. Diplomacia: marca a cada jugador como Aliado, Neutral o Enemigo y envía tributos a través de un Mercado. Nuevas Opciones: desplazamiento, velocidad inicial, atajos Clásicos o en Cuadrícula, y cada comodidad moderna activable por separado, o todas desactivadas con el preajuste Clásico. Los mensajes avisan de ataques fuera de la vista, nuevas edades y Maravillas; la pantalla de resultados muestra gráficas de toda la partida; Ayuda y Créditos llegan al menú principal. Las partidas guardadas con la 0.8.0 o posterior siguen cargándose.',
    de_DE:
      'Spielstände auf deinem StartOS-Server speichern und auf jedem Gerät fortsetzen (sie sind in Backups enthalten); eine automatische Speicherung sichert dein Gefecht alle 5 Minuten. Diplomatie: jeden Spieler als Verbündeten, Neutral oder Feind festlegen und über einen Markt Tribut senden. Neue Optionen: Bildlauf, Startgeschwindigkeit, klassische oder Raster-Tastenbelegung und jeder moderne Komfort einzeln an oder aus – oder alle aus mit der Voreinstellung „Klassisch“. Meldungen berichten über Angriffe außer Sicht, neue Zeitalter und Weltwunder; der Ergebnisbildschirm zeigt Diagramme der ganzen Partie; Hilfe und Mitwirkende sind im Hauptmenü. Spielstände ab 0.8.0 lassen sich weiterhin laden.',
    pl_PL:
      'Zapisuj gry na swoim serwerze StartOS i kontynuuj je na dowolnym urządzeniu (trafiają do kopii zapasowych); autozapis zachowuje potyczkę co 5 minut. Dyplomacja: ustaw każdego gracza jako Sojusznika, Neutralnego lub Wroga i wysyłaj trybut przez Targowisko. Nowe Opcje: przewijanie, prędkość startowa, klawisze Klasyczne lub Siatka oraz każde nowoczesne udogodnienie włączane osobno — albo wszystkie wyłączone presetem Klasyczny. Komunikaty informują o atakach poza zasięgiem wzroku, nowych epokach i Cudach; ekran wyników pokazuje wykresy całej gry; Pomoc i Autorzy trafiają do menu głównego. Gry zapisane w 0.8.0 lub nowszej nadal się wczytują.',
    fr_FR:
      'Sauvegardez vos parties sur votre serveur StartOS et reprenez-les sur n’importe quel appareil (elles sont incluses dans les sauvegardes) ; une sauvegarde automatique conserve votre escarmouche toutes les 5 minutes. Diplomatie : désignez chaque joueur comme Allié, Neutre ou Ennemi et envoyez un tribut via un Marché. Nouvelles Options : défilement, vitesse de départ, raccourcis Classiques ou en Grille, et chaque confort moderne activable séparément — ou tous désactivés avec le préréglage Classique. Des messages signalent les attaques hors de vue, les nouveaux âges et les Merveilles ; l’écran de résultats trace les graphiques de toute la partie ; Aide et Crédits rejoignent le menu principal. Les parties sauvegardées avec la 0.8.0 ou ultérieure se chargent toujours.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
