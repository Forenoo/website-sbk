import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <>
      <div className="h-[2px] bg-[#E5E5E5] w-full"></div>
      <p className={`${inter.className} text-[1rem] my-[30px] text-center`}>
        Copyright © 2024 <span className={`font-medium`}>Asteria</span>. All
        rights reserved
      </p>
    </>
  );
}
