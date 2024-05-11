import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  color?: string;
};

export default function BookmarkIcon({
  width = 32,
  height = 32,
  className,
  color = "#8789A3",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      className={cn(className)}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.2665 28L16.9332 21.3333L7.59982 28V6.66667C7.59982 5.95942 7.88077 5.28115 8.38087 4.78105C8.88097 4.28095 9.55925 4 10.2665 4H23.5998C24.3071 4 24.9853 4.28095 25.4854 4.78105C25.9855 5.28115 26.2665 5.95942 26.2665 6.66667V28Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
