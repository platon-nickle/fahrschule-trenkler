import Link from "next/link";
import Image from "next/image";
import SimpleIcon from "@/components/ui/SimpleIcon";
import { siFacebook, siInstagram } from "simple-icons";

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="max-w-container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <Link href="/" className="relative shrink-0 mb-4 block" style={{ width: 190, height: 48 }}>
            <Image
              src="/trenkler-logo.jpg"
              alt="Fahrschule Trenkler"
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="text-secondary text-small mb-6">
            Tradition, Vertrauen und Kompetenz. Ihre Fahrschule in Offenbach seit 1962.
          </p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/FahrschuleTrenkler/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
              <SimpleIcon icon={siFacebook} className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/fahrschule_trenkler/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
              <SimpleIcon icon={siInstagram} className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-overline mb-6 text-white">Standorte</h4>
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-semibold text-small mb-1">Luisenstraße 28</p>
              <p className="text-caption text-secondary">63067 Offenbach<br/>Mo-Fr: 10:00 - 18:30</p>
            </div>
            <div>
              <p className="font-semibold text-small mb-1">Strackgasse 15</p>
              <p className="text-caption text-secondary">63071 Offenbach<br/>Di & Do: 16:30 - 18:30</p>
            </div>
            <div>
              <p className="font-semibold text-small mb-1">Aschaffenburger Str. 32</p>
              <p className="text-caption text-secondary">63110 Rodgau<br/>Mo & Mi: 16:30 - 18:30</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-overline mb-6 text-white">Führerschein</h4>
          <div className="flex flex-col gap-3">
            <Link href="/fuehrerschein/auto" className="text-small text-secondary hover:text-white">Auto (B/BE/BF17)</Link>
            <Link href="/fuehrerschein/motorrad" className="text-small text-secondary hover:text-white">Motorrad</Link>
            <Link href="/fuehrerschein/intensivkurs" className="text-small text-secondary hover:text-white">Intensivkurs</Link>
            <Link href="/fuehrerschein/kosten" className="text-small text-secondary hover:text-white">Preise</Link>
          </div>
          
          <h4 className="text-overline mt-8 mb-6 text-white">Berufskraftfahrer</h4>
          <div className="flex flex-col gap-3">
            <Link href="/berufskraftfahrer/lkw-fuehrerschein" className="text-small text-secondary hover:text-white">LKW-Führerschein</Link>
            <Link href="/berufskraftfahrer/pflichtweiterbildung" className="text-small text-secondary hover:text-white">Module 1-5</Link>
            <Link href="/berufskraftfahrer/bildungsgutschein" className="text-small text-secondary hover:text-white">Bildungsgutschein</Link>
          </div>
        </div>

        <div>
          <h4 className="text-overline mb-6 text-white">Über uns</h4>
          <div className="flex flex-col gap-3">
            <Link href="/ueber-uns/team" className="text-small text-secondary hover:text-white">Team</Link>
            <Link href="/ueber-uns/fahrzeuge" className="text-small text-secondary hover:text-white">Fahrzeuge</Link>
            <Link href="/ueber-uns/geschichte" className="text-small text-secondary hover:text-white">Geschichte</Link>
            <Link href="/ueber-uns/absolventen" className="text-small text-secondary hover:text-white">Absolventen</Link>
            <Link href="/termine" className="text-small text-secondary hover:text-white">Termine</Link>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/mpu-beratung" className="text-caption text-secondary hover:text-white">MPU-Beratung</Link>
          <Link href="/jobs" className="text-caption text-secondary hover:text-white">Jobs</Link>
          <Link href="/berufskraftfahrer/lkw-verleih" className="text-caption text-secondary hover:text-white">LKW-Verleih</Link>
          <Link href="/impressum" className="text-caption text-secondary hover:text-white">Impressum</Link>
          <Link href="/datenschutz" className="text-caption text-secondary hover:text-white">Datenschutz</Link>
          <Link href="/agb" className="text-caption text-secondary hover:text-white">AGB</Link>
        </div>
        <div className="text-caption text-secondary">
          © 2026 Fahrschule Trenkler
        </div>
      </div>
    </footer>
  );
}
