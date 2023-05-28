'use client';
import CalendlyButton from './calendlyButton';
import { Icons } from './icons';

const ProcesBlock = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-center gap-6">
        <Icons.send size={84} />
        <p className="text-xl">
          Podczas tworzenia Twojej strony będziemy w stałym kontakcie z Tobą,
          abyś zawsze wiedział, jak idą prace.
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Icons.clock size={84} />
        <p className="text-xl">
          Postaramy się jednak skrócić nasz kontakt do minimum, abyś mógł skupić
          się na swoich rzeczach.
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Icons.target size={84} />
        <p className="text-xl">
          Naszym celem jest, aby proces był dla Ciebie jak najmniej absorbujący,
          a efekt końcowy satysfakcjonujący.
        </p>
      </div>
      <div className="w-full text-right">
        <CalendlyButton className="w-full sm:w-auto bg-primary hover:bg-primary_hover">
          Zarezerwuj darmową rozmowę
        </CalendlyButton>
      </div>
    </div>
  );
};

export default ProcesBlock;
