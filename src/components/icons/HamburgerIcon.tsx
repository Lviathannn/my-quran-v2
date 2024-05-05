import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  width?: number;
  height?: number;
};

export default function HamburgerIcon({
  className,
  width = 24,
  height = 24,
}: Props) {
  return (
    <svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M1 6H23V8.44444H1V6ZM1 14.5556H15.6667V17H1V14.5556Z"
        fill="#8789A3"
      />
    </svg>
  );
}
