import Navbar from '@/components/navbar';
import { marketingConfig } from '@/config/marketing';
import '@/styles/globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen">
      <Navbar items={marketingConfig.mainNav} />
      <main>{children}</main>
    </div>
  );
}
