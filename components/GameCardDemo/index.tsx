import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type GameCardDemoProps = {
  image: string
  href: string
}

const GameCardDemo: React.FC<GameCardDemoProps> = ({ image, href }) => {
  return (
    <div>
      <Link href={href} target='_blank'>
        <Image src={image} alt={''} width={170} height={296} priority />
      </Link>
    </div>
  )
}

export default GameCardDemo
