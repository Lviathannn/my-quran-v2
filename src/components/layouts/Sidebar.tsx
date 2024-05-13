import SidebarLink from "../features/SidebarLink";
import Image from "next/image";
import QuranImage from "@/assets/Quran.svg";
import ThemeButton from "../features/ThemeButton";

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-14 flex-col border-r bg-foreground sm:flex">
      <div className="mx-auto mt-2 flex size-10 items-center justify-center rounded-full bg-primary">
        <Image src={QuranImage} alt="Logo" className="size-8" />
      </div>
      <nav className="flex flex-col items-center gap-4 px-2 py-5">
        <SidebarLink />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <ThemeButton />
      </nav>
    </aside>
  );
}
