import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark focus-visible:outline-brand',
  secondary: 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
  ghost: 'text-white hover:text-brand'
};

export const buttonClasses = ({
  variant = 'primary',
  fullWidth,
  className
}: {
  variant?: keyof typeof variants;
  fullWidth?: boolean;
  className?: string;
}) => clsx(baseStyles, variants[variant], fullWidth && 'w-full', className);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  fullWidth?: boolean;
};

export function Button({ variant = 'primary', className, fullWidth, ...props }: ButtonProps) {
  return <button className={buttonClasses({ variant, fullWidth, className })} {...props} />;
}
