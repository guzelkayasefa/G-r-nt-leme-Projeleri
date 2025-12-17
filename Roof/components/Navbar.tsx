'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';
import { buttonClasses } from './Button';

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/about', label: 'Hakkımızda' },
  { href: '/rooftop', label: 'Rooftop' },
  { href: '/join', label: 'Katıl' },
  { href: '/contact', label: 'İletişim' }
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030712]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-white">
          Roof
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx('transition hover:text-white', pathname === link.href && 'text-brand')}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/join" className={buttonClasses({})}>
            Topluluğa Katıl
          </Link>
        </nav>
        <button
          className="md:hidden"
          aria-label="Menüyü aç"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" aria-hidden="true">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#030712] px-4 py-4 md:hidden">
          <div className="flex flex-col space-y-4 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={clsx('text-sm font-medium', pathname === link.href && 'text-brand')}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/join"
              onClick={() => setMenuOpen(false)}
              className={buttonClasses({ fullWidth: true })}
            >
              Topluluğa Katıl
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
