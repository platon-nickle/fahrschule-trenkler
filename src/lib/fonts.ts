import localFont from "next/font/local";

export const archivo = localFont({
  src: [
    { path: "../../public/fonts/archivo/archivo-600.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/archivo/archivo-700.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/archivo/archivo-900.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
  variable: "--font-archivo",
});

export const inter = localFont({
  src: [
    { path: "../../public/fonts/inter/inter-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter/inter-500.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/inter/inter-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-inter",
});
