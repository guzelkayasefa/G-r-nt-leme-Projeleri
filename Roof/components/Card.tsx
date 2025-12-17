import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function Card({ title, description, icon, className }: CardProps) {
  return (
    <div className={clsx('rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-brand/60', className)}>
      {icon && <div className="mb-4 text-2xl">{icon}</div>}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
    </div>
  );
}
