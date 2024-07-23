import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type GameCardDemoProps = {
  image: string
  href: string
  alt: string
}

const GameCardDemo: React.FC<GameCardDemoProps> = ({ image, href, alt }) => {
  return (
    <div>
      <Link href={href} target="_blank">
        <img src={image} alt={alt} width={170} height={296} />
      </Link>
    </div>
  )
}

export default GameCardDemo
