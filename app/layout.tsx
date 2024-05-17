import CodeAndCredit from '@/components/CodeAndCredit'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-prompt',
})

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
        <link rel='icon' href='/logo.png' sizes='any' />
        <Navbar />
        <CodeAndCredit />
        <Container className='mx-52'>{children}</Container>
        <Footer />
      </body>
    </html>
  )
}
