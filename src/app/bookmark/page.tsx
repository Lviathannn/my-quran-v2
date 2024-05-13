import { getBookMarkList } from "@/actions/getBookmarkList";
import BookMarkCard from "@/components/features/BookMarkCard";

export default async function page() {
  const bookmarks = await getBookMarkList();

  return (
    <main className="container h-screen space-y-[29px] pt-16 sm:pl-20">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bookmarks && bookmarks.length == 0 && (
          <h1 className="col-start-1 col-end-5 mt-10 text-center text-2xl font-medium">
            Belum ada bookmark
          </h1>
        )}
        {bookmarks &&
          bookmarks.map((bookmark, index) => (
            <BookMarkCard
              number={index + 1}
              key={bookmark.id}
              id={bookmark.id}
              ayat={bookmark.ayat}
              surah={bookmark.surah}
              createdAt={bookmark.createdAt}
              surahId={bookmark.surahId}
            />
          ))}
      </div>
    </main>
  );
}
