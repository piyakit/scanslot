import Image from 'next/image'
import React from 'react'

const img = 'https://botscanslot.com/wp-content/uploads/2022/09/icon-%E0%B8%AA%E0%B8%A5%E0%B9%87%E0%B8%AD%E0%B8%95-Win-Win-Fish-Prawn-Crab.webp'

const Page = () => {
  return (
    <div>
      <img src={img} width={170} height={296} alt={''} />
    </div>
  )
}

export default Page
