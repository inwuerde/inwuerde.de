import { PenLine, CalendarDays, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { BLOG_SERIES } from '@/data/content';

export function Blog() {
  return (
    <section id="blog" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Persönliche Einblicke & Erfahrungsberichte"
          lead="In einer fünfteiligen Serie beschreibe ich meinen persönlichen Genesungsweg und meine Erfahrungen mit Kliniken des Bad Herrenalber Modells."
        />

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-3xl border border-warm-200 bg-white shadow-[0_24px_50px_-35px_rgba(58,44,44,0.5)]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden bg-gradient-to-br from-warm-900 to-warm-950 p-8 text-white sm:p-10">
                <img
                  src="/assets/hand-salmon.png"
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute -bottom-4 -right-6 h-56 opacity-25"
                />
                <div className="relative">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/90">
                    <PenLine className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold leading-tight">
                    {BLOG_SERIES.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-warm-300">
                    Eine ehrliche Serie über Krisen, Klinikaufenthalte und den Weg
                    zurück ins Leben — veröffentlicht am 28.08.2022.
                  </p>
                </div>
              </div>
              <ul className="divide-y divide-warm-100">
                {BLOG_SERIES.parts.map((p, i) => (
                  <li key={p.part}>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-brand-50/60 sm:px-8"
                    >
                      <span className="font-display text-xl font-extrabold text-warm-200 transition-colors group-hover:text-brand-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <div className="text-[15px] font-semibold text-warm-900">
                          Genesungsweg &amp; Bad Herrenalber Modell — {p.part}
                        </div>
                        <div className="mt-0.5 flex items-center gap-1.5 text-[13px] text-warm-500">
                          <CalendarDays className="h-3.5 w-3.5" />
                          Veröffentlicht: {p.date}
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-warm-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
