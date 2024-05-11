import Banner from "@/components/features/Banner";
import SkeletonExploreCard from "@/components/features/SkeletonExploreCard";
import { generateData } from "@/services/generateData";
import dynamic from "next/dynamic";

const ExploreCard = dynamic(() => import("@/components/features/ExploreCard"), {
  loading: () => <SkeletonExploreCard />,
});

export default async function MainSection() {
  const data = await generateData<Explore[]>(
    "Buat 4 list Kajian tentang islam dengan format json dengan schema {id:number,title:string,speaker:string,date:Date}[]",
  );

  return (
    <>
      <Banner
        title="Explore Islam"
        quote="Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan!"
        ayat="QS.Al Alaq : 01"
        customClass="opacity-50 md:opacity-100"
      />
      <h1 className="text-2xl font-semibold">Explore Islam</h1>
      <section className="grid grid-cols-1 gap-5 pb-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.error && (
          <div className="col-start-1 col-end-5 flex w-full items-center justify-center py-20">
            <p className="text-xl font-semibold">{data.error}</p>
          </div>
        )}
        {data?.data?.map((item) => <ExploreCard key={item.id} {...item} />)}
      </section>
    </>
  );
}
