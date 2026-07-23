import { CalendarDays, Clock, MapPin, Mic, ArrowUpRight, Megaphone } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MAILTO, PAST_SEMINARS, PAST_TALKS, SOCIAL_MEDIA } from '@/data/content';

export function Termine() {
  return (
    <section id="termine" className="relative scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Termine"
          title="Aktuelle Seminare & Vorträge"
          lead="Das nächste IWS-Online-Seminar startet im Herbst 2026. Tragen Sie sich unverbindlich in die Interessentenliste ein — wir informieren Sie über alle zukünftigen Termine."
        />

        <div id="seminar_herbst" className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* current seminar highlight */}
          <Reveal className="lg:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-600 to-brand-800 p-7 text-white shadow-[0_30px_60px_-30px_rgba(224,0,0,0.6)] sm:p-10">
              <img
                src="/assets/hand-red.png"
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-6 bottom-0 h-64 opacity-20 transition-transform duration-700 group-hover:-translate-y-3 sm:h-80"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <Badge className="border-0 bg-white/15 text-[12px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur hover:bg-white/15">
                Jetzt vormerken
              </Badge>
              <h3 className="mt-5 max-w-md font-display text-2xl font-extrabold leading-tight sm:text-[2rem]">
                IWS-Online-Seminar · Herbst 2026
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/85">
                4 Termine: 29.10., 5.11.,12.11. und 19.11., jeweils 14 bis 16 Uhr via Zoom. Nach
                einer Stunde gibt es eine 10-minütige Pause. Das Seminarhandbuch
                erhalten Sie vorab als PDF.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur">
                  <CalendarDays className="h-4 w-4" /> 4 Termine · Okt. und Nov. 2026
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 backdrop-blur">
                  <Clock className="h-4 w-4" /> 14–16 Uhr via Zoom
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-6 font-semibold text-brand-700 shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  <a href={MAILTO.seminarHerbst26}>
                    Jetzt Anmelden
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/40 bg-transparent px-6 font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  <a href={MAILTO.interessentenliste}>In die Interessentenliste</a>
                </Button>
              </div>
            </div>
          </Reveal>

          {/* talks */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-warm-200 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(58,44,44,0.5)] sm:p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-warm-100 text-warm-700 ring-1 ring-warm-200">
                <Mic className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-warm-950">
                Aktuelle Vorträge
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-600">
                Zur Zeit sind keine Vorträge geplant.
              </p>
              <div className="mt-auto pt-6">
                <p className="text-sm leading-relaxed text-warm-600">
                  Sie möchten mich für ein Seminar oder eine{' '}
                  <strong className="font-semibold text-warm-800">Peer-Keynote</strong>{' '}
                  buchen?
                </p>
                <Button
                  asChild
                  className="mt-4 w-full rounded-full bg-warm-900 font-semibold text-white hover:bg-warm-950"
                >
                  <a href={MAILTO.anfrage}>
                    Anfrage senden
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* past seminars timeline */}
        <Reveal delay={0.05} className="mt-16">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-display text-xl font-bold text-warm-950 sm:text-2xl">
              16 vergangene Seminare
            </h3>
            <span className="hidden text-sm font-medium text-warm-400 sm:block">
              2019 — 2025 · Präsenz &amp; Zoom
            </span>
          </div>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PAST_SEMINARS.map((s, i) => (
            <Reveal key={s.date} delay={Math.min(i * 0.04, 0.4)}>
              <div className="group flex h-full items-start gap-3 rounded-2xl border border-warm-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_16px_30px_-20px_rgba(224,0,0,0.35)]">
                <span
                  className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                    s.format === 'Präsenz' ? 'bg-warm-400' : 'bg-brand-500'
                  }`}
                />
                <div>
                  <div className="text-sm font-semibold text-warm-900">{s.date}</div>
                  <div className="mt-0.5 text-[13px] leading-snug text-warm-500">{s.place}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* past talks + social */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-warm-200 bg-warm-50 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-600 ring-1 ring-warm-200">
                  <MapPin className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-warm-950">
                  Vergangene Vorträge
                </h3>
              </div>
              <ul className="mt-5 space-y-4">
                {PAST_TALKS.map((t) => (
                  <li key={t.date} className="flex gap-4 text-sm">
                    <span className="shrink-0 font-display font-bold text-brand-600">{t.date}</span>
                    <span className="leading-relaxed text-warm-600">{t.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-warm-200 bg-warm-50 p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-600 ring-1 ring-warm-200">
                  <Megaphone className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold text-warm-950">
                  Beiträge in sozialen Medien
                </h3>
              </div>
              <ul className="mt-5 space-y-4">
                {SOCIAL_MEDIA.map((m) => (
                  <li key={m.date} className="flex gap-4 text-sm">
                    <span className="shrink-0 font-display font-bold text-brand-600">{m.date}</span>
                    {m.href ? (
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noreferrer"
                        className="leading-relaxed text-warm-600 underline decoration-brand-300 decoration-2 underline-offset-4 transition-colors hover:text-brand-700"
                      >
                        {m.text}
                      </a>
                    ) : (
                      <span className="leading-relaxed text-warm-600">{m.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
