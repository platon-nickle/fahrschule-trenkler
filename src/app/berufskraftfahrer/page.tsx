import ServiceTileGrid from "@/components/sections/ServiceTileGrid";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berufskraftfahrer | Fahrschule Trenkler",
  description: "Aus- und Weiterbildung für Berufskraftfahrer in Offenbach.",
};

const TILES = [
  { id: "lkw", title: "LKW-Führerschein", description: "Klassen C und CE für den gewerblichen Güterkraftverkehr.", href: "/berufskraftfahrer/lkw-fuehrerschein" },
  { id: "bus", title: "Bus-Führerschein", description: "Klassen D und DE für die Personenbeförderung.", href: "/berufskraftfahrer/bus-fuehrerschein" },
  { id: "grundqualifikation", title: "Grundqualifikation", description: "Beschleunigte IHK-Grundqualifikation (BKrFQG).", href: "/berufskraftfahrer/grundqualifikation" },
  { id: "pflichtweiterbildung", title: "Pflichtweiterbildung", description: "Die gesetzlich vorgeschriebenen BKF-Module 1–5 (95er Kennziffer).", href: "/berufskraftfahrer/pflichtweiterbildung" },
  { id: "tacho", title: "Digitaler Tacho", description: "Praxistraining und Bedienung des digitalen Kontrollgeräts.", href: "/berufskraftfahrer/digitaler-tacho" },
  { id: "bildungsgutschein", title: "Bildungsgutschein", description: "Kostenübernahme durch die Agentur für Arbeit möglich (AZAV-zertifiziert).", href: "/berufskraftfahrer/bildungsgutschein" },
  { id: "praxistraining", title: "Praxistraining", description: "Training für Laderampe, Sattelzug und Wechselbrücke.", href: "/berufskraftfahrer/praxistraining" },
  { id: "verleih", title: "LKW-Verleih", description: "Miete unserer Ausbildungsfahrzeuge (Iveco Daily, Volvo FH4).", href: "/berufskraftfahrer/lkw-verleih" },
];

export default function BerufskraftfahrerHub() {
  return (
    <>
      {/* World-scoped hero band */}
      <section className="bg-ink pt-16 pb-24 border-b border-white/10">
        <div className="max-w-container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-overline text-accent mb-4 block">Welt 2: Firmenkunden & Profis</span>
            <h1 className="text-h1 md:text-h1-md text-white mb-6">Ihr Partner für<br />Berufskraftfahrer.</h1>
            <p className="text-p md:text-p-md text-white/90">
              Von der Grundqualifikation bis zu den Pflichtmodulen. Wir schulen Ihre Mitarbeiter praxisnah, effizient und zertifiziert nach höchsten IHK- und TÜV-Standards.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl border border-white/20 overflow-hidden">
            <Image
              src="/LKW-Bild.jpg"
              alt="LKW Flotte der Fahrschule Trenkler"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Credential Band */}
      <section className="py-8 bg-offwhite border-b border-divider overflow-hidden">
        <div className="max-w-container mx-auto px-6 flex justify-start items-center">
          <div className="relative h-16 w-40">
            <Image
              src="/azav-zertifizierung.jpg"
              alt="AZAV Zertifizierung"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <ServiceTileGrid tiles={TILES} />
      
      {/* B2B Trust Framing */}
      <section className="py-[120px] bg-white border-b border-divider text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-h2 md:text-h2-md text-ink mb-6">Verlässlichkeit für Ihren Fuhrpark</h2>
          <p className="text-p md:text-p-md text-secondary">
            Regelmäßige Fortbildungen sind gesetzliche Pflicht und binden Ressourcen. Wir machen es Ihnen leicht: Feste Ansprechpartner, planbare Termine und eine Ausbildung, die den Fahralltag sicherer macht.
          </p>
        </div>
      </section>

      <ClosingCTA />
    </>
  );
}
