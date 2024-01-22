interface SemiHeaderTypeProps {
  children: React.ReactNode;
  className?: string;
}

export default function SemiHeader({
  children,
  className,
}: SemiHeaderTypeProps) {
  return (
    <h2
      className={`text-primary text-[32px] mt-[15px] font-semibold leading-[130%] ${className}`}
    >
      {children}
    </h2>
  );
}
