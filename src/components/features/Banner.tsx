import BookIcon from "@/components/icons/BookIcon";
import Quran from "@/assets/Quran.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  quote: string;
  ayat: string;
  customClass?: string;
};

export default async function Banner({
  title,
  quote,
  ayat,
  customClass,
}: Props) {
  return (
    <section className="relative h-[175px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary p-5 md:h-[200px]">
      <div className="relative z-20 flex h-full flex-col justify-between">
        <div className="flex items-center gap-2">
          <BookIcon />
          <p className="text-sm  text-white">{title}</p>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-white">{quote}</h2>
          <p className="text-sm text-white">{ayat}</p>
        </div>
      </div>
      <Image
        src={Quran}
        alt="AlQur'an"
        className={cn(
          `absolute -bottom-7 -right-10 z-0 w-52 md:-bottom-5 md:-right-5 md:w-72 ${customClass}`,
        )}
        priority
      />
    </section>
  );
}
