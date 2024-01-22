interface StatisticTypeProps {
  count: number;
  title: string;
}

export default function Statistic({ count, title }: StatisticTypeProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-secondary font-semibold leading-[120%] text-[48px] text-center">{count}</h2>
      <span className="text-primary font-normal text-[20px] text-center">{title}</span>
    </div>
  );
}
