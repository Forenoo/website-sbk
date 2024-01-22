import Image from "next/image";

interface GalleryCardTypeProps {
  imgSrc: string;
  title: string;
  date: string | any;
}

export default function GalleryCard({
  imgSrc,
  title,
  date,
}: GalleryCardTypeProps) {
  return (
    <div className="flex flex-col gap-[10px]">
      <Image
        width={430}
        height={280}
        alt="Image"
        src={imgSrc}
        className="rounded-[20px]"
      />
      <div className="flex flex-col">
        <span className="text-[20px] font-medium text-primary">{title}</span>
        <p className="text-secondary text-[14px] font-normal">Posted {date}</p>
      </div>
    </div>
  );
}
