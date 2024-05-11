"use client";
import { addBookmark } from "@/actions/addBookmark";
import { deleteBookmark } from "@/actions/deleteBookMark";
import { Bookmark as BookMarkList } from "@prisma/client";
import { Bookmark, Play, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Props = {
  number: number;
  tranlation: string;
  arabic: string;
  audioUrl: string;
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
  audioUrl,
  tafsir,
  latin,
  surah,
  bookMarkList,
  surahId,
}: Props) {
  const [isBookmarked, setIsBookmarked] = useState<boolean | null>(null);
  const [bookmarkID, setBookmarkID] = useState<number | null>(null);
  const router = useRouter();

  const handleBookMark = async () => {
    try {
      const res = await addBookmark({
        ayat: number,
        surah,
        createdAt: new Date(),
        surahId,
      });
      router.refresh();
      setIsBookmarked(true);
      toast.success("Bookmark berhasil ditambahkan");
    } catch (error) {
      console.error(error);
      toast.error("Login terlebih dahulu untuk menambahkan bookmark");
    }
  };

  const handleDeleteBookMark = async () => {
    try {
      await deleteBookmark(bookmarkID!);
      router.refresh();
      toast.success("Bookmark berhasil dihapus");
      setIsBookmarked(false);
    } catch (error) {
      toast.error("Gagal menghapus bookmark");
      console.error(error);
    }
  };

  useEffect(() => {
    if (bookMarkList) {
      const isBookmarked = bookMarkList.find((bookmark) => {
        if (bookmark.ayat === number && bookmark.surah === surah) {
          return true;
        }
      });

      if (isBookmarked) {
        setBookmarkID(isBookmarked.id);
        setIsBookmarked(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className="space-y-10" id={number.toString()}>
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
          {!isBookmarked ? (
            <button onClick={handleBookMark}>
              <Bookmark size={24} className="text-primary" />
            </button>
          ) : (
            <button onClick={handleDeleteBookMark}>
              <Bookmark size={24} fill="#25d08c" strokeWidth={0} />
            </button>
          )}
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
