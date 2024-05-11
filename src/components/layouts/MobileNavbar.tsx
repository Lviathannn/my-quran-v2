"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HamburgerIcon from "../icons/HamburgerIcon";
import { NAVIGATION_ITEMS } from "@/constant";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Sheet open={isOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="sm:hidden"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <HamburgerIcon />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs" setIsOpen={setIsOpen}>
          <nav className="grid gap-6 text-lg font-medium">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                href={item.path}
                className="flex items-center gap-4 px-2.5 text-base font-medium text-muted hover:text-foreground"
                key={item.title}
              >
                <div
                  className={`rounded-full p-2 ${pathname == item.path && "bg-primary"}`}
                >
                  {item.icon({
                    className: "h-7 w-7",
                    color: `${pathname == item.path ? "#ffffff" : "#8789A3"}`,
                  })}
                </div>
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <Link href="/" className="text-lg font-semibold text-primary">
        {pathname == "/"
          ? "My Qur'an"
          : pathname == "/doa"
            ? "Doa"
            : pathname == "/bookmark"
              ? "Bookmark"
              : pathname == "/explore"
                ? "Explore"
                : "My Qur'an"}
      </Link>
    </>
  );
}
