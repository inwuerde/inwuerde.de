import { BookOpenCheck, Video, FileText, CalendarClock, Heart, GraduationCap, HandHeart } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Card, CardContent } from '@/components/ui/card';

const STATS = [
  { value: '16+', label: 'durchgeführte Seminare' },
  { value: '4 × 2h', label: 'Zoom-Gruppensitzungen' },
  { value: '2019', label: 'seitdem kontinuierlich aktiv' },
  { value: 'V4V', label: 'Value4Value — Spendenbasis' },
];

const FORMAT = [
  {
    icon: Video,
    title: '4 Zoom-Gruppensitzungen à 2 Stunden',
    text: 'Die Sitzungen finden im Wochenabstand statt. Nach einer Stunde gibt es jeweils eine 10-minütige Pause.',
  },
  {
    icon: FileText,
    title: 'Seminarhandbuch als PDF',
    text: 'Teilnehmer:innen erhalten vor Seminarbeginn ein Seminarhandbuch. Die jeweils benötigten Arbeitsblätter werden rechtzeitig per E-Mail bekannt gegeben.',
  },
  {
    icon: CalendarClock,
    title: 'Wöchentlicher Rhythmus',
    text: 'Vor jedem Termin drucken Sie die Übungsblätter aus — so arbeiten wir strukturiert und in Ihrem Tempo.',
  },
  {
    icon: HandHeart,
    title: 'Bezahlung auf Spendenbasis',
    text: 'Value4Value: Geben Sie, was Sie geben können und was es Ihnen wert ist.',
  },
];

export function Seminar() {
  return (
    <section id="seminar" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Das Seminar"
          title="Offenlegen — aber mit Würde und nach eigenen Regeln"
          lead="Das Seminar „In Würde zu sich stehen“ (IWS) unterstützt Menschen mit psychischen Erkrankungen bei der Entscheidung, ob, wann und wem gegenüber sie sich offenlegen möchten. Gleichzeitig entfaltet das Programm eine hohe Wirksamkeit bei der Überwindung der Stigmatisierung psychischer Erkrankungen."
        />

        {/* stats */}
        <Reveal delay={0.1} className="mt-12">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-warm-200 bg-warm-200 shadow-[0_20px_50px_-30px_rgba(58,44,44,0.4)] lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white px-6 py-7 text-center sm:py-9">
                <div className="font-display text-3xl font-extrabold tracking-tight text-brand-600 sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[13px] font-medium leading-snug text-warm-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* format cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FORMAT.map((f, i) => (
              <Reveal key={f.title} delay={0.08 * i}>
                <Card className="group h-full rounded-3xl border-warm-200 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_44px_-24px_rgba(224,0,0,0.28)]">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-[15px] font-bold leading-snug text-warm-900">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-600">{f.text}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* science + memorial */}
          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl bg-warm-950 p-7 text-white sm:p-9">
                <img
                  src="/assets/hand-red-sm.png"
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -right-4 bottom-0 h-44 opacity-30 sm:h-56"
                />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/90">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold leading-snug sm:text-2xl">
                    Wissenschaftlich fundiert &amp; evaluiert
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-warm-200">
                    Das Programm beruht auf den Arbeiten von Patrick W. Corrigan und
                    Kolleg:innen und wurde von Nicolas Rüsch und Kolleg:innen
                    (Universität Ulm) ins Deutsche übertragen. Seine Wirksamkeit wurde
                    wissenschaftlich nachgewiesen.
                  </p>
                  <a
                    href="https://www.amazon.de/Das-Stigma-psychischer-Erkrankung-Diskriminierung/dp/3437235206/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
                  >
                    <BookOpenCheck className="h-4 w-4 text-brand-300" />
                    Buch: „Das Stigma psychischer Erkrankung“
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex items-start gap-4 rounded-3xl border border-warm-200 bg-warm-100/70 p-6 sm:p-7">
                <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-600 ring-1 ring-warm-200">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-[15px] font-bold text-warm-900">
                    In Gedenken an Pat Corrigan
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-warm-600">
                    Wir trauern um unseren Freund und Kollegen Pat Corrigan, der am
                    11.01.2026 viel zu früh verstorben ist. Rest in Peace.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
