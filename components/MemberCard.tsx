import Image from "next/image";

interface MemberCardTypeProps {
  name: string;
  detail: string;
}

export default function MemberCard({ name, detail }: MemberCardTypeProps) {
  return (
    <div className="w-full py-[20px] border-2 border-solid border-[#E6E6E6] flex flex-col justify-center items-center rounded-[8px]">
      <Image src={"/person.svg"} width={80} height={80} alt="userprofile" />
      <div className="text-center text-[14px] mt-[15px] flex flex-col items-center">
        <span className="text-primary font-medium">{name}</span>
        <span className="text-secondary leading-[130%]">{detail}</span>
      </div>
    </div>
  );
}
