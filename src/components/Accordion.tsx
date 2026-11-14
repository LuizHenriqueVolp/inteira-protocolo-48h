import { useId, useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export type AccordionItem = { titulo: ReactNode; conteudo: ReactNode; prefixo?: ReactNode };

export function Accordion({
  items,
  abertoInicial = -1,
}: {
  items: AccordionItem[];
  abertoInicial?: number;
}) {
  const [aberto, setAberto] = useState<number>(abertoInicial);
  const baseId = useId();

  return (
    <div className="divide-y divide-[#e9dde3] overflow-hidden rounded-card bg-white shadow-soft">
      {items.map((item, i) => {
        const open = aberto === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i} data-open={open}>
            <h3 className="font-sans">
              <button
                id={btnId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setAberto(open ? -1 : i)}
                className="flex w-full items-start gap-3 px-5 py-4 text-left text-[16px] font-semibold leading-snug text-ameixa md:px-6 md:py-5 md:text-[17px]"
              >
                {item.prefixo}
                <span className="flex-1">{item.titulo}</span>
                <ChevronDown
                  className="acc-chevron mt-0.5 h-5 w-5 shrink-0 text-vinho"
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="acc-panel"
              data-open={open}
            >
              <div>
                <div className="px-5 pb-5 text-[16px] leading-relaxed text-cinza md:px-6">
                  {item.conteudo}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
