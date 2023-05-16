import Container from '@/components/container';
import { Icons } from '@/components/icons';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <Container>
      <div className="flex flex-col gap-10 mt-12 lg:w-2/3">
        <button className="inline-flex w-[100px] items-center justify-center gap-1 py-2 pl-1 pr-3 text-sm font-medium transition-colors rounded-md bg-dark text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-slate-700 disabled:opacity-50 disabled:pointer-events-none ring-offset-background">
          <Link className="flex gap-3" href="/">
            <Icons.leftarrow size={18} />
            Powrót
          </Link>
        </button>
        <p className="text-2xl font-semibold">Polityka prywatności</p>
        <div>
          <p className="text-lg font-semibold">
            1. Administrator danych osobowych
          </p>
          <p>
            Administratorem danych osobowych jest CvrFly, z siedzibą w Polsce.
            Dane kontaktowe administratora to: hello.cvrfly@gmail.com
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">2. Dane osobowe</p>
          <p>
            Dane osobowe zbierane od użytkowników listy mailingowej to: imię,
            nazwisko, adres e-mail oraz nazwa firmy. Podanie tych danych jest
            dobrowolne, ale konieczne do subskrypcji wysłania wiadomości
            mailowej.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">3. Cel przetwarzania danych</p>
          <p>
            Dane osobowe użytkowników listy mailingowej przetwarzane są w celu
            przekazywania informacji handlowych i marketingowych, a także w
            celach statystycznych, w szczególności do optymalizacji strony
            internetowej.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            4. Prawo do dostępu, modyfikacji, usuwania i przenoszenia danych
            osobowych
          </p>
          <p>
            Użytkownik ma prawo do dostępu do swoich danych osobowych, ich
            modyfikacji, usunięcia lub przeniesienia. Aby zrealizować to prawo,
            należy skontaktować się z administratorem za pomocą poczty
            elektronicznej lub listownie.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            5. Bezpieczeństwo przetwarzania danych
          </p>
          <p>
            Administrator dokłada wszelkich starań, aby zapewnić bezpieczeństwo
            przetwarzania danych osobowych użytkowników listy mailingowej. W tym
            celu stosuje odpowiednie środki techniczne i organizacyjne
            zapewniające ochronę danych przed ich zniszczeniem, utratą,
            nieuprawnionym dostępem oraz innymi nieprawidłowościami.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            6. Przekazywanie danych innym podmiotom
          </p>
          <p>
            Dane osobowe użytkowników listy mailingowej nie są przekazywane
            innym podmiotom, z wyjątkiem sytuacji, gdy wymaga tego obowiązujące
            prawo lub decyzja sądu.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            7. Okres przechowywania danych osobowych
          </p>
          <p>
            Dane osobowe użytkowników listy mailingowej są przechowywane przez
            okres niezbędny do realizacji celów, dla których zostały zebrane, a
            także do spełnienia wymagań wynikających z obowiązujących przepisów
            prawa.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            8. Zgoda na przetwarzanie danych osobowych
          </p>
          <p>
            Korzystanie z listy mailingowej jest dobrowolne i wymaga wyrażenia
            zgody na przetwarzanie danych osobowych przez użytkownika. Zgoda ta
            może być wycofana w każdym czasie za pomocą poczty elektronicznej
            lub listownie.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">
            9. Zmiany w Polityce Prywatności
          </p>
          <p>
            Administrator zastrzega sobie prawo do wprowadzenia zmian w Polityce
            Prywatności w dowolnym momencie, ale w każdym przypadku nowa wersja
            polityki będzie dostępna na stronie internetowej dla użytkowników
            listy mailingowej.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">10. Pliki cookies</p>
          <p>
            Strona internetowa może korzystać z plików cookies w celu zbierania
            informacji o użytkownikach, np. o preferencjach użytkowników lub o
            sposobie korzystania z witryny. Użytkownik może w każdym momencie
            wyłączyć obsługę plików cookies w ustawieniach swojej przeglądarki
            internetowej.
          </p>
        </div>
        <div>
          <p className="text-lg font-semibold">11. Pytania i zastrzeżenia</p>
          <p>
            W razie pytań lub zastrzeżeń dotyczących Polityki Prywatności
            użytkownik listy mailingowej może skontaktować się z administratorem
            za pomocą poczty elektronicznej lub listownie.
          </p>
        </div>
        <p className="text-sm">Data ostatniej aktualizacji: 1 maja 2023</p>
      </div>
    </Container>
  );
}
