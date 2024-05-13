import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function AyatCardSkeleton({}: Props) {
  return (
    <div className="space-y-10">
      <div className="flex w-full justify-between rounded-[10px] bg-accent px-3 py-[10px]">
        <Skeleton className="size-7 rounded-full bg-primary" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-40 bg-primary" />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Skeleton className="h-7 w-[70%] self-end rounded-full bg-accent" />
        <Skeleton className="h-5 w-[70%] rounded-full bg-primary" />
        <Skeleton className="h-5 w-[70%] rounded-full bg-accent" />
        <Skeleton className="h-5 w-[50%] rounded-full bg-accent" />
      </div>
    </div>
  );
}
