'use client';

import { FormEvent, useState } from 'react';
import { UpdatesFormValues, updatesSchema } from '@/lib/validation';
import { FormField } from './FormField';
import { Button } from './Button';

type FormErrors = Partial<Record<keyof UpdatesFormValues, string>>;

const initialValues: UpdatesFormValues = {
  name: '',
  email: ''
};

export function UpdatesForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const parsed = updatesSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof UpdatesFormValues;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...parsed.data, message: 'Roof etkinliklerinden haberdar olmak istiyorum.' })
      });
      const data = await response.json();
      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setStatus('error');
        setMessage(data.message || 'Form gönderilemedi.');
        return;
      }
      setStatus('success');
      setMessage('Listemize eklendin! Yeni etkinlikleri seninle paylaşacağız.');
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Sunucuya ulaşılamadı, lütfen tekrar dene.');
    }
  };

  const updateField = (name: keyof UpdatesFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <FormField
        label="Adın"
        name="name"
        value={values.name}
        onChange={(e) => updateField('name', e.target.value)}
        placeholder="Örn. Mert"
        error={errors.name}
      />
      <FormField
        label="E-posta"
        name="email"
        type="email"
        value={values.email}
        onChange={(e) => updateField('email', e.target.value)}
        placeholder="sen@mail.com"
        error={errors.email}
      />
      {message && (
        <div
          className={`rounded-xl px-4 py-3 text-sm ${
            status === 'success' ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'
          }`}
        >
          {message}
        </div>
      )}
      <Button type="submit" disabled={status === 'loading'} fullWidth>
        {status === 'loading' ? 'Kaydediliyor...' : 'Haberdar Ol'}
      </Button>
    </form>
  );
}
