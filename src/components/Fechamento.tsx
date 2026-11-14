import { ShieldCheck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BONUS, CONFIG, GARANTIA_DIAS, WHATSAPP_LINK } from '@/data/config';
import { Accordion } from './Accordion';
import { CheckoutButton } from './Buttons';
import { Reveal } from './motion';

/* ---------------- 4.14 Garantia ---------------- */
function SeloGarantia() {
  return (
    <svg viewBox="0 0 200 200" className="h-36 w-36 md:h-44 md:w-44" role="img" aria-label="Selo de garantia de 7 dias">
      <defs>
        <path id="selo-circulo" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="#C9A46A" />
      <circle cx="100" cy="100" r="86" fill="none" stroke="#2A1B33" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="100" cy="100" r="58" fill="#2A1B33" />
      <text fontFamily="Inter, sans-serif" fontSize="12.5" fontWeight="700" fill="#2A1B33">
        <textPath href="#selo-circulo" startOffset="0" textLength="446" lengthAdjust="spacing">
          GARANTIA INCONDICIONAL · {GARANTIA_DIAS} DIAS · COMPRA SEGURA ·
        </textPath>
      </text>
      <text x="100" y="104" textAnchor="middle" fontFamily="Lora, serif" fontSize="44" fontWeight="700" fill="#C9A46A">
        {GARANTIA_DIAS}
      </text>
      <text x="100" y="128" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700" letterSpacing="3" fill="#FBF7F4">
        DIAS
      </text>
    </svg>
  );
}

export function Garantia() {
  return (
    <section aria-labelledby="garantia-titulo" className="section bg-nevoa">
      <Reveal className="container-text flex flex-col items-center text-center">
        <SeloGarantia />
        <h2 id="garantia-titulo" className="h2 mt-6">
          Garantia incondicional de {GARANTIA_DIAS} dias
        </h2>
        <p className="mt-5 text-cinza">
          Leia o Protocolo inteiro. Se em até {GARANTIA_DIAS} dias você sentir que ele não é para
          você, basta pedir o reembolso pela própria plataforma de pagamento ou pelo e-mail{' '}
          <a className="font-semibold text-vinho underline" href={`mailto:${CONFIG.EMAIL_SUPORTE}`}>
            {CONFIG.EMAIL_SUPORTE}
          </a>
          , e você recebe 100% do seu dinheiro de volta. Sem perguntas e sem constrangimento. O
          risco é todo nosso.
        </p>
      </Reveal>
    </section>
  );
}

/* ---------------- 4.15 FAQ ---------------- */
const FAQ = [
  [
    'Como vou receber o material?',
    `Logo após a confirmação do pagamento, você recebe no WhatsApp informado no checkout a mensagem com o acesso ao Protocolo e aos ${BONUS.length} bônus. Pix é confirmado em segundos.`,
  ],
  [
    'A compra é discreta?',
    'Sim. O produto é 100% digital, nada chega pelo correio, e na fatura ou no comprovante aparece um nome discreto, sem a palavra “traição”.',
  ],
  [
    'É um material físico?',
    'Não. É um guia digital em PDF, feito para ler no celular, mas também dá para ler no computador ou imprimir.',
  ],
  [
    'Serve para quem ainda está só desconfiando?',
    'Sim. O protocolo mostra como agir com a cabeça fria, inclusive para não colocar tudo a perder antes de ter certeza.',
  ],
  [
    'Vai me dizer se eu devo me separar?',
    'Não. O Inteira não decide por você. Ele te ajuda a não tomar decisões no pior momento e a decidir depois, com clareza, seja qual for o caminho.',
  ],
  [
    'Substitui terapia ou advogado?',
    'Não. É um material educativo para as primeiras horas e dias. Ele mostra, inclusive, quando e onde buscar ajuda profissional, com opções gratuitas.',
  ],
  [
    'E se eu não gostar?',
    `Você tem ${GARANTIA_DIAS} dias de garantia incondicional. É só pedir o reembolso.`,
  ],
  ['Por quanto tempo terei acesso?', 'O arquivo é seu. Você baixa e lê quantas vezes quiser.'],
];

export function Faq() {
  return (
    <section aria-labelledby="faq-titulo" className="section bg-areia">
      <div className="container-text">
        <Reveal>
          <h2 id="faq-titulo" className="h2 text-center">
            Perguntas frequentes
          </h2>
        </Reveal>
        <Reveal className="mt-8">
          <Accordion items={FAQ.map(([titulo, conteudo]) => ({ titulo, conteudo }))} />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4.16 CTA final ---------------- */
export function CtaFinal() {
  return (
    <section aria-labelledby="final-titulo" className="section bg-nevoa">
      <Reveal className="container-text text-center">
        <h2 id="final-titulo" className="h2">
          Você não escolheu passar por isso. Mas pode escolher como vai sair.
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-cinza">
          Daqui a um ano, você vai lembrar destes dias. Que seja como os dias em que você se
          protegeu, e não como os dias em que se perdeu.
        </p>
        <div className="mt-8">
          <CheckoutButton id="final">Quero sair disso inteira</CheckoutButton>
        </div>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13px] font-medium text-cinza">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-vinho" aria-hidden="true" /> Garantia de{' '}
            {GARANTIA_DIAS} dias
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1.5">
            <Smartphone className="h-4 w-4 text-vinho" aria-hidden="true" /> Acesso imediato no
            WhatsApp
          </span>
        </p>
      </Reveal>
    </section>
  );
}

/* ---------------- 4.17 Rodapé ---------------- */
export function Rodape() {
  return (
    <footer className="bg-areia pb-28 pt-12 text-[13px] leading-relaxed text-cinza md:pb-12">
      <div className="container-text space-y-4 text-center">
        <p className="font-semibold text-ameixa">
          © 2026 Inteira — Protocolo 48h. Todos os direitos reservados.
        </p>
        <p>
          Este material tem caráter educativo e não substitui acompanhamento psicológico, médico ou
          jurídico. Este produto não garante resultados específicos; os resultados podem variar.
        </p>
        <p>
          Se você está em situação de violência, ligue <strong>180</strong> (Central de Atendimento
          à Mulher) ou <strong>190</strong>. Se estiver pensando em tirar a própria vida, ligue{' '}
          <strong>188</strong> (CVV), 24h e gratuito.
        </p>
        <nav aria-label="Links do rodapé" className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-2">
          <Link to="/privacidade" className="underline hover:text-vinho">
            Política de Privacidade
          </Link>
          <Link to="/termos" className="underline hover:text-vinho">
            Termos de Uso
          </Link>
          {WHATSAPP_LINK ? (
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="underline hover:text-vinho">
              Suporte: WhatsApp
            </a>
          ) : (
            <span>Suporte: WhatsApp {CONFIG.WHATSAPP_SUPORTE}</span>
          )}
        </nav>
      </div>
    </footer>
  );
}
