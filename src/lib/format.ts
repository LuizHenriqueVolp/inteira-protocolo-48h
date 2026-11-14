const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const brlInteiro = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

/** 27.9 -> "R$ 27,90" */
export function formatBRL(valor: number): string {
  return brl.format(valor).replace(/\s/g, ' ');
}

/** 97 -> "R$ 97" (sem centavos quando o valor é inteiro) */
export function formatBRLCurto(valor: number): string {
  const f = Number.isInteger(valor) ? brlInteiro : brl;
  return f.format(valor).replace(/\s/g, ' ');
}

/** Só o número: 27.9 -> "27,90" */
export function formatNumero(valor: number, casas = 2): string {
  return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });
}
