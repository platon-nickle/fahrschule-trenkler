"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { useWorld } from "@/context/WorldContext";

const HERO_BANNERS = [
  "/hero-banner/banner__bannerkawasakiz650.jpg",
  "/hero-banner/banner__bannermotorradthomasz.jpg",
  "/hero-banner/banner__lkws-fahrschule-trenkler.jpg",
];

const SLIDE_DURATION_MS = 6000;

export default function HeroSection() {
  const { setWorld } = useWorld();
  const headlineRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    // Basic GSAP one-time reveal on headline
    gsap.fromTo(headlineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_BANNERS.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-end pt-20">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {HERO_BANNERS.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="Fahrschule Trenkler"
            fill
            preload={index === 0}
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out",
              index === activeSlide ? "opacity-100" : "opacity-0"
            )}
          />
        ))}
        <div className="absolute inset-0 bg-ink/70"></div>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 w-full pb-12 flex flex-col gap-12">
        
        {/* Banner Strip (rotating announcement placeholder) */}
        <div className="bg-accent text-ink px-4 py-2 self-start font-semibold text-small rounded-sm">
          Neu: Intensivkurse in den Sommerferien – Jetzt Plätze sichern!
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="max-w-3xl">
          <h1 className="text-h1 md:text-h1-md text-white mb-6">
            Sicher ans Ziel.<br />Seit drei Generationen.
          </h1>
          <p className="text-p md:text-p-md text-white/90 max-w-xl">
            Wir bilden nicht nur aus – wir machen dich sicher für den Straßenverkehr. Ob privater PKW-Führerschein oder professionelle Berufskraftfahrer-Ausbildung.
          </p>
        </div>

        {/* World Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Link 
            href="/fuehrerschein" 
            onClick={() => setWorld("fuehrerschein")}
            className="group relative bg-white rounded-xl p-8 hover:scale-[1.03] transition-transform duration-200 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-accent transition-colors duration-200"></div>
            <h3 className="text-h3 md:text-h3-md text-ink mb-2">Führerschein</h3>
            <p className="text-secondary text-small">PKW, Motorrad, Anhänger & Intensivkurse für Privatkunden.</p>
          </Link>
          
          <Link 
            href="/berufskraftfahrer" 
            onClick={() => setWorld("berufskraftfahrer")}
            className="group relative bg-white rounded-xl p-8 hover:scale-[1.03] transition-transform duration-200 overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-accent transition-colors duration-200"></div>
            <h3 className="text-h3 md:text-h3-md text-ink mb-2">Berufskraftfahrer</h3>
            <p className="text-secondary text-small">LKW, Bus, Module & Grundqualifikation für Profis.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
