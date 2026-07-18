import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS, MAILTO } from '@/data/content';
import { Button } from '@/components/ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-warm-200/80 bg-white/85 shadow-[0_8px_30px_-18px_rgba(58,44,44,0.35)] backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <button
          onClick={() => {
            setOpen(false);
            if (location.pathname !== '/') navigate('/');
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-3"
          aria-label="Zur Startseite"
        >
          <img
            src="/assets/logo-hands.png"
            alt="IWS Logo — Hände mit Herzen"
            className="h-8 w-auto sm:h-9"
          />
          <span className="hidden flex-col leading-tight md:flex">
            <span className="font-display text-[15px] font-bold tracking-tight text-warm-950">
              In Würde zu sich stehen
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-warm-500">
              IWS · Offenlegungs-Seminar
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-warm-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-full bg-brand-600 px-5 font-semibold shadow-[0_10px_24px_-10px_rgba(224,0,0,0.55)] transition-all hover:bg-brand-700 hover:shadow-[0_14px_28px_-10px_rgba(224,0,0,0.6)] sm:inline-flex"
          >
            <a href={MAILTO.interessentenliste}>
              <HeartHandshake className="mr-1.5 h-4 w-4" />
              Interessentenliste
            </a>
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-warm-800 transition-colors hover:bg-warm-100 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menü öffnen"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-b border-warm-200 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden',
          open ? 'max-h-[26rem] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="rounded-xl px-4 py-3 text-left text-[15px] font-medium text-warm-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {l.label}
            </button>
          ))}
          <Button asChild className="mt-2 rounded-xl bg-brand-600 font-semibold hover:bg-brand-700">
            <a href={MAILTO.interessentenliste}>
              <HeartHandshake className="mr-2 h-4 w-4" />
              In die Interessentenliste
            </a>
          </Button>
          <Link to="/impressum" onClick={() => setOpen(false)} className="px-4 pt-3 text-xs text-warm-400">
            Impressum · Datenschutz
          </Link>
        </nav>
      </div>
    </header>
  );
}
