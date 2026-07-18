import {
  Activity,
  Sun,
  Users,
  Moon,
  Fish,
  Salad,
  Plus,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { TLC_BLOCKS, TLC_EXTRA } from '@/data/content';

const ICONS: Record<string, typeof Activity> = {
  activity: Activity,
  sun: Sun,
  users: Users,
  moon: Moon,
  fish: Fish,
  salad: Salad,
};

export function Tlc() {
  return (
    <section id="tlc" className="relative scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Therapeutic Lifestyle Changes"
              title="TLC — sechs Bausteine für seelische Gesundheit"
              lead="„Therapeutic Lifestyle Changes“ ist ein evidenzbasierter Behandlungsansatz, bekannt geworden durch die Arbeitsgruppe von Dr. Stephen Ilardi (Universität Kansas). Grundidee: Unser moderner Lebensstil weicht stark von dem ab, wie Menschen evolutionär über Hunderttausende Jahre gelebt haben — und genau diese Abweichung ist ein wichtiger Risikofaktor für Depressionen."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-3xl border border-brand-100 bg-brand-50/70 p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-brand-600" />
                  <h3 className="font-display text-[16px] font-bold text-warm-950">
                    Wirksamkeit
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-warm-700">
                  Klinische Studien (u. a. von Ilardi) zeigen: TLC kann bei leichten
                  bis mittelschweren Depressionen ähnlich wirksam oder sogar
                  wirksamer sein als Medikamente oder Psychotherapie allein — bei
                  praktisch keinen Nebenwirkungen. Viele Fachkräfte setzen TLC
                  ergänzend oder als erste Maßnahme ein.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {TLC_EXTRA.map((e) => (
                    <span
                      key={e}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-100 bg-white px-3.5 py-1.5 text-[13px] font-medium text-warm-700"
                    >
                      <Plus className="h-3.5 w-3.5 text-brand-500" />
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {TLC_BLOCKS.map((b, i) => {
              const Icon = ICONS[b.icon];
              return (
                <Reveal key={b.title} delay={0.06 * i} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-warm-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_26px_48px_-26px_rgba(224,0,0,0.3)] sm:p-7">
                    <span className="pointer-events-none absolute -right-3 -top-5 font-display text-[5.5rem] font-extrabold leading-none text-warm-100 transition-colors group-hover:text-brand-100">
                      {i + 1}
                    </span>
                    <div className="relative">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_12px_24px_-10px_rgba(224,0,0,0.5)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 font-display text-[17px] font-bold leading-snug text-warm-950">
                        {b.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-warm-600">
                        {b.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
