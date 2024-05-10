import Banner from "@/components/features/Banner";
import ExploreCard from "@/components/features/ExploreCard";
import { generateData } from "@/services/generateData";

type Props = {};

export const revalidate = 3600;

export default async function page({}: Props) {
  const data = await generateData(
    "Buat 4 list Kajian tentang islam dengan format json dengan schema {id:number,title:string,speaker:string,date:Date}",
  );

  return (
    <main className="container h-screen space-y-[29px] pt-16 sm:pl-20">
      <Banner
        title="Explore Islam"
        quote="Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan!"
        ayat="QS.Al Alaq : 01"
        customClass="opacity-50 md:opacity-100"
      />
      <h1 className="text-2xl font-semibold">Explore Islam</h1>
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.error && (
          <div className="col-start-1 col-end-5 flex w-full items-center justify-center py-20">
            <p className="text-xl font-semibold">{data.error}</p>
          </div>
        )}
        {data?.data?.map((item) => <ExploreCard key={item.id} {...item} />)}
      </section>
    </main>
  );
}
