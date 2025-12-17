import { Metadata } from 'next';
import { Section } from '@/components/Section';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Katıl'
};

export default function JoinPage() {
  return (
    <Section eyebrow="Katılım" title="Roof topluluğuna katılma formu">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4 text-base text-gray-300">
          <p>
            Katılımcı profillerini dikkatle seçiyoruz. Roof, pozitif enerjisini paylaşmak isteyen, sosyal buluşmalara katkı sağlayabilecek kişilerin
            buluşma noktası. Formu doldur ve birkaç cümlede Roof’a nasıl renk katabileceğini paylaş.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-gray-400">İpuçları</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-300">
              <li>Ev sahipliği yapabileceğin buluşma veya önerebileceğin mekanları yaz.</li>
              <li>Katılmış olduğun sosyal etkinliklerden ve ilgi alanlarından bahset.</li>
              <li>Şehrini, müsaitlik durumunu ve sosyal medya hesaplarını güncel tut.</li>
            </ul>
          </div>
        </div>
        <JoinForm headline="Roof katılım formu" />
      </div>
    </Section>
  );
}
