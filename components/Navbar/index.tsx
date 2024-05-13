import React from 'react'
import style from './style.module.css'
import Image from 'next/image'

const menuLeft = ['หน้าแรก', 'สูตรสล๊อต pg']
const menuRight = ['โบนัสไทม์ PG']

const Navbar = () => {
  return (
    <div className='container'>
      <div
        className={`${style.navbar_bg} mt-16 h-[7vw] flex justify-between items-center relative`}
      >
        <div className='absolute top-[] flex flex-row justify-between w-full items-center'>
          <ul className='flex flex-row z-[1]'>
            {menuLeft.map((v, i) => (
              <li key={i} className='px-10'>
                <p className='text-white'>{v}</p>
              </li>
            ))}
          </ul>

          <ul className='flex flex-row z-[1]'>
            {menuRight.map((v, i) => (
              <li key={i} className='px-10'>
                <p className='text-white'>{v}</p>
              </li>
            ))}
          </ul>
          <div className='flex flex-row justify-center absolute w-full z-[0]'>
            <Image
              src='/nav-logo.png'
              alt={''}
              width={200}
              height={200}
              className='w-[11vw] h-[11vw]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
