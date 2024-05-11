"use client";
import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteBookmark } from "@/actions/deleteBookMark";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  number: number;
  id: number;
  ayat: number;
  surah: string;
  createdAt: Date;
  surahId: number;
};

export default function BookMarkCard({
  ayat,
  surah,
  createdAt,
  id,
  number,
  surahId,
}: Props) {
  const dateNow = new Date();
  const date = new Date(createdAt);
  const diffTime = dateNow.valueOf() - date.valueOf();
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await deleteBookmark(id);
      router.refresh();
      toast.success("Bookmark berhasil dihapus");
    } catch (error) {
      console.log(error);
      toast.error("Gagal menghapus bookmark");
    }
  };

  return (
    <div className="relative w-full rounded-lg bg-accent p-3">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="icon"
            className="absolute right-5 h-7 w-7 rounded-full hover:bg-destructive hover:text-white"
            variant="ghost"
          >
            <X size={18} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-[90%] rounded-xl">
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah anda yakin ?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda akan menghapus bookmark ini dari daftar bookmark
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive hover:bg-red-800"
            >
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <a href={`/surah/${surahId}#${ayat}`} className="space-y-7">
        <div className="flex items-center justify-between">
          <p className=" flex size-7 items-center justify-center rounded-full bg-primary font-medium text-white ">
            {number}
          </p>
        </div>
        <div>
          <p className="text-lg font-medium text-text">
            {surah} : {ayat}
          </p>
          <p className="text-sm text-muted">
            {diffTime / 1000 <= 60
              ? "Satu menit yang lalu"
              : diffTime / 1000 / 60 <= 60
                ? `${Math.floor(diffTime / 1000 / 60)} menit yang lalu`
                : diffTime / 1000 / 60 <= 60
                  ? "Satu jam yang lalu"
                  : diffTime / 1000 / 60 / 60 <= 24
                    ? "Satu hari yang lalu"
                    : diffTime / 1000 / 60 / 60 / 24 <= 7
                      ? "Satu minggu yang lalu"
                      : "Lebih dari satu minggu yang lalu"}
          </p>
        </div>
      </a>
    </div>
  );
}
