import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-background">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl">Page not found</p>
        <Button asChild>
          <Link href="/">Go back to home</Link>
        </Button>
      </div>
    </main>
  );
}
