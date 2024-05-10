import BookMarkCard from "@/components/features/BookMarkCard";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="container h-screen space-y-[29px] pt-16 sm:pl-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <BookMarkCard key={index} />
        ))}
      </div>
    </main>
  );
}
