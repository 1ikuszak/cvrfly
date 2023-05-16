import Container from '@/components/container';
import Footer from '@/components/fotter';
import Navbar from '@/components/navbar';
import { marketingConfig } from '@/config/marketing';
import '@/styles/globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: RootLayoutProps) {
  return (
    <div id="home" className="min-h-screen">
      <Navbar items={marketingConfig.mainNav} />
      <main>{children}</main>
      <div className="w-full bg-dark mt-[200px] lg:mt-[240px]" id="footer">
        <Container>
          <Footer items={marketingConfig.mainNav} />
        </Container>
      </div>
    </div>
  );
}
