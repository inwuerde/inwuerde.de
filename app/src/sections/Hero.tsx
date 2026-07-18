import { ArrowDown, CalendarDays, MailCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MAILTO, MARQUEE_WORDS } from '@/data/content';

function Hand({
  src,
  alt = '',
  className,
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`animate-floaty absolute bottom-0 select-none ${className ?? ''}`}
      style={style}
      draggable={false}
    />
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-[4.5rem]">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-brand-200/50 blur-[110px]" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-warm-200/70 blur-[100px]" />
        <div className="absolute inset-0 bg-dots opacity-60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-10 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-0 lg:pt-20 lg:px-8">
        {/* Copy */}
        <div className="relative z-10 max-w-2xl">
          <div className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-[13px] font-semibold text-brand-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
            </span>
            Wissenschaftlich evaluiertes Gruppenprogramm
          </div>

          <h1
            className="animate-rise-in mt-6 font-display text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-warm-950 sm:text-6xl lg:text-[4.2rem]"
            style={{ animationDelay: '0.1s' }}
          >
            In Würde
            <br />
            zu sich{' '}
            <span className="relative inline-block text-brand-600">
              stehen.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 220 14"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M3 10.5C60 3.5 150 3.5 217 8.5"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  className="text-brand-400/70"
                />
              </svg>
            </span>
          </h1>

          <p
            className="animate-rise-in mt-6 text-lg leading-relaxed text-warm-600 sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            IWS ist ein Gruppenprogramm für Menschen mit psychischen Erkrankungen,
            das bei Offenlegungsentscheidungen unterstützt — und wirksam der
            Stigmatisierung psychischer Erkrankungen in unserer Gesellschaft
            entgegenwirkt.
          </p>

          <div
            className="animate-rise-in mt-8 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '0.3s' }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-600 px-7 text-base font-semibold shadow-[0_16px_32px_-12px_rgba(224,0,0,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <a href={MAILTO.seminarHerbst26}>
                <CalendarDays className="mr-2 h-5 w-5" />
                Seminar Herbst 2026
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-warm-300 bg-white/70 px-7 text-base font-semibold text-warm-800 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
            >
              <a href="#seminar">
                Mehr erfahren
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div
            className="animate-rise-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-warm-500"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="inline-flex items-center gap-2">
              <MailCheck className="h-4 w-4 text-brand-500" />
              Bezahlung auf Spendenbasis — Value4Value
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-warm-300 sm:inline-block" />
            <span>Online via Zoom · 4 Sitzungen</span>
          </div>
        </div>

        {/* Hands composition */}
        <div className="relative mx-auto h-[380px] w-full max-w-[560px] sm:h-[460px] lg:h-[560px] lg:max-w-none">
          <div className="pointer-events-none absolute inset-x-8 bottom-0 top-10 rounded-t-[3rem] bg-gradient-to-t from-brand-100/70 via-white/40 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-[85%] -translate-x-1/2 rounded-[100%] bg-warm-300/35 blur-2xl" />

          <Hand src="/assets/hand-salmon.png" className="left-[2%] h-[62%] opacity-90" style={{ ['--rot' as string]: '-4deg', ['--dur' as string]: '8.5s' }} />
          <Hand src="/assets/hand-grey.png" className="left-[20%] h-[46%]" style={{ ['--rot' as string]: '3deg', ['--dur' as string]: '7.2s', ['--delay' as string]: '0.6s' }} />
          <Hand src="/assets/hand-red.png" className="left-[38%] z-10 h-[88%] drop-shadow-[0_24px_36px_rgba(224,0,0,0.30)]" style={{ ['--dur' as string]: '7.8s', ['--delay' as string]: '0.2s' }} />
          <Hand src="/assets/hand-black.png" className="left-[60%] h-[70%]" style={{ ['--rot' as string]: '2.5deg', ['--dur' as string]: '9s', ['--delay' as string]: '1s' }} />
          <Hand src="/assets/hand-salmon-sm.png" className="left-[76%] h-[42%]" style={{ ['--rot' as string]: '-3deg', ['--dur' as string]: '6.8s', ['--delay' as string]: '0.4s' }} />
          <Hand src="/assets/hand-red-sm.png" className="left-[88%] h-[58%]" style={{ ['--rot' as string]: '4deg', ['--dur' as string]: '8s', ['--delay' as string]: '1.3s' }} />
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-y border-warm-200/80 bg-white/70 py-4 backdrop-blur">
        <div className="mask-fade-x overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-8 pr-8">
            {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-warm-500">
                  {w}
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" className="text-brand-500" aria-hidden>
                  <path
                    fill="currentColor"
                    d="M12 21s-6.7-4.35-9.33-8.11C.9 10.36 1.7 6.9 4.5 5.6c1.9-.9 4.1-.3 5.5 1.2L12 8.6l2-1.8c1.4-1.5 3.6-2.1 5.5-1.2 2.8 1.3 3.6 4.76 1.83 7.29C18.7 16.65 12 21 12 21Z"
                  />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
