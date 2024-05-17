'use client'

import React, { useState } from 'react'
import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const menuLeft = [
  {
    id: 1,
    title: 'หน้าแรก',
    href: '/',
  },
  {
    id: 2,
    title: 'สูตรสล๊อต PG',
    href: '',
  },
  {
    id: 3,
    title: 'บทความ',
    href: '',
  },
  {
    id: 4,
    title: 'ทดลองเล่น',
    href: '',
  },
]
const menuRight = [
  {
    id: 5,
    title: 'ข้อมูลเกม',
    href: '',
  },
  {
    id: 6,
    title: 'ติดต่อแอดมิน',
    href: 'https://line.me/R/ti/p/@LUCK55',
  },
  {
    id: 7,
    title: 'โบนัสไทม์ PG',
    href: '/bonus-time',
  },
]
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
    title: 'บทความ',
    href: '',
  },
  {
    id: 4,
    title: 'ทดลองเล่น',
    href: '',
  },
  {
    id: 5,
    title: 'ข้อมูลเกม',
    href: '',
  },
  {
    id: 6,
    title: 'ติดต่อแอดมิน',
    href: '/contact-admin',
  },
  {
    id: 7,
    title: 'โบนัสไทม์ PG',
    href: '/bonus-time',
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='2xl:mx-[15vw] xs:my-6 my-16 top-[-1px] relative z-[20] xs:fixed xs:px-4 2xl:relative xs:w-full'>
      <div
        className={`${style.navbar_bg} mt-16 flex justify-between items-center z-[30] xs:mt-4 2xl:w-[1344px] xs:w-full`}
      >
        <div className='flex flex-row justify-between w-full items-center'>
          <ul className='flex flex-row z-[1] xs:hidden 2xl:flex 2xl:mt-4 2xl:pr-8 2xl:pl-8'>
            {menuLeft.map((v) => (
              <Link
                key={v.id}
                href={v.href}
                className='text-white no-underline'
              >
                <li className='px-4'>{v.title}</li>
              </Link>
            ))}
          </ul>

          <div className='flex flex-row justify-between xs:w-full 2xl:w-auto 2xl:justify-center z-[0] xs:px-4'>
            <Link href='https://line.me/R/ti/p/@LUCK55' target='_blank'>
              <Image
                src='/line-icon-mobile.png'
                alt={''}
                width={200}
                height={200}
                className='w-[11vw] h-[11vw] xs:w-[30px] xs:h-[30px] xs:mt-9 2xl:hidden'
              />
            </Link>
            <div className=' 2xl:top-[-100px]'>
              <Image
                src='/nav-logo.png'
                alt={''}
                width={200}
                height={200}
                className='w-[11vw] h-[11vw] xs:w-[100px] xs:h-[100px] 2xl:w-[200px] 2xl:h-[200px]'
              />
            </div>

            {/* nav menu mobile */}
            <div className='xs:mt-9 xs:mr-0 z-50 2xl:hidden xs:block text-white'>
              {isOpen ? (
                <IoMdClose
                  onClick={() => setIsOpen(!isOpen)}
                  size={30}
                  className=''
                />
              ) : (
                <RxHamburgerMenu size={30} onClick={() => setIsOpen(!isOpen)} />
              )}
            </div>
            <ul
              className={`top-0 right-0 fixed bg-[#0d830a] w-[300px] h-full pt-20 pl-8 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              } ease-in-out duration-500`}
            >
              {menuMobile.map((menu) => (
                <li key={menu.id} className='pt-2 text-[1.2rem]'>
                  <Link
                    href={menu.href}
                    key={menu.id}
                    className='no-underline text-white'
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul className='flex flex-row z-[1] xs:hidden 2xl:flex 2xl:mt-4'>
            {menuRight.map((v) => (
              <Link
                key={v.id}
                href={v.href}
                className='text-white no-underline'
              >
                <li className='2xl:px-4 2xl:mr-8'>{v.title}</li>
              </Link>
            ))}
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
