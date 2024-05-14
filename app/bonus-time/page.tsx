import BonusTime from '@/components/BonusTime'
import { BONUS_TIME } from '@/utils/bonustimes'

const Page = () => {
  return (
    <div
      className='
          grid grid-cols-3 justify-center gap-4 py-8'
    >
      {BONUS_TIME.map((v) => (
        <BonusTime
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
