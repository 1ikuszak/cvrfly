'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

//patern
import black_patern from '@/public/black_patern.png';
import white_patern from '@/public/white_patern.png';

// components
import CalendlyButton from '@/components/calendlyButton';
import Container from '@/components/container';
import { Layout } from '@/components/dom/Layout';
import Form from '@/components/form';
import { Icons } from '@/components/icons';
import PortfolioCard from '@/components/portfolioCard';
import ProcesBlock from '@/components/procesBlock';
import ProcesCard from '@/components/procesCard';
import { Button } from '@/components/ui/button';

//images
import crypto_hero from '@/public/crypto_hero.jpg';
import crypto_perks from '@/public/crypto_perks.jpg';
import fiver_browse from '@/public/fiver_browse.jpg';
import fiver_login from '@/public/fiver_login.png';
import outlanders_hero from '@/public/outlanders_hero.jpg';
import rock_paper_scissors from '@/public/rock_paper_scissors.jpg';

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
        <Icons.loader2 size={16} className="animate-spin " />
        <p>processing...</p>
      </div>
    ),
  }
);
const Common = dynamic(
  () => import('@/components/canvas/View').then((mod) => mod.Common),
  { ssr: false }
);

export default function Home() {
  const PortfolioCards = [];
  const PortfolioImages = [
    rock_paper_scissors,
    outlanders_hero,
    fiver_browse,
    fiver_login,
    crypto_hero,
    crypto_perks,
  ];
  for (let index = 0; index < PortfolioImages.length; index++) {
    PortfolioCards.push(
      <PortfolioCard image={PortfolioImages[index]} key={index} />
    );
  }

  return (
    <div className="mt-[40px] lg:mt-[140px] flex flex-col gap-[180px] lg:gap-[240px]">
      <Container>
        <div className="flex flex-col flex-wrap items-center justify-center w-full mx-auto md:flex-row">
          <div className="z-10 flex flex-col gap-6 items-start justify-center w-full text-center md:w-[60%] md:text-left">
            <p className="text-6xl font-semibold text-left lg:text-7xl">
              Strony, które opowiadają historię i przynoszą
              <span className="text-primary"> rezultaty</span>
            </p>
            <p className="text-2xl text-left break-words text-neutral-5s00">
              Projektuję strony internetowe, które nie tylko wyglądają
              atrakcyjnie, ale przede wszystkim są skutecznymi{' '}
              <span className="font-semibold text-primary">
                narzędziami biznesowymi
              </span>
              , które zamieniają{' '}
              <span className="font-semibold text-primary">kliknięcia</span> w
              kilentów.
            </p>
            <div className="flex flex-col w-full gap-2 lg:gap-3 sm:flex-row">
              <CalendlyButton _variant="cta">
                zarezerwuj darmową rozmowę
              </CalendlyButton>
              <Button variant="outline" href="#values">
                dowiedz się więcej
                <Icons.arrowright size={16} />
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
      <div
        className="w-full bg-dark"
        style={{
          backgroundImage: `url(${black_patern.src})`,
        }}
        id="values"
      >
        <Container>
          <div className="text-white my-[110px] flex flex-col gap-[100px]">
            <div className="flex flex-col items-center gap-8 lg:gap-4 lg:flex-row">
              <div className="flex flex-col lg:w-[50%] gap-4">
                <p className="mb-2 text-4xl font-bold">CVRFLY</p>
                <p className="text-5xl tracking-wide">
                  PROJEKTUJEMY STRONY KTÓRE SĄ NARZĘDZIEM DLA TWOJEGO BIZNESU
                </p>
              </div>

              <div className="lg:w-[50%] w-full flex gap-3 flex-col lg:p-8 lg:py-4 py-2 px-1 bg-black rounded-xl">
                <div className="w-full pr-[60px] bg-white border-2 rounded-full border-primary">
                  <div className="px-5 py-1 bg-black rounded-full">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl">KREATYWNOŚĆ</p>
                      <p className="hidden text-sm tracking-widest text-white lg:flex">
                        BALANS
                      </p>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full pr-[40px] bg-black border-2 rounded-full border-primary">
                  <div className="px-5 py-1 bg-white rounded-full">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-semibold text-black">
                        FUNKCJONALNOŚĆ
                      </p>
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex flex-col">
                <p className="text-6xl font-bold">USŁUGI</p>
                <div className="flex lg:flex-row flex-col justify-around gap-[60px] mt-[30px]">
                  <div className="flex flex-col">
                    <p className="text-4xl font-semibold">Design</p>
                    <p className="text-xl lg:text-auto">
                      tworzymy unikalny i przemyślany design, aby zapewnić jak
                      najlepszy user-experience wśród twojej grupy docelowej.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-4xl font-semibold">Copywriting</p>
                    <p className="text-xl">
                      Nasz copywriting pomaga przekształcić odwiedzających Twoją
                      stronę w klientów, którzy poczują więź z marką.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-4xl font-semibold">SEO</p>
                    <p className="text-xl">
                      Zapewnimy i pomożemy dobrać treści na stronie tak aby
                      zapewnić wysokie pozycjonowanie w wyszukiwarkach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-around lg:px-12 my-[60px]">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-full h-[3px] bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>

              <div className="flex flex-col lg:flex-row gap-10 lg:gap-[80px] justify-center">
                <div className="flex flex-col py-2 px-4 bg-black border border-white rounded-xl lg:w-[480px]">
                  <p className="text-4xl font-semibold">Backend</p>
                  <p className="text-xl">
                    tworzymy strony używając najnowszych narzędzi, które
                    zapewnią ci przewagę w skalowalności szybkości i poziomu
                    edycji.
                  </p>
                </div>
                <div className="flex flex-col py-2 px-4 bg-black border border-white rounded-xl lg:w-[480px]">
                  <p className="text-4xl font-semibold">Frontend</p>
                  <p className="text-xl">
                    Dostarczamy wydajne i skuteczne rozwiązania dla stron
                    internetowych kompatybilne na wielu platformach.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center w-full gap-2 lg:gap-3 sm:flex-row">
              <CalendlyButton _variant="cta">
                zarezerwuj darmową rozmowę
              </CalendlyButton>
              <Button variant="secondary" href="#portfolio">
                zobacz portfolio
                <Icons.arrowright size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <section className="flex flex-col" id="portfolio">
          <div className="text-center">
            <p className="mb-3 text-5xl font-semibold">
              Projekty, które zbudowałem
            </p>
            <p className="text-xl">
              to tylko niektóre z projektów, zarezerwuj rozmowę <br /> i zajmij
              miejsce dla siebie
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-10 rounded-xl sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {PortfolioCards}
          </div>
          <div className="flex flex-col justify-center w-full gap-2 mt-10 lg:gap-3 sm:flex-row">
            <Button variant="cta">zajmij miejsce dla siebie</Button>
            <Button variant="outline" href="#process">
              przebieg procesu
              <Icons.arrowright size={16} />
            </Button>
          </div>
        </section>
      </Container>

      <section
        className="flex flex-col gap-12"
        id="process"
        style={{
          backgroundImage: `url(${white_patern.src})`,
        }}
      >
        <Container>
          <div className="my-[120px] flex flex-col gap-12">
            <div className="text-center">
              <p className="mb-3 text-5xl font-semibold">Proces</p>
            </div>
            <div className="lg:flex lg:gap-[164px]">
              <div className="mb-12 lg:mb-0 lg:w-1/2">
                <div className="sticky top-[16%]">
                  <ProcesBlock />
                </div>
              </div>
              <div className="flex flex-col gap-12 lg:w-1/2">
                <ProcesCard
                  title="Rozmowa wstępna"
                  description="to nasze pierwsze spotkanie, w trakcie którego omawiamy Twoją wizję strony i upewniamy się, że wszyscy mamy jasno określone cele."
                  pill="1-5"
                />
                <ProcesCard
                  title="Tworzenie szkiców"
                  description="Tworzenie szkiców to sposób na zaplanowanie najlepszej struktury i układu Twojej strony."
                  pill="2-5"
                />
                <ProcesCard
                  title="Projektowanie"
                  description="Projektowanie to klucz do stworzenia funkcjonalnej i atrakcyjnej strony. Razem stworzymy styl odpowiadający Twojej marce i celom."
                  pill="3-5"
                />
                <ProcesCard
                  title="Tworzenie"
                  description="Tworzenie to proces faktycznego budowania Twojej strony. To moment, w którym wszystkie plany i projekty są wdrażane i przekształcane w gotowy produkt."
                  pill="4-5"
                />
                <ProcesCard
                  title="Oddanie projektu"
                  description="Oddanie projektu to moment, w którym otrzymujesz gotową stronę internetową i wszystkie potrzebne materiały. To początek prawdziwej magii"
                  pill="5-5"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section
          className="flex flex-col items-center justify-center gap-10"
          id="contact"
        >
          <p className="text-5xl font-semibold text-center">
            Zacznijmy współprace
          </p>
          <Form />
        </section>
      </Container>
    </div>
  );
}
