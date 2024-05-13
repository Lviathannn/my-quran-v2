import { Bookmark as BookMarkList } from "@prisma/client";
import AyatButtonList from "./AyatButtonList";

type Props = {
  number: number;
  tranlation: string;
  arabic: string;
  tafsir: string;
  latin: string;
  surah: string;
  bookMarkList: BookMarkList[] | null;
  surahId: number;
};

export default function AyatCard({
  number,
  tranlation,
  arabic,
  tafsir,
  latin,
  surah,
  bookMarkList,
  surahId,
}: Props) {
  return (
    <article className="space-y-10" id={number.toString()}>
      <div className="flex w-full justify-between rounded-[10px] bg-accent px-3 py-[10px]">
        <p className="flex aspect-square size-7 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
          {number}
        </p>
        <AyatButtonList
          number={number}
          surah={surah}
          bookMarkList={bookMarkList}
          surahId={surahId}
          tafsir={tafsir}
        />
      </div>
      <div className="space-y-5">
        <p
          className="font-arabic text-lg font-semibold leading-loose tracking-wide text-text dark:text-foreground"
          dir="rtl"
        >
          {arabic}
        </p>
        <p className="text-primary">{latin}</p>
        <p className="text-text dark:text-foreground">{tranlation}</p>
      </div>
    </article>
  );
}
