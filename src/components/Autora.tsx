import { BadgeCheck, Quote } from 'lucide-react';
import { REVISAO } from '@/data/config';
import { Img } from './Img';
import { Reveal, Stagger, StaggerItem } from './motion';

/* ---------------- 4.10 Sobre a autora ---------------- */
export function Autora() {
  return (
    <section aria-labelledby="autora-titulo" className="section bg-areia">
      <div className="container-text">
        <Reveal className="flex flex-col items-center text-center">
          <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-champagne shadow-card md:h-48 md:w-48">
            <Img
              src="/assets/helena.webp"
              alt="Foto de Helena Varela, autora do Protocolo Inteira"
              width={600}
              height={750}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <p className="mt-5 text-[13px] font-bold uppercase tracking-[0.1em] text-cinza">
            Sobre a autora
          </p>
          <h2 id="autora-titulo" className="h2 mt-1">
            Helena Varela
          </h2>
          <p className="mt-1 text-[15px] text-cinza">
            Autora do Protocolo Inteira · mentora de mulheres em recomeço
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-8 space-y-4">
            <p>
              Helena descobriu a traição do marido aos 36 anos, depois de 11 anos de casamento e com
              dois filhos pequenos, numa terça-feira à noite, pelo celular esquecido em cima da mesa.
              Nos meses seguintes, viveu tudo o que você talvez esteja vivendo agora: noites sem
              dormir, o filme repetindo na cabeça, a sensação de que a culpa era dela.
            </p>
            <p>
              Foi estudando o que a ciência já sabe sobre o trauma da traição, com referências como
              Shirley Glass, Janis Abrahms Spring e John Gottman, que ela entendeu o que estava
              acontecendo com o próprio corpo e a própria mente. A partir daí, organizou tudo num
              passo a passo simples para a mulher que precisa saber o que fazer hoje.
            </p>
          </div>
          <blockquote className="mt-8 rounded-card bg-nevoa p-6 font-serif text-[20px] italic leading-snug text-ameixa md:p-8 md:text-[22px]">
            “Eu não escrevi este material para te dizer se você deve ficar ou ir embora. Escrevi
            para que, qualquer que seja a sua decisão, você a tome inteira.”
          </blockquote>
          {REVISAO.ativo && (
            <p className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-champagne/60 bg-white px-4 py-2 text-[14px] font-medium">
              <BadgeCheck className="h-5 w-5 text-champagne" aria-hidden="true" />
              Conteúdo revisado por {REVISAO.nome}, Psicóloga CRP {REVISAO.crp}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 4.11 Pensamentos comuns (sem nomes, sem curtidas, sem datas) ---------------- */
const PENSAMENTOS = [
  {
    tag: 'Na hora da descoberta',
    texto:
      'Descobri há pouco e ainda estou tentando organizar tudo o que sinto. Por enquanto, estou me dando um tempo para pensar com calma.',
  },
  {
    tag: 'Reconstruir a confiança',
    texto:
      'Eu quis tentar de novo, mas entendi que confiança não volta de uma hora para outra. Estou aprendendo a respeitar meu próprio tempo.',
  },
  {
    tag: 'Um passo de cada vez',
    texto:
      'Depois de tantos anos de idas e vindas, quero olhar para o que eu preciso e decidir meu próximo passo sem pressão.',
  },
  {
    tag: 'Cuidar de si',
    texto:
      'Por muito tempo tentei encontrar todas as respostas sozinha. Conversar com alguém de confiança me ajudou a organizar os pensamentos.',
  },
  {
    tag: 'Sem pressa',
    texto:
      'Eu achava que precisava decidir tudo naquele mesmo dia. Agora estou tentando dar um passo de cada vez e respeitar meus limites.',
  },
  {
    tag: 'Recuperar a confiança',
    texto:
      'Ainda tenho dias difíceis, mas estou voltando a prestar atenção no que me faz bem e no que quero para o meu futuro.',
  },
];

export function Depoimentos() {
  return (
    <section aria-labelledby="pensamentos-titulo" className="section bg-nevoa">
      <div className="mx-auto w-full max-w-[1060px] px-5 md:px-8">
        <Reveal className="text-center">
          <h2 id="pensamentos-titulo" className="h2">
            Pensamentos comuns <em className="text-vinho">depois de uma descoberta</em>
          </h2>
          <p className="mx-auto mt-3 max-w-[620px] text-[16px] leading-relaxed text-cinza">
            Cada história é única.
          </p>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5">
          {PENSAMENTOS.map((p) => (
            <StaggerItem key={p.tag}>
              <figure className="relative h-full rounded-2xl border border-[#eadfe4] bg-white px-5 pb-5 pt-6 shadow-soft md:rounded-[20px] md:px-7 md:pt-7">
                <Quote
                  className="absolute right-5 top-5 h-7 w-7 fill-rose/15 text-rose/40"
                  aria-hidden="true"
                />
                <span className="inline-block rounded-full bg-nevoa px-2.5 py-0.5 text-[12px] font-semibold text-vinho">
                  {p.tag}
                </span>
                <blockquote className="mt-3 pr-6 font-serif text-[18px] italic leading-[1.55] text-ameixa md:text-[19px]">
                  “{p.texto}”
                </blockquote>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
