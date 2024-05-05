import Link from "next/link";
import StarShape from "./StarShape";

type Props = {
  number: number;
  surahName: string;
  surahArabicName: string;
  totalAyat: number;
};

export default function SurahCard({
  number,
  surahName,
  surahArabicName,
  totalAyat,
}: Props) {
  return (
    <Link href={`/surah/${number}`}>
      <article className="flex items-center justify-between border-b px-3 py-4 hover:rounded-md hover:border-0 hover:bg-accent">
        <div className="flex items-center gap-4">
          <StarShape number={number} />
          <div className="">
            <h2 className="text-base font-medium text-text">{surahName}</h2>
            <p className="text-xs font-medium text-muted">{totalAyat} Ayat</p>
          </div>
        </div>
        <p className="font-arabic font-semibold text-primary">
          {surahArabicName}
        </p>
      </article>
    </Link>
  );
}
