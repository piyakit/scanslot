import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const btnImg = ['/button-foot-login.png', '/button-foot-register.png']

const Footer = () => {
  return (
    <footer className=' justify-center flex flex-col text-white'>
      <div className='py-10 xs:mx-8'>
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
      <div className='flex 2xl:flex-row wrap-footer xs:flex-col w-full'>
        <div className='p-[26px] ml-20 xs:ml-0 xs:p-0 flex justify-center'>
          <Image
            src='/logo.png'
            width={300}
            height={300}
            alt={''}
            className='xs:w-[100px] xs:h-[100px]'
          />
        </div>
        <div className='flex flex-col justify-center items-center text-center xs:text-[12px]'>
          <p className='xs:text-[12px]'>Scanslot.io</p>
          <p className='xs:text-[12px]'>
            ระบบประมวลผลอัตโนมัติ โดยใช้ AI คำนวนข้อมูลจากผู้เล่นทั้งหมด
            และประมวลผลออกมา ได้ความน่าจะเป็นมากที่สุดถึง 98%
          </p>
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
        <p className='xs:text-[12px] text-center xs:mt-2'>Copyright 2023 Scanslot.io , All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
