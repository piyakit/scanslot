import GameCard from '@/components/GameCard'
import { GAMES } from '@/utils/games'

export default function Home() {
  return (
    <main className='justify-center ml-8 my-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-2'>
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
    </main>
  )
}
