import ArticleSubText from '@/components/ArticleSubText'
import ArticleTitle from '@/components/ArticleTitle'
import { GAMES_CARD_DEMO } from '@/utils/gameCardDemo'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from 'react-bootstrap'

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const id = params.id
  const data = GAMES_CARD_DEMO.find((x) => x.key === params.id)
  const { title, description }: any = data
  return {
    title: title,
    description: description,
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await GAMES_CARD_DEMO.find((x) => x.key === params.id)
  const {
    topImage,
    demoUrl,
    alt,
    title,
    demoTextBtn,
    subText1,
    subText2,
    title2,
  }: any = data

  return (
    <div className="">
      <ArticleTitle title={`${title} ${new Date().getFullYear()}`} />
      <img src={topImage} alt={alt} width={1024} height={576} />
      <Link href={demoUrl} target="_blank" className="">
        <Button
          variant="danger"
          className="bg-pink-500 w-full my-5 py-4 text-white text-[22px] rounded-full"
        >
          {demoTextBtn}
        </Button>
      </Link>
      <ArticleSubText children={subText1} />
      <ArticleSubText children={subText2} className="mt-5" />
      <ArticleTitle title={title2} />
    </div>
  )
}
