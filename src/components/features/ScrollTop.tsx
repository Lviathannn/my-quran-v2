"use client";

import { useScrollTop } from "@/hooks/useScrollTop";

type Props = {
  children: React.ReactNode;
};

export default function ScrollTop({ children }: Props) {
  useScrollTop();
  return <>{children}</>;
}
