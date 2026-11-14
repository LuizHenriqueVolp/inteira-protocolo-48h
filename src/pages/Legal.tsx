import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function LegalLayout({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-areia">
      <header className="bg-ameixa py-4 text-areia">
        <div className="container-text">
          <Link to="/" className="inline-flex items-center gap-2 text-[14px] font-medium hover:text-champagne">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar para a página
          </Link>
        </div>
      </header>
      <main className="container-text py-12">
        <h1 className="text-[30px] font-bold md:text-[40px]">{titulo}</h1>
        <p className="mt-2 text-[14px] text-cinza">Inteira — Protocolo 48h · Atualizado em 2026</p>
        <div className="mt-8 space-y-5 text-[16px] leading-relaxed [&_h2]:mt-8 [&_h2]:text-[21px] [&_h2]:font-bold">
          {children}
        </div>
      </main>
    </div>
  );
}
