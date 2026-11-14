/**
 * CONFIGURAÇÃO CENTRAL DA PÁGINA
 * Todos os preços, links e valores exibidos na página vêm daqui.
 * Troque os itens marcados com [PREENCHER] antes de publicar.
 */
export const CONFIG = {
  PRODUTO: 'Inteira — Protocolo 48h',
  PRECO: 27.90,
  PRECO_DE: 97.00,
  CHECKOUT_URL: 'https://pay.cakto.com.br/uma73ob_1324290',      // ex.: https://pay.cakto.com.br/xxxx
  WHATSAPP_SUPORTE: '[PREENCHER_55DDDNUMERO]', // só números, com 55 + DDD (vira link wa.me)
  EMAIL_SUPORTE: '[PREENCHER_EMAIL]',
  META_PIXEL_ID: '1191826046838369',
};

/** Selo de revisão técnica (seção "Sobre a autora"). Só aparece com ativo: true. */
export const REVISAO = { ativo: false, nome: '', crp: '' };

/**
 * Bônus: nomes e valores usados na seção de bônus, na oferta, no hero e no FAQ.
 * Mude aqui e a página inteira acompanha.
 */
export const BONUS = [
  {
    nomeCurto: 'Diário de Bolso',
    titulo: 'Diário de Bolso: 30 perguntas para quando a mente não desliga',
    descricao:
      'Um diário guiado para as noites mais difíceis. Escreva por 10 minutos e veja a cabeça desacelerar.',
    valor: 27.0,
    capa: '/assets/bonus-1.webp',
  },
  {
    nomeCurto: 'SOS Ansiedade',
    titulo: 'SOS Ansiedade: 6 técnicas de 5 minutos',
    descricao:
      'Para quando o coração dispara, o ar falta ou você está prestes a mandar aquela mensagem.',
    valor: 27.0,
    capa: '/assets/bonus-2.webp',
  },
  {
    nomeCurto: 'Como falar com seus filhos',
    titulo: 'Como falar com seus filhos (sem expor o pai e sem mentir)',
    descricao: 'O que dizer, e o que nunca dizer, em cada faixa de idade.',
    valor: 37.0,
    capa: '/assets/bonus-3.webp',
  },
] as const;

/** Valor total "de" (produto + bônus). Calculado, nunca escrito à mão. */
export const VALOR_TOTAL = CONFIG.PRECO_DE + BONUS.reduce((soma, b) => soma + b.valor, 0);

export const GARANTIA_DIAS = 7;

/** Link do WhatsApp de suporte (vazio enquanto não for preenchido). */
export const WHATSAPP_LINK = /^\d{10,15}$/.test(CONFIG.WHATSAPP_SUPORTE)
  ? `https://wa.me/${CONFIG.WHATSAPP_SUPORTE}`
  : '';
