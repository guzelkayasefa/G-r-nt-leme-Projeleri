import { Metadata } from 'next';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import Link from 'next/link';
import { buttonClasses } from '@/components/Button';
import { AdminLogin } from '@/components/AdminLogin';

export const metadata: Metadata = {
  title: 'Rooftop Sosyal Alanı'
};

const spaceFeatures = [
  {
    title: 'Topluluk akışı',
    description: 'Etkinliklerden fotoğrafları paylaş, üyelerin hikayelerine yorum bırak, öneri zincirlerine katıl.'
  },
  {
    title: 'Canlı anketler',
    description: 'Yeni buluşma konseptlerini toplulukla oyluyoruz. Rooftop, hangi etkinliğin yapılacağına karar veriyor.'
  },
  {
    title: 'Etkinlik takvimi',
    description: 'Kapalı devre etkinlik takvimi ve RSVP kontrolleri Rooftop üzerinden yönetiliyor.'
  }
];

const engagementBlocks = [
  {
    title: 'Rooftop Kulüpleri',
    description: 'Spor, gastronomi, kültür sanat gibi mini kulüplere katıl ve mikro topluluk deneyimi yaşa.'
  },
  {
    title: 'DM ve tanışma odaları',
    description: 'Yeni insanlarla birebir sohbet başlat ve moderasyonlu tanışma odalarında buzları kır.'
  }
];

export default function RooftopPage() {
  return (
    <div className="space-y-6">
      <Section eyebrow="Rooftop" title="Roof üyeleri için sosyal medya alanı" className="text-base text-gray-300">
        <p>
          Rooftop, üyelerin etkinlik öncesi ve sonrası bağlantıda kaldığı kapalı sosyal medya deneyimi. İçeride paylaşımlar yapılır, anketlere katılır,
          öneriler toplanır ve yeni buluşmalar organize edilir.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {spaceFeatures.map((feature) => (
            <Card key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-semibold text-white">Rooftop nasıl çalışır?</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
            <li>Katılım formunu doldur, onaylandığında Rooftop hesabın otomatik oluşsun.</li>
            <li>Karşılama anketiyle ilgi alanlarını paylaş, sana uygun kulüplere yönlendirelim.</li>
            <li>Etkinliklere RSVP yap, sohbetlere katıl ve kendi önerilerini ekiple paylaş.</li>
          </ol>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h4 className="text-xl font-semibold text-white">Toplulukta neler var?</h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {engagementBlocks.map((block) => (
              <div key={block.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h5 className="text-lg font-semibold text-white">{block.title}</h5>
                <p className="mt-2 text-sm text-gray-300">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white sm:flex-row">
          <Link href="/join" className={buttonClasses({})}>
            Rooftop’a Katılım Talep Et
          </Link>
          <Link href="/#uyelik" className={buttonClasses({ variant: 'secondary' })}>
            Ana Sayfada Rooftop’u İncele
          </Link>
        </div>
      </Section>

      <Section eyebrow="Giriş" title="Admin olarak Rooftop'u önizle">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-base text-gray-300">
            <p>
              Roof çekirdek ekibi ve adminler Rooftop paneline girerek içerikleri yayınlamadan önce inceleyebilir. Aşağıdaki formu kullanarak demo erişim
              koduyla giriş yap ve anketler, etkinlik listeleri gibi kısımların nasıl göründüğünü dene.
            </p>
            <p className="text-sm text-gray-400">
              Gerçek ortamda bu alanı Next Auth veya Vercel KV tabanlı auth ile koruyacağız; şimdilik erişim kodu ile hızlı önizleme yapabilirsin.
            </p>
          </div>
          <AdminLogin />
        </div>
      </Section>
    </div>
  );
}
