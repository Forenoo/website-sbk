import React from "react";
import MiniHeader from "./MiniHeader";
import GalleryCard from "./GalleryCard";
import Button from "./Button";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import SemiHeader from "./SemiHeader";

export default function Gallery() {
  return (
    <section className="pt-[100px] maxContainer paddingContainer">
      <MiniHeader>our gallery</MiniHeader>
      <SemiHeader className="max-w-[540px]">
        Foto Kenangan Masa Sekolah Bersama Asteria
      </SemiHeader>
      <div className="grid grid-cols-3 gap-[30px] mt-[50px]">
        {[...Array(9)].map((_, i) => {
          return (
            <GalleryCard
              key={i}
              imgSrc="/galeryplaceholder.png"
              title="Juara Satu Drama P5"
              date="19/01/2024"
            />
          );
        })}
      </div>
      <Button classname="flex items-center gap-[10px] mx-auto mt-[50px]">
        Lihat Lainnya <FaArrowRightLong />
      </Button>
    </section>
  );
}
