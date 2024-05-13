import AyatIcon from "../icons/AyatIcon";

type Props = {
  number: number;
};

export default function StarShape({ number }: Props) {
  return (
    <div className="relative size-9">
      <AyatIcon />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm font-medium text-text dark:text-primary">
        {number}
      </span>
    </div>
  );
}
