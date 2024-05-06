import { Bookmark, Play, Share2 } from "lucide-react";

type Props = {
  number: number;
  tranlation: string;
  arabic: string;
  audioUrl: string;
  tafsir: string;
  latin: string;
};

export default function AyatCard({
  number,
  tranlation,
  arabic,
  audioUrl,
  tafsir,
  latin,
}: Props) {
  return (
    <article className="space-y-10">
      <div className="flex w-full justify-between rounded-[10px] bg-accent px-3 py-[10px]">
        <p className="flex aspect-square size-7 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
          {number}
        </p>
        <div className="flex gap-4">
          <button>
            <Share2 size={24} className="text-primary" />
          </button>
          <button>
            <Play size={24} className="text-primary" />
          </button>
          <button>
            <Bookmark size={24} className="text-primary" />
          </button>
        </div>
      </div>
      <div className="space-y-5">
        <p
          className="font-arabic text-lg font-semibold leading-loose tracking-wide text-text"
          dir="rtl"
        >
          {arabic}
        </p>
        <p className="text-primary">{latin}</p>
        <p className="text-text">{tranlation}</p>
      </div>
    </article>
  );
}
