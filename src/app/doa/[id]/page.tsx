import { getDoaDetail } from "@/services/getDoaDetail";
import Image from "next/image";
import React from "react";
import Quran from "@/assets/Quran.svg";
import Bismillah from "@/assets/bismillah.svg";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const doaDetail = await getDoaDetail(params.id);
  return (
    <main className="container mx-auto h-screen space-y-[29px] pt-20 sm:pl-20">
      <section className="relative flex h-[257px] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary">
        <div className="z-20 flex flex-col items-center justify-center space-y-8 text-center text-white">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium">{doaDetail?.judul}</h1>
            <hr />
          </div>
          <Image src={Bismillah} alt="Bismillah" />
        </div>
        <Image
          src={Quran}
          alt="Quran"
          className="absolute -bottom-12 -right-14 z-0 opacity-20"
          priority
        />
      </section>
      <section className="space-y-5 pt-10">
        <p
          className="font-arabic text-xl font-semibold text-text dark:text-foreground"
          dir="rtl"
        >
          {doaDetail?.arab}
        </p>
        <p className="text-primary">{doaDetail?.latin}</p>
        <p className="text-text dark:text-foreground">{doaDetail?.terjemah}</p>
      </section>
    </main>
  );
}
