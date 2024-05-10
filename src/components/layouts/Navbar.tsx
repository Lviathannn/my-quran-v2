"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HamburgerIcon from "../icons/HamburgerIcon";
import { NAVIGATION_ITEMS } from "@/constant";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 bg-background">
      <div className="container flex h-14 w-full items-center justify-between gap-4 sm:pl-20">
        <div className="flex items-center gap-3">
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
              className="sm:max-w-xs"
              setIsOpen={setIsOpen}
            >
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
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
