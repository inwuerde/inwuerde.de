import { Mail, MapPin, AtSign, Heart } from 'lucide-react';
import { Link } from 'react-router';
import { CONTACT, NAV_LINKS, MAILTO } from '@/data/content';

export function Footer() {
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="kontakt" className="relative scroll-mt-24 overflow-hidden bg-warm-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/3 h-[22rem] w-[22rem] rounded-full bg-brand-800/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {/* brand + contact */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
              <img src="/assets/logo-hands.png" alt="IWS Logo — Hände mit Herzen" className="h-9 w-auto" />
            </div>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-warm-300">
              Das Seminar <strong className="font-semibold text-white">„In Würde zu sich stehen“</strong>{' '}
              unterstützt Menschen mit psychischen Erkrankungen bei
              Offenlegungsentscheidungen — und wirkt der Stigmatisierung in
              unserer Gesellschaft entgegen.
            </p>
            <div className="mt-7 space-y-3 text-sm">
              <a
                href={MAILTO.anfrage}
                className="group flex items-center gap-3 text-warm-200 transition-colors hover:text-white"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 ring-1 ring-white/10 transition-colors group-hover:bg-brand-600">
                  <Mail className="h-4 w-4" />
                </span>
                {CONTACT.email}
              </a>
              <div className="flex items-start gap-3 text-warm-200">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/8 ring-1 ring-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-relaxed">
                  {CONTACT.name} · {CONTACT.role}
                  <br />
                  {CONTACT.org}
                  <br />
                  {CONTACT.street} · {CONTACT.city}
                </span>
              </div>
              <div className="flex items-center gap-3 text-warm-200">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 ring-1 ring-white/10">
                  <AtSign className="h-4 w-4" />
                </span>
                Mastodon: {CONTACT.mastodon}
              </div>
            </div>
          </div>

          {/* nav */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-warm-400">
              Navigation
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-[15px] text-warm-200 transition-colors hover:text-brand-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* legal */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-warm-400">
              Rechtliches
            </h3>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link to="/impressum" className="text-[15px] text-warm-200 transition-colors hover:text-brand-300">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-[15px] text-warm-200 transition-colors hover:text-brand-300">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-[13px] leading-relaxed text-warm-300">
                <strong className="font-semibold text-white">Value4Value:</strong>{' '}
                Die Bezahlung des Seminars erfolgt auf Spendenbasis — geben Sie,
                was Sie geben können und was es Ihnen wert ist.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-warm-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Thomas Richter · In Würde zu sich stehen</span>
          <span className="inline-flex items-center gap-1.5">
            Mit <Heart className="h-3.5 w-3.5 fill-brand-500 text-brand-500" /> auf Augenhöhe gemacht
          </span>
        </div>
      </div>
    </footer>
  );
}
