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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export default Layout
