import GameCard from '@/components/GameCard'

type TGameData = {
  id: number
  img: string
  logo: string
  color: string
  desc: string
  title: string
}

const gameData: TGameData[] = [
  {
    id: 1,
    img: '/games/b1708858067639006264.png',
    logo: '/games/c17088580151138120717.png',
    color: '#00b336',
    title: 'Fortune Rabbit',
    desc: 'Fortune Rabbit is a 3-reel (3 rows in reels 1 and 3, and 4 rows in reel 2) video slot featuring prize symbols up to 500x. The Fortune Rabbit Feature with 8 fortune spins may be randomly triggered during any spin. Moreover, there will be only Prize symbols on the reels during the Fortune Rabbit Feature.',
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
        />
      ))}
    </main>
  )
}
