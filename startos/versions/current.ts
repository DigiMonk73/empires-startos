import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.8.0:0',
  releaseNotes: {
    en_US:
      'The full game on land and sea: the Iron Age, all 16 civilizations, temples and priests, siege weapons, walls and towers, the Wonder and a tech-tree screen; docks, fishing boats, warships, transports, sea trade and repair; five new water maps (Coastal, Mediterranean, Narrows, Small and Large Islands) with computer players that fish, fight at sea and invade by transport. Games saved with earlier versions do not load.',
    es_ES:
      'El juego completo en tierra y mar: la Edad del Hierro, las 16 civilizaciones, templos y sacerdotes, armas de asedio, murallas y torres, la Maravilla y una pantalla de árbol tecnológico; puertos, barcos pesqueros, barcos de guerra, transportes, comercio marítimo y reparación; cinco nuevos mapas con agua (Costero, Mediterráneo, Estrechos, Islas pequeñas e Islas grandes) con jugadores controlados por el ordenador que pescan, luchan en el mar e invaden en transportes. Las partidas guardadas con versiones anteriores no se cargan.',
    de_DE:
      'Das vollständige Spiel zu Land und zur See: die Eisenzeit, alle 16 Zivilisationen, Tempel und Priester, Belagerungswaffen, Mauern und Türme, das Weltwunder und eine Technologiebaum-Ansicht; Häfen, Fischerboote, Kriegsschiffe, Transportschiffe, Seehandel und Reparaturen; fünf neue Wasserkarten (Küste, Mittelmeer, Meerengen, Kleine und Große Inseln) mit Computergegnern, die fischen, auf See kämpfen und per Transportschiff angreifen. Spielstände früherer Versionen lassen sich nicht laden.',
    pl_PL:
      'Pełna gra na lądzie i morzu: epoka żelaza, wszystkie 16 cywilizacji, świątynie i kapłani, machiny oblężnicze, mury i wieże, Cud oraz ekran drzewka technologii; przystanie, łodzie rybackie, okręty wojenne, transportowce, handel morski i naprawy; pięć nowych map z wodą (Wybrzeże, Morze Śródziemne, Cieśniny, Małe i Duże Wyspy) z przeciwnikami komputerowymi, którzy łowią ryby, walczą na morzu i atakują z transportowców. Gry zapisane we wcześniejszych wersjach nie wczytują się.',
    fr_FR:
      'Le jeu complet sur terre et sur mer : l’âge du fer, les 16 civilisations, temples et prêtres, armes de siège, murailles et tours, la Merveille et un écran d’arbre technologique ; ports, bateaux de pêche, navires de guerre, transports, commerce maritime et réparations ; cinq nouvelles cartes aquatiques (Côtière, Méditerranée, Détroits, Petites et Grandes Îles) avec des adversaires contrôlés par l’ordinateur qui pêchent, combattent en mer et débarquent par transport. Les parties sauvegardées avec les versions précédentes ne se chargent pas.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
