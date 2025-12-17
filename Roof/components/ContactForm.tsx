'use client';

import { FormEvent, useState } from 'react';
import { ContactFormValues, contactSchema } from '@/lib/validation';
import { FormField } from './FormField';
import { Button } from './Button';

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: ''
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof ContactFormValues;
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
        body: JSON.stringify(parsed.data)
      });
      const data = await response.json();
      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setStatus('error');
        setMessage(data.message || 'Bir sorun oluştu.');
        return;
      }
      setStatus('success');
      setMessage('Mesajın bize ulaştı. En kısa sürede dönüş yapacağız.');
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Sunucuya ulaşılamadı, lütfen tekrar dene.');
    }
  };

  const updateField = (name: keyof ContactFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
      <h3 className="text-2xl font-semibold text-white">Roof ekibine ulaş</h3>
      <p className="mt-2 text-sm text-gray-300">İşbirliği, sponsorluk veya destek için formu doldur.</p>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <FormField
          label="Adın"
          name="name"
          value={values.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Örn. Kerem"
          error={errors.name}
        />
        <FormField
          label="E-posta"
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="sen@ornekkurulus.com"
          error={errors.email}
        />
        <FormField
          label="Mesaj"
          name="message"
          multiline
          value={values.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Neden iletişime geçmek istediğini bize anlat."
          error={errors.message}
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
          {status === 'loading' ? 'Gönderiliyor...' : 'Mesajı Gönder'}
        </Button>
      </form>
    </div>
  );
}
