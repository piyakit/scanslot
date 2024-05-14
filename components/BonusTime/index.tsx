import Image from 'next/image'
import React from 'react'

type TGame = {
  id: number
  img: string
  name: string
}

type BonusTimeProps = {
  game: TGame[]
  start: string
  end: string
  hours: number
  minutes: number
}

const BonusTime: React.FC<BonusTimeProps> = ({
  game,
  start,
  end,
  hours,
  minutes,
}) => {
  return (
    <div className='w-[290px] h-[277px] xs:w-[250px] xs:h-[230px]'>
      <div className='flex gap-4'>
        {game.map((v) => (
          <div className='flex flex-col' key={v.id}>
            <Image src={v.img} alt={''} width={129} height={129} />
            <span className='text-white mt-2 text-[13px] text-center'>
              {v.name}
            </span>
          </div>
        ))}
      </div>
      <div className='flex flex-col'>
        <span className='text-white bg-[#377e1e] text-center py-1 mt-2 rounded-sm text-[13px]'>
          {`${start} น. - ${end} น.`}
        </span>
        <span className='text-white text-[13px] text-center mt-2'>
          {hours && minutes === -1 ? (
            <span>หมดเวลาโบนัสแล้ว</span>
          ) : (
            <span>โบนัสสิ้นสุดในอีก</span>
          )}
        </span>
        <span className='text-white text-[13px] text-center mt-2'>
          {hours && minutes === -1 ? (
            <span className='text-[#dc3545]'>ไม่แนะนำ</span>
          ) : (
            <span className='text-[#ffc107] flipX'>{`0${hours} ชั่วโมง ${minutes} นาที`}</span>
          )}
        </span>
      </div>
    </div>
  )
}

export default BonusTime
