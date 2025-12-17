'use client';

import { useState } from 'react';
import clsx from 'clsx';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <button
            key={item.question}
            className="w-full text-left"
            type="button"
            onClick={() => setOpenIndex(isOpen ? null : index)}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <span className="text-base font-semibold text-white">{item.question}</span>
              <span className="text-brand">{isOpen ? '-' : '+'}</span>
            </div>
            <div
              className={clsx(
                'px-6 text-sm text-gray-300 transition-all',
                isOpen ? 'max-h-48 pb-6' : 'max-h-0 overflow-hidden'
              )}
            >
              {item.answer}
            </div>
          </button>
        );
      })}
    </div>
  );
}
