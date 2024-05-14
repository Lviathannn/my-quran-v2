"use server";

import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const addBookmark = async (data: {
  surah: string;
  ayat: number;
  createdAt: Date;
  surahId: number;
}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  await db.bookmark.create({
    data: {
      surah: data?.surah,
      ayat: data.ayat,
      createdAt: data.createdAt,
      surahId: data.surahId,
      user: {
        connect: {
          kindeId: user.id,
        },
      },
    },
  });
};
