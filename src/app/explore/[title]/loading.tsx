import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export default function loading({}: Props) {
  return (
    <main className="container h-screen space-y-[29px] py-16 sm:pl-20">
      <section>
        <div className="xl:container">
          <div className="space-y-2 p-3">
            <Skeleton className="h-8 w-40 bg-accent" />
            <Skeleton className="h-5 w-20 bg-accent" />
            <Skeleton className="h-5 w-20 bg-accent" />
            <div className="space-y-3">
              <Skeleton className="h-5 w-full bg-accent" />
              <Skeleton className="h-5 w-full bg-accent" />
              <Skeleton className="h-5 w-full bg-accent" />
              <Skeleton className="h-5 w-[70%] bg-accent" />
              <Skeleton className="h-5 w-[50%] bg-accent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
