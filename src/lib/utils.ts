import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Custom typography scale (defined in src/app/tokens.css) isn't recognized by
// tailwind-merge's default font-size/text-color groups, so without this it
// silently collides with text-color utilities (e.g. "text-white/80 text-caption"
// would drop "text-white/80").
const customTwMerge = extendTailwindMerge<"custom-font-size">({
  extend: {
    classGroups: {
      "custom-font-size": [
        {
          text: [
            "h1", "h1-md", "h2", "h2-md", "h3", "h3-md", "h4", "h4-md", "h5", "h5-md", "h6", "h6-md",
            "caption", "caption-md", "overline", "overline-md", "p", "p-md", "small", "small-md", "stat", "stat-md",
          ],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
