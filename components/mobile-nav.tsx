import { useLockBody } from '@/hooks/use-lock-body';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import Link from 'next/link';
import * as React from 'react';
import CalendlyButton from './calendlyButton';

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
  closeMobileMenu?: () => void;
}

export function MobileNav({
  items,
  children,
  closeMobileMenu,
}: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        'fixed inset-0 top-12 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md',
        'md:hidden animate-in slide-in-from-bottom-80'
      )}
    >
      <div className="relative z-20 grid gap-6 p-4 rounded-md shadow-md bg-light">
        <nav className="grid grid-flow-row text-sm auto-rows-max">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline cursor-pointer',
                item.disabled && 'cursor-not-allowed opacity-60'
              )}
              onClick={closeMobileMenu}
            >
              {item.title}
            </Link>
          ))}
          <Link
            className="flex items-center w-full p-2 text-sm font-medium rounded-md cursor-pointer hover:underline"
            href="/politykaprywatnosci"
          >
            Polityka Prywatności
          </Link>
          <CalendlyButton>Zarezerwuj rozmowę</CalendlyButton>
        </nav>
        {children}
      </div>
    </div>
  );
}
