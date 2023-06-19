import '@/app/globals.css'
import { ReactNode } from 'react'

export const metadata = {
  description: 'next app',
  title: 'Next App',
}

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
export default Layout
