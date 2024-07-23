'use client'

import { GAMES_CARD_DEMO } from '@/utils/gameCardDemo'
import { useEffect } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const data = GAMES_CARD_DEMO.find((x) => x.key === params.id)
  const { key, image, demoUrl, alt }: any = data

  useEffect(() => {
    console.log(data)

    // console.log(JSON.stringify(GAMES_CARD_DEMO))
  }, [])

  return (
    <div>
      <img src={image} alt={alt} width={300} height={450} />
    </div>
  )
}
