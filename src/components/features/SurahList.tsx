import { getSurahList } from "@/services/getSurahList";
import SurahCard from "./SurahCard";

export default async function SurahList() {
  const surahList = await getSurahList();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-5 md:gap-x-7 lg:grid-cols-3 xl:grid-cols-4">
      {surahList.map((surah) => (
        <SurahCard
          key={surah.nomor}
          number={surah.nomor}
          surahName={surah.nama_latin}
          surahArabicName={surah.nama}
          totalAyat={surah.jumlah_ayat}
        />
      ))}
    </section>
  );
}
