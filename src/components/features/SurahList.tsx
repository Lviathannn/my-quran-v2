import { getSurahList } from "@/services/getSurahList";
import SurahCard from "./SurahCard";

export default async function SurahList({ search }: { search: string }) {
  const surahList = await getSurahList();
  const regex = /[^\w\s]/g;

  const filteredSurahList =
    surahList &&
    surahList.filter((surah) => {
      return surah.nama_latin
        .toLowerCase()
        .replace(regex, "")
        .replace(" ", "")
        .includes(search.toLowerCase().replace(regex, "").replace(" ", ""));
    });

  return (
    <section className="grid grid-cols-1 pb-16 sm:grid-cols-2 sm:gap-x-5 md:gap-x-7 lg:grid-cols-3 xl:grid-cols-4">
      {filteredSurahList.map((surah) => (
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
