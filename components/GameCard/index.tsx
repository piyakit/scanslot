import Image from 'next/image'
import style from './style.module.css'
import { truncateText } from '@/utils/truncate'
import { ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Prompt } from 'next/font/google'

const prompt = Prompt({ subsets: ['latin'], weight: ['400'] })

type GameCardProps = {
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

const GameCard: React.FC<GameCardProps> = ({
  img,
  logo,
  color,
  desc,
  title,
  hours,
  minutes,
  percent,
  multiplier,
}) => {
  const percentStyle =
    percent >= 0 && percent <= 35
      ? 'danger'
      : percent >= 36 && percent <= 70
      ? 'warning'
      : 'success'
  return (
    <div
      className={`h-[400px] w-[325px] relative block xs:w-[300px] z-[-1] ${percent >= 90 ? 'shake': ''}`}
      style={{
        animation: percent >= 90 ? 'shake 0.7s' : '',
        animationIterationCount: percent >= 90 ? 'infinite' : '',
      }}
    >
      <div
        className={`${style.g_cover} h-[180px] rounded-t-xl`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div
        className={`${style.g_reflect} h-[180px] rounded-t-xl`}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div
        className={`${style.g_bg} rounded-b-xl`}
        style={{ background: color }}
      ></div>
      <div
        className={`absolute z-[5] top-[180px] px-3 backdrop-blur-[8px] pt-2 w-full`}
      >
        <div className='flex items-center justify-center'>
          <Image
            src={logo}
            alt={''}
            width={60}
            height={60}
            className='object-cover'
          />
          <div className='flex flex-col justify-center items-center py-3 text-center'>
            <b className='block text-[18px] text-white leading-[20px]'>
              {title}
            </b>
            <span className='text-white text-[12px] opacity-50 pl-6 w-[calc(100% - 80px)] h-[32px] overflow-hidden'>
              {truncateText(desc)}
            </span>
          </div>
        </div>
        <ProgressBar
          striped
          animated
          variant={percentStyle}
          label={`${percent}%`}
          now={percent}
        />
        <div className='flex justify-between mt-2'>
          <div className='flex flex-col'>
            {hours === 0 && minutes <= 59 ? (
              <span
                className={`text-white text-[13px] flipX  ${prompt.className} `}
              >{`${minutes} นาที`}</span>
            ) : (
              <span
                className={`text-white text-[13px] ${prompt.className}`}
              >{`0${hours} ชั่วโมง ${minutes} นาที`}</span>
            )}
            <span
              className={`text-white text-[12px] opacity-50 ${prompt.className}`}
            >
              สิ้นสุดเวลาในอีก
            </span>
          </div>
          <div className='flex flex-col'>
            <span
              className={`text-white text-[13px]  ${prompt.className} ${style.flipX}`}
            >{`${percent}%`}</span>
            <span
              className={`text-white text-[12px] opacity-50 ${prompt.className}`}
            >
              อัตราชนะ
            </span>
          </div>
          <div className='flex flex-col ml-[-2px]'>
            <span
              className={`text-white text-[13px]  ${prompt.className} ${style.flipX}`}
            >{`x${multiplier}`}</span>
            <span
              className={`text-white text-[12px] opacity-50 ${prompt.className}`}
            >
              อัตราคูณ
            </span>
          </div>
        </div>
        <div className='flex justify-between mt-2'>
          <div className='flex flex-col'>
            <Image
              src='/games/bmm.png'
              alt={''}
              width={86.39}
              height={16}
              className='invert-[1] brightness-0'
            />
            <span
              className={`text-white text-[12px] opacity-50 leading-3 mt-2 ${prompt.className}`}
            >
              ใบรับรอง
            </span>
          </div>
          <div>
            <Image
              src='/games/GA.png'
              alt={''}
              width={80}
              height={16}
              className='invert-[1] brightness-0'
            />
          </div>
          <div className='flex flex-col'>
            <div className='flex'>
              <Image
                src='/games/usa-flag.png'
                alt={''}
                width={27}
                height={18}
                className='mr-2'
              />
              <Image src='/games/th-flag.png' alt={''} width={27} height={18} />
            </div>
            <span
              className={`text-white text-[12px] opacity-50 leading-3 mt-2 ${prompt.className}`}
            >
              ภาษา
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard
