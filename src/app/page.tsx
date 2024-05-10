import Banner from "@/components/features/Banner";
import SearchSurah from "@/components/features/SearchSurah";
import SurahList from "@/components/features/SurahList";

export default function Home() {
  return (
    <main className="container h-screen space-y-[29px] pt-16 sm:pl-20">
      <section className="space-y-1">
        <p className="text-[18px] font-medium leading-normal text-muted">
          Assalamualaikum
        </p>
        <h1 className="text-2xl font-semibold text-text">Muhammad Asrul</h1>
      </section>
      <Banner title="Terakhir Baca" quote="Al Fatihah" ayat="Ayat : 200" />

      <SearchSurah />
      <SurahList />
    </main>
  );
}
