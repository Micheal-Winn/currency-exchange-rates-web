"use client";
import Image from "next/image";
import React, { memo } from "react";
import { usePathname } from "next/navigation";
import Btn from "./Btn";
import { Menu } from "lucide-react";
import { Drawer } from "vaul";

const Navbar = () => {
  const path = usePathname();
  const funTypeBtn = path === "/currency" ? "home" : "currency";
  return (
    <nav className="flex justify-between items-center mt-4 px-3 md:px-11">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 xl:w-12 xl:h-12 relative rounded-full overflow-hidden">
          <Image
            src={"/assets/photos/logo.svg"}
            fill
            style={{ objectFit: "cover" }}
            alt="logo for currency website"
          />
        </div>
        <span className="font-bold text-xl tracking-wide hidden lg:flex">
          Exchange Rate
        </span>
      </div>
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button className="lg:hidden">
            <Menu />
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[25%] mt-24 fixed bottom-0 left-0 right-0 pt-10 px-5">
            <Btn
              text={path === "/" ? "Get Start" : "home"}
              funType={funTypeBtn}
              className="px-8 uppercase rounded-md bg-[#1D1DFF] text-white "
            />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      <Btn
        text={path === "/" ? "Get Start" : "home"}
        funType={funTypeBtn}
        className="px-8 uppercase rounded-md bg-[#1D1DFF] text-white hidden lg:flex"
      />
    </nav>
  );
};

export default memo(Navbar);
