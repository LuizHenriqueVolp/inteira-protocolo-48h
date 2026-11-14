import { useEffect } from 'react';
import { Hero, TopBar } from '@/components/Hero';
import { Conteudo, Culpa, Dor, Erros, OQueE, ParaQuem } from '@/components/Sections';
import { VejaPorDentro } from '@/components/Carousel';
import { Bonus } from '@/components/Bonus';
import { Autora, Depoimentos } from '@/components/Autora';
import { ComoRecebe, Oferta } from '@/components/Oferta';
import { CtaFinal, Faq, Garantia, Rodape } from '@/components/Fechamento';
import { StickyCta } from '@/components/StickyCta';
import { sendEvent, trackViewContent } from '@/lib/track';
import { getTrackingParams } from '@/lib/checkout';

/** page_view, scroll_50/90 e ViewContent (50% de rolagem OU #oferta visível). */
function useRastreamento() {
  useEffect(() => {
    getTrackingParams(); // salva UTMs da primeira visita no sessionStorage
    sendEvent('page_view');

    let s50 = false;
    let s90 = false;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const pct = max > 0 ? window.scrollY / max : 0;
        if (!s50 && pct >= 0.5) {
          s50 = true;
          sendEvent('scroll_50');
          trackViewContent();
        }
        if (!s90 && pct >= 0.9) {
          s90 = true;
          sendEvent('scroll_90');
          window.removeEventListener('scroll', onScroll);
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let obs: IntersectionObserver | undefined;
    const oferta = document.getElementById('oferta');
    if (oferta && 'IntersectionObserver' in window) {
      obs = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            trackViewContent();
            obs?.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      obs.observe(oferta);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      obs?.disconnect();
    };
  }, []);
}

export default function Index() {
  useRastreamento();

  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Dor />
        <Culpa />
        <OQueE />
        <Conteudo />
        <VejaPorDentro />
        <Erros />
        <Bonus />
        <ParaQuem />
        <Autora />
        <Depoimentos />
        <Oferta />
        <ComoRecebe />
        <Garantia />
        <Faq />
        <CtaFinal />
      </main>
      <Rodape />
      <StickyCta />
    </>
  );
}
