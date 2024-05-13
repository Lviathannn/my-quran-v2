"use client";
import { Book, Bookmark, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { addBookmark } from "@/actions/addBookmark";
import { deleteBookmark } from "@/actions/deleteBookMark";
import { toast } from "sonner";
import { Bookmark as BookMarkList } from "@prisma/client";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TelegramIcon,
} from "react-share";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Markdown from "react-markdown";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  number: number;
  surah: string;
  bookMarkList: BookMarkList[] | null;
  surahId: number;
  tafsir: string;
};

export default function AyatButtonList({
  number,
  surah,
  bookMarkList,
  surahId,
  tafsir,
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
      toast.error("Login untuk menambahkan bookmark");
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://my-quran-v2.vercel.app/surah/${surahId}#${number}`,
      );
      toast.success("Link berhasil disalin");
    } catch (error) {
      toast.error("Gagal menyalin link");
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
    <div className="flex items-center gap-4">
      <Dialog>
        <DialogTrigger>
          <Share2 size={24} className="text-primary" />
        </DialogTrigger>
        <DialogContent className="max-h-[80%] overflow-scroll">
          <DialogHeader className="space-y-5">
            <DialogTitle>
              Share This Ayat {surah} : {number}
            </DialogTitle>
            <DialogDescription className="space-x-2 space-y-5 text-center">
              <FacebookShareButton
                url={`https://my-quran-v2.vercel.app/surah/${surahId}#${number}`}
              >
                <FacebookIcon size={48} className="rounded-full" />
              </FacebookShareButton>
              <WhatsappShareButton
                url={`https://my-quran-v2.vercel.app/surah/${surahId}#${number}`}
              >
                <WhatsappIcon size={48} className="rounded-full" />
              </WhatsappShareButton>
              <TelegramShareButton
                url={`https://my-quran-v2.vercel.app/surah/${surahId}#${number}`}
              >
                <TelegramIcon size={48} className="rounded-full" />
              </TelegramShareButton>
              <div className="flex gap-2">
                <Input
                  value={`https://my-quran-v2.vercel.app/${surahId}#${number}`}
                />
                <Button onClick={handleCopy}>Copy</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>
          <Book size={24} className="text-primary" />
        </DialogTrigger>
        <DialogContent className="max-h-[80%] overflow-scroll">
          <DialogHeader className="space-y-5">
            <DialogTitle>
              {surah} : {number}
            </DialogTitle>
            <DialogDescription>
              <Markdown className="space-y-3">{tafsir}</Markdown>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

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
  );
}
