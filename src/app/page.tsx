import SearchSurah from "@/components/features/SearchSurah";
import SurahList from "@/components/features/SurahList";
import BookIcon from "@/components/icons/BookIcon";
import Quran from "@/assets/Quran.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto h-screen space-y-[29px] pt-16 sm:pl-20 md:pt-5">
      <section className="space-y-1">
        <p className="text-[18px] font-medium leading-normal text-muted">
          Assalamualaikum
        </p>
        <h1 className="text-2xl font-semibold text-text">Muhammad Asrul</h1>
      </section>
      <section className="relative h-[131px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary p-5 md:h-[200px]">
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center gap-2">
            <BookIcon />
            <p className="text-sm  text-white">Last Read</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-white">Al-Baqarah</h2>
            <p className="text-sm text-white">Ayat : 286</p>
          </div>
        </div>
        <Image
          src={Quran}
          alt="AlQur'an"
          className="absolute -bottom-7 -right-10 w-52 md:-bottom-5 md:-right-5 md:w-72"
          priority
        />
      </section>
      <SearchSurah />
      <SurahList />
    </main>
  );
}
