import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function SkeletonExploreCard({}: Props) {
  return (
    <div>
      <div className="w-full overflow-hidden rounded-lg shadow-md">
        <Skeleton className="aspect-video w-full bg-gradient-to-br from-primary to-secondary" />
        <div className="flex flex-col justify-between gap-2 p-3">
          <Skeleton className="h-5 w-full rounded-none bg-accent" />
          <div className="space-y-1">
            <Skeleton className="h-5 w-[40%] bg-accent " />
            <Skeleton className="h-5 w-[20%] bg-accent " />
          </div>
        </div>
      </div>
    </div>
  );
}
