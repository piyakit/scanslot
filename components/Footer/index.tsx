import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const btnImg = ['/button-foot-login.png', '/button-foot-register.png']
const monileMenu = [
  {
    id: 1,
    img: '/',
  },
]

const Footer = () => {
  return (
    <div className=' justify-center flex flex-col text-white'>
      <div className='py-10 xs:mx-8 2xl:mx-[300px]'>
        <p className='text-[40px]'>Scanslot.io</p>
        <p className='xs:text-[16px]'>
          เว็บไซต์ตัวช่วยสำหรับนักเล่นสล๊อตค่ายPG ที่ช่วยให้ผู้เล่นมีโอกาศ
          เลือกเล่นเกมส์ที่ถูกต้อง ในเวลาที่ถูกต้อง ลดความเสี่ยงลงได้ถึง 40-50%
          โดยเฉลี่ย การคำนวนของเว็บไซต์ นำข้อมูลมากจาก AI ศึกษาและคำนวนออกมา
          ได้ความน่าจะเป็นมากที่สุด เพราะฉะนั้นไม่แนะนำให้ผู้เล่น
          คาดหวังมากเกินไป โอกาศชนะมากที่สุด 98% ไม่ใช่ทุกๆเกมส์
          แต่ทางเราแนะนำตรวจสอบข้อมูล เมนู โบนัทไทม์ จะดีที่สุด
        </p>
      </div>
      <div className='flex 2xl:flex-row wrap-footer 2xl:justify-between xs:flex-col w-full'>
        <div className='p-[26px] ml-20 xs:ml-0 xs:p-0 flex justify-center 2xl:ml-16'>
          <Image
            src='/logo.png'
            width={300}
            height={300}
            alt={''}
            className='xs:w-[100px] xs:h-[100px] 2xl:w-[200px] 2xl:h-[200px]'
          />
          <div className='flex flex-col justify-center items-center text-center xs:text-[12px] 2xl:items-start 2xl:ml-8'>
            <p className='xs:text-[12px] 2xl:text-[16px]'>Scanslot.io</p>
            <p className='xs:text-[12px] 2xl:text-[16px]'>
              ระบบประมวลผลอัตโนมัติ โดยใช้ AI คำนวนข้อมูลจากผู้เล่นทั้งหมด
              และประมวลผลออกมา ได้ความน่าจะเป็นมากที่สุดถึง 98%
            </p>
          </div>
        </div>
        <div className='flex 2xl:flex-col xs:flex-row justify-center xs:mx-[40px]'>
          {btnImg.map((v, i) => (
            <Link
              href={''}
              key={i}
              className='hover:scale-[1.1] transition ease-in-out delay-150'
            >
              <Image src={v} width={240} height={78} alt={''} key={i} />
            </Link>
          ))}
        </div>
      </div>
      <div className='2xl:py-2 border-y-4 bg-footer w-full justify-center flex items-center bg-[#78C54F]'>
        <p className='xs:text-[12px] 2xl:text-[16px] text-center xs:mt-2'>
          Copyright 2023 Scanslot.io , All Rights Reserved.
        </p>
      </div>
      <div className='xs:block 2xl:hidden sm:hidden fixed z-[20] w-full bottom-2'>
        <div className='flex flex-row justify-center w-full relative mb-[5%]'>
          <div className='w-[42%] bottom-[15px]'>
            <Image src='/icon-login.png' alt={''} width={164} height={56} />
          </div>
          <div className='w-[35%] absolute z-[20] bottom-[-10px]'>
            <Image
              src='/icon-register.png'
              alt={''}
              width={137}
              height={106}
              className=''
            />
          </div>
          <div className='w-[42%] bottom-4'>
            <Image src='/icon-line.png' alt={''} width={164} height={56} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
