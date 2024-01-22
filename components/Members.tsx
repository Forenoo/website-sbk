import MiniHeader from "./MiniHeader";
import SemiHeader from "./SemiHeader";
import MemberCard from "./MemberCard";

const membersData = [
  {
    name: "Ahmad Zidan Ramadhani",
    detail: "Nomor Absen 01",
  },
  {
    name: "Aliya Navesa Lestari",
    detail: "Nomor Absen 02",
  },
  {
    name: "Anjasyah Ega Ramadhan",
    detail: "Nomor Absen 03",
  },
  {
    name: "Armitha Dwi Maharani",
    detail: "Nomor Absen 04",
  },
  {
    name: "Ayu Marsella Setiandasari Olivia Sandi",
    detail: "Nomor Absen 05",
  },
  {
    name: "Azerus Ezhar Abieza Wicaksana",
    detail: "Nomor Absen 06",
  },
  {
    name: "Cahya Adi Sanjaya",
    detail: "Nomor Absen 07",
  },
  {
    name: "Chesta Ridho Budhi Karunia",
    detail: "Nomor Absen 08",
  },
  {
    name: "Dajuan Priyagung Wicaksono",
    detail: "Nomor Absen 09",
  },
  {
    name: "Faustin Hosea Federiko",
    detail: "Nomor Absen 10",
  },
  {
    name: "Ferdiansyah Nur Rosyid",
    detail: "Nomor Absen 11",
  },
  {
    name: "Foreno Faisal Fahri",
    detail: "Nomor Absen 12",
  },
];

export default function Members() {
  return (
    <section className="py-[100px] maxContainer paddingContainer">
      <MiniHeader>class members</MiniHeader>
      <SemiHeader className="max-w-[482px] mb-[50px]">
        List Seluruh Nama Anggota Kelas X RPL A 2024
      </SemiHeader>
      <MemberCard name={"Anisa Istiqomah"} detail="Homeroom Teacher" />
      <div className="grid grid-cols-4 gap-[30px] mt-[30px]">
        {membersData.map((member, i) => {
          return (
            <MemberCard key={i} name={member.name} detail={member.detail} />
          );
        })}
      </div>
      <div className="flex gap-[10px] mt-[50px] justify-center">
        <div className="paginationActive text-secondary text-[1rem] flex justify-center items-center font-semibold leading-[100%] w-[35px] h-[35px] border border-solid border-primary border-opacity-20 cursor-pointer rounded-[6px]">
          1
        </div>
        <div className="text-secondary text-[1rem] flex justify-center items-center font-semibold leading-[100%] w-[35px] h-[35px] border border-solid border-primary border-opacity-20 rounded-[6px] cursor-pointer hover:bg-secondary hover:text-[#fff] transition-all">
          2
        </div>
        <div className="text-secondary text-[1rem] flex justify-center items-center font-semibold leading-[100%] w-[35px] h-[35px] border border-solid border-primary border-opacity-20 rounded-[6px] cursor-pointer hover:bg-secondary hover:text-[#fff] transition-all">
          3
        </div>
      </div>
    </section>
  );
}
