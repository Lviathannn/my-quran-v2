"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

type Props = {};

export default function SearchSurah({}: Props) {
  return (
    <section>
      <div className="relative ">
        <Input placeholder="Search Surah" />
        <SearchIcon
          className="absolute right-5 top-2 text-muted"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
}
