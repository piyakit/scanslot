import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'

const menuLeft = ['หน้าแรก', 'สูตรสล๊อต pg']
const menuRight = ['โบนัสไทม์ PG']
const menuMobile = [
  {
    id: 1,
    title: 'หน้าแรก',
    href: '/',
  },
  {
    id: 2,
    title: 'สูตรสล๊อต PG',
    href: '/',
  },
  {
    id: 3,
    title: 'โบนัสไทม์ PG',
    href: '',
  },
]

const Navbar = () => {
  return (
    <div className='container'>
      <div
        className={`${style.navbar_bg} mt-16 h-[7vw] flex justify-between items-center relative xs:mt-4`}
      >
        <div className='absolute flex flex-row justify-between w-full items-center'>
          <ul className='flex flex-row z-[1] xs:hidden 2xl:flex 2xl:mt-8'>
            {menuLeft.map((v, i) => (
              <li key={i} className='px-10'>
                <p className='text-white'>{v}</p>
              </li>
            ))}
          </ul>

          <ul className='flex flex-row z-[1] xs:hidden 2xl:flex 2xl:mt-8'>
            {menuRight.map((v, i) => (
              <li key={i} className='px-10'>
                <p className='text-white'>{v}</p>
              </li>
            ))}
          </ul>
          <div className='flex flex-row justify-between 2xl:justify-center absolute w-full z-[0] xs:px-4'>
            <Link href='https://line.me/R/ti/p/@LUCK55' target='_blank'>
              <Image
                src='/line-icon-mobile.png'
                alt={''}
                width={200}
                height={200}
                className='w-[11vw] h-[11vw] xs:w-[30] xs:h-[30px] xs:mt-9 2xl:hidden'
              />
            </Link>
            <Image
              src='/nav-logo.png'
              alt={''}
              width={200}
              height={200}
              className='w-[11vw] h-[11vw] xs:w-[100px] xs:h-[100px]'
            />
            <ul className='flex flex-col'>
              {menuMobile.map((menu) => (
                <li key={menu.id}>
                  <Link href={menu.href} key={menu.id}>
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* <Image
              src='/line-icon-mobile.png'
              alt={''}
              width={200}
              height={200}
              className='w-[11vw] h-[11vw] xs:w-[30] xs:h-[30px] xs:mt-9 2xl:hidden'
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
