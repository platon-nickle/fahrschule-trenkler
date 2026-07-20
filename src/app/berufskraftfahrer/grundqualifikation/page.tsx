import { Metadata } from "next";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "Grundqualifikation | Fahrschule Trenkler",
};

export default function Page() {
  return (
    <>
      <section className="bg-ink pt-16 pb-24">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-h1 md:text-h1-md text-white mb-6">Grundqualifikation</h1>
          <p className="text-p md:text-p-md text-white/90 max-w-2xl">
            Beschleunigte IHK-Grundqualifikation.
          </p>
        </div>
      </section>
      
      <section className="py-[120px] bg-white border-b border-divider min-h-[40vh]">
        <div className="max-w-container mx-auto px-6">
          <p className="text-p text-secondary">Inhalt in Vorbereitung. {/* DRAFT: Grundqualifikation */}</p>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
