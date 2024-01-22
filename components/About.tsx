import Button from "./Button";
import MiniHeader from "./MiniHeader";
import Statistic from "./Statistic";

const statistics = [
  {
    count: 35,
    title: "Total Siswa",
  },
  {
    count: 18,
    title: "Laki-Laki",
  },
  {
    count: 17,
    title: "Perempuan",
  },
];

export default function About() {
  return (
    <section className="pt-[100px] maxContainer paddingContainer">
      <MiniHeader>about us</MiniHeader>
      <div className="flex flex-col gap-[50px] text-primary text-[20px] mt-[15px]">
        <p className="max-w-[1197px]">
          Selamat datang di Website Resmi Kelas X RPL A dari SMK Negeri 8
          Malang.
          <br /> Website ini dibuat untuk mendokumentasikan kegiatan-kegiatan
          yang selama ini terjadi di kelas kami. Terima kasih sudah mengunjungi
          website ini, semoga harimu menyenangkan.
        </p>
        <p className="max-w-[775px]">
          Quotes of the day:
          <br />
          “Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah
          berlalu dan yakinlah semua akan baik-baik saja.”
        </p>
      </div>
      <div className="h-[2px] w-full bg-primary bg-opacity-30 my-[50px]"></div>
      <div className="flex justify-between items-center">
        {statistics.map((stats, index) => (
          <Statistic key={index} {...stats} />
        ))}
        <div className="h-[2px] w-[500px] bg-primary bg-opacity-30"></div>
        <Button>Lihat Selengkapnya</Button>
      </div>
    </section>
  );
}
