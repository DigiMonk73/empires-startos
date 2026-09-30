import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.13.0:0',
  releaseNotes: {
    en_US:
      'Stronger, more varied computer opponents: each level now clearly beats the one below — the harder ones research upgrades, fight with focus and retreat from lost battles, and Hardest starts with extra food as in the original. Each civilization plays to its strengths, computers use priests, and they finish wars on island maps. In a free-for-all the computers ally against you; neutral ones can be kept at peace with tribute. Archers and warships now attack buildings properly. Games saved with 0.8.0 or later still load.',
    es_ES:
      'Rivales de la computadora más fuertes y variados: cada nivel vence claramente al anterior; los más difíciles investigan mejoras, concentran el ataque y se retiran de las batallas perdidas, y el Más difícil empieza con comida extra como en el original. Cada civilización juega según sus puntos fuertes, las computadoras usan sacerdotes y terminan las guerras en los mapas de islas. En un todos contra todos las computadoras se alían contra ti; a las neutrales puedes mantenerlas en paz con tributos. Los arqueros y los barcos de guerra ya atacan bien los edificios. Las partidas guardadas con la 0.8.0 o posterior siguen cargándose.',
    de_DE:
      'Stärkere und abwechslungsreichere Computergegner: Jede Stufe schlägt die darunter deutlich – die schwereren erforschen Verbesserungen, greifen gebündelt an und ziehen sich aus verlorenen Schlachten zurück, und „Am schwersten“ beginnt wie im Original mit zusätzlicher Nahrung. Jede Zivilisation spielt ihre Stärken aus, Computer setzen Priester ein und beenden Kriege auf Inselkarten. Im Jeder-gegen-jeden verbünden sich die Computer gegen dich; neutrale lassen sich mit Tribut friedlich halten. Bogenschützen und Kriegsschiffe greifen Gebäude jetzt richtig an. Spielstände ab 0.8.0 lassen sich weiterhin laden.',
    pl_PL:
      'Silniejsi i bardziej zróżnicowani przeciwnicy komputerowi: każdy poziom wyraźnie pokonuje niższy — trudniejsze badają ulepszenia, skupiają atak i wycofują się z przegranych bitew, a Najtrudniejszy zaczyna z dodatkową żywnością jak w oryginale. Każda cywilizacja gra swoimi mocnymi stronami, komputery używają kapłanów i kończą wojny na mapach wysp. W trybie każdy na każdego komputery sprzymierzają się przeciwko tobie; neutralne można utrzymać w pokoju trybutem. Łucznicy i okręty wojenne poprawnie atakują budynki. Gry zapisane w 0.8.0 lub nowszej nadal się wczytują.',
    fr_FR:
      'Des adversaires ordinateur plus forts et plus variés : chaque niveau bat nettement le précédent — les plus difficiles recherchent des améliorations, concentrent leurs attaques et se retirent des batailles perdues, et le niveau Très difficile commence avec de la nourriture en plus comme dans l’original. Chaque civilisation joue sur ses points forts, les ordinateurs utilisent des prêtres et terminent les guerres sur les cartes d’îles. En chacun pour soi, les ordinateurs s’allient contre vous ; les neutres restent en paix contre un tribut. Les archers et les navires de guerre attaquent désormais correctement les bâtiments. Les parties sauvegardées avec la 0.8.0 ou ultérieure se chargent toujours.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
