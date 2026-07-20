import { Quote, Film, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { BIO_MILESTONES, BIO_MEMBERSHIPS } from '@/data/content';

export function UeberMich() {
  return (
    <section id="ueber-mich" className="relative scroll-mt-24 overflow-hidden bg-warm-950 py-20 text-white sm:py-28">
      {/* ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-brand-800/25 blur-[110px]" />
        <div className="absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full bg-warm-700/25 blur-[100px]" />
        <img
          src="/assets/hand-grey.png"
          alt=""
          aria-hidden
          className="absolute -right-6 top-16 h-64 opacity-[0.08]"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Über mich"
          title="Thomas Richter — Diplom-Psychologe mit eigener Erfahrung"
          lead="Ich bin 62 Jahre alt und kenne psychische Erkrankung von beiden Seiten: als Fachmann — und als Betroffener. Aus dieser Doppelperspektive setze ich mich heute für die Überwindung des Stigmas psychischer Erkrankung ein."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* milestones */}
          <div className="relative">
            <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-brand-500/70 via-warm-600/60 to-transparent" />
            <div className="space-y-8">
              {BIO_MILESTONES.map((m, i) => (
                <Reveal key={m.title} delay={Math.min(i * 0.06, 0.35)}>
                  <div className="relative pl-10">
                    <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-warm-950 bg-brand-500 shadow-[0_0_0_4px_rgba(255,0,0,0.15)]" />
                    <h3 className="font-display text-[17px] font-bold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-warm-300">
                      {m.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* side column */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <figure className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-8">
                <Quote className="h-7 w-7 text-brand-400" />
                <blockquote className="mt-4 font-display text-lg font-semibold leading-relaxed text-white sm:text-xl">
                  „Ich weiß, wie sich Depression und Angststörung auch von innen
                  anfühlen. In den anonymen Gruppen ist ein starker Spirit — alle
                  sind auf Augenhöhe, ganz ohne Profis.“
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-warm-400">
                  Thomas Richter
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600/90">
                    <Film className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-[17px] font-bold">Herzensprojekt 2016</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-warm-300">
                  Den amerikanischen Dokumentarfilm{' '}
                  <em className="text-white">„The Anonymous People“</em> von Greg
                  Williams über die Sucht-Recovery-Bewegung mit deutschen
                  Untertiteln versehen und zur Deutschland-Premiere auf dem
                  Pfingsttreffen des Förderkreises für Ganzheitsmedizin e.V. in
                  Bad Herrenalb gezeigt.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-8">
                <h3 className="font-display text-[17px] font-bold">
                  Mitgliedschaften &amp; Engagement
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {BIO_MEMBERSHIPS.map((m) => (
                    <li key={m.label}>
                      {m.href ? (
                        <a
                          href={m.href}
                          target="_blank"
                          rel="noreferrer"
                          className="group inline-flex items-start gap-2 text-sm leading-relaxed text-warm-300 transition-colors hover:text-white"
                        >
                          <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-400" />
                          {m.label}
                        </a>
                      ) : (
                        <span className="inline-flex items-start gap-2 text-sm leading-relaxed text-warm-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                          {m.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
