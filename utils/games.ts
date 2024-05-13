type TGameData = {
  id: number
  img: string
  logo: string
  color: string
  desc: string
  title: string
  hours: number
  minutes: number
  percent: number
  multiplier: number
}

const gameBgColor = {
  red: '#bd0000',
  green: '#00b336',
  yellow: '#efdb01',
  amber: '#8cb300'
}

export const GAMES: TGameData[] = [
  {
    id: 1,
    img: '/games/1/b1708858067639006264.png',
    logo: '/games/1/c17088580151138120717.png',
    color: gameBgColor.green,
    title: 'Fortune Rabbit',
    desc: 'Fortune Rabbit is a 3-reel (3 rows in reels 1 and 3, and 4 rows in reel 2) video slot featuring prize symbols up to 500x. The Fortune Rabbit Feature with 8 fortune spins may be randomly triggered during any spin. Moreover, there will be only Prize symbols on the reels during the Fortune Rabbit Feature.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 4686,
  },
  {
    id: 2,
    img: '/games/2/b17088577061232656893.png',
    logo: '/games/2/c17088577061467506145.png',
    color: gameBgColor.red,
    title: 'Lucky Clover Lady',
    desc: 'Lucky Clover Lady is a 5 by 6 symbols combination video slot featuring sticky winning symbols, Level-up symbol and Multiplier symbol. Lucky Clover symbols may appear during any spin, and each of them will award either a Level-up symbol or a Multiplier symbol. Any 8 or more matching symbols that appear on the reels will result in a winning combination! Additionally, when 3 Scatter symbols appear on the reels, 15 free spins will be triggered.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 304,
  },
  {
    id: 3,
    img: '/games/3/b1708857324181849227.png',
    logo: '/games/3/c17088572271953673639.png',
    color: gameBgColor.red,
    title: 'Fortune-OX',
    desc: 'Play “Fortune Ox” now, let the Ox bless you with good fortune and prosperity! Fortune Ox is a 3-reel, 3-row (for reel 1 and 3) and 4-row (for reel 2) video slot featuring respins until win and x10 multiplier. Fortune Ox Feature may be randomly triggered during any spin! During the Fortune Ox Feature, when the first and third reel share the same symbols, all reels will respin until there is a win! Not only that, full reels win will reward x10 wins too!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 375,
  },
  {
    id: 4,
    img: '/games/4/b17088569871993768307.png',
    logo: '/games/4/c17088569871192316925.png',
    color: gameBgColor.green,
    title: 'Ways of The Qilin',
    desc: 'Ways of the Qilin is a 6-reel, 6-row video slot featuring Wilds-on-the-Way and free spins with increasing multiplier. 4 or more Scatter symbols will trigger the Free Spins Feature and each Scatter symbol will increase the free spins or win multiplier. Win more during the Free Spins feature, as each win and +1 Spin symbol will increase the win multiplier and free spins respectively!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 4550,
  },
  {
    id: 5,
    img: '/games/5/b17088562972116259624.png',
    logo: '/games/5/c17088562971159903192.png',
    color: gameBgColor.green,
    title: 'Wild Bounty Showdown',
    desc: 'Wild Bounty Showdown is a 6-reel',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 8740,
  },
  {
    id: 6,
    img: '/games/6/b1708855787488638120.png',
    logo: '/games/6/c17088557871599371228.png',
    color: gameBgColor.red,
    title: 'Wild Bandito',
    desc: 'Wild Bandito is a 5-reel, 4-row video slot featuring Gold Framed Symbols and free spins with increasing multiplier. During the Free Spins Feature, all symbols (excluding Wild symbol and Scatter symbol) in reel 3 will appear as Gold Framed Symbols, increasing your chance for high wins! Win multiplier will be increased by 1 when there are one or more winning symbols on the reels!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 156,
  },
  {
    id: 7,
    img: '/games/7/b17088553341228006012.png',
    logo: '/games/7/c1708855173311526723.png',
    color: gameBgColor.red,
    title: 'Caishen Wins',
    desc: 'Caishen Wins is a 6-reel, 5-row video slot (with an additional reel on top of reel 2, 3, 4 and 5) featuring Wilds-on-the-Way and free spins with gamble feature. Stand a chance to win up to 20 free spins and x20 multiplier when 4 or more Scatter symbols trigger the Free Spins Feature!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 33,
  },
  {
    id: 8,
    img: '/games/8/b170885210395747663.png',
    logo: '/games/8/c1708852060155610702.png',
    color: gameBgColor.red,
    title: 'Thai River wonders',
    desc: 'Thai River Wonders” is a 6-reel, 5-row video slot (with an additional reel on top of reel 2, 3, 4 and 5) featuring sticky Wilds-on-the-Way and free spins with increasing multiplier. Trigger the Free Spins Feature with 12 free spins when 4 Scatter symbols appear anywhere on the reels.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 112,
  },
  {
    id: 9,
    img: '/games/9/b17063435831666696146.png',
    logo: '/games/9/c1706342261187540342.png',
    color: gameBgColor.yellow,
    title: 'Treasures of Aztec',
    desc: 'The Mayan pyramid located in Chichen Itza and Coba of Mexico remains a mystery until today. Many rumours about the pyramid has been discussed and yet none of it has been confirmed.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 882,
  },
  {
    id: 10,
    img: '/games/10/b1706344328887561257.png',
    logo: '/games/10/c1706341707482983452.png',
    color: gameBgColor.yellow,
    title: 'Fortune Dragon',
    desc: 'Long ago, during a Lunar New Year, a kind-hearted villager stumbled upon an injured dragon. He cared for the dragon until it regained its health. In gratitude, the dragon revealed itself as a deity of prosperity and luck.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 684,
  },
  {
    id: 11,
    img: '/games/11/b17047244591426275112.jpeg',
    logo: '/games/11/c1704724276252222019.png',
    color: gameBgColor.green,
    title: 'Dragon Hatch 2',
    desc: 'Deep in the mountains of Fulroya lies the habitat of the dragons of the East China Sea that have been isolated from the world for 500 years. That all changed when the dragon queen laid 3 dragon eggs with mysterious powers, which have attracted ‘dragon hunters’ that have been coveting the dragon’s eye gem. According to legends, the 3 dragon eggs are the key to finding the dragon\'s eye gem. To prevent the 3 eggs from falling into the wrong hands, the weakened dragon queen entrusted the eggs to the dragon master for safekeeping.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 4929,
  },
  {
    id: 12,
    img: '/games/12/b17088592462134692906.png',
    logo: '/games/12/c17036622961138839479.png',
    color: gameBgColor.green,
    title: 'Werewolf\'s Hunt',
    desc: 'In a small town, an ancient legend has been passed down among the people: Every full moon, werewolves will emerge from their hidden lairs in the forest to hunt in the human realm. These creatures are not only savage but also cunning, making them a major threat to the local population!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 5110,
  },
  {
    id: 13,
    img: '/games/13/b17088567391118779008.png',
    logo: '/games/13/c17023710881036279519.png',
    color: gameBgColor.green,
    title: 'Tsar Treasures',
    desc: 'In the town of Yagetha, there stands a captivating Royal Museum that proudly displays precious artifacts and treasures from the era of the Tsars. Under the cover of darkness, a nefarious group had quietly infiltrated the museum to steal its most prized display—the magnificent Tsar\'s Fabergé Eggs. This audacious act has shattered the once peaceful town.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 1452,
  },
  {
    id: 14,
    img: '/games/14/b17063444711060220547.png',
    logo: '/games/14/c17023709651960658466.png',
    color: gameBgColor.green,
    title: 'Mafia Mayhem',
    desc: 'Located in the bustling city of Italy lies an unforgettable place - "Prestige City." Its customers are wealthy, prestigious and have high social statuses. Albert, a prominent figure in the modern Italian mafia, is also the mastermind behind "Prestige City." However, beneath its glamorous surface, a power struggle has been silently unfolding. Other mafia bosses have long coveted Albert\'s position and power, eager to seize this golden goose.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 1152,
  },
  {
    id: 15,
    img: '/games/15/b1708858830292723243.png',
    logo: '/games/15/c17003698181293457377.png',
    color: gameBgColor.green,
    title: 'Forge of Wealth',
    desc: 'Alankran is a village in the Thunder Continent, where the residents are skilled in the art of millennium-old forging techniques. They excel in working with Thunderstone and, through intricate refining processes, craft treasures that can be passed down for generations. However, the obscure and complex nature of these techniques has discouraged many younger blacksmiths, leading to the gradual decline of this ancient craft.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 2640,
  },
  {
    id: 16,
    img: '/games/16/b17088594511473274427.png',
    logo: '/games/16/c17003695711980934262.png',
    color: gameBgColor.green,
    title: 'Wild Heist Cashout',
    desc: 'In the bustling city, there resides a wealthy and prestigious businessman. Within the confines of his lavish home lies an enormous vault filled with countless dazzling jewels and towering stacks of gold bars. However, breaching this impregnable vault is no easy feat, as it is safeguarded by state-of-the-art laser scanning systems. This however, has piqued the interest of the legendary thief, Alfred.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 648,
  },
  {
    id: 17,
    img: '/games/17/b17003691382048954589.png',
    logo: '/games/17/c17003691381040260163.png',
    color: gameBgColor.green,
    title: 'Ultimate Striker',
    desc: 'The day of the largest soccer game in history has finally arrived. Jack, a striker in his team is preparing for the most intense match of his life in a game of winner-takes-all. Today, Jack\'s team is playing against their strongest rival yet. The stadium is crowded with spectators, and the excitement was palpable.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 324,
  },
  {
    id: 18,
    img: '/games/18/b17088599291688383213.png',
    logo: '/games/18/c1700368431807783417.png',
    color: gameBgColor.green,
    title: 'Ninja Raccoon Frenzy',
    desc: 'Johnny the Ninja Raccoon has always aspired to become the top ninja in Amao Village. In order to achieve the certification of a top ninja, he must win the Ninja Championship.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 1476,
  },
  {
    id: 19,
    img: '/games/19/b1708860948644844870.png',
    logo: '/games/19/c1700368168776757124.png',
    color: gameBgColor.red,
    title: 'Gladiator\'s Glory',
    desc: 'Maximus, a gladiator from a poor family, has become the star of the ancient Roman arena through his own hard work and courage. The flames of freedom burn in his heart as he dons his thick armor and wields a strong sword to face a huge and ferocious tiger with no signs of fear!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 209,
  },
  {
    id: 20,
    img: '/games/20/b17088613702021152609.png',
    logo: '/games/20/c16935677801457641542.png',
    color: gameBgColor.green,
    title: 'Safari Wilds',
    desc: 'In the vast African savanna, the morning mist lingers while the roars of wild beasts echo in the air, breaking the morning calm. Many wild animals such as lions, cheetahs, rhinos, and giraffes have called this place home, but it is also said to hide many lost ancient artifacts and treasures.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 4526,
  },
  {
    id: 21,
    img: '/games/21/b1708862206192620208.png',
    logo: '/games/21/c1692024227532173591.png',
    color: gameBgColor.red,
    title: 'Cruise Royale',
    desc: 'In recent years, cruise ships have gradually become one of the many ways for tourists to go on vacation. Regardless of the country, cruise travel has a place in the tourism market. After years of preparation, the PG "Treby" Royal Cruise has officially set sail!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 2500,
  },
  {
    id: 22,
    img: '/games/22/b17088625241012788248.png',
    logo: '/games/22/c16920235741832073676.png',
    color: gameBgColor.yellow,
    title: 'Bakery Bonanza',
    desc: 'There is a sweet and alluring aroma wafting through Fenghua Street. Following the scent, you will arrive at Anna\'s bakery— ­­­Mijiya. Since its opening last month, Mijiya has been featured in popular food magazines and has become the most trending place on Fenghua Street.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 1634,
  },
  {
    id: 23,
    img: '/games/23/b17088632641269445494.png',
    logo: '/games/23/32ec9501-c19f-4eb3-bdcd-7bfd9e80888d.png',
    color: gameBgColor.green,
    title: 'Honey Trap of Diao Chan',
    desc: 'Immerse in the epic duel of the Three Kingdoms!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 1392,
  },
  {
    id: 24,
    img: '/games/24/b1708864914282749863.png',
    logo: '/games/24/95683bf7-a2fd-45d7-9804-9631f2a62fa7.png',
    color: gameBgColor.green,
    title: 'Fortune Gods',
    desc: 'Luck and Fortune from the bubbly deities.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 1392,
  },
  {
    id: 25,
    img: '/games/25/361b51a2-dc61-4834-a2e2-bb9c9ac60499.png',
    logo: '/games/25/7a503550-716c-4464-a7d5-c6ca7c74a482.png',
    color: gameBgColor.green,
    title: 'Tree Of Fortune',
    desc: 'Shake, Shake,Shake the Fortune Tree.',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 1357,
  },
  {
    id: 26,
    img: '/games/26/b62ecd1c-830c-4cd1-9af5-3d9ef88cf62e.png',
    logo: '/games/26/b7f55749-aaa4-4167-b4b8-e0d372159761.png',
    color: gameBgColor.red,
    title: 'Medusa II',
    desc: 'Proclaim victory by defeating Medusa!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 66,
  },
  {
    id: 27,
    img: '/games/27/97781492-3ada-4782-9ff4-6629c2f77929.jpg',
    logo: '/games/27/9c696452-4280-4bda-813b-3e2f1d479991.png',
    color: gameBgColor.amber,
    title: 'Win Win Won',
    desc: 'Let "Won-won" bless you with great fortune!',
    hours: Math.floor(Math.random() * (4 - 0) + 0),
    minutes: Math.floor(Math.random() * (59 - 1) + 1),
    percent: Math.floor(Math.random() * (97 - 5) + 5),
    multiplier: 2655,
  },
]