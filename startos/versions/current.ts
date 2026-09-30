import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.9.0:0',
  releaseNotes: {
    en_US:
      'Every civilization now builds in its own architecture — Egyptian, Babylonian, Greek, Asian or Roman — changing with each age from Stone to Iron, each with its own towers and Wonder (a pyramid, a ziggurat, a Greek temple, a pagoda, an amphitheatre). New art for the Academy and the alligator, a picture for every technology, and a new look for the menus and panels with an emblem for each civilization. Games saved with 0.8.0 still load.',
    es_ES:
      'Cada civilización construye ahora con su propia arquitectura —egipcia, babilónica, griega, asiática o romana—, que cambia en cada edad desde la Edad de Piedra hasta la del Hierro, con sus propias torres y su propia Maravilla (una pirámide, un zigurat, un templo griego, una pagoda, un anfiteatro). Nuevo arte para la Academia y el caimán, una imagen para cada tecnología y un nuevo aspecto para los menús y paneles, con un emblema para cada civilización. Las partidas guardadas con la 0.8.0 siguen cargándose.',
    de_DE:
      'Jede Zivilisation baut jetzt in ihrer eigenen Architektur – ägyptisch, babylonisch, griechisch, asiatisch oder römisch –, die sich mit jedem Zeitalter von der Stein- bis zur Eisenzeit wandelt, mit eigenen Türmen und eigenem Weltwunder (eine Pyramide, eine Zikkurat, ein griechischer Tempel, eine Pagode, ein Amphitheater). Neue Grafiken für die Akademie und das Krokodil, ein Bild für jede Technologie und ein neues Aussehen für Menüs und Leisten mit einem Wappen für jede Zivilisation. Spielstände aus 0.8.0 lassen sich weiterhin laden.',
    pl_PL:
      'Każda cywilizacja buduje teraz we własnej architekturze — egipskiej, babilońskiej, greckiej, azjatyckiej lub rzymskiej — zmieniającej się w każdej epoce od kamienia do żelaza, z własnymi wieżami i własnym Cudem (piramida, ziggurat, grecka świątynia, pagoda, amfiteatr). Nowa grafika Akademii i aligatora, obraz dla każdej technologii oraz nowy wygląd menu i paneli z herbem każdej cywilizacji. Gry zapisane w 0.8.0 nadal się wczytują.',
    fr_FR:
      'Chaque civilisation construit désormais dans sa propre architecture — égyptienne, babylonienne, grecque, asiatique ou romaine —, qui évolue à chaque âge, de la pierre au fer, avec ses propres tours et sa propre Merveille (une pyramide, une ziggourat, un temple grec, une pagode, un amphithéâtre). Nouveaux visuels pour l’Académie et l’alligator, une image pour chaque technologie et un nouvel habillage des menus et des panneaux avec un emblème pour chaque civilisation. Les parties sauvegardées avec la 0.8.0 se chargent toujours.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
