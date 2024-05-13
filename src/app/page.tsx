import { getLatestBookMark } from "@/actions/getLatestBookMark";
import Banner from "@/components/features/Banner";
import SearchSurah from "@/components/features/SearchSurah";
import SurahList from "@/components/features/SurahList";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface Props {
  searchParams: {
    search: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const latestBookMark = await getLatestBookMark();

  return (
    <main className="container h-screen space-y-[29px] pt-16 sm:pl-20">
      {user && (
        <section className="space-y-1">
          <p className="text-[18px] font-medium leading-normal text-muted dark:text-muted-foreground">
            Assalamualaikum
          </p>
          <h1 className="text-2xl font-semibold text-text dark:text-primary">
            {user.given_name + " " + user.family_name}
          </h1>
        </section>
      )}
      {latestBookMark ? (
        <a
          href={`/surah/${latestBookMark.surahId}#${latestBookMark.ayat}`}
          className="block"
        >
          <Banner
            title="Terakhir Baca"
            quote={latestBookMark?.surah || "Tidak ada bookmark"}
            ayat={`Ayat : ${latestBookMark?.ayat || "-"}`}
          />
        </a>
      ) : (
        <Banner
          title="Terakhir Baca"
          quote={"Tidak ada bookmark"}
          ayat={`Ayat : -`}
        />
      )}

      <SearchSurah />
      <SurahList search={searchParams.search || ""} />
    </main>
  );
}
