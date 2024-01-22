import Image from "next/image";
import Header from "./Header";
import InstagramButton from "./InstagramButton";

export default function Hero() {
  return (
    <>
      <Header />
      <section className="bg-[url('/background-hero.jpg')] min-h-[750px] w-full bg-no-repeat bg-cover relative">
        <div className="bg-black bg-opacity-60 z-[500] w-full h-full absolute flex items-center justify-center">
          <div className="text-[#fff] text-center flex flex-col items-center justify-center ">
            <h1 className="font-bold text-[64px] leading-[120%]">X RPL A</h1>
            <p className="font-normal text-[20px] ">
              The place where happiness begins
            </p>
            <span className="flex mt-[20px] sm:hidden">
              <InstagramButton />
            </span>
          </div>
        </div>
        <div className="flex absolute bottom-[10px] left-1/2 -translate-x-1/2 z-[998]">
          <Image
            src={"/logosmk.png"}
            width={38}
            height={40}
            alt="logosmkn8mlg"
          />
          <Image
            src={"/logorpl.png"}
            width={33}
            height={40}
            alt="logorplk8mlg"
          />
        </div>
      </section>
    </>
  );
}
