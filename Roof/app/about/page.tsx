import { Metadata } from 'next';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Hakkımızda'
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <Section title="Roof neden var?" eyebrow="Hakkımızda" className="text-base text-gray-300">
        <p>
          Roof, şehirdeki sıcacık sosyal buluşmaları yeniden canlandırmak için doğdu. İnsanların bir araya gelip sohbet edebileceği, kahkahalar eşliğinde
          yeni arkadaşlar edinebileceği, birlikte şehir keşfetmenin keyfini yaşayabileceği etkinlikler tasarlıyoruz.
        </p>
        <p>
          Misyonumuz, sosyal hayatı anlamlı hale getirmek. Kahvaltı masalarından film gecelerine, gönüllülük projelerinden kültür turlarına uzanan seçili
          etkinliklerle katılımcıların yeni bağlantılar kurmasını sağlıyoruz.
        </p>
      </Section>

      <Section title="Değerlerimiz" className="text-gray-300">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold text-white">Açıklık</h3>
            <p className="mt-2 text-sm text-gray-300">Duygularımızı ve hikayelerimizi paylaşmaktan çekinmeyiz; Roof’ta herkes kendini olduğu gibi ifade eder.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold text-white">Topluluk Öncelikli</h3>
            <p className="mt-2 text-sm text-gray-300">Kararları üyelerimizle birlikte alır, herkesin fikrini dinleriz.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold text-white">Deneysel</h3>
            <p className="mt-2 text-sm text-gray-300">Şehirde farklı deneyimler tasarlar, yeni buluşma formatlarını deneriz.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-xl font-semibold text-white">Erişilebilir</h3>
            <p className="mt-2 text-sm text-gray-300">Roof, herkesin katılabildiği, gündelik hayata uyumlu sosyal alanlar yaratır.</p>
          </div>
        </div>
      </Section>

      <Section title="Yolculuğumuz" className="text-base text-gray-300">
        <p>
          2021’de birkaç arkadaşın çatı katında başlayan Roof, bugün onlarca konseptte sosyal etkinlik düzenleyen ve üyelerinin önerileriyle şekillenen
          canlı bir topluluk girişimine dönüştü. Şehir hayatını güzelleştiren, birlikte deneyim üretmenin en keyifli yolunu arıyoruz.
        </p>
      </Section>

      <Section title="Topluluk kuralları" className="text-base text-gray-300">
        <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
          <li>Saygı ve güven ortamı yarat, kapsayıcı ol.</li>
          <li>Paylaşılan anıları izinsiz kaydetme veya paylaşma.</li>
          <li>Etkinliklere zamanında katıl, iptal durumunda haber ver.</li>
          <li>Katkı sun: buluşma öner, ev sahipliği yap, yeni katılımcılar getir.</li>
          <li>Çeşitliliği destekle, taciz ve ayrımcılığa sıfır tolerans.</li>
        </ul>
      </Section>
    </div>
  );
}
