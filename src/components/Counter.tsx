import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { formatNumero } from '@/lib/format';

/** Contador animado (requestAnimationFrame, 1,2 s) que dispara ao entrar na tela. */
export function Counter({
  to,
  decimals = 2,
  prefix = '',
  suffix = '',
  duration = 1200,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const [valor, setValor] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduz) {
      setValor(to);
      return;
    }
    let raf = 0;
    const inicio = performance.now();
    const passo = (agora: number) => {
      const t = Math.min(1, (agora - inicio) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValor(to * eased);
      if (t < 1) raf = requestAnimationFrame(passo);
    };
    raf = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  const final = `${prefix}${formatNumero(to, decimals)}${suffix}`;
  return (
    <span ref={ref} className={className} aria-label={final}>
      <span aria-hidden="true" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {prefix}
        {formatNumero(valor, decimals)}
        {suffix}
      </span>
    </span>
  );
}
