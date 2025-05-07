"use client";
import Image from "next/image";
import { useState } from "react";
import Popup from "../popup/popup";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between px-2 md:px-0 md:justify-evenly items-center pt-3 md:pt-5">
      <div
        onClick={() => setOpen(true)}
        className="relative w-[30px] h-[30px] md:w-[70px] md:h-[70px] "
      >
        <Image
          src="/images/nike.png"
          alt="nike"
          objectFit="fill"
          layout="fill"
        />
      </div>
      <div className="md:hidden flex text-[20px] font-bold">Nike</div>
      <div className="text-[18px] gap-10 md:flex hidden ">
        <button onClick={() => setOpen(true)}>Men</button>
        <button onClick={() => setOpen(true)}>Women</button>
        <button onClick={() => setOpen(true)}>Kids</button>
        <button onClick={() => setOpen(true)}>Customise</button>
      </div>
      <div
        onClick={() => setOpen(true)}
        className="relative w-[30px] h-[30px] md:w-[60px] md:h-[60px] "
      >
        <Image src="/images/bag.png" alt="bag" objectFit="fill" layout="fill" />
      </div>
      <Popup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
