"use client";

import Image from "next/image";
import InstagramButton from "./InstagramButton";

export default function Header() {
  return (
    <nav className="maxContainer paddingContainer z-[999] w-full absolute top-[15px] left-1/2 -translate-x-1/2 flex justify-between">
      <button className="bg-white text-primary w-fit h-fit py-[7px] leading-[100%] rounded-[8px] items-center text-[1rem] flex gap-[15px] px-[25px]">
        <Image width={24} height={24} alt="Hamburger" src={"/menu.svg"} />
        Menu
      </button>
      <div className="flex flex-col headerGlow text-[#fff]">
        <span className="text-[1rem]">Hello Visitor!</span>
        <span className="uppercase font-semibold text-[20px]">welcome</span>
      </div>
      <span className="hidden sm:flex">
        <InstagramButton />
      </span>
    </nav>
  );
}
