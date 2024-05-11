"use server";

import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getBookMarkList = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return null;
  }

  const bookmarks = await db.bookmark.findMany({
    where: {
      user: {
        kindeId: user.id,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return bookmarks;
};
