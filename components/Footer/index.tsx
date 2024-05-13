import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const btnImg = ['/button-foot-login.png', '/button-foot-register.png']

const Footer = () => {
  return (
    <footer className='w-full justify-center flex flex-col text-white'>
      <div className='container py-10'>
        <p className='text-[40px]'>Scanslot.io</p>
        <p>
          เว็บไซต์ตัวช่วยสำหรับนักเล่นสล๊อตค่ายPG ที่ช่วยให้ผู้เล่นมีโอกาศ
          เลือกเล่นเกมส์ที่ถูกต้อง ในเวลาที่ถูกต้อง ลดความเสี่ยงลงได้ถึง 40-50%
          โดยเฉลี่ย การคำนวนของเว็บไซต์ นำข้อมูลมากจาก AI ศึกษาและคำนวนออกมา
          ได้ความน่าจะเป็นมากที่สุด เพราะฉะนั้นไม่แนะนำให้ผู้เล่น
          คาดหวังมากเกินไป โอกาศชนะมากที่สุด 98% ไม่ใช่ทุกๆเกมส์
          แต่ทางเราแนะนำตรวจสอบข้อมูล เมนู โบนัทไทม์ จะดีที่สุด
        </p>
      </div>
      <div className='flex flex-row wrap-footer'>
        <div className='p-[26px] ml-20'>
          <Image
            src='/logo.png'
            width={300}
            height={300}
            alt={''}
            className=''
          />
        </div>
        <div className='flex flex-col justify-center ml-16'>
          <p>Scanslot.io</p>
          <p>
            ระบบประมวลผลอัตโนมัติ โดยใช้ AI คำนวนข้อมูลจากผู้เล่นทั้งหมด
            และประมวลผลออกมา ได้ความน่าจะเป็นมากที่สุดถึง 98%
          </p>
        </div>
        <div className='flex flex-col justify-center'>
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
      <div className='2xl:py-2 border-y-4 bg-footer w-full justify-center flex'>
        <p>Copyright 2023 Scanslot.io , All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
