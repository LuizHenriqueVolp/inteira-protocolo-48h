import { BONUS } from '@/data/config';
import { formatBRL } from '@/lib/format';
import { Img } from './Img';
import { Reveal, Stagger, StaggerItem } from './motion';

export function Bonus() {
  return (
    <section aria-labelledby="bonus-titulo" className="section bg-areia">
      <div className="container-page">
        <Reveal className="mx-auto max-w-text text-center">
          <h2 id="bonus-titulo" className="h2">
            E levando hoje, você ganha {BONUS.length} bônus
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
          {BONUS.map((b, i) => (
            <StaggerItem key={b.titulo} className="card flex gap-4 p-4 md:flex-col md:p-6">
              <div className="w-[38%] shrink-0 md:w-full">
                <Img
                  src={b.capa}
                  alt={`Capa do bônus ${i + 1}: ${b.nomeCurto}`}
                  width={600}
                  height={800}
                  className="h-auto w-full rounded-xl shadow-soft"
                />
              </div>
              <div className="flex flex-col">
                <span className="badge self-start">Bônus {i + 1}</span>
                <h3 className="mt-2 text-[17px] font-bold leading-snug md:text-[20px]">{b.titulo}</h3>
                <p className="mt-2 text-[14px] leading-snug text-cinza md:text-[15px]">{b.descricao}</p>
                <p className="mt-auto pt-3 text-[15px]">
                  <s className="text-cinza">{formatBRL(b.valor)}</s>{' '}
                  <strong className="text-vinho">GRÁTIS</strong>
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
