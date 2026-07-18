import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  dark = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center'
      )}
    >
      <div
        className={cn(
          'inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em]',
          dark ? 'text-brand-300' : 'text-brand-600'
        )}
      >
        <span className={cn('h-px w-8', dark ? 'bg-brand-300' : 'bg-brand-600')} />
        {eyebrow}
        {align === 'center' && (
          <span className={cn('h-px w-8', dark ? 'bg-brand-300' : 'bg-brand-600')} />
        )}
      </div>
      <h2
        className={cn(
          'mt-4 font-display text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]',
          dark ? 'text-white' : 'text-warm-950'
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            dark ? 'text-warm-200' : 'text-warm-600'
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
