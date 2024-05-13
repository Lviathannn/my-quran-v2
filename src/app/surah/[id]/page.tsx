import { getSurahDetail } from "@/services/getSurahDetail";
import { getBookMarkList } from "@/actions/getBookmarkList";
import { getTafsir } from "@/services/getTafsir";
import MainSection from "@/components/section/surah/MainSection";

type Props = {
  params: { id: string };
};

export default async function page({ params }: Props) {
  const { id } = params;
  const surahDetail = await getSurahDetail(id);
  const bookMarkList = await getBookMarkList();
  const tafsir = await getTafsir(id);

  return (
    <main className="container mx-auto h-screen space-y-[29px] pt-20 sm:pl-20">
      {surahDetail ? (
        <MainSection
          surahDetail={surahDetail}
          tafsir={tafsir}
          bookMarkList={bookMarkList}
        />
      ) : (
        <>
          <div className="flex h-full items-center justify-center">
            <h1 className="text text-xl font-medium">
              Surah dengan ID {id} tidak ditemukan. Silahkan cek kembali.
            </h1>
          </div>
        </>
      )}
    </main>
  );
}
