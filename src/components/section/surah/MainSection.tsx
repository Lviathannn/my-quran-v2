import { Bookmark } from "@prisma/client";
import AudioPlayer from "@/components/features/AudioPlayer";
import Image from "next/image";
import Quran from "@/assets/Quran.svg";
import Bismillah from "@/assets/bismillah.svg";
import AyatCardSkeleton from "@/components/features/AyatCardSkeleton";
import dynamic from "next/dynamic";

const AyatCard = dynamic(() => import("@/components/features/AyatCard"), {
  loading: () => <AyatCardSkeleton />,
});

type Props = {
  surahDetail: SurahDetail;
  tafsir: TafsirList | undefined;
  bookMarkList: Bookmark[] | null;
};

export default function MainSection({
  surahDetail,
  tafsir,
  bookMarkList,
}: Props) {
  return (
    <section className="space-y-10 pb-14">
      <div className="relative flex h-[257px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary">
        <div className="z-20 space-y-8 text-center text-white">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium">{surahDetail?.nama_latin}</h1>
            <p className="font-medium">{surahDetail?.arti}</p>
            <hr />
            <p className="text-sm font-medium">
              {surahDetail?.tempat_turun == "mekah" ? "Makiyyah" : "Madaniyyah"}{" "}
              • {surahDetail?.jumlah_ayat} Ayat
            </p>
          </div>
          <Image src={Bismillah} alt="Bismillah" />
        </div>
        <Image
          src={Quran}
          alt="Quran"
          className="absolute -bottom-12 -right-14 z-0 opacity-20"
          priority
        />
      </div>
      <div className="space-y-6 pb-10">
        {surahDetail &&
          surahDetail.ayat.map((ayat, index) => (
            <AyatCard
              key={ayat.id}
              number={ayat.nomor}
              arabic={ayat.ar}
              latin={ayat.tr}
              tranlation={ayat.idn}
              tafsir={tafsir?.tafsir[index].tafsir || ""}
              surah={surahDetail.nama_latin}
              bookMarkList={bookMarkList}
              surahId={surahDetail.nomor}
            />
          ))}
      </div>

      <AudioPlayer
        audioUrl={surahDetail?.audio as string}
        surah={surahDetail?.nama_latin || ""}
      />
    </section>
  );
}
