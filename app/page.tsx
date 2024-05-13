import GameCard from '@/components/GameCard'

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
  yellow: '#efdb01'
}

const gameData: TGameData[] = [
  {
    id: 1,
    img: '/games/1/b1708858067639006264.png',
    logo: '/games/1/c17088580151138120717.png',
    color: gameBgColor.green,
    title: 'Fortune Rabbit',
    desc: 'Fortune Rabbit is a 3-reel (3 rows in reels 1 and 3, and 4 rows in reel 2) video slot featuring prize symbols up to 500x. The Fortune Rabbit Feature with 8 fortune spins may be randomly triggered during any spin. Moreover, there will be only Prize symbols on the reels during the Fortune Rabbit Feature.',
    hours: Math.floor(Math.random() * 4) + 0,
    minutes: Math.floor(Math.random() * 58) + 0,
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
    hours: Math.floor(Math.random() * 4) + 0,
    minutes: Math.floor(Math.random() * 59) + 0,
    percent: Math.floor(Math.random() * 97) + 5,
    multiplier: 304,
  },
  {
    id: 3,
    img: '/games/3/b1708857324181849227.png',
    logo: '/games/3/c17088572271953673639.png',
    color: gameBgColor.red,
    title: 'Fortune-OX',
    desc: 'Play “Fortune Ox” now, let the Ox bless you with good fortune and prosperity! Fortune Ox is a 3-reel, 3-row (for reel 1 and 3) and 4-row (for reel 2) video slot featuring respins until win and x10 multiplier. Fortune Ox Feature may be randomly triggered during any spin! During the Fortune Ox Feature, when the first and third reel share the same symbols, all reels will respin until there is a win! Not only that, full reels win will reward x10 wins too!',
    hours: Math.floor(Math.random() * 4) + 0,
    minutes: Math.floor(Math.random() * 59) + 0,
    percent: Math.floor(Math.random() * 97) + 5,
    multiplier: 375,
  },
  {
    id: 4,
    img: '/games/4/b17088569871993768307.png',
    logo: '/games/4/c17088569871192316925.png',
    color: gameBgColor.green,
    title: 'Ways of The Qilin',
    desc: 'Ways of the Qilin is a 6-reel, 6-row video slot featuring Wilds-on-the-Way and free spins with increasing multiplier. 4 or more Scatter symbols will trigger the Free Spins Feature and each Scatter symbol will increase the free spins or win multiplier. Win more during the Free Spins feature, as each win and +1 Spin symbol will increase the win multiplier and free spins respectively!',
    hours: Math.floor(Math.random() * 4) + 0,
    minutes: Math.floor(Math.random() * 59) + 0,
    percent: Math.floor(Math.random() * 97) + 5,
    multiplier: 4550,
  },
  {
    id: 5,
    img: '/games/5/b17088562972116259624.png',
    logo: '/games/5/c17088562971159903192.png',
    color: gameBgColor.green,
    title: 'Wild Bounty Showdown',
    desc: 'Wild Bounty Showdown is a 6-reel',
    hours: Math.floor(Math.random() * 4) + 0,
    minutes: Math.floor(Math.random() * 59) + 0,
    percent: Math.floor(Math.random() * 97) + 5,
    multiplier: 8740,
  },
  {
    id: 6,
    img: '/games/6/b1708855787488638120.png',
    logo: '/games/6/c17088557871599371228.png',
    color: gameBgColor.red,
    title: 'Wild Bandito',
    desc: 'Wild Bandito is a 5-reel, 4-row video slot featuring Gold Framed Symbols and free spins with increasing multiplier. During the Free Spins Feature, all symbols (excluding Wild symbol and Scatter symbol) in reel 3 will appear as Gold Framed Symbols, increasing your chance for high wins! Win multiplier will be increased by 1 when there are one or more winning symbols on the reels!',
    hours: Math.floor(Math.random() * 4) + 0,
    minutes: Math.floor(Math.random() * 59) + 0,
    percent: Math.floor(Math.random() * 97) + 5,
    multiplier: 156,
  },
  {
    id: 7,
    img: '/games/7/b17088553341228006012.png',
    logo: '/games/7/c1708855173311526723.png',
    color: gameBgColor.red,
    title: 'Caishen Wins',
    desc: 'Caishen Wins is a 6-reel, 5-row video slot (with an additional reel on top of reel 2, 3, 4 and 5) featuring Wilds-on-the-Way and free spins with gamble feature. Stand a chance to win up to 20 free spins and x20 multiplier when 4 or more Scatter symbols trigger the Free Spins Feature!',
    hours: Math.floor(Math.random() * 4) + 0,
    minutes: Math.floor(Math.random() * 59) + 0,
    percent: Math.floor(Math.random() * 97) + 5,
    multiplier: 33,
  },
]

export default function Home() {
  return (
    <main className='justify-center ml-8 my-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-2'>
      {gameData.map((game) => (
        <GameCard
          key={game.id}
          img={game.img}
          logo={game.logo}
          color={game.color}
          title={game.title}
          desc={game.desc}
          hours={game.hours}
          minutes={game.minutes}
          percent={game.percent}
          multiplier={game.multiplier}
        />
      ))}
    </main>
  )
}
