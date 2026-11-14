import { Check, CreditCard, Lock, QrCode, ShieldCheck, Smartphone } from 'lucide-react';
import { BONUS, CONFIG, GARANTIA_DIAS, VALOR_TOTAL } from '@/data/config';
import { formatBRL } from '@/lib/format';
import { CheckoutButton } from './Buttons';
import { Counter } from './Counter';
import { Img } from './Img';
import { Reveal } from './motion';

/* ---------------- 4.12 Oferta ---------------- */
export function Oferta() {
  const itens = [
    { nome: 'Protocolo Inteira — Guia completo das 48h', valor: CONFIG.PRECO_DE },
    ...BONUS.map((b, i) => ({ nome: `Bônus ${i + 1}: ${b.nomeCurto}`, valor: b.valor })),
  ];

  return (
    <section id="oferta" aria-labelledby="oferta-titulo" className="section bg-ameixa">
      <div className="container-page">
        <Reveal className="relative mx-auto max-w-[560px]">
          <div className="relative rounded-[22px] border-2 border-champagne bg-areia px-5 pb-8 pt-10 shadow-card md:px-10">
            <span className="badge absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-1.5 text-[12px]">
              Oferta de lançamento
            </span>
            <h2 id="oferta-titulo" className="sr-only">
              Oferta: {CONFIG.PRODUTO}
            </h2>
            <Img
              src="/assets/mockup-combo.webp"
              alt="Protocolo Inteira e os 3 bônus"
              width={1200}
              height={900}
              className="mx-auto h-auto w-full max-w-[440px]"
            />

            <ul className="mt-6 space-y-3">
              {itens.map((item) => (
                <li key={item.nome} className="flex items-start gap-3 text-[15px] leading-snug">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-champagne" strokeWidth={3} aria-hidden="true" />
                  <span className="flex-1">{item.nome}</span>
                  <span className="whitespace-nowrap font-semibold text-cinza">{formatBRL(item.valor)}</span>
                </li>
              ))}
              <li className="flex items-center justify-between border-t border-ameixa/10 pt-3 text-[16px] font-bold">
                <span>Total:</span>
                <s className="text-cinza">{formatBRL(VALOR_TOTAL)}</s>
              </li>
            </ul>

            <div className="mt-8 text-center">
              <p className="text-[16px] text-cinza">Hoje, tudo isso por apenas</p>
              <Counter
                to={CONFIG.PRECO}
                decimals={2}
                prefix="R$ "
                className="mt-1 block font-serif text-[60px] font-bold leading-none text-vinho md:text-[72px]"
              />
              <p className="mt-2 text-[15px] font-medium text-cinza">à vista no Pix ou no cartão</p>
              <p className="mx-auto mt-5 max-w-[440px] text-[15px] leading-relaxed text-ameixa/85">
                Menos do que uma consulta, menos do que uma noite de pizza. E pode ser a diferença
                entre as decisões que você vai tomar nos próximos dias.
              </p>
              <div className="mt-6">
                <CheckoutButton id="oferta">Quero meu protocolo agora</CheckoutButton>
              </div>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-medium text-cinza">
                <li className="flex items-center gap-1.5">
                  <QrCode className="h-4 w-4 text-vinho" aria-hidden="true" /> Pix
                </li>
                <li className="flex items-center gap-1.5">
                  <CreditCard className="h-4 w-4 text-vinho" aria-hidden="true" /> Cartão de crédito
                </li>
                <li className="flex items-center gap-1.5">
                  <Lock className="h-4 w-4 text-vinho" aria-hidden="true" /> Pagamento 100% seguro
                </li>
                <li className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-vinho" aria-hidden="true" /> {GARANTIA_DIAS} dias de
                  garantia
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4.13 Como você recebe ---------------- */
const PASSOS = [
  <>
    <strong>Finalize a compra</strong> no Pix ou no cartão, em ambiente seguro.
  </>,
  <>
    <strong>Receba no seu WhatsApp</strong> a mensagem com o acesso ao Protocolo e aos{' '}
    {BONUS.length} bônus, logo após a confirmação do pagamento.
  </>,
  <>
    <strong>Leia no celular</strong>, no seu tempo, quantas vezes precisar. O acesso é seu.
  </>,
];

export function ComoRecebe() {
  return (
    <section aria-labelledby="recebe-titulo" className="section bg-areia">
      <div className="container-text">
        <Reveal>
          <h2 id="recebe-titulo" className="h2 text-center">
            Como você recebe (em menos de 2 minutos)
          </h2>
        </Reveal>
        <Reveal>
          <ol className="relative mt-10 space-y-8">
            <span
              className="absolute bottom-6 left-[21px] top-6 w-0.5 bg-champagne/40"
              aria-hidden="true"
            />
            {PASSOS.map((passo, i) => (
              <li key={i} className="relative flex items-start gap-4">
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne font-serif text-[20px] font-bold text-ameixa ring-4 ring-areia">
                  {i + 1}
                </span>
                <p className="pt-2 leading-snug">{passo}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 flex items-start justify-center gap-2 text-center text-[14px] text-cinza">
            <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-vinho" aria-hidden="true" />
            Use o mesmo número de WhatsApp no checkout para receber o acesso na hora.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
