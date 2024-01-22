import Link from "next/link";

export default function InstagramButton() {
  return (
    <button className="bg-transparent border h-fit text-[#fff] border-[#fff] instagramBtnGlow rounded-full px-[23px] py-[7px]">
      <Link
        href={"https://www.instagram.com/xrpl_asteria/"}
        target="_blank"
      >Instagram</Link>
    </button>
  );
}
