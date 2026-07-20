"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { Check, ArrowRight } from "lucide-react";

const BENEFITS = [
  "Erfahrung aus drei Generationen",
  "3 Standorte in Offenbach und Rodgau",
  "Ausbildung aller Führerscheinklassen",
  "Moderne und vielfältige Fahrzeugflotte",
];

export default function TraditionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(imageRef.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      }
    );

    gsap.fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true
        }
      }
    );

    const bullets = bulletsRef.current?.querySelectorAll("li");
    if (bullets) {
      gsap.fromTo(bullets,
        { opacity: 0, x: -10 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-[120px] bg-white border-b border-divider">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div ref={imageRef} className="w-full relative aspect-4/3 rounded-2xl overflow-hidden">
            <Image
              src="/traditionsbild/fahrschule-offenbach-bieber.jpg"
              alt="Fahrschule Trenkler seit 1962"
              fill
              className="object-cover"
            />
          </div>

          <div ref={textRef} className="flex flex-col items-start">
            <span className="text-overline text-secondary mb-4">Familienbetrieb seit 1962</span>
            <h2 className="text-h2 md:text-h2-md text-ink mb-6">Vertrauen wächst mit Erfahrung.</h2>
            <p className="text-p md:text-p-md text-secondary mb-8">
              Seit über 60 Jahren begleiten wir Fahrschüler sicher ans Ziel. Was als kleine Fahrschule begann, ist heute ein modernes Ausbildungszentrum für alle Klassen – vom Mofa bis zum Schwerlast-LKW. An drei Standorten in Offenbach und Rodgau stehen wir für persönliche Betreuung und höchste Ausbildungsqualität.
            </p>
            
            <ul ref={bulletsRef} className="flex flex-col gap-4 mb-10 w-full">
              {BENEFITS.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-ink rounded-full p-1">
                    <Check className="w-4 h-4 text-accent" strokeWidth={3} />
                  </div>
                  <span className="text-h6 text-ink">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <Link href="/ueber-uns/team" className="group flex items-center gap-2 text-ink font-semibold hover:text-accent transition-colors">
                Unser Team kennenlernen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/ueber-uns/fahrzeuge" className="group flex items-center gap-2 text-ink font-semibold hover:text-accent transition-colors">
                Fahrzeuge entdecken
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
