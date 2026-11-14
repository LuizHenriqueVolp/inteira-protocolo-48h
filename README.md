# Inteira — Protocolo 48h · Landing page

Landing page de vendas mobile-first (pt-BR) do infoproduto **Inteira — Protocolo 48h**.
Stack: Vite + React 18 + TypeScript + Tailwind CSS + framer-motion + lucide-react (estrutura padrão do Lovable).

## Como rodar

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # gera a pasta dist/ (checa os tipos antes)
npm run preview  # serve o build de produção
```

Requer Node 18 ou mais novo.

## Publicar no Lovable (via GitHub)

1. Crie um repositório no GitHub (sugestão: `inteira-protocolo-48h`) e envie o código:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/inteira-protocolo-48h.git
   git push -u origin main
   ```
2. No Lovable: **New Project → Import from GitHub →** selecione o repositório.
3. Clique em **Publish**. Cada `git push` na branch `main` atualiza o projeto no Lovable.
4. Se for usar o endpoint de eventos, cadastre `VITE_EVENTS_ENDPOINT` nas variáveis de ambiente do projeto.

## Onde trocar cada coisa

| O quê | Onde |
|---|---|
| **Link do checkout da Cakto** | `src/data/config.ts` → `CONFIG.CHECKOUT_URL` |
| WhatsApp de suporte (só números, com 55 + DDD) | `src/data/config.ts` → `CONFIG.WHATSAPP_SUPORTE` |
| E-mail de suporte (garantia, privacidade, termos) | `src/data/config.ts` → `CONFIG.EMAIL_SUPORTE` |
| Preço e preço "de" | `src/data/config.ts` → `CONFIG.PRECO` / `CONFIG.PRECO_DE` |
| Nomes, descrições, capas e valores dos bônus | `src/data/config.ts` → `BONUS` (o total de R$ 188,00 é calculado) |
| Selo de revisão técnica (psicóloga) | `src/data/config.ts` → `REVISAO` (`ativo: true` + nome + CRP) |
| Depoimentos | `src/data/depoimentos.ts` (a seção só aparece com **3 ou mais** `ativo: true`) |
| Imagens | `public/assets/` (mesmos nomes de arquivo; veja abaixo) |
| Favicon | `public/favicon.png` e `public/apple-touch-icon.png` |
| ID do Pixel da Meta | `index.html` (snippet do `<head>` e `<noscript>` no `<body>`) e `CONFIG.META_PIXEL_ID` |
| Pixel da UTMify | `index.html`: descomente o bloco e troque `[PREENCHER_UTMIFY_PIXEL_ID]` |
| Título, descrição e imagem de compartilhamento | `index.html` (`<title>`, `meta description`, Open Graph) |
| Textos das seções | `src/components/*.tsx` (cada seção tem um comentário com o número dela no briefing) |

> Enquanto `CHECKOUT_URL` estiver com `[PREENCHER_LINK_CAKTO]`, os botões de compra só rolam até a oferta.

> Depois de publicar, troque `/assets/og-image.jpg` no `index.html` pela URL absoluta (`https://seudominio.com/assets/og-image.jpg`). Algumas redes só leem a imagem de compartilhamento com a URL completa.

### Imagens (`public/assets/`)

| Arquivo | Tamanho | Uso |
|---|---|---|
| `mockup-hero.webp` | 1200×1200 | Hero (pré-carregada, `fetchpriority="high"`) |
| `mockup-combo.webp` | 1200×900 | Oferta |
| `pagina-01.webp` … `pagina-06.webp` | 720×1280 | Carrossel "Veja por dentro" (já com moldura de celular) |
| `bonus-1.webp` … `bonus-3.webp` | 600×800 | Capas dos bônus |
| `helena.webp` | 600×750 | Foto da autora |
| `og-image.jpg` | 1200×630 | Compartilhamento |

Se algum arquivo faltar, a página mostra um placeholder com o nome do arquivo no lugar da imagem.

## Rastreamento

### Pixel da Meta (`1191826046838369`)
- `PageView`: no `<head>` do `index.html`.
- `ViewContent`: uma vez por visita, quando a pessoa rola 50% da página **ou** quando a seção `#oferta` aparece (o que vier primeiro).
- `InitiateCheckout`: em todo clique nos botões que levam ao checkout (oferta, CTA final e barra fixa do mobile), antes de navegar, com `eventID` único para deduplicação.
- **`Purchase` NÃO é disparado na landing page.** A compra acontece no checkout da Cakto, que registra o `Purchase` com o pixel configurado no produto, e a UTMify registra a venda pelo servidor. Disparar `Purchase` aqui contaria vendas que não aconteceram e duplicaria as que aconteceram.

Tudo fica em `src/lib/track.ts`. As funções não quebram se o `fbq` não existir (bloqueador de anúncios, rede lenta).

### UTMs → checkout
- O script da UTMify (`<head>`) repassa as UTMs para os links de checkout.
- Reforço por código: `buildCheckoutUrl()` em `src/lib/checkout.ts` anexa ao `CHECKOUT_URL` todos os parâmetros `utm_*`, `src`, `sck`, `fbclid` e `xcod` da URL atual, e também os salvos no `sessionStorage` na primeira visita (assim eles não se perdem quando a pessoa navega por âncoras).

Teste: abra `/?utm_source=FB&utm_campaign=teste|123&fbclid=abc`, clique em um botão de compra e confira as UTMs no link do checkout.

### Registro de eventos próprio (opcional, Neon)
Se `VITE_EVENTS_ENDPOINT` estiver definida (veja `.env.example`), cada evento é enviado por `navigator.sendBeacon` para esse endpoint: `page_view`, `view_content`, `cta_click` (com o id do botão), `scroll_50` e `scroll_90`. Sem a variável, nada é enviado.

Payload (enviado como texto JSON):
```json
{ "event": "cta_click", "cta_id": "oferta", "utm_source": "FB", "utm_campaign": "teste|123",
  "utm_medium": null, "utm_content": null, "utm_term": null, "src": null, "fbclid": "abc",
  "path": "/", "device": "mobile", "ts": "2026-11-14T12:00:00.000Z" }
```

Tabela no Postgres do Neon:
```sql
create table if not exists lp_events (
  id bigserial primary key,
  created_at timestamptz default now(),
  event text not null, cta_id text,
  utm_source text, utm_campaign text, utm_medium text, utm_content text, utm_term text,
  src text, fbclid text, path text, device text, user_agent text
);
create index if not exists lp_events_created_idx on lp_events (created_at);
create index if not exists lp_events_campaign_idx on lp_events (utm_campaign);
```
O endpoint deve aceitar `POST` com corpo `text/plain` (é o que o `sendBeacon` envia sem preflight de CORS), fazer `JSON.parse` do corpo e preencher `user_agent` a partir do header da requisição.

## Estrutura

```
index.html                 head: SEO, Open Graph, fontes, Pixel da Meta, UTMify
public/assets/             imagens
src/data/config.ts         preços, links, bônus, revisão técnica
src/data/depoimentos.ts    depoimentos reais (com autorização)
src/lib/checkout.ts        buildCheckoutUrl() e UTMs
src/lib/track.ts           Pixel (ViewContent, InitiateCheckout) e eventos próprios
src/components/            seções da página
src/pages/Index.tsx        ordem das seções e rastreamento de rolagem
src/pages/Privacidade.tsx  /privacidade
src/pages/Termos.tsx       /termos
```
