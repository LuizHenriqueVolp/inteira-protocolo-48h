import { CONFIG } from '@/data/config';
import { getTrackingParams } from './checkout';

type FbqParams = Record<string, string | number>;
type Fbq = (
  cmd: 'track' | 'trackCustom',
  evento: string,
  params?: FbqParams,
  opts?: { eventID: string },
) => void;

declare global {
  interface Window {
    fbq?: Fbq;
  }
}

export type EventoProprio = 'page_view' | 'view_content' | 'cta_click' | 'scroll_50' | 'scroll_90';

const ENDPOINT = (import.meta.env.VITE_EVENTS_ENDPOINT as string | undefined)?.trim();
const CONTENT_NAME = 'Inteira - Protocolo 48h';

function uuid(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
  } catch {
    /* contexto inseguro (http) */
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 12)}`;
}

function device(): 'mobile' | 'desktop' {
  return window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop';
}

/** Chamada segura ao Pixel da Meta: nunca quebra se o fbq não existir (bloqueador, rede lenta). */
function fbqSafe(evento: string, params: FbqParams, eventID?: string) {
  try {
    if (typeof window.fbq !== 'function') return;
    if (eventID) window.fbq('track', evento, params, { eventID });
    else window.fbq('track', evento, params);
  } catch {
    /* ignora */
  }
}

/** Envia o evento para o endpoint próprio (Neon), somente se VITE_EVENTS_ENDPOINT existir. */
export function sendEvent(event: EventoProprio, ctaId?: string) {
  if (!ENDPOINT) return;
  try {
    const p = getTrackingParams();
    const payload = {
      event,
      cta_id: ctaId ?? null,
      utm_source: p.utm_source ?? null,
      utm_campaign: p.utm_campaign ?? null,
      utm_medium: p.utm_medium ?? null,
      utm_content: p.utm_content ?? null,
      utm_term: p.utm_term ?? null,
      src: p.src ?? null,
      fbclid: p.fbclid ?? null,
      path: window.location.pathname,
      device: device(),
      ts: new Date().toISOString(),
    };
    const body = new Blob([JSON.stringify(payload)], { type: 'text/plain;charset=UTF-8' });
    if (typeof navigator.sendBeacon === 'function' && navigator.sendBeacon(ENDPOINT, body)) return;
    fetch(ENDPOINT, { method: 'POST', body, keepalive: true, mode: 'no-cors' }).catch(() => {});
  } catch {
    /* ignora */
  }
}

let viewContentEnviado = false;

/** ViewContent: uma única vez por carregamento (50% de rolagem OU #oferta visível). */
export function trackViewContent() {
  if (viewContentEnviado) return;
  viewContentEnviado = true;
  fbqSafe('ViewContent', {
    content_name: CONTENT_NAME,
    content_category: 'ebook',
    value: CONFIG.PRECO,
    currency: 'BRL',
  });
  sendEvent('view_content');
}

/** InitiateCheckout: em todo clique que leva ao checkout, com eventID único para deduplicação. */
export function trackInitiateCheckout(ctaId: string) {
  fbqSafe(
    'InitiateCheckout',
    { value: CONFIG.PRECO, currency: 'BRL', content_name: CONTENT_NAME },
    uuid(),
  );
  sendEvent('cta_click', ctaId);
}

/*
 * IMPORTANTE: o evento Purchase NÃO é disparado nesta página.
 * A compra é registrada pela Cakto (pixel configurado no produto) e pela UTMify (servidor).
 */
