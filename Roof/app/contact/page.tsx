import { Metadata } from 'next';
import { Section } from '@/components/Section';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'İletişim'
};

export default function ContactPage() {
  return (
    <Section eyebrow="İletişim" title="Roof ekibiyle iletişim kur">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4 text-base text-gray-300">
          <p>
            İş birlikleri, sponsorluk fırsatları, topluluk desteği veya herhangi bir geri bildirim için formu doldurabilirsin. Roof ekibi 2 iş günü
            içinde dönüş yapmayı hedefler.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
            <p className="font-semibold text-white">Alternatif iletişim</p>
            <p className="mt-2 text-gray-300">
              <a href="mailto:iletisim@roof.community" className="text-white underline">
                iletisim@roof.community
              </a>{' '}
              adresine direkt yazabilir veya <a href="https://linkedin.com/company/roof" className="text-white underline">LinkedIn</a> üzerinden mesaj atabilirsin.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
