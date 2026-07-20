import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  ratio?: "hero" | "4:3" | "1:1" | "16:9" | "3:4" | "auto";
  className?: string;
}

const ratioClasses = {
  "hero": "aspect-[4/3] md:aspect-[21/9]",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "16:9": "aspect-video",
  "3:4": "aspect-[3/4]",
  "auto": "",
};

export default function ImagePlaceholder({ label, ratio = "16:9", className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-divider flex items-center justify-center p-4 text-center overflow-hidden",
        ratioClasses[ratio],
        className
      )}
    >
      <span className="text-secondary text-caption md:text-caption-md font-inter uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}
