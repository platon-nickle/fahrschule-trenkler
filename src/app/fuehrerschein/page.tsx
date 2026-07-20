import ServiceTileGrid from "@/components/sections/ServiceTileGrid";
import TermineTeaser from "@/components/sections/TermineTeaser";
import ClosingCTA from "@/components/sections/ClosingCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Führerschein | Fahrschule Trenkler",
  description: "Deine Führerscheinausbildung bei der Fahrschule Trenkler in Offenbach.",
};

const TILES = [
  { id: "auto", title: "Auto (B/BE/BF17)", description: "Die klassische PKW-Ausbildung. Auch als begleitetes Fahren ab 17 oder mit Automatik-Erweiterung B197.", href: "/fuehrerschein/auto" },
  { id: "motorrad", title: "Motorrad (A/A1/A2/AM)", description: "Sicher auf zwei Rädern. Vom Mofa bis zur unbeschränkten Klasse A.", href: "/fuehrerschein/motorrad" },
  { id: "erweiterungen", title: "Erweiterungen (B196/B197)", description: "Upgrade für deinen Führerschein: Leichtkrafträder mit B196 oder Automatik-Eintragung B197.", href: "/fuehrerschein/erweiterungen" },
  { id: "intensivkurs", title: "Intensivkurs", description: "Theorie in nur 7 Tagen. Perfekt für die Ferien oder wenn es schnell gehen muss.", href: "/fuehrerschein/intensivkurs" },
  { id: "aufbauseminare", title: "Aufbauseminare (ASF)", description: "Punkte abbauen oder Probezeitmaßnahmen. Wir begleiten dich durch das Aufbauseminar.", href: "/fuehrerschein/aufbauseminare" },
  { id: "kosten", title: "Preise & Kosten", description: "Transparente Preisübersicht für alle PKW- und Motorradklassen.", href: "/fuehrerschein/kosten" },
];

export default function FuehrerscheinHub() {
  return (
    <>
      {/* World-scoped hero band */}
      <section className="bg-ink pt-16 pb-24">
        <div className="max-w-container mx-auto px-6">
          <span className="text-overline text-accent mb-4 block">Welt 1: Privatkunden</span>
          <h1 className="text-h1 md:text-h1-md text-white mb-6">Dein Weg zum<br />Führerschein.</h1>
          <p className="text-p md:text-p-md text-white/90 max-w-2xl">
            Ob Auto, Motorrad oder Anhänger – wir bereiten dich sicher und entspannt auf deine Prüfung vor. Entdecke unsere Ausbildungsklassen.
          </p>
        </div>
      </section>

      <ServiceTileGrid tiles={TILES} />
      <TermineTeaser />
      <ClosingCTA />
    </>
  );
}
