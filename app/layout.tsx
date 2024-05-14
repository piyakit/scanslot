import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

const prompt = Prompt({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${prompt.className} bg-bgimg bg-fixed`}>
        <Navbar />
        <div className='xs:mx-4 2xl:mx-[22vw]'>
          <Container>{children}</Container>
        </div>
        <Footer />
      </body>
    </html>
  )
}
