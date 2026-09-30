import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.10.0:0',
  releaseNotes: {
    en_US:
      'A living world: beaches along every coast, palm and pine trees, animated water with shore foam, burning and smoking buildings, dust behind horsemen and splashes at sea. Hills are in the game — units striking down from higher ground can do triple damage — with two new maps built around them, Highland and Hill Country. Games saved with 0.8.0 or 0.9.0 still load.',
    es_ES:
      'Un mundo vivo: playas en todas las costas, palmeras y pinos, agua animada con espuma en la orilla, edificios que arden y humean, polvo tras los jinetes y salpicaduras en el mar. Llegan las colinas —las unidades que atacan desde más alto pueden causar el triple de daño— con dos mapas nuevos pensados para ellas, Tierras Altas y Colinas. Las partidas guardadas con la 0.8.0 o la 0.9.0 siguen cargándose.',
    de_DE:
      'Eine lebendige Welt: Strände an jeder Küste, Palmen und Kiefern, bewegtes Wasser mit Brandung, brennende und rauchende Gebäude, Staub hinter Reitern und Spritzer auf See. Hügel sind im Spiel – Einheiten, die von höher gelegenem Gelände angreifen, können dreifachen Schaden verursachen – mit zwei neuen Karten dafür, Hochland und Hügelland. Spielstände aus 0.8.0 oder 0.9.0 lassen sich weiterhin laden.',
    pl_PL:
      'Żywy świat: plaże wzdłuż każdego wybrzeża, palmy i sosny, falująca woda z pianą przy brzegu, płonące i dymiące budynki, kurz za jeźdźcami i rozbryzgi na morzu. W grze są wzgórza — jednostki atakujące z wyższego terenu mogą zadać potrójne obrażenia — oraz dwie nowe mapy zbudowane wokół nich: Wyżyna i Kraina Wzgórz. Gry zapisane w 0.8.0 lub 0.9.0 nadal się wczytują.',
    fr_FR:
      'Un monde vivant : des plages sur chaque côte, des palmiers et des pins, une eau animée avec de l’écume sur le rivage, des bâtiments qui brûlent et fument, de la poussière derrière les cavaliers et des éclaboussures en mer. Les collines arrivent — les unités qui frappent depuis un terrain plus élevé peuvent infliger des dégâts triples — avec deux nouvelles cartes conçues pour elles, Hautes Terres et Pays de collines. Les parties sauvegardées avec la 0.8.0 ou la 0.9.0 se chargent toujours.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
