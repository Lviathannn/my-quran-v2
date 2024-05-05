"use client";

import { SIDEBAR_ITEMS } from "@/constant";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink() {
  const pathname = usePathname();
  return (
    <TooltipProvider>
      {SIDEBAR_ITEMS.map((item, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <Link
              href={item.path}
              className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                pathname === item.path ? "bg-accent" : ""
              }`}
            >
              {item.icon({ className: "h-7 w-7" })}
              <span className="sr-only">{item.title}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">{item.title}</TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
}
