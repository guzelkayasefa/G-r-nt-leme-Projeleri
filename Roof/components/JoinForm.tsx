'use client';

import { FormEvent, useState } from 'react';
import { JoinFormValues, joinSchema } from '@/lib/validation';
import { FormField } from './FormField';
import { Button } from './Button';

const interestOptions = [
  'Brunch & Kahvaltı',
  'Kültür & Sanat',
  'Gönüllülük',
  'Doğa & Keşif',
  'Müzik & Konser',
  'Spor & Wellness'
];

const initialValues: JoinFormValues = {
  fullName: '',
  email: '',
  city: '',
  interests: [],
  contribution: ''
};

type FormErrors = Partial<Record<keyof JoinFormValues, string>>;

interface JoinFormProps {
  headline?: string;
}

export function JoinForm({ headline = 'Roof topluluğuna hemen katıl' }: JoinFormProps) {
  const [values, setValues] = useState<JoinFormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const parsed = joinSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof JoinFormValues;
        fieldErrors[path] = issue.message;
      });
      setErrors(fieldErrors);
      setStatus('error');
      return;
    }

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data)
      });
      const data = await response.json();
      if (!response.ok) {
        setStatus('error');
        if (data.errors) {
          setErrors(data.errors);
        }
        setMessage(data.message || 'Bir şeyler ters gitti.');
        return;
      }

      setStatus('success');
      setMessage(data.message || 'Katılım talebin alındı!');
      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('Sunucuya ulaşılamadı. Lütfen tekrar dene.');
    }
  };

  const updateField = (name: keyof JoinFormValues, value: string | string[]) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const toggleInterest = (interest: string) => {
    updateField(
      'interests',
      values.interests.includes(interest)
        ? values.interests.filter((i) => i !== interest)
        : [...values.interests, interest]
    );
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
      <h3 className="text-2xl font-semibold text-white">{headline}</h3>
      <p className="mt-2 text-sm text-gray-300">
        Roof katılımcılarını merakla bekliyor. Formu doldur, seni etkinliklerden haberdar edelim.
      </p>
      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <FormField
          label="Ad Soyad"
          name="fullName"
          value={values.fullName}
          onChange={(e) => updateField('fullName', e.target.value)}
          placeholder="Örn. Elif Demir"
          error={errors.fullName}
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
          label="Şehir"
          name="city"
          value={values.city}
          onChange={(e) => updateField('city', e.target.value)}
          placeholder="İstanbul"
          error={errors.city}
        />
        <div>
          <p className="text-sm font-medium text-white/80">İlgi Alanların</p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {interestOptions.map((interest) => {
              const active = values.interests.includes(interest);
              return (
                <button
                  type="button"
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={
                    'rounded-xl border px-3 py-2 text-sm transition ' +
                    (active
                      ? 'border-brand bg-brand/20 text-white'
                      : 'border-white/10 bg-white/0 text-gray-300 hover:border-brand/60')
                  }
                >
                  {interest}
                </button>
              );
            })}
          </div>
          {errors.interests && <p className="mt-2 text-xs text-red-400">{errors.interests}</p>}
        </div>
        <FormField
          label="Ben ne katkı sunarım?"
          name="contribution"
          multiline
          value={values.contribution}
          onChange={(e) => updateField('contribution', e.target.value)}
          placeholder="Atölye düzenleyebilirim, tasarım desteği verebilirim..."
          error={errors.contribution}
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
          {status === 'loading' ? 'Gönderiliyor...' : 'Katılım Talebini Gönder'}
        </Button>
      </form>
    </div>
  );
}
