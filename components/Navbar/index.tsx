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

            {/* nav menu mobile */}
            <div className='xs:mt-10 z-50'>
              {isOpen ? (
                <IoMdClose
                  onClick={() => setIsOpen(!isOpen)}
                  className={`${isOpen ? 'text-white' : 'text-white'} transition duration-500 ease-in`}
                />
              ) : (
                <RxHamburgerMenu
                  onClick={() => setIsOpen(!isOpen)}
                  className={`${isOpen ? 'text-white' : 'text-white'} transition duration-500 ease-in`}
                />
              )}
            </div>

            {isOpen ? (
              <div className={`bg-[#0d830a] z-[0] absolute left-[50px] w-[500px] h-screen transition duration-500 ease-in ${isOpen ? 'left-[20px]' : 'left-[-490px]'}`}>
                <ul className='flex flex-col pr-[300px] pt-[80px]'>
                  {menuMobile.map((menu) => (
                    <li key={menu.id}>
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
            ) : null}
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
