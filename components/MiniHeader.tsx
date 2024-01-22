interface MiniHeaderTypeProps {
  children: React.ReactNode;
}

export default function MiniHeader({ children }: MiniHeaderTypeProps) {
  return (
    <div className="flex gap-[15px] items-center">
      <div className="bg-secondary h-[2px] w-[60px]"></div>
      <span className="text-secondary font-medium uppercase text-[1rem]">{children}</span>
    </div>
  );
}
