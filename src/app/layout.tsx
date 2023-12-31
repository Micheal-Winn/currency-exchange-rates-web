import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from "./providers";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'Currency Exchange',
  description: 'Currency Exchange web app built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}> <Providers>{children}</Providers></body>
    </html>
  )
}
