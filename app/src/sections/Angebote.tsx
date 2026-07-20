import {
  Users,
  Briefcase,
  Network,
  Sparkles,
  Building2,
  ArrowUpRight,
  Instagram,
  Mail,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { CONTACT, MAILTO } from '@/data/content';

const CARDS = [
  {
    icon: Users,
    title: 'Selbsthilfegruppe IWS',
    badge: 'Alle 14 Tage · Zoom',
    text: 'Von ehemaligen Teilnehmer:innen des Seminars gegründet (seit 30.03.2022). Hier kann der im Seminar begonnene Weg fortgesetzt und vertieft werden — mittwochs alle 14 Tage, 18 bis 20 Uhr als Zoom-Meeting. Empfohlen wird die vorherige Teilnahme am Seminar IWS.',
    cta: { label: 'SHG anfragen', href: MAILTO.selbsthilfe },
  },
  {
    icon: Network,
    title: 'Intervisionsgruppe IWS',
    badge: 'Für Peer-Seminarleiter:innen',
    text: 'Aus dem Seminar zur Ausbildung von Peer-Seminarleiter:innen (September 2021, Universität Ulm, Prof. Dr. Nicolas Rüsch) entstanden: eine Intervisionsgruppe, die sich regelmäßig via Zoom trifft und gegenseitig unterstützt.',
    cta: { label: 'Aufnahme anfragen', href: MAILTO.intervision },
  },
  {
    icon: Sparkles,
    title: 'IWS kink',
    badge: 'Für 2027 geplant',
    text: 'Eine neue Form des Offenlegungsseminars für Menschen, die Schwierigkeiten haben und unter Selbst-Stigmatisierung leiden, ihre kinky-Identität gegenüber potenziellen Partner:innen offenzulegen.',
    cta: { label: 'Interesse anmelden', href: MAILTO.interessentenliste },
  },
  {
    icon: Building2,
    title: 'Für (sozial)psychiatrische Einrichtungen',
    badge: 'Seminar & Peer-Keynote',
    text: 'Sie möchten das Seminar für Ihre Einrichtung buchen oder eine Peer-Keynote zu den Themen Offenlegung, Stigma und Recovery anfragen? Ich komme gern — auch via Zoom.',
    cta: { label: 'Jetzt anfragen', href: MAILTO.anfrage },
  },
];

export function Angebote() {
  return (
    <section id="angebote" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Angebote & Gruppen"
          title="Ein Netzwerk, das trägt"
          lead="Rund um das Seminar ist ein lebendiges Ökosystem aus Gruppen und Formaten entstanden — von der Selbsthilfegruppe bis zum Peer-Netzwerk für Fachkräfte."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* KEP feature card */}
          <Reveal className="lg:row-span-2">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-warm-950 text-white shadow-[0_30px_60px_-30px_rgba(36,26,26,0.7)]">
              <div className="relative">
                <img
                  src="/assets/psu-kep-artikel.png"
                  alt="Artikel „Als Profi über die eigene Krisenerfahrung sprechen“ — Psychosoziale Umschau 2/2023"
                  className="h-56 w-full object-cover object-top sm:h-64"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-950 via-warm-950/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-brand-600 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-lg">
                  Peer-Netzwerk
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/90">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight">
                  KEP — Krisenerfahrene Profis
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-warm-200">
                  Gegründet im Oktober 2022: Menschen, die im psychotherapeutischen
                  und sozialpsychiatrischen Hilfebereich arbeiten und selbst von
                  psychischen Krisen betroffen waren oder sind. Inspiriert von der
                  britischen Initiative{' '}
                  <em>in2gr8mentalhealth</em> und vom Seminar IWS.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-warm-200">
                  Monatliche, zweistündige Zoom-Treffen mit fachlichem Input und
                  Erfahrungsaustausch — gegen (Selbst-)Stigma und strukturelle
                  Diskriminierung. Berichtet wurde über die Gruppe in der{' '}
                  <em>Psychosozialen Umschau 2/2023</em>.
                </p>
                <div className="mt-auto flex flex-col gap-2.5 pt-6">
                  <Button
                    asChild
                    className="w-full rounded-full bg-brand-600 font-semibold hover:bg-brand-500"
                  >
                    <a href={`mailto:${CONTACT.kepEmail}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      {CONTACT.kepEmail}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-white/25 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href={CONTACT.kepInstagram} target="_blank" rel="noreferrer">
                      <Instagram className="mr-2 h-4 w-4" />
                      Aktuelle Termine auf Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* other cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:row-span-2 lg:grid-rows-2">
            {CARDS.map((c, i) => (
              <Reveal key={c.title} delay={0.06 * i} className="h-full">
                <div className="group flex h-full flex-col rounded-3xl border border-warm-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_26px_48px_-26px_rgba(224,0,0,0.3)] sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-warm-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-warm-600">
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-warm-950">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-warm-600">
                    {c.text}
                  </p>
                  <a
                    href={c.cta.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    {c.cta.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
