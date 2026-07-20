"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { question: "Wie setzen sich die Kosten für den Führerschein zusammen?", answer: "Die Kosten setzen sich aus Grundbetrag, Fahrstunden, Sonderfahrten, Vorstellung zur Prüfung und den Gebühren für TÜV/Dekra zusammen." },
  { question: "Wie lange dauert die Ausbildung im Durchschnitt?", answer: "Das hängt von der Häufigkeit der Fahrstunden und der individuellen Lernkurve ab. Im Durchschnitt benötigen Fahrschüler 3-5 Monate. Mit unserem Intensivkurs ist die Theorie in 7 Tagen möglich." },
  { question: "Wie funktioniert das begleitete Fahren (BF17)?", answer: "Mit 17 Jahren erhältst du nach bestandener Prüfung eine Prüfungsbescheinigung, die dich zusammen mit einer eingetragenen Begleitperson zum Fahren berechtigt." },
  { question: "Wie läuft der 7-Tage-Intensivkurs ab?", answer: "Du absolvierst den kompletten theoretischen Unterricht kompakt an 7 aufeinanderfolgenden Werktagen in kleinen Gruppen. Ideal für die Ferien." },
  { question: "Akzeptieren Sie Bildungsgutscheine (B2B)?", answer: "Ja, wir sind als Bildungsträger zertifiziert (AZAV). Du kannst einen Bildungsgutschein der Agentur für Arbeit für die Berufskraftfahrer-Ausbildung nutzen." },
  { question: "Was ist die B197-Regelung?", answer: "Du machst deine Ausbildung und Prüfung auf einem Automatikfahrzeug, absolvierst aber mindestens 10 Stunden auf einem Schaltwagen. Danach darfst du beides fahren." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[72px] md:py-[120px] bg-white border-b border-divider">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-h2 md:text-h2-md mb-12 text-center text-ink">Häufige Fragen</h2>
        
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "border rounded-xl transition-colors duration-200 overflow-hidden",
                  isOpen ? "border-ink bg-offwhite" : "border-divider bg-white hover:border-secondary"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-1 h-6 rounded-full transition-colors",
                      isOpen ? "bg-accent" : "bg-transparent"
                    )}></div>
                    <span className="text-h5 text-ink">{faq.question}</span>
                  </div>
                  <ChevronDown className={cn(
                    "w-6 h-6 text-secondary transition-transform duration-300",
                    isOpen ? "rotate-180 text-ink" : ""
                  )} />
                </button>
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out px-6",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-p text-secondary ml-5">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
