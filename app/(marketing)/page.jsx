'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// components
import CalendlyButton from '@/components/calendlyButton';
import Container from '@/components/container';
import { Layout } from '@/components/dom/Layout';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

// 3d
const Blob = dynamic(
  () => import('@/components/canvas/Examples').then((mod) => mod.Blob),
  { ssr: false }
);
const View = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center w-full gap-2 h-96">
        <Icons.loader2
          size={16}
          className="text-black lg:text-white animate-spin "
        />
        <p className="lg:text-white">processing...</p>
      </div>
    ),
  }
);
const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

export default function Home() {
  return (
    <div
      className="mt-[40px] lg:mt-[140px] flex flex-col gap-[200px] lg:gap-[240px]"
      id="root"
    >
      <Container>
        <div className="flex flex-col flex-wrap items-center justify-center w-full mx-auto md:flex-row">
          <div className="mix-blend-luminosity z-10 flex flex-col gap-6 items-start justify-center w-full text-center md:w-[60%] md:text-left">
            <p className="font-semibold text-left text-7xl">
              Strony, które opowiadają historię i przynoszą
              <span
                className="text-secondary"
                style={{
                  WebkitTextStrokeWidth: '1px',
                  WebkitTextStrokeColor: '#010001',
                }}
              >
                {' '}
                rezultaty
              </span>
            </p>
            <p className="text-2xl text-left break-words text-neutral-5s00">
              Projektuję strony internetowe, które nie tylko wyglądają
              atrakcyjnie, ale przede wszystkim są skutecznymi{' '}
              <span className="font-semibold text-primary">
                narzędziami biznesowymi
              </span>
              , zwiększającymi{' '}
              <span className="font-semibold text-primary">
                sprzedaż i lojalność
              </span>{' '}
              kilentów.
            </p>
            <div className="flex flex-col w-full gap-2 lg:gap-3 sm:flex-row">
              <CalendlyButton>zarezerwuj darmową rozmowę</CalendlyButton>
              <Button variant="subtle" href="cvrfly">
                dowiedz się więcej
              </Button>
            </div>
          </div>

          <div className="absolute z-[-1] w-full text-center rounded-lg md:relative md:w-[40%]">
            <Layout>
              <View className="flex flex-col items-center justify-center w-full h-96">
                <Suspense fallback={null}>
                  <Blob scale={1} position={[0, 0, 0]} />
                  <Common />
                </Suspense>
              </View>
            </Layout>
          </div>
        </div>
      </Container>
    </div>
  );
}
