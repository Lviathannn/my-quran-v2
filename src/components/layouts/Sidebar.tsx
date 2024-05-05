import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { MoonIcon, Settings } from "lucide-react";
import Link from "next/link";
import QuranIcon from "../icons/QuranIcon";
import SidebarLink from "../features/SidebarLink";
import { Button } from "../ui/button";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <QuranIcon className="h-7 w-7" color="#ffffff" />
          <span className="sr-only">Quran</span>
        </Link>

        <SidebarLink />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className="" size="icon" variant="ghost">
                <MoonIcon size={22} color="#8789A3" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">DarkMode</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
