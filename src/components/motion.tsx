import type { ReactNode } from 'react';
import { m, type Variants } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/** Entrada das seções: fade + translateY(16px), 0,5 s, uma vez só. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  );
}

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Lista com stagger de 70 ms. Use com <StaggerItem>. */
export function Stagger({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'ul' | 'ol';
}) {
  const Comp = as === 'ul' ? m.ul : as === 'ol' ? m.ol : m.div;
  return (
    <Comp
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li';
}) {
  const Comp = as === 'li' ? m.li : m.div;
  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}
