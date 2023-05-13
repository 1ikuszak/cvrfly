import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'CvrFly',
  description: 'Conversion focused landing page for businesses.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('min-h-screen font-sans antialiased', fontSans.variable)}
    >
      <head />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
