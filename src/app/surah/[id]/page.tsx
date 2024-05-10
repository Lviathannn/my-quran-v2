import Image from "next/image";
import Quran from "@/assets/Quran.svg";
import Bismillah from "@/assets/bismillah.svg";
import AyatCard from "@/components/features/AyatCard";
import { getSurahDetail } from "@/services/getSurahDetail";

type Props = {
  params: { id: string };
};

export default async function page({ params }: Props) {
  const { id } = params;
  const surahDetail = await getSurahDetail(id);

  return (
    <main className="container mx-auto h-screen space-y-[29px] pt-20 sm:pl-20">
      {surahDetail ? (
        <>
          <div className="relative flex h-[257px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary">
            <div className="z-20 space-y-8 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-2xl font-medium">
                  {surahDetail?.nama_latin}
                </h1>
                <p className="font-medium">{surahDetail?.arti}</p>
                <hr />
                <p className="text-sm font-medium">
                  {surahDetail?.tempat_turun == "mekah"
                    ? "Makiyyah"
                    : "Madaniyyah"}{" "}
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
              surahDetail.ayat.map((ayat) => (
                <AyatCard
                  key={ayat.id}
                  number={ayat.nomor}
                  arabic={ayat.ar}
                  latin={ayat.tr}
                  tranlation={ayat.idn}
                  audioUrl={surahDetail.audio}
                  tafsir=""
                />
              ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </main>
  );
}
