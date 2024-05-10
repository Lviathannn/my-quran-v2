import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

type Props = {};

export default function BookMarkCard({}: Props) {
  return (
    <div className="w-full space-y-6 rounded-lg bg-accent p-3">
      <div className="flex items-center justify-between">
        <p className=" flex size-7 items-center justify-center rounded-full bg-primary font-medium text-white ">
          1
        </p>
        <Button
          size="icon"
          className="h-6 w-6 rounded-full hover:bg-destructive hover:text-white"
          variant="ghost"
        >
          <X size={18} />
        </Button>
      </div>
      <div>
        <p className="text-lg font-medium text-text">Al Baqarah</p>
        <p className="text-sm text-muted">5 menit yang lalu</p>
      </div>
    </div>
  );
}
