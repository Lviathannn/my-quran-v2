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
  const schema = {
    title: "string",
    content: "string markdown",
    speaker: "string",
    date: "Date",
  };

  const data = await generateData<Explore>(
    `Buat isi detail kajian ${title} dengan schema ${JSON.stringify(schema)} tanpa array dan content harus lebih dari 500 kata `,
  );

  return (
    <main className="container h-screen space-y-[29px] py-16 sm:pl-20">
      <section className="pb-16">
        {data?.error && (
          <div className="container flex w-full items-center justify-center py-20">
            <p className="text-xl font-semibold">{data.error}</p>
          </div>
        )}
        {data.data && (
          <article key={data.data.title} className="xl:container">
            <div className="space-y-2 p-3">
              <h1 className="text-4xl font-semibold text-text dark:text-primary">
                {data.data.title}
              </h1>
              <p className="text-lg text-muted dark:text-muted-foreground ">
                {data.data.speaker}
              </p>
              <p className="text-lg text-muted dark:text-muted-foreground ">
                {new Date(data.data.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <Markdown className="text-lg">{data.data.content}</Markdown>
            </div>
          </article>
        )}
      </section>
    </main>
  );
}
