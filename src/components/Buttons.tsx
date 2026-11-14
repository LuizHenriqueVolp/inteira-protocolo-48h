import type { MouseEvent, ReactNode } from 'react';
import { buildCheckoutUrl, checkoutConfigurado } from '@/lib/checkout';
import { trackInitiateCheckout } from '@/lib/track';

/**
 * Botão que leva ao checkout da Cakto.
 * - href montado por buildCheckoutUrl() (UTMs, src, sck, fbclid, xcod)
 * - dispara InitiateCheckout ANTES de navegar
 */
export function CheckoutButton({
  id,
  children,
  className = 'btn-cta',
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  const href = buildCheckoutUrl();

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    trackInitiateCheckout(id);
    if (!checkoutConfigurado()) return; // enquanto não houver link, só rola até a oferta
    // Abrir em nova aba (ctrl/cmd/clique do meio): deixa o navegador seguir normalmente.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    // Usa o href atual do elemento (a UTMify pode ter enriquecido o link) e recalcula como garantia.
    const destino = e.currentTarget.href || buildCheckoutUrl();
    // Pequena espera para o pixel sair antes da troca de página.
    window.setTimeout(() => {
      window.location.href = destino;
    }, 180);
  }

  return (
    <a href={href} id={`cta-${id}`} data-cta={id} className={className} onClick={onClick}>
      <span className="cta-label">{children}</span>
    </a>
  );
}

/** Botão que leva até a oferta (âncora #oferta). */
export function AnchorButton({
  children,
  variant = 'cta',
  id,
}: {
  children: ReactNode;
  variant?: 'cta' | 'outline';
  id?: string;
}) {
  return (
    <a
      href="#oferta"
      id={id ? `cta-${id}` : undefined}
      className={variant === 'cta' ? 'btn-cta' : 'btn-outline'}
    >
      <span className="cta-label">{children}</span>
    </a>
  );
}
