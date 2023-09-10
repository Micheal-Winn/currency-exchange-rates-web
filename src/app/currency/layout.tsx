import Navbar from "@/components/Navbar"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Currency Exchange | Currency Page',
  description: 'Currency Exchange converter page',
}
export default function ExchangeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="container">
        <Navbar/>
        {children}
      </section>
    )
  }