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

const gameData: TGameData[] = [
  {
    id: 1,
    img: '/games/b1708858067639006264.png',
    logo: '/games/c17088580151138120717.png',
    color: '#00b336',
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
    color: '#bd0000',
    title: 'Lucky Clover Lady',
    desc: 'Lucky Clover Lady is a 5 by 6 symbols combination video slot featuring sticky winning symbols, Level-up symbol and Multiplier symbol. Lucky Clover symbols may appear during any spin, and each of them will award either a Level-up symbol or a Multiplier symbol. Any 8 or more matching symbols that appear on the reels will result in a winning combination! Additionally, when 3 Scatter symbols appear on the reels, 15 free spins will be triggered.',
    hours: Math.floor(Math.random() * 4) + 0,
    minutes: Math.floor(Math.random() * 59) + 0,
    percent: Math.floor(Math.random() * 97) + 5,
    multiplier: 4686,
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
