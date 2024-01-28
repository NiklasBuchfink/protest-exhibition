import '@/styles/globals.css'
import '@/styles/remark.css'
import localFont from 'next/font/local'

import type { AppProps } from 'next/app'

const rubik = localFont({
  src: [
    {
      path: './../../fonts/Rubik-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './../../fonts/Rubik-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../fonts/Rubik-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: "--rubik"
})

const venusmartre = localFont({
  src: './../../fonts/Venus+Martre.otf',
  variable: '--venusmartre',
})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${rubik.variable} ${venusmartre.variable}`}>
      <Component {...pageProps} />
    </main>
}
