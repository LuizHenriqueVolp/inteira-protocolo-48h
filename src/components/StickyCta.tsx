import { useEffect, useState } from 'react';
import { CONFIG } from '@/data/config';
import { formatBRL, formatBRLCurto } from '@/lib/format';
import { CheckoutButton } from './Buttons';

/**
 * Barra fixa no rodapé, só no mobile (<768px).
 * Aparece depois que o hero sai da tela e some enquanto a #oferta está visível.
 */
export function StickyCta() {
  const [heroVisivel, setHeroVisivel] = useState(true);
  const [ofertaVisivel, setOfertaVisivel] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('topo');
    const oferta = document.getElementById('oferta');
    if (!hero || !oferta || !('IntersectionObserver' in window)) return;
    const obsHero = new IntersectionObserver(([e]) => setHeroVisivel(e.isIntersecting));
    const obsOferta = new IntersectionObserver(([e]) => setOfertaVisivel(e.isIntersecting));
    obsHero.observe(hero);
    obsOferta.observe(oferta);
    return () => {
      obsHero.disconnect();
      obsOferta.disconnect();
    };
  }, []);

  const visivel = !heroVisivel && !ofertaVisivel;

  return (
    <div
      className="sticky-bar fixed inset-x-0 bottom-0 z-40 border-t border-ameixa/10 bg-white/85 backdrop-blur-[8px] md:hidden"
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        boxShadow: '0 -8px 24px -12px rgba(42,27,51,.35)',
      }}
      data-visible={visivel}
      aria-hidden={!visivel}
    >
      <div className="flex items-center gap-3 px-4 py-2.5">
        <div className="shrink-0 leading-tight">
          <s className="block text-[13px] text-cinza">{formatBRLCurto(CONFIG.PRECO_DE)}</s>
          <span className="block font-serif text-[22px] font-bold text-vinho">{formatBRL(CONFIG.PRECO)}</span>
        </div>
        <div className="flex-1 [&_.btn-cta]:min-h-[48px] [&_.btn-cta]:text-[15px]">
          <CheckoutButton id="sticky">Quero agora</CheckoutButton>
        </div>
      </div>
    </div>
  );
}
