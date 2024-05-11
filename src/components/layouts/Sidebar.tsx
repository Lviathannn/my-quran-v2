import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { MoonIcon } from "lucide-react";
import SidebarLink from "../features/SidebarLink";
import { Button } from "../ui/button";
import Image from "next/image";
import QuranImage from "@/assets/Quran.svg";
type Props = {};

export default function Sidebar({}: Props) {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-14 flex-col border-r bg-background sm:flex">
      <div className="mx-auto mt-2 flex size-10 items-center justify-center rounded-full bg-primary">
        <Image src={QuranImage} alt="Logo" className="size-8" />
      </div>
      <nav className="flex flex-col items-center gap-4 px-2 py-5">
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
