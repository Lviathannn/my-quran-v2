import DoaCard from "@/components/features/DoaCard";
import BookIcon from "@/components/icons/BookIcon";
import { getDoaList } from "@/services/getDoaList";
import Image from "next/image";
import Quran from "@/assets/Quran.svg";
import Banner from "@/components/features/Banner";
export default async function DoaPage() {
  const doaList = await getDoaList();
  return (
    <main className="container mx-auto h-screen space-y-[29px] pt-20 sm:pl-20">
      <Banner
        title="Kumpulan Doa"
        quote="Berdoalah kepada-Ku, niscaya akan Aku perkenankan bagimu (apa yang kamu harapkan)"
        ayat="QS. Ghafir : 60"
        customClass="opacity-50 md:opacity-100"
      />

      <section className="grid grid-cols-1 gap-x-5  pb-16 md:grid-cols-2 lg:grid-cols-3 ">
        {doaList.map((item) => {
          return <DoaCard number={item.id} key={item.id} title={item.judul} />;
        })}
      </section>
    </main>
  );
}
