import { generateData } from "@/services/generateData";
import React from "react";
import Markdown from "react-markdown";

type Props = {
  params: {
    title: string;
  };
};

export const revalidate = 3600;

export default async function page({ params }: Props) {
  const title = params.title.replace(/-/g, " ");
  const data = await generateData(
    `Buat 1 detail isi materi Kajian tentang islam dengan judul dan speaker ${title},dan content nya harus lebih dari 500 kata dengan format json dengan schema {title:string,content:string,speaker:string,date:Date} , dan content harus berupa markdown`,
  );

  return (
    <main className="container h-screen space-y-[29px] py-16 sm:pl-20">
      <section>
        {data?.error && (
          <div className="flex w-full items-center justify-center py-20">
            <p className="text-xl font-semibold">{data.error}</p>
          </div>
        )}
        {data?.data?.map((item, index) => (
          <article key={index} className="xl:container">
            <div className="space-y-2 p-3">
              <h1 className="text-4xl font-semibold text-text">{item.title}</h1>
              <p className="text-lg text-muted ">{item.speaker}</p>
              <p className="text-lg text-muted ">
                {new Date(item.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <Markdown>{item.content}</Markdown>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
