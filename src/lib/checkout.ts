import { CONFIG } from '@/data/config';

const STORAGE_KEY = 'inteira_params';
const CHAVES_FIXAS = ['src', 'sck', 'fbclid', 'xcod'];

function deveRepassar(chave: string): boolean {
  return chave.startsWith('utm_') || CHAVES_FIXAS.includes(chave);
}

/**
 * Lê os parâmetros de rastreamento da URL atual e mescla com os salvos na primeira visita
 * (sessionStorage), para não se perderem quando a pessoa navega por âncoras.
 */
export function getTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  let salvos: Record<string, string> = {};
  try {
    salvos = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    salvos = {};
  }
  const atuais: Record<string, string> = {};
  new URLSearchParams(window.location.search).forEach((valor, chave) => {
    if (deveRepassar(chave) && valor) atuais[chave] = valor;
  });
  const params = { ...salvos, ...atuais };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    /* modo privado sem storage: segue só com a URL */
  }
  return params;
}

export function checkoutConfigurado(): boolean {
  return /^https?:\/\//i.test(CONFIG.CHECKOUT_URL);
}

/**
 * Monta o link do checkout da Cakto com todas as UTMs, src, sck, fbclid e xcod.
 * Enquanto o CHECKOUT_URL não for preenchido, devolve "#oferta" (e avisa no console em dev).
 */
export function buildCheckoutUrl(): string {
  if (!checkoutConfigurado()) {
    if (import.meta.env.DEV) console.warn('[checkout] Preencha CHECKOUT_URL em src/data/config.ts');
    return '#oferta';
  }
  const url = new URL(CONFIG.CHECKOUT_URL);
  Object.entries(getTrackingParams()).forEach(([chave, valor]) => {
    if (!url.searchParams.has(chave)) url.searchParams.set(chave, valor);
  });
  return url.toString();
}
