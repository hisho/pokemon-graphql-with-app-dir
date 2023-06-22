import '@/app/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  description: 'next app',
  title: 'Next App',
}

type Props = {
  children: ReactNode
}

export default function ({ children }: Props) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
