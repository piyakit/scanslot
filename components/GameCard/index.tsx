import Image from 'next/image'
import style from './style.module.css'
import { truncateText } from '@/utils/truncate'
import { ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

type GameCardProps = {
  img: string
  logo: string
  color: string
  desc: string
  title: string
}

const GameCard: React.FC<GameCardProps> = ({
  img,
  logo,
  color,
  desc,
  title,
}) => {
  return (
    <div className='h-[400px] w-[325px] relative block'>
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
      <div className={`absolute z-[5] top-[200px] px-4`}>
        <div className='flex items-center justify-center'>
          <Image
            src={logo}
            alt={''}
            width={60}
            height={60}
            className='object-cover'
          />
          <div className='pl-8 flex flex-col justify-center items-center'>
            <b className='block text-[18px] text-white leading-[20px]'>
              {title}
            </b>
            <span className='text-white text-[12px] opacity-50'>
              {truncateText(desc)}
            </span>
          </div>
        </div>
        <ProgressBar striped animated variant="success" label={'40%'} now={40} />
      </div>
    </div>
  )
}

export default GameCard
