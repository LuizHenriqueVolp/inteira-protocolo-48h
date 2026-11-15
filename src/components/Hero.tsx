import { Flame, Gift, Heart, Lock, ShieldCheck, Smartphone } from 'lucide-react';
import { BONUS, CONFIG, GARANTIA_DIAS } from '@/data/config';
import { formatBRL } from '@/lib/format';
import { AnchorButton } from './Buttons';
import { Img } from './Img';

export function TopBar() {
  return (
    <div className="bg-ameixa text-areia">
      <p className="container-page flex items-center justify-center gap-1.5 py-2 text-center text-[13px] font-medium tracking-wide">
        <Lock className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
        Compra discreta · Preço de lançamento
      </p>
    </div>
  );
}

export function TrustRow({ className = '' }: { className?: string }) {
  const itens = [
    { Icon: ShieldCheck, texto: `Garantia de ${GARANTIA_DIAS} dias` },
    { Icon: Gift, texto: `+${BONUS.length} bônus grátis` },
    { Icon: Smartphone, texto: 'Acesso imediato no WhatsApp' },
  ];
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] font-medium text-cinza md:justify-start ${className}`}
    >
      {itens.map(({ Icon, texto }) => (
        <li key={texto} className="flex items-center gap-1.5">
          <Icon className="h-[18px] w-[18px] text-vinho" aria-hidden="true" />
          <span>{texto}</span>
        </li>
      ))}
    </ul>
  );
}

function PriceCard() {
  return (
    <div className="card px-5 py-5 text-center md:px-7 md:text-left">
      <p className="text-[16px] text-cinza">
        De <s className="decoration-cinza/70">{formatBRL(CONFIG.PRECO_DE)}</s>
      </p>
      <p className="mt-1 flex items-center justify-center gap-2 md:justify-start">
        <Flame className="h-7 w-7 text-rose" aria-hidden="true" />
        <span className="font-sans text-[36px] font-bold leading-none tracking-tight text-vinho md:text-[44px]">
          {formatBRL(CONFIG.PRECO)}
        </span>
        <span className="rounded-full bg-rose px-2.5 py-1 text-[12px] font-bold uppercase tracking-[0.04em] text-white">
          Lançamento
        </span>
      </p>
      <p className="mt-2 text-[13px] font-medium text-cinza">À vista no Pix ou cartão</p>
    </div>
  );
}

const MOCKUP = {
  src: '/assets/mockup-hero.webp',
  alt: 'eBook e celular com o Protocolo Inteira',
  width: 1200,
  height: 1200,
};

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="bg-gradient-to-b from-nevoa to-areia pb-12 pt-5 md:bg-none md:pb-20 md:pt-14">
      <div className="container-page grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
        <div className="text-center md:text-left">
          <p className="pulse-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase leading-snug tracking-[0.04em] text-white shadow-soft md:text-[13px]" style={{ background: 'var(--grad-cta)' }}>
            <Heart className="h-4 w-4 shrink-0" aria-hidden="true" />
            Para mulheres que acabaram de descobrir (ou desconfiam de) uma traição
          </p>

          {/* Mobile: mockup grande e centralizado, flutuando */}
          <div className="animate-float mx-auto mt-6 w-[78%] max-w-[320px] md:hidden">
            <Img {...MOCKUP} priority className="h-auto w-full drop-shadow-2xl" />
          </div>

          <h1
            id="hero-titulo"
            className="mt-6 text-[30px] font-bold leading-[1.15] text-ameixa md:mt-5 md:text-[50px] md:leading-[1.1]"
          >
            As primeiras 48 horas decidem se você sai <em className="text-vinho">mais forte</em>… ou
            destruída.
          </h1>
          <p className="mt-3 font-serif text-[19px] leading-snug text-cinza md:mt-4 md:text-[22px]">
            O que fazer (e o que nunca fazer) depois da descoberta.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-ameixa/80 md:mt-5 md:text-[18px]">
            O protocolo Inteira: o passo a passo do que fazer — e do que nunca fazer — para proteger
            sua cabeça, seus filhos, seu dinheiro e sua dignidade enquanto o chão ainda está
            tremendo.
          </p>

          <div className="mx-auto mt-6 max-w-[420px] md:mx-0 md:mt-8 md:max-w-[380px]">
            <PriceCard />
          </div>

          <div className="mt-5 md:mt-6">
            <AnchorButton id="hero">Quero sair disso inteira</AnchorButton>
          </div>
          <TrustRow className="mt-4 md:max-w-[520px]" />
        </div>

        <div className="hidden animate-float md:block">
          <Img {...MOCKUP} priority className="h-auto w-full drop-shadow-2xl" />
        </div>
      </div>
    </section>
  );
}
