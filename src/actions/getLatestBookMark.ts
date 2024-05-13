"use server";

import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getLatestBookMark = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return null;
  }
  const response = await db.bookmark.findFirst({
    where: {
      user: {
        kindeId: user.id,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return response;
};
