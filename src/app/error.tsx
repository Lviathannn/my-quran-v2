"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container flex h-screen flex-col items-center justify-center space-y-[29px] pt-16 sm:pl-20">
      <h2>{error.message}</h2>
      <div className="space-x-3">
        <Button onClick={() => reset()}>Try again</Button>
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </main>
  );
}
