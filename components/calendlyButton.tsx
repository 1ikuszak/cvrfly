import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { PopupButton } from 'react-calendly';
import { buttonVariants } from './ui/button';

interface CalendlyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  _variant?: 'default';
}

function CalendlyButton(
  props: CalendlyButtonProps,
  ref: React.Ref<HTMLButtonElement>
) {
  const { className, children, href, _variant, ...rest } = props;
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const calendlyButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (calendlyButtonRef.current) {
      setRootElement(document.getElementById('root') ?? document.body);
    }
  }, []);

  const calendlyButtonClassNames = cn(
    buttonVariants({ variant: _variant, size: 'default', className })
  );

  return (
    <>
      <button ref={calendlyButtonRef} style={{ display: 'none' }} />
      {rootElement && (
        <PopupButton
          className={calendlyButtonClassNames}
          text={children as string}
          url="https://calendly.com/cvrfly/30min"
          rootElement={rootElement}
          {...rest}
        />
      )}
    </>
  );
}

export default CalendlyButton;
