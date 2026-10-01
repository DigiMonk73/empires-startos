import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:0',
  releaseNotes: {
    en_US:
      'Empires 1.0. Ships and cavalry turn smoothly — sixteen headings while under way, where eight left them sliding sideways. Big games stay smooth: eight players at full population on a Gigantic map, without the hitches the minimap and the computer players used to cause. Long games use far less graphics memory: unit art nothing on the map shows is released, and team colours take a fraction of the space. Babylonian Iron Age buildings are fired brick, no longer mistaken for the Blue player\u2019s. Achievements open in place of the game menu, and every icon shows just its unit. Games saved with 0.8.0 or later still load.',
    es_ES:
      'Empires 1.0. Los barcos y la caballería giran con suavidad: dieciséis rumbos en marcha, donde ocho los hacían deslizarse de lado. Las partidas grandes siguen fluidas: ocho jugadores con la población completa en un mapa Gigantesco, sin los tirones que causaban el minimapa y los jugadores de la computadora. Las partidas largas usan mucha menos memoria gráfica: se libera el arte de las unidades que no aparecen en el mapa y los colores de equipo ocupan una fracción del espacio. Los edificios babilonios de la Edad de Hierro son de ladrillo cocido y ya no se confunden con los del jugador Azul. Los Logros se abren en lugar del menú de la partida y cada icono muestra solo su unidad. Las partidas guardadas con la 0.8.0 o posterior siguen cargándose.',
    de_DE:
      'Empires 1.0. Schiffe und Reiterei drehen sich flüssig – sechzehn Richtungen in Fahrt, wo acht sie seitwärts rutschen ließen. Große Partien bleiben flüssig: acht Spieler mit voller Bevölkerung auf einer gigantischen Karte, ohne die Ruckler, die Minikarte und Computerspieler verursachten. Lange Partien brauchen viel weniger Grafikspeicher: Einheitengrafik, die auf der Karte nichts zeigt, wird freigegeben, und Teamfarben belegen nur einen Bruchteil des Platzes. Babylonische Gebäude der Eisenzeit sind aus gebranntem Ziegel und werden nicht mehr für die des blauen Spielers gehalten. Erfolge öffnen sich anstelle des Spielmenüs, und jedes Symbol zeigt nur seine Einheit. Spielstände ab 0.8.0 lassen sich weiterhin laden.',
    pl_PL:
      'Empires 1.0. Statki i kawaleria skręcają płynnie — szesnaście kierunków w ruchu, tam gdzie osiem kazało im sunąć bokiem. Duże gry pozostają płynne: ośmiu graczy z pełną populacją na mapie Gigantycznej, bez przycięć, które powodowały minimapa i gracze komputerowi. Długie gry zużywają znacznie mniej pamięci graficznej: grafika jednostek, których nie ma na mapie, jest zwalniana, a kolory drużyn zajmują ułamek miejsca. Babilońskie budynki epoki żelaza są z wypalanej cegły i nie mylą się już z budynkami gracza Niebieskiego. Osiągnięcia otwierają się zamiast menu gry, a każda ikona pokazuje tylko swoją jednostkę. Gry zapisane w 0.8.0 lub nowszej nadal się wczytują.',
    fr_FR:
      'Empires 1.0. Les navires et la cavalerie tournent en douceur — seize caps en mouvement, là où huit les faisaient glisser de côté. Les grandes parties restent fluides : huit joueurs à population maximale sur une carte Gigantesque, sans les saccades que causaient la minicarte et les joueurs ordinateur. Les longues parties utilisent beaucoup moins de mémoire graphique : les images des unités absentes de la carte sont libérées et les couleurs d\u2019équipe n\u2019occupent qu\u2019une fraction de la place. Les bâtiments babyloniens de l\u2019âge du Fer sont en brique cuite et ne se confondent plus avec ceux du joueur Bleu. Les Succès s\u2019ouvrent à la place du menu de jeu et chaque icône ne montre que son unité. Les parties sauvegardées avec la 0.8.0 ou ultérieure se chargent toujours.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
