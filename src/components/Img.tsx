import { useState } from 'react';

/**
 * Imagem com tamanho fixo (sem salto de layout). Se o arquivo não existir,
 * mostra um placeholder elegante com o nome do arquivo.
 */
export function Img({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-nevoa via-white to-[#ead7de] p-4 text-center text-[13px] font-medium text-cinza ${className}`}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {src.split('/').pop()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      // React 18 não conhece fetchPriority; o atributo em minúsculas funciona no HTML.
      {...(priority ? { fetchpriority: 'high' } : {})}
      onError={() => setErro(true)}
    />
  );
}
