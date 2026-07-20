import type { Metadata } from "next";
import { archivo, inter } from "@/lib/fonts";
import "./globals.css";
import SmoothScroller from "@/components/layout/SmoothScroller";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { WorldProvider } from "@/context/WorldContext";

export const metadata: Metadata = {
  title: "Fahrschule Trenkler | Offenbach am Main",
  description: "Fahrschule Trenkler - Führerschein & Berufskraftfahrer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-white text-ink">
        <WorldProvider>
          <SmoothScroller>
            <Navigation />
            <main className="flex-1 pt-[120px]">
              {children}
            </main>
            <Footer />
          </SmoothScroller>
        </WorldProvider>
      </body>
    </html>
  );
}
