'use client';

import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import * as React from 'react';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Footer = ({ items }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  return (
    <footer className="flex flex-col gap-8 p-12 text-light">
      <div className="flex items-center justify-center lg:justify-between">
        <Link
          href="#home"
          className="flex items-center justify-center gap-2 cursor-pointer"
        >
          <p className="text-2xl font-bold">CvrFly</p>
        </Link>
        <div className="hidden gap-2 lg:flex">
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? '#' : item.href}
                  className={cn(
                    'flex items-center text-lg font-semibold sm:text-base cursor-pointer',
                    item.href.startsWith(`/${segment}`) && 'text-slate-900',
                    item.disabled && 'opacity-60'
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                className="text-lg font-semibold sm:text-base"
                href="/politykaprywatnosci"
              >
                Polityka Prywatności
              </Link>
            </nav>
          ) : null}
        </div>
      </div>
      <hr className="rounded-full opacity-30 " />
      <p className="text-center">©Copyright CvrFly 2023</p>
    </footer>
  );
};

export default Footer;
