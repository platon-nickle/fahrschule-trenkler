"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ClosingCTA() {
  return (
    <section className="bg-ink py-[120px] text-center border-t border-white/10">
      <div className="max-w-container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-h2 md:text-h2-md text-white mb-10">Bereit loszulegen?</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-2xl">
          <Button size="lg" className="w-full md:w-auto" asChild>
            <Link href="#anmeldung">Jetzt anmelden!</Link>
          </Button>
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-caption text-secondary uppercase tracking-widest mb-1">Oder direkt anrufen</span>
            <a 
              href="tel:+4969813825" 
              className="text-stat md:text-stat-md text-accent hover:text-white transition-colors"
            >
              069 813825
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
