import Banner from "@/components/features/Banner";
import SearchSurah from "@/components/features/SearchSurah";
import SurahList from "@/components/features/SurahList";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <main className="container h-screen space-y-[29px] pt-16 sm:pl-20">
      {user && (
        <section className="space-y-1">
          <p className="text-[18px] font-medium leading-normal text-muted">
            Assalamualaikum
          </p>
          <h1 className="text-2xl font-semibold text-text">
            {user.given_name + " " + user.family_name}
          </h1>
        </section>
      )}
      <Banner title="Terakhir Baca" quote="Al Fatihah" ayat="Ayat : 200" />

      <SearchSurah />
      <SurahList />
    </main>
  );
}
