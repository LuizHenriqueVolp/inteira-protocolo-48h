import type { ReactNode } from 'react';
import { Brain, Check, Clock, Lock, ShieldAlert, ShieldCheck, X } from 'lucide-react';
import { AnchorButton } from './Buttons';
import { Counter } from './Counter';
import { Accordion } from './Accordion';
import { Reveal, Stagger, StaggerItem } from './motion';

/* ---------------- 4.2 Espelho da dor ---------------- */
const DORES = [
  <>Você relê as mesmas mensagens dezenas de vezes, procurando um detalhe novo que só aumenta a dor.</>,
  <>São 3 da manhã e o filme não para de passar na sua cabeça.</>,
  <>
    Você se pega perguntando <strong>“onde foi que eu errei?”</strong> várias vezes por dia.
  </>,
  <>
    Você se olha no espelho e se compara com <em>ela</em>.
  </>,
  <>Uma parte de você quer expor tudo nas redes. A outra quer fingir que nada aconteceu.</>,
  <>
    Você tem medo de perder a casa, a estabilidade e, principalmente, de como isso vai afetar seus
    filhos.
  </>,
  <>
    Ele diz que “foi só uma vez”, que “não significou nada”, e você já não sabe em que acreditar.
  </>,
];

export function Dor() {
  return (
    <section aria-labelledby="dor-titulo" className="section bg-nevoa">
      <div className="container-text">
        <Reveal>
          <h2 id="dor-titulo" className="h2">
            Se você chegou até aqui, talvez esteja vivendo isso agora:
          </h2>
        </Reveal>
        <Stagger as="ul" className="mt-8 space-y-3">
          {DORES.map((texto, i) => (
            <StaggerItem
              as="li"
              key={i}
              className="flex gap-3 rounded-2xl bg-white/80 px-4 py-3.5 shadow-soft"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vinho/10">
                <X className="h-4 w-4 text-vinho" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-[16px] leading-snug md:text-[17px]">{texto}</span>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <blockquote className="mt-10 border-l-4 border-champagne pl-5 font-serif text-[22px] italic leading-snug text-ameixa">
            Nada disso significa que você está louca ou fraca. Significa que você acabou de passar
            por um choque, e choque se trata com um protocolo, não com força de vontade.
          </blockquote>
          <div className="mt-8 text-center">
            <AnchorButton variant="outline" id="dor">
              Quero o protocolo
            </AnchorButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4.3 Bloco escuro: culpa ---------------- */
export function Culpa() {
  return (
    <section aria-labelledby="culpa-titulo" className="section bg-ameixa text-areia">
      <div className="container-text">
        <Reveal>
          <h2 id="culpa-titulo" className="h2 text-areia">
            Por que você sente que a culpa é sua (e por que isso é mentira)
          </h2>
          <p className="mt-6 text-areia/85">
            Quando a traição vem à tona, o cérebro entra em modo de sobrevivência e procura qualquer
            explicação que devolva a sensação de controle. “Se a culpa foi minha, eu posso
            consertar.” É por isso que tantas mulheres traídas se culpam: não porque erraram, mas
            porque a culpa parece mais suportável do que a impotência.
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 rounded-card border border-champagne/40 bg-white/[0.06] p-6 md:p-8">
            <Counter
              to={45.2}
              decimals={1}
              suffix="%"
              className="block font-serif text-[56px] font-bold leading-none text-champagne md:text-[72px]"
            />
            <p className="mt-3 text-areia/90">
              das pessoas que passaram por uma traição apresentaram sintomas compatíveis com estresse
              pós-traumático, em um estudo publicado em 2019 na revista científica{' '}
              <em>Stress and Health</em>.
            </p>
            <p className="mt-4 text-[12px] text-areia/60">
              Roos, L. G. et al. (2019). Stress and Health, 35(4).
            </p>
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-10 font-serif text-[21px] font-semibold leading-snug text-areia md:text-[24px]">
            O que você está sentindo tem nome, tem explicação e tem saída. O Inteira mostra o
            caminho, hora por hora.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4.4 O que é o Inteira ---------------- */
const PILARES = [
  {
    Icon: Clock,
    titulo: 'Primeiras 48h',
    texto: 'O que fazer hora a hora, do momento da descoberta até a primeira noite de sono.',
  },
  {
    Icon: ShieldAlert,
    titulo: 'Os 7 erros fatais',
    texto: 'As atitudes que parecem certas no calor da hora e custam caro depois.',
  },
  {
    Icon: Brain,
    titulo: 'Fim do looping mental',
    texto: 'Técnicas com base científica para a cabeça parar de rodar o mesmo filme.',
  },
  {
    Icon: ShieldCheck,
    titulo: 'Proteção',
    texto: 'O que fazer para proteger filhos, dinheiro e direitos antes de qualquer decisão.',
  },
];

export function OQueE() {
  return (
    <section aria-labelledby="oque-titulo" className="section bg-areia">
      <div className="container-page">
        <Reveal className="mx-auto max-w-text">
          <h2 id="oque-titulo" className="h2">
            Conheça o Inteira: o protocolo para quem precisa saber o que fazer HOJE
          </h2>
          <p className="mt-5 text-cinza">
            Não é um livro de autoajuda para ler “quando estiver melhor”. É um guia direto, feito
            para ser lido no celular em menos de uma hora, mesmo com a cabeça a mil. Cada capítulo
            responde a uma pergunta urgente.
          </p>
        </Reveal>
        <Stagger className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {PILARES.map(({ Icon, titulo, texto }) => (
            <StaggerItem key={titulo} className="card p-4 md:p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-champagne/15">
                <Icon className="h-5 w-5 text-champagne" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-[17px] font-bold leading-tight md:text-[19px]">{titulo}</h3>
              <p className="mt-2 text-[14px] leading-snug text-cinza md:text-[15px]">{texto}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- 4.5 Conteúdo ---------------- */
const CAPITULOS: [string, ReactNode][] = [
  [
    'O que está acontecendo com você',
    'Por que seu corpo reage à traição como a um trauma, e por que isso não é exagero.',
  ],
  [
    'Os 7 erros que você nunca deve cometer nas primeiras 48h',
    'Do print nas redes à conversa às 2 da manhã.',
  ],
  [
    'O protocolo hora a hora',
    'Hora 0, Hora 2, Hora 12, Hora 24, Hora 48: o que fazer em cada uma.',
  ],
  [
    'Por que você se sente culpada',
    'A frase que quase todo homem diz depois de ser descoberto, e por que ela faz você duvidar de si mesma.',
  ],
  ['Desligando o looping mental', '4 técnicas práticas para usar de madrugada.'],
  [
    'Sua autoestima depois da traição',
    <>
      Como parar de se comparar com <em>ela</em>.
    </>,
  ],
  [
    'Medo de perder tudo',
    'Filhos, casa e dinheiro: o que você precisa saber antes de qualquer decisão.',
  ],
  ['Ficar ou sair? Você não precisa decidir agora', 'A regra das 3 não-decisões.'],
  ['Seus próximos 7 dias', 'Um plano simples para depois das 48 horas.'],
  ['Quando e onde buscar ajuda', 'Inclusive opções gratuitas.'],
];

export function Conteudo() {
  return (
    <section aria-labelledby="conteudo-titulo" className="section bg-nevoa">
      <div className="container-text">
        <Reveal>
          <h2 id="conteudo-titulo" className="h2">
            O que você vai encontrar dentro do Inteira
          </h2>
        </Reveal>
        <Reveal className="mt-8">
          <Accordion
            abertoInicial={0}
            items={CAPITULOS.map(([titulo, conteudo], i) => ({
              prefixo: (
                <span className="mt-px flex h-6 min-w-6 shrink-0 items-center justify-center rounded-full bg-champagne/20 px-1.5 text-[12px] font-bold text-ameixa">
                  {i + 1}
                </span>
              ),
              titulo,
              conteudo,
            }))}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4.7 Os 7 erros (teaser) ---------------- */
const ERROS_ABERTOS = [
  {
    titulo: 'Expor nas redes sociais no calor da hora',
    texto: 'Pode virar processo contra você e dar munição a ele.',
  },
  {
    titulo: 'Confrontar de madrugada, sem plano',
    texto: 'Você termina se explicando, e ele termina como vítima.',
  },
  {
    titulo: 'Mexer no celular dele escondido',
    texto:
      'Invadir um dispositivo sem autorização é crime (Lei 12.737/2012) e pode anular uma prova importante.',
  },
];

export function Erros() {
  return (
    <section aria-labelledby="erros-titulo" className="section bg-nevoa">
      <div className="container-text">
        <Reveal>
          <h2 id="erros-titulo" className="h2">
            7 erros que destroem mulheres nas primeiras 48 horas
          </h2>
        </Reveal>
        <Stagger as="ol" className="mt-8 space-y-3">
          {ERROS_ABERTOS.map((erro, i) => (
            <StaggerItem as="li" key={erro.titulo} className="card flex gap-4 p-5">
              <span className="font-serif text-[30px] font-bold leading-none text-vinho">
                {i + 1}
              </span>
              <div>
                <h3 className="font-sans text-[17px] font-bold leading-snug">{erro.titulo}</h3>
                <p className="mt-1 text-[15px] leading-snug text-cinza">{erro.texto}</p>
              </div>
            </StaggerItem>
          ))}
          {[4, 5, 6, 7].map((n) => (
            <StaggerItem as="li" key={n} className="card relative flex gap-4 overflow-hidden p-5">
              <span className="font-serif text-[30px] font-bold leading-none text-vinho/40">
                {n}
              </span>
              <div className="blurred flex-1" aria-hidden="true">
                <p className="text-[17px] font-bold leading-snug">Conteúdo exclusivo do protocolo</p>
                <p className="mt-1 text-[15px] leading-snug text-cinza">
                  Este erro é explicado em detalhes, com o que fazer no lugar, dentro do guia.
                </p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-white/40">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ameixa">
                  <Lock className="h-4 w-4 text-champagne" aria-hidden="true" />
                </span>
                <span className="text-[13px] font-semibold text-ameixa">
                  Desbloqueie no Protocolo Inteira
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 text-center">
          <AnchorButton id="erros">Quero ver os 7 erros</AnchorButton>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4.9 Para quem é ---------------- */
const SIM = [
  'acabou de descobrir uma traição',
  'desconfia fortemente e não sabe o que fazer',
  'descobriu há semanas e ainda não consegue pensar em outra coisa',
  'tem filhos e medo de errar com eles',
  'quer decidir com a cabeça fria, seja para ficar ou para sair.',
];
const NAO = [
  'está procurando uma fórmula para “reconquistar” ou “segurar” o marido',
  'quer um passo a passo para se vingar',
  'espera que um material substitua uma terapia.',
];

export function ParaQuem() {
  return (
    <section aria-labelledby="praquem-titulo" className="section bg-nevoa">
      <div className="container-page">
        <h2 id="praquem-titulo" className="sr-only">
          Para quem é e para quem não é
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal className="card h-full border-t-4 border-[#3f8a5f] p-6 md:p-8">
            <h3 className="flex items-center gap-2 text-[22px] font-bold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3f8a5f]">
                <Check className="h-4 w-4 text-white" strokeWidth={3} aria-hidden="true" />
              </span>
              É para você se:
            </h3>
            <ul className="mt-5 space-y-3">
              {SIM.map((t) => (
                <li key={t} className="flex gap-3 text-[16px] leading-snug">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#3f8a5f]" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="card h-full border-t-4 border-vinho p-6 md:p-8" delay={0.08}>
            <h3 className="flex items-center gap-2 text-[22px] font-bold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-vinho">
                <X className="h-4 w-4 text-white" strokeWidth={3} aria-hidden="true" />
              </span>
              Não é para você se:
            </h3>
            <ul className="mt-5 space-y-3">
              {NAO.map((t) => (
                <li key={t} className="flex gap-3 text-[16px] leading-snug">
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-vinho" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

