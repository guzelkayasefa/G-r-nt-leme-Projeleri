import Link from 'next/link';
import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { Accordion } from '@/components/Accordion';
import { JoinForm } from '@/components/JoinForm';
import { UpdatesForm } from '@/components/UpdatesForm';
import { buttonClasses } from '@/components/Button';

const features = [
  {
    title: 'Şehir etkinlik rehberi',
    description: 'Roof ile yeni sosyal deneyimleri keşfet, mahalle buluşmalarından özel davetlere kadar takvimini doldur.',
    icon: '🔎'
  },
  {
    title: 'Topluluk buluşmaları',
    description: 'Brunch, masa oyunları, açık hava film geceleri gibi aktivitelere katıl, yeni insanlarla tanış.',
    icon: '🤝'
  },
  {
    title: 'RSVP kolaylığı',
    description: 'Yakında: Tek tıkla katılım bildir, kontenjan ve bekleme listelerini Roof’tan takip et.',
    icon: '📅'
  },
  {
    title: 'Bildirimler',
    description: 'Yakında: İlgi alanlarına göre sosyal etkinlik bildirimleri mail veya push ile cebinde.',
    icon: '🔔'
  }
];

const steps = [
  {
    title: 'Roof hikayesini keşfet',
    copy: 'Ne tür buluşmalar düzenlediğimizi öğren, fotoğraf günlüklerimizi incele.'
  },
  {
    title: 'Katılma isteğini paylaş',
    copy: 'Şehrini, aktif olduğun sosyal alanları ve katkı sunabileceğin konuları formda belirt.'
  },
  {
    title: 'Davete hazır ol',
    copy: 'Ekibimiz sana uygun buluşmalarda haber veriyor, seni Roof arkadaşlarıyla tanıştırıyor.'
  }
];

const stats = [
  { value: '120+', label: 'aktif üye' },
  { value: '35', label: 'düzenlenen etkinlik' },
  { value: '18', label: 'şehirde buluşma' }
];

const faqs = [
  {
    question: 'Roof hangi şehirlerde aktif?',
    answer: 'İstanbul merkezliyiz fakat Ankara, İzmir ve Bursa’da düzenli buluşmalar planlıyoruz.'
  },
  {
    question: 'Ücretli mi?',
    answer: 'Hayır. Çoğu etkinliği sponsorlarımız sayesinde ücretsiz gerçekleştiriyoruz.'
  },
  {
    question: 'Hangi konulara odaklanıyorsunuz?',
    answer: 'Şehir kültürü, gastronomi, gönüllülük, açık hava aktiviteleri ve arkadaşlık temalı sosyal buluşmalar düzenliyoruz.'
  },
  {
    question: 'Katılmak için kriter var mı?',
    answer: 'Meraklı, paylaşmaya açık ve topluluk kurallarımızı benimseyen herkes davet edilebilir.'
  }
];

const memberFeatures = [
  {
    title: 'Sosyal anketler',
    description:
      'Yeni etkinlik konseptlerini üyeler belirler. Haftalık anketlerle brunch mı yoksa gün batımı pikniği mi istediğini seç.'
  },
  {
    title: 'Etkinlik listesi',
    description: 'Kapalı devre Roof Space alanında sadece üyelerin görebildiği calendar ve RSVP akışı yer alır.'
  },
  {
    title: 'Katılım günlükleri',
    description: 'Her buluşma sonrası fotoğraflar, öneriler ve yeni fikirler Roof Space topluluk akışında paylaşılır.'
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand/10 via-transparent to-transparent pb-20 pt-16" id="hero">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Roof</p>
          <h1 className="mt-6 text-balance text-4xl font-bold text-white sm:text-6xl">
            Roof ile etkinlikleri keşfet, topluluğa katıl
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Roof, şehir hayatını dolu dolu yaşamak isteyenler için küratörlü sosyal etkinlikler sunar. Rooftop sohbetlerden kahvaltı buluşmalarına kadar
            farklı formatlarda yeni arkadaşlıklar kurabileceğin buluşmalar organize ediyoruz.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="#katilim" className={buttonClasses({ fullWidth: true })}>
              Topluluğa Katıl
            </Link>
            <Link
              href="#haberler"
              className={buttonClasses({ variant: 'secondary', fullWidth: true })}
            >
              Etkinliklerden Haberdar Ol
            </Link>
          </div>
          <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-wide text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section id="ozellikler" eyebrow="Roof topluluğu" title="Tek topluluk, sınırsız sosyal deneyim">
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </Section>

      <Section id="uyelik" eyebrow="Üyelik sonrası" title="Roof Space ile topluluk platformu">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-base text-gray-300">
            <p>
              Üyelik talebin onaylandığında Roof Space’e giriş yapabiliyorsun. Burası küçük bir sosyal medya alanı gibi çalışıyor; anketlere katılıyor,
              kapalı etkinlik listesini takip ediyor ve diğer Roof üyeleriyle sohbet ediyorsun.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {memberFeatures.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <p className="text-sm font-semibold text-brand">Roof Space</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Haftanın Anketi</h3>
            <div className="mt-4 space-y-3">
              {['Pazar brunch buluşması', 'Boğazda gün batımı yürüyüşü', 'Board game gecesi'].map((option) => (
                <label
                  key={option}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200"
                >
                  <span>{option}</span>
                  <span className="text-brand">Oy ver</span>
                </label>
              ))}
            </div>
            <h4 className="mt-8 text-lg font-semibold text-white">Yaklaşan Buluşmalar</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                12 Mayıs • Moda Sahil
                <span className="block text-xs text-gray-400">Sunset Piknik & Akustik</span>
              </li>
              <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                18 Mayıs • Roof Space Studio
                <span className="block text-xs text-gray-400">Brunch + Masa Oyunu Maratonu</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="nasil-calisir" eyebrow="Nasıl çalışır?" title="3 adımda Roof deneyimi">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="text-sm font-semibold text-brand">0{index + 1}</span>
              <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-gray-300">{step.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="referanslar"
        eyebrow="Roof etkisi"
        title="Topluluğun gücüne güveniyoruz"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-bold text-white">93%</p>
            <p className="mt-2 text-sm text-gray-300">Roof üyeleri etkinlikleri arkadaşlarına öneriyor.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-bold text-white">4.8/5</p>
            <p className="mt-2 text-sm text-gray-300">Topluluk buluşmalarında memnuniyet puanımız.</p>
          </div>
        </div>
      </Section>

      <Section id="haberler" eyebrow="Söz veriyoruz" title="Yeni etkinliklerden ilk sen haberdar ol">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-base text-gray-300">
            <p>
              Roof haber bülteni ile kapalı devre etkinlik davetlerini, erken kayıt bağlantılarını ve sınırlı kontenjanlı buluşmaları kaçırma.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-400">
              <li>Ayda en fazla 3 e-posta gönderiyoruz.</li>
              <li>İstersen tek tıkla ayrılabilirsin.</li>
              <li>Spam yok, sadece Roof seçkileri.</li>
            </ul>
          </div>
          <UpdatesForm />
        </div>
      </Section>

      <Section id="sss" eyebrow="SSS" title="En sık sorulan sorular">
        <Accordion items={faqs} />
      </Section>

      <Section id="katilim" eyebrow="Hazır mısın?" title="Roof seni bekliyor">
        <div id="katilim-form">
          <JoinForm />
        </div>
      </Section>
    </div>
  );
}
