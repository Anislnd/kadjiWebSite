import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "Kadji Business Academy",
  description: "Official application of the Kadji Business Consulting Academy school",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
