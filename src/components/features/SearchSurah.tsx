"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function SearchSurah() {
  return (
    <section>
      <div className="relative ">
        <Input placeholder="Search Surah" />
        <SearchIcon
          className="absolute right-5 top-2 text-muted dark:text-muted-foreground"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
}
