import MainSection from "@/components/section/explore/MainSection";

export const revalidate = 3600;

export default async function page() {
  return (
    <main className="container h-screen space-y-[29px] pb-20  pt-16 sm:pl-20">
      <MainSection />
    </main>
  );
}
