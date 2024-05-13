"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function SearchSurah() {
  const [search, setSearch] = useState("");
  const [query] = useDebounce(search, 500);
  const router = useRouter();

  useEffect(() => {
    router.push(`?search=${query}`);
  }, [query, router]);

  return (
    <section>
      <div className="relative ">
        <Input
          placeholder="Search Surah"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchIcon
          className="absolute right-5 top-2 text-muted dark:text-muted-foreground"
          width={24}
          height={24}
        />
      </div>
    </section>
  );
}
