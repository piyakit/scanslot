import Image from 'next/image'
import Link from 'next/link'

const menu = [
  {
    id: 1,
    img: '/btn_home1.png',
    href: '',
  },
  {
    id: 2,
    img: '/btn_home2.png',
    href: '',
  },
]

const CodeAndCredit = () => {
  return (
    <div className='xs:mt-[5.2rem] xs:mb-2 2xl:my-[2rem] w-full xs:px-5'>
      <div className='flex flex-row justify-center 2xl:gap-10 xs:gap-2'>
        {menu.map((v) => (
          <Link
            href={v.href}
            key={v.id}
            className='hover:scale-[1.1] transition ease-in-out delay-150'
          >
            <Image
              src={v.img}
              alt={''}
              width={170}
              height={50}
              unoptimized={true}
              className='2xl:w-[420px] 2xl:h-[125px] object-cover'
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CodeAndCredit
