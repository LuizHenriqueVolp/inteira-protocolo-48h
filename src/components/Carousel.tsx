import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Img } from './Img';
import { Reveal } from './motion';

const PAGINAS = [1, 2, 3, 4, 5, 6].map((n) => `/assets/pagina-0${n}.webp`);

export function VejaPorDentro() {
  const trackRef = useRef<HTMLDivElement>(null);
  const inView = useInView(trackRef, { once: true, amount: 0.4 });
  const [ativo, setAtivo] = useState(0);

  // Bolinha ativa = card mais próximo do centro.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
        const fim = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
        if (fim) {
          setAtivo(el.children.length - 1);
          return;
        }
        let melhor = 0;
        let menor = Infinity;
        Array.from(el.children).forEach((c, i) => {
          const card = c as HTMLElement;
          const d = Math.abs(card.offsetLeft - pad - el.scrollLeft);
          if (d < menor) {
            menor = d;
            melhor = i;
          }
        });
        setAtivo(melhor);
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  function irPara(i: number) {
    const el = trackRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    el.scrollTo({ left: card.offsetLeft - pad, behavior: 'smooth' });
  }

  return (
    <section aria-labelledby="dentro-titulo" className="section overflow-hidden bg-areia">
      <div className="container-page">
        <Reveal className="mx-auto max-w-text text-center">
          <h2 id="dentro-titulo" className="h2">
            Veja por dentro
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 max-w-page">
        <div
          ref={trackRef}
          className={`carousel flex gap-4 overflow-x-auto px-5 pb-4 pt-2 md:gap-6 md:px-8 ${
            inView ? 'swipe-hint' : ''
          }`}
          aria-label="Páginas internas do Protocolo Inteira"
          tabIndex={0}
        >
          {PAGINAS.map((src, i) => (
            <div key={src} className="w-[80%] shrink-0 sm:w-[46%] md:w-[30%]">
              {/* As imagens já vêm com a moldura de celular */}
              <div className="overflow-hidden rounded-card bg-[#f3eeec] shadow-soft">
                <Img
                  src={src}
                  alt={`Página ${i + 1} do Protocolo Inteira no celular`}
                  width={720}
                  height={1280}
                  className="block h-auto w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page">
        <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Escolher página">
          {PAGINAS.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={ativo === i}
              aria-label={`Ver página ${i + 1}`}
              onClick={() => irPara(i)}
              className="flex h-6 w-6 items-center justify-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  ativo === i ? 'w-5 bg-vinho' : 'w-2 bg-vinho/25'
                }`}
              />
            </button>
          ))}
        </div>
        <p className="mt-2 text-center text-[13px] font-medium text-cinza md:hidden">
          arraste para o lado <span className="hint-arrow inline-block" aria-hidden="true">→</span>
        </p>
        <p className="mx-auto mt-4 max-w-text text-center text-[15px] text-cinza">
          Feito para ler no celular: letra grande, capítulos curtos e checklists prontos.
        </p>
      </div>
    </section>
  );
}
