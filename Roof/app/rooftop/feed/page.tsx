import { Metadata } from 'next';
import { Section } from '@/components/Section';
import Link from 'next/link';
import { buttonClasses } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Rooftop Feed'
};

const posts = [
  {
    user: 'Merve',
    time: '2 saat önce',
    content: 'Moda Sahil gün batımı yürüyüşü için 6 kişiyiz, katılmak isteyen? Yanımıza termos kahve alıyoruz!',
    tags: ['Gün batımı', 'Yürüyüş']
  },
  {
    user: 'Berk',
    time: '5 saat önce',
    content: 'Pazar günü brunch sonrası masa oyunu seansı yapıyoruz. Favori oyununuz hangisi? Oylamaya katılın👇',
    poll: ['Codenames', 'Ticket to Ride', 'Dixit']
  }
];

const events = [
  {
    title: 'Sunset Piknik & Akustik',
    date: '12 Mayıs',
    location: 'Moda Sahil',
    spots: '3 yer kaldı'
  },
  {
    title: 'Brunch + Masa Oyunu',
    date: '18 Mayıs',
    location: 'Roof Space Studio',
    spots: 'Bekleme listesi açık'
  }
];

export default function RooftopFeedPage() {
  return (
    <div className="space-y-6">
      <Section eyebrow="Rooftop Feed" title="Admin önizleme" className="text-base text-gray-300">
        <p>
          Bu sayfa demo amaçlıdır. Admin koduyla giriş yaptığında Rooftop iç alanında görülebilecek örnek akışı ve etkinlik listesini görüntülersin.
          Gerçek uygulamada buraya auth korumalı içerik gelecek.
        </p>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.user + post.time} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="font-semibold text-white">{post.user}</span>
                  <span>{post.time}</span>
                </div>
                <p className="mt-4 text-base text-gray-200">{post.content}</p>
                {post.tags && (
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-brand">
                    {post.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-brand/30 px-3 py-1">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                {post.poll && (
                  <div className="mt-4 space-y-3">
                    {post.poll.map((option) => (
                      <button key={option} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white">
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Yaklaşan Etkinlikler</h3>
              <ul className="mt-4 space-y-4 text-sm text-gray-200">
                {events.map((event) => (
                  <li key={event.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-lg font-semibold text-white">{event.title}</p>
                    <p>
                      {event.date} • {event.location}
                    </p>
                    <p className="text-xs text-brand">{event.spots}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h4 className="text-lg font-semibold text-white">Çıkış Yap</h4>
              <p className="mt-2 text-sm text-gray-300">Demo modundasın. Ana Rooftop sayfasına dönerek başka girişler yapabilirsin.</p>
              <Link href="/rooftop" className={buttonClasses({ fullWidth: true })}>
                Rooftop’a Dön
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
