import Image from "next/image";
import QuranImage from "@/assets/Quran.svg";
import Link from "next/link";
type Props = {
  title: string;
  speaker: string;
  date: Date;
};

export default function ExploreCard({ title, speaker, date }: Props) {
  const formatedDate = new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const path = (title + " " + speaker).replace(/\s/g, "-").toLowerCase();

  return (
    <Link href={`/explore/${path}`}>
      <article className="w-full overflow-hidden rounded-lg shadow-md">
        <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-primary to-secondary">
          <Image
            src={QuranImage}
            alt="Al Qur'an Image"
            className="absolute -bottom-5 -right-5 w-40"
          />
        </div>
        <div className="flex flex-col justify-between p-3">
          <h2 className="row-span-1 truncate text-lg font-medium text-text dark:text-primary">
            {title}
          </h2>
          <div className="row-span-1">
            <p className="text-sm text-muted dark:text-muted-foreground">
              {speaker}
            </p>
            <p className="text-sm text-muted dark:text-muted-foreground">
              {formatedDate}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
