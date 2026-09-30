import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.14.0:0',
  releaseNotes: {
    en_US:
      'Standard victory: hold a Wonder, every Artifact or every Ruin for 2000 years — Ruins and Artifacts now lie on the maps, claimed by standing beside them. New game settings: Score and Time Limit victories, a starting age from Nomad (no Town Center) to Post-Iron, a population limit from 25 to 200, and Full Tech Tree. Hills on every map and alligators on the beaches. Computer opponents contest the relics and Wonders, finish wars on island maps and play every setting. Games saved with 0.8.0 or later still load.',
    es_ES:
      'Victoria estándar: conserva una Maravilla, todos los Artefactos o todas las Ruinas durante 2000 años; las Ruinas y los Artefactos están ahora en los mapas y se toman poniéndose a su lado. Nuevas opciones de partida: victoria por Puntuación y por Límite de tiempo, edad inicial de Nómada (sin Centro Urbano) a Post-Hierro, límite de población de 25 a 200 y Árbol tecnológico completo. Colinas en todos los mapas y caimanes en las playas. Los rivales de la computadora disputan las reliquias y las Maravillas, terminan las guerras en los mapas de islas y juegan con cualquier opción. Las partidas guardadas con la 0.8.0 o posterior siguen cargándose.',
    de_DE:
      'Standardsieg: Halte ein Weltwunder, alle Artefakte oder alle Ruinen 2000 Jahre lang – Ruinen und Artefakte liegen jetzt auf den Karten und gehören dem, der daneben steht. Neue Spieleinstellungen: Sieg nach Punkten und nach Zeitlimit, Startzeitalter von Nomade (ohne Dorfzentrum) bis Nach-Eisenzeit, Bevölkerungsgrenze von 25 bis 200 und vollständiger Technologiebaum. Hügel auf allen Karten und Alligatoren an den Stränden. Computergegner kämpfen um Relikte und Weltwunder, beenden Kriege auf Inselkarten und spielen mit jeder Einstellung. Spielstände ab 0.8.0 lassen sich weiterhin laden.',
    pl_PL:
      'Zwycięstwo standardowe: utrzymaj Cud, wszystkie Artefakty lub wszystkie Ruiny przez 2000 lat — Ruiny i Artefakty leżą teraz na mapach i przejmuje je ten, kto stanie obok. Nowe ustawienia gry: zwycięstwo na punkty i na limit czasu, epoka startowa od Koczowników (bez Centrum Miasta) do Post-Żelaznej, limit populacji od 25 do 200 i pełne drzewko technologii. Wzgórza na każdej mapie i aligatory na plażach. Przeciwnicy komputerowi walczą o relikwie i Cuda, kończą wojny na mapach wysp i grają przy każdym ustawieniu. Gry zapisane w 0.8.0 lub nowszej nadal się wczytują.',
    fr_FR:
      'Victoire standard : gardez une Merveille, tous les Artefacts ou toutes les Ruines pendant 2000 ans — les Ruines et les Artefacts sont désormais sur les cartes et appartiennent à qui se tient à côté. Nouveaux réglages de partie : victoire au Score et à Limite de temps, âge de départ de Nomade (sans Centre-ville) à Post-Fer, limite de population de 25 à 200 et Arbre technologique complet. Des collines sur toutes les cartes et des alligators sur les plages. Les adversaires ordinateur se disputent les reliques et les Merveilles, terminent les guerres sur les cartes d’îles et jouent avec tous les réglages. Les parties sauvegardées avec la 0.8.0 ou ultérieure se chargent toujours.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
