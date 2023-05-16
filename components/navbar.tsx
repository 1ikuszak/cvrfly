'use client';

import Container from '@/components/container';
import { Icons } from '@/components/icons';
import { MobileNav } from '@/components/mobile-nav';
import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';
import CalendlyButton from './calendlyButton';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Navbar = ({ items, children }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <Container>
      <div className="flex py-2 md:justify-between">
        <Link
          href="#home"
          className="flex items-center justify-start w-full space-x-2 cursor-pointer md:w-auto"
        >
          <p className="text-2xl font-bold text-neutral-900">cvrFly</p>
        </Link>
        <button
          className="flex items-center space-x-2 l-0 lg:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <Icons.close size={28} />
          ) : (
            <Icons.menu size={28} />
          )}
        </button>
        {showMobileMenu && items && (
          <MobileNav
            items={items}
            closeMobileMenu={() => setShowMobileMenu(false)}
          >
            {children}
          </MobileNav>
        )}
        {items?.length ? (
          <nav className="hidden gap-4 lg:flex">
            <div className="hidden gap-4 p-1 border rounded-full lg:flex border-neutral-100">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? '#' : item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold text-slate-600 bg-secondary px-4 py-1 rounded-full sm:text-sm hover:text-slate-700 cursor-pointer',
                    item.href.startsWith(`/${segment}`) && 'text-slate-900',
                    item.disabled && 'opacity-60'
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <CalendlyButton className="rounded-full" _variant="default">
              Zarezerwuj rozmowę
            </CalendlyButton>
          </nav>
        ) : null}
      </div>
    </Container>
  );
};

export default Navbar;
