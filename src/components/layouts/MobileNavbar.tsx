"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import HamburgerIcon from "../icons/HamburgerIcon";
import { NAVIGATION_ITEMS } from "@/constant";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const toogleDarkMode = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

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
        <SheetContent
          side="left"
          className="flex flex-col justify-between sm:max-w-xs"
          setIsOpen={setIsOpen}
        >
          <nav className="grid gap-6 text-lg font-medium">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                href={item.path}
                className={`flex items-center gap-4 px-2.5 text-base font-medium hover:text-foreground ${pathname == item.path ? "text-foreground" : "text-muted"}`}
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
          <div className="flex w-full justify-between px-5">
            <p className="text-lg font-medium text-foreground">DarkMode</p>
            <Switch
              defaultChecked={theme == "dark" ? true : false}
              onClick={toogleDarkMode}
            />
          </div>
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
