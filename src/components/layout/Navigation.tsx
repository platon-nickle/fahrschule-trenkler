"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWorld } from "@/context/WorldContext";
import { Button } from "@/components/ui/Button";
import SimpleIcon from "@/components/ui/SimpleIcon";
import { cn } from "@/lib/utils";
import { siFacebook, siInstagram } from "simple-icons";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Menu,
  X
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const { world } = useWorld();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScroll);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = {
    fuehrerschein: [
      { name: "Auto", href: "/fuehrerschein/auto" },
      { name: "Motorrad", href: "/fuehrerschein/motorrad" },
      { name: "Erweiterungen", href: "/fuehrerschein/erweiterungen" },
      { name: "Intensivkurs", href: "/fuehrerschein/intensivkurs" },
      { name: "Preise", href: "/fuehrerschein/kosten" },
    ],
    berufskraftfahrer: [
      { name: "LKW", href: "/berufskraftfahrer/lkw-fuehrerschein" },
      { name: "Bus", href: "/berufskraftfahrer/bus-fuehrerschein" },
      { name: "Module", href: "/berufskraftfahrer/pflichtweiterbildung" },
      { name: "Förderung", href: "/berufskraftfahrer/bildungsgutschein" },
    ],
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-auto">
      {/* TopBar — collapses via max-height/opacity, freeing up space in normal flow so the
          main navbar slides up smoothly with no transform hacks or jitter. */}
      <div
        className={cn(
          "bg-ink text-caption text-white/80 overflow-hidden transition-all duration-300 ease-out border-white/10",
          scrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-20 opacity-100 border-b"
        )}
      >
        <div className="max-w-container mx-auto px-6 h-10 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-3 h-3" />
              <span>Luisenstraße 28, Offenbach</span>
            </div>
            <a href="tel:+4969813825" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              <span>069 813825</span>
            </a>
            <a href="mailto:info@fahrschule-trenkler.de" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3 h-3" />
              <span>info@fahrschule-trenkler.de</span>
            </a>
            <div className="flex items-center gap-2 hover:text-white transition-colors">
              <Clock className="w-3 h-3" />
              <span>Mo-Fr 10:00 - 18:30</span>
            </div>
          </div>
          <a href="tel:+4969813825" className="md:hidden flex items-center justify-center w-full hover:text-white transition-colors py-2">
            <Phone className="w-4 h-4 mr-2" /> 069 813825
          </a>
          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.facebook.com/FahrschuleTrenkler/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <SimpleIcon icon={siFacebook} className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/fahrschule_trenkler/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <SimpleIcon icon={siInstagram} className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar — always visible, never transformed; only its children resize/collapse */}
      <div className="bg-ink relative">
        {/* Switcher integrated above nav content — collapses fully once scrolled */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
          )}
        >
          <div className="max-w-container mx-auto px-6 pt-4 flex justify-center md:justify-end">
            <div className="flex bg-white/10 p-1 rounded-full">
              <Link
                href="/fuehrerschein"
                className={cn(
                  "px-6 py-1.5 rounded-full text-small font-semibold transition-colors",
                  world === "fuehrerschein" ? "bg-accent text-ink" : "text-white hover:text-accent"
                )}
              >
                Führerschein
              </Link>
              <Link
                href="/berufskraftfahrer"
                className={cn(
                  "px-6 py-1.5 rounded-full text-small font-semibold transition-colors",
                  world === "berufskraftfahrer" ? "bg-accent text-ink" : "text-white hover:text-accent"
                )}
              >
                Berufskraftfahrer
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-container mx-auto px-6 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="relative shrink-0 transition-all duration-300"
            style={{
              width: scrolled ? 160 : 260,
              height: scrolled ? 40 : 56,
              marginTop: scrolled ? 0 : -32,
            }}
          >
            <Image
              src="/trenkler-logo-transparent.png"
              alt="Fahrschule Trenkler"
              fill
              className="object-contain object-left"
              preload
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks[world].map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-white font-semibold text-small hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/ueber-uns" className="text-white font-semibold text-small hover:text-accent transition-colors">
              Über uns
            </Link>
            <Link href="/termine" className="text-white font-semibold text-small hover:text-accent transition-colors">
              Termine
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <a href="https://www.vogel-system.de/de/news/fahrschul-manager-news/maxi-so-funktionierts" target="_blank" rel="noopener noreferrer">Jetzt anmelden!</a>
            </Button>
          </div>

          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Burger Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-60 flex flex-col h-screen overflow-y-auto">
          <div className="flex items-center justify-between p-6">
            <Link href="/" className="relative shrink-0 bg-ink rounded-md p-2" style={{ width: 176, height: 48 }}>
              <Image
                src="/trenkler-logo-transparent.png"
                alt="Fahrschule Trenkler"
                fill
                className="object-contain"
              />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex-1 px-6 py-8 flex flex-col gap-8">
            <div>
              <h3 className="text-overline text-secondary mb-4">Welt 1: Führerschein</h3>
              <div className="flex flex-col gap-4">
                <Link href="/fuehrerschein" className="text-h4 hover:text-accent">Übersicht</Link>
                {navLinks.fuehrerschein.map((l) => (
                  <Link key={l.name} href={l.href} className="text-h5 text-secondary hover:text-ink">{l.name}</Link>
                ))}
              </div>
            </div>
            
            <div className="w-full h-px bg-divider"></div>
            
            <div>
              <h3 className="text-overline text-secondary mb-4">Welt 2: Berufskraftfahrer</h3>
              <div className="flex flex-col gap-4">
                <Link href="/berufskraftfahrer" className="text-h4 hover:text-accent">Übersicht</Link>
                {navLinks.berufskraftfahrer.map((l) => (
                  <Link key={l.name} href={l.href} className="text-h5 text-secondary hover:text-ink">{l.name}</Link>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-divider"></div>

            <div className="flex flex-col gap-4">
              <Link href="/ueber-uns" className="text-h4">Über uns</Link>
              <Link href="/termine" className="text-h4">Termine</Link>
              <Link href="/kontakt" className="text-h4">Kontakt</Link>
            </div>
          </div>

          <div className="p-6 bg-offwhite border-t border-divider mt-auto flex flex-col gap-4">
            <Button className="w-full" asChild>
              <a href="https://www.vogel-system.de/de/news/fahrschul-manager-news/maxi-so-funktionierts" target="_blank" rel="noopener noreferrer">Jetzt anmelden!</a>
            </Button>
            <a href="tel:+4969813825" className="flex items-center justify-center gap-2 text-ink font-bold py-2">
              <Phone className="w-5 h-5" /> 069 813825
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
