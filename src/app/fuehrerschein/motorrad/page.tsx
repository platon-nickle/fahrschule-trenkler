import { Metadata } from "next";
import ClosingCTA from "@/components/sections/ClosingCTA";

export const metadata: Metadata = {
  title: "Motorrad | Fahrschule Trenkler",
};

export default function MotorradPage() {
  return (
    <>
      <section className="bg-ink pt-16 pb-24">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-h1 md:text-h1-md text-white mb-6">Motorrad (A/A1/A2/AM)</h1>
          <p className="text-p md:text-p-md text-white/90 max-w-2xl">
            Sicher auf zwei Rädern.
          </p>
        </div>
      </section>
      
      <section className="py-[120px] bg-white border-b border-divider">
        <div className="max-w-container mx-auto px-6">
          <p className="text-p">Placeholder for Class-tier cards and special-dates callout card.</p>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
