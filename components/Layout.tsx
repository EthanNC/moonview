import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Sidebar } from './Sidebar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = '🌙 MoonView' }: Props) => (
  <div className="flex flex-wrap">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="hidden md:block flex-grow">
    <Sidebar/>
    </header>
    <div className="container mx-auto flex-grow">
    {children}
    </div>
  </div>
)

export default Layout
