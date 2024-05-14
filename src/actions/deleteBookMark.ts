"use server";
import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const deleteBookmark = async (bookmarkId: number) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    throw new Error("User not found");
  }

  const response = await db.bookmark.delete({
    where: {
      id: bookmarkId,
    },
  });
};
