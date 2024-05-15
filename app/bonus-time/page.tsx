import BonusTime from '@/components/BonusTime'
import { BONUS_TIME } from '@/utils/bonustimes'

const Page = () => {
  return (
    <div
      className='
          grid 2xl:grid-cols-3 justify-items-center gap-4 py-8 xs:grid-cols-1'
    >
      {BONUS_TIME.map((v) => (
        <BonusTime
          key={v.id}
          game={v.game}
          start={v.start}
          end={v.end}
          hours={v.hours}
          minutes={v.minutes}
        />
      ))}
    </div>
  )
}

export default Page
