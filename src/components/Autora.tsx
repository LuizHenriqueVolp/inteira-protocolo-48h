import { useState } from 'react';
import { BadgeCheck, Heart, Star } from 'lucide-react';
import { REVISAO } from '@/data/config';
import { DEPOIMENTOS, type Depoimento } from '@/data/depoimentos';
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
function Relato({ d }: { d: Depoimento }) {
  const [curtido, setCurtido] = useState(false);
  return (
    <article className="grid grid-cols-[42px_minmax(0,1fr)] items-start gap-3.5 rounded-2xl border border-[#eadfe4] bg-white px-4 py-[18px] shadow-soft md:grid-cols-[56px_minmax(0,1fr)] md:gap-5 md:rounded-[20px] md:px-[26px] md:py-6">
      <span
        className="grid aspect-square w-[42px] place-items-center rounded-full font-serif text-[18px] font-semibold text-white md:w-14 md:text-[23px]"
        style={{ background: 'var(--grad-cta)' }}
        aria-hidden="true"
      >
        {d.nome.trim().charAt(0).toUpperCase()}
      </span>
      <div>
        <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-1">
          <strong className="text-[16px] leading-tight">{d.nome}</strong>
          {d.cidade && <span className="text-[14px] text-cinza">· {d.cidade}</span>}
          {d.tag && (
            <span className="rounded-full bg-nevoa px-2.5 py-0.5 text-[12px] font-semibold text-vinho">
              {d.tag}
            </span>
          )}
        </div>
        {!d.ficticio && (
          <div className="mb-2 flex gap-0.5" role="img" aria-label="5 estrelas">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-champagne text-champagne" aria-hidden="true" />
            ))}
          </div>
        )}
        <p className="text-[16px] leading-[1.65] md:text-[17px]">{d.texto}</p>
        <button
          type="button"
          aria-pressed={curtido}
          aria-label={`Curtir relato de ${d.nome}`}
          onClick={() => setCurtido((c) => !c)}
          className={`mt-3 inline-flex items-center gap-1.5 py-1 text-[14px] transition-colors ${
            curtido ? 'text-rose' : 'text-cinza hover:text-rose'
          }`}
        >
          <Heart
            className={`h-[18px] w-[18px] transition-transform duration-200 ${curtido ? 'scale-110 fill-rose' : ''}`}
            aria-hidden="true"
          />
          {curtido ? 'Curtido' : 'Curtir'}
        </button>
      </div>
    </article>
  );
}

export function Depoimentos() {
  const ativos = DEPOIMENTOS.filter((d) => d.ativo);
  if (ativos.length < 3) return null;
  const temFicticio = ativos.some((d) => d.ficticio);

  return (
    <section aria-labelledby="depo-titulo" className="section bg-nevoa">
      <div className="mx-auto w-full max-w-[1060px] px-5 md:px-8">
        <Reveal className="text-center">
          <h2 id="depo-titulo" className="h2">
            O que estão <em className="text-vinho">dizendo</em>
          </h2>
          {temFicticio && (
            <p className="mx-auto mt-3 max-w-[620px] text-[16px] leading-relaxed text-cinza">
              Exemplos fictícios de sentimentos e dúvidas que podem surgir depois de uma descoberta.
              Cada história é única.
            </p>
          )}
        </Reveal>
        <Stagger className="mt-8 grid gap-[18px] md:mt-9">
          {ativos.map((d) => (
            <StaggerItem key={d.nome + d.texto.slice(0, 12)}>
              <Relato d={d} />
            </StaggerItem>
          ))}
        </Stagger>
        {temFicticio && (
          <p className="mx-1 mt-5 text-center text-[13px] leading-relaxed text-cinza">
            <strong>Personagens e relatos fictícios para demonstração.</strong> Não representam
            clientes nem comentários reais.
          </p>
        )}
      </div>
    </section>
  );
}
