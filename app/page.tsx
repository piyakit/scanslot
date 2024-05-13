import GameCard from '@/components/GameCard'
import { GAMES } from '@/utils/games'

export default function Home() {
  return (
    // <main className='flex w-screen items-center justify-center 2xl:px-[200px]'>
    <div className='grid
    lg:grid-cols-3
    md:grid-cols-2
    sm:grid-cols-2
    xl:grid-cols-3
    py-4
    gap-4
    justify-items-center'>
      {GAMES.map((game) => (
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
    </div>
    // </main>
  )
}
