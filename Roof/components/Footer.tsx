import Link from 'next/link';

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/roof' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/roof' },
  { name: 'X', href: 'https://x.com/roof' }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020409] py-10 text-sm text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-white">Roof</p>
          <p className="text-xs text-gray-500">Birlikte buluş, paylaş, keşfet.</p>
          <a href="mailto:iletisim@roof.community" className="text-white">
            iletisim@roof.community
          </a>
        </div>
        <div className="flex gap-4">
          {socials.map((social) => (
            <Link key={social.name} href={social.href} className="text-white/70 hover:text-brand">
              {social.name}
            </Link>
          ))}
        </div>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Roof. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
