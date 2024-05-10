import Link from "next/link";
import React from "react";

type Props = {
  number: number;
  title: string;
};

export default function DoaCard({ number, title }: Props) {
  return (
    <Link href={`/doa/${number}`} scroll>
      <article className="flex h-full w-full justify-between gap-5 border-b px-3 py-4 hover:rounded-md hover:bg-accent sm:py-6 md:py-8">
        <p className="flex aspect-square size-7 flex-col items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
          {number}
        </p>
        <p className="truncate font-medium">{title}</p>
      </article>
    </Link>
  );
}
