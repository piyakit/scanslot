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
    href: '',
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
    href: '',
  },
  {
    id: 7,
    title: 'โบนัสไทม์ PG',
    href: '',
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
    href: '',
  },
  {
    id: 7,
    title: 'โบนัสไทม์ PG',
    href: '',
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='container'>
      <div
        className={`${style.navbar_bg} mt-16 flex justify-between items-center relative z-20 xs:mt-4`}
      >
        <div className='absolute flex flex-row justify-between w-full items-center'>
          <ul className='flex flex-row z-[1] xs:hidden 2xl:flex 2xl:mt-8 2xl:pr-8'>
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

          <ul className='flex flex-row z-[1] xs:hidden 2xl:flex 2xl:mt-8'>
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
          <div className='flex flex-row justify-between 2xl:justify-center absolute w-full z-[0] xs:px-4'>
            <Link href='https://line.me/R/ti/p/@LUCK55' target='_blank'>
              <Image
                src='/line-icon-mobile.png'
                alt={''}
                width={200}
                height={200}
                className='w-[11vw] h-[11vw] xs:w-[30px] xs:h-[30px] xs:mt-9 2xl:hidden'
              />
            </Link>
            <Image
              src='/nav-logo.png'
              alt={''}
              width={200}
              height={200}
              className='w-[11vw] h-[11vw] xs:w-[100px] xs:h-[100px]'
            />

            {/* nav menu mobile */}
            <div className='xs:mt-9 z-50 2xl:hidden xs:block text-white'>
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
              className={`top-0 right-0 fixed bg-[#0d830a] w-[300px] h-full pt-20 ${
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
        </div>
      </div>
    </div>
  )
}

export default Navbar
