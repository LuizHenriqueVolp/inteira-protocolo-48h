import { BadgeCheck, Heart, Star } from 'lucide-react';
import { REVISAO } from '@/data/config';
import { DEPOIMENTOS } from '@/data/depoimentos';
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

/* ---------------- 4.11 Depoimentos (só com 3+ ativos) ---------------- */
export function Depoimentos() {
  const ativos = DEPOIMENTOS.filter((d) => d.ativo);
  if (ativos.length < 3) return null;

  return (
    <section aria-labelledby="depo-titulo" className="section bg-nevoa">
      <div className="container-page">
        <Reveal className="text-center">
          <h2 id="depo-titulo" className="h2">
            O que estão dizendo
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
          {ativos.map((d) => (
            <StaggerItem key={d.nome + d.texto.slice(0, 12)} className="card relative p-5">
              <Heart
                className="absolute right-4 top-4 h-5 w-5 fill-rose/20 text-rose"
                aria-hidden="true"
              />
              <div className="flex items-center gap-3">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-white"
                  style={{ background: 'var(--grad-cta)' }}
                  aria-hidden="true"
                >
                  {d.nome.trim().charAt(0).toUpperCase()}
                </span>
                <div>
                  <p className="text-[15px] font-bold leading-tight">{d.nome}</p>
                  {d.cidade && <p className="text-[13px] text-cinza">{d.cidade}</p>}
                </div>
              </div>
              <div className="mt-3 flex gap-0.5" aria-label="5 estrelas">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-champagne text-champagne" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-2 text-[15px] leading-relaxed">{d.texto}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
