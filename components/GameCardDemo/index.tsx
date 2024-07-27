import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type GameCardDemoProps = {
  image: string
  href: string
  alt: string
  id: string
}

const GameCardDemo: React.FC<GameCardDemoProps> = ({ image, href, alt, id }) => {
  return (
    <div className='flex justify-center flex-col items-center'>
      <Link href={href} target="_blank">
        <img src={image} alt={alt} width={170} height={296} />
      </Link>
      {/* <Link href={`/demo/${id}`} target='_blank' className='text-white'>
        detail
      </Link> */}
    </div>
  )
}

export default GameCardDemo
