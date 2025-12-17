'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './Button';
import { FormField } from './FormField';

const ACCESS_CODE = 'ROOFTOP2024';

export function AdminLogin() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      setMessage('Geçerli bir e-posta gir.');
      return;
    }
    if (code !== ACCESS_CODE) {
      setStatus('error');
      setMessage('Erişim kodu hatalı.');
      return;
    }
    setStatus('success');
    setMessage('Hoş geldin! Rooftop admin görünümü aktif.');
    setTimeout(() => {
      router.push('/rooftop/feed');
    }, 800);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
      <h3 className="text-2xl font-semibold text-white">Rooftop Admin Girişi</h3>
      <p className="mt-2 text-sm text-gray-300">E-posta ve erişim kodunu girerek Rooftop içeriğini önizleyebilirsin.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <FormField
          label="E-posta"
          name="admin-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="sen@roof.community"
        />
        <FormField
          label="Erişim Kodu"
          name="admin-code"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          placeholder="ROOFTOP2024"
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
        <Button type="submit" fullWidth>
          Giriş Yap
        </Button>
      </form>
      <p className="mt-4 text-xs text-gray-400">Varsayılan erişim kodu: ROOFTOP2024 (daha sonra ortam değişkeniyle güncelle).</p>
    </div>
  );
}
