import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  viewport: "width=device-width, initial-scale=1.0,viewport-fit=cover, maximum-scale=1.0, user-scalable=no"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ja">
      <body className="bg-white h-screen fixed left-0 right-0 overflow-hidden">{children}</body>
    </html>
  )
}
