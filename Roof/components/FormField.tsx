import { TextareaHTMLAttributes, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface BaseFieldProps {
  label: string;
  name: string;
  error?: string;
}

type InputProps = BaseFieldProps &
  InputHTMLAttributes<HTMLInputElement> & {
    multiline?: false;
  };

type TextAreaProps = BaseFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    multiline: true;
  };

type FormFieldProps = InputProps | TextAreaProps;

export function FormField(props: FormFieldProps) {
  const { label, name, error, multiline, className, ...rest } = props as FormFieldProps & {
    className?: string;
  };
  const sharedProps = {
    id: name,
    name,
    className: clsx(
      'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none',
      error && 'border-red-500/70',
      className
    )
  } as const;

  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-white/80" htmlFor={name}>
      {label}
      {multiline ? (
        <textarea rows={5} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} {...sharedProps} />
      ) : (
        <input {...(rest as InputHTMLAttributes<HTMLInputElement>)} {...sharedProps} />
      )}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
