import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, title, eyebrow, className, children }: SectionProps) {
  return (
    <section id={id} className={clsx('py-16 sm:py-24', className)}>
      <div className="mx-auto w-full max-w-6xl px-4">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>}
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <div className="mt-8 space-y-6">{children}</div>
      </div>
    </section>
  );
}
