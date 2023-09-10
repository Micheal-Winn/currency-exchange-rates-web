import Navbar from "@/components/Navbar"

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