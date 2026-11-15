import { Gift, Lock, ShieldCheck, Smartphone } from 'lucide-react';
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
    { Icon: Smartphone, texto: 'Acesso imediato no WhatsApp' },
    { Icon: Gift, texto: `+${BONUS.length} bônus` },
  ];
  return (
    <ul
      className={`grid grid-cols-3 gap-2 text-center text-[13px] font-medium leading-tight text-cinza ${className}`}
    >
      {itens.map(({ Icon, texto }) => (
        <li key={texto} className="flex flex-col items-center gap-1">
          <Icon className="h-[18px] w-[18px] text-vinho" aria-hidden="true" />
          <span>{texto}</span>
        </li>
      ))}
    </ul>
  );
}

function PriceCard() {
  return (
    <div className="card flex flex-col justify-center px-4 py-3 md:px-6 md:py-5">
      <p className="text-[14px] text-cinza">
        de <s className="decoration-vinho/70">{formatBRL(CONFIG.PRECO_DE)}</s>
      </p>
      <p className="text-[14px] text-cinza">por apenas</p>
      <p className="font-serif text-[38px] font-bold leading-none text-vinho md:text-[52px]">
        {formatBRL(CONFIG.PRECO)}
      </p>
      <p className="mt-2">
        <span className="inline-block rounded-md bg-nevoa px-2 py-1 text-[10.5px] font-bold uppercase tracking-[0.06em] text-ameixa md:text-[12px]">
          À vista no Pix ou cartão
        </span>
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="bg-areia pb-12 pt-5 md:pb-20 md:pt-14">
      <div className="container-page grid items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
        <div>
          <p className="inline-block rounded-full border border-champagne/60 bg-white px-3 py-1.5 text-[11px] font-bold uppercase leading-snug tracking-[0.06em] text-vinho md:text-[12px]">
            Para mulheres que acabaram de descobrir (ou desconfiam de) uma traição
          </p>
          <h1
            id="hero-titulo"
            className="mt-3 text-[29px] font-bold leading-[1.15] text-ameixa md:mt-5 md:text-[50px] md:leading-[1.1]"
          >
            As primeiras 48 horas decidem se você sai <em className="text-vinho">mais forte</em>… ou
            destruída.
          </h1>
          <p className="mt-2 font-serif text-[19px] leading-snug text-cinza md:mt-4 md:text-[22px]">
            O que fazer (e o que nunca fazer) depois da descoberta.
          </p>
          <p className="mt-3 text-[15px] leading-normal text-ameixa/85 md:mt-5 md:text-[18px] md:leading-relaxed">
            O protocolo Inteira: o passo a passo do que fazer — e do que nunca fazer — para proteger
            sua cabeça, seus filhos, seu dinheiro e sua dignidade enquanto o chão ainda está
            tremendo.
          </p>

          {/* Mobile: mockup + preço lado a lado para o CTA aparecer sem rolar */}
          <div className="mt-4 grid grid-cols-[42%_1fr] items-center gap-3 md:hidden">
            <div className="animate-float">
            <Img
              src="/assets/mockup-hero.webp"
              alt="eBook e celular com o Protocolo Inteira"
              width={1200}
              height={1200}
              priority
              className="h-auto w-full"
            />
            </div>
            <PriceCard />
          </div>
          <div className="mt-8 hidden max-w-[360px] md:block">
            <PriceCard />
          </div>

          <div className="mt-4 md:mt-6">
            <AnchorButton id="hero">Quero sair disso inteira</AnchorButton>
          </div>
          <TrustRow className="mt-4 md:max-w-[460px]" />
        </div>

        <div className="hidden animate-float md:block">
          <Img
            src="/assets/mockup-hero.webp"
            alt="eBook e celular com o Protocolo Inteira"
            width={1200}
            height={1200}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
