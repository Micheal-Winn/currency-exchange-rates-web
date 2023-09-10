import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Btn from '@/components/Btn'

export default function Home() {
  return (
    <main className="container lg:h-screen lg:overflow-hidden h-auto">
      <Navbar/>
      <section className="w-full h-full flex flex-col-reverse lg:flex-row lg:pl-10">
        <section className="lg:w-1/2 flex flex-col lg:justify-center gap-6 md:gap-8  lg:-mt-14 px-3">
          <h1 className="font-extrabold text-3xl md:text-5xl 2xl:text-7xl mt-8 text-center lg:text-left">
            Unlock the World of <br />
            <span className="">Currency Exchange</span>
          </h1>
          <p className="font-semibold text-xs md:text-sm text-center px-2 md:px-10 lg:px-0 lg:text-left leading-normal lg:tracking-wide text-slate-500 lg:leading-relaxed">
            Welcome to the premier destination for instant exchange rate
            information. Whether you&apos;re a savvy traveler, a global entrepreneur,
            or simply curious about foreign currencies, we&apos;ve got you covered.
            Explore real-time rates, convert currencies effortlessly, and make
            informed financial decisions. Your gateway to a world of financial
            possibilities begins here.
          </p>
          <Btn text="Let&apos;s Start to exchange" funType="currency" className=" md:w-[12rem] mx-auto lg:mx-0 rounded-md xl:py-6 bg-[#1D1DFF] text-white font-semibold capitalize"/>
        </section>
        <section className="lg:w-1/2 w-full h-full">
          <div className="relative w-[20rem] h-[20rem] lg:w-full lg:h-full  mx-auto">
          <Image
            src={"/assets/photos/exchange.png"}
            fill
            style={{ objectFit: "contain" }}
            alt="hero exchange photo"
          />
          </div>
        </section>
      </section>
    </main>
  )
}
