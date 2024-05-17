import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menu = [
  {
    id: 1,
    img: '/btn_home1.png',
    href: '',
  },
  {
    id: 1,
    img: '/btn_home2.png',
    href: '',
  },
]

const CodeAndCredit = () => {
  return (
    <div className='xs:mt-[6.5rem] 2xl:my-[2rem] w-full'>
      <div className='flex flex-row justify-center gap-10'>
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
