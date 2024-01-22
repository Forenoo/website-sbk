"use client";

interface ButtonTypeProps {
  children: React.ReactNode;
  classname?: string;
}

export default function Button({ children, classname }: ButtonTypeProps) {
  return (
    <button
      className={`bg-primary rounded-full text-[#fff] h-fit w-fit font-medium text-[1rem] px-[28px] py-[13px] ${classname}`}
    >
      {children}
    </button>
  );
}
