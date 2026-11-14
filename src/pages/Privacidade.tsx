import { CONFIG } from '@/data/config';
import { LegalLayout } from './Legal';

export default function Privacidade() {
  return (
    <LegalLayout titulo="Política de Privacidade">
      <p>
        Esta política explica, de forma simples, quais dados são coletados quando você visita a
        página do {CONFIG.PRODUTO} e como eles são usados, de acordo com a Lei Geral de Proteção de
        Dados (Lei 13.709/2018).
      </p>

      <h2>1. Dados coletados nesta página</h2>
      <p>
        Esta página não tem formulário e não pede seu nome, e-mail ou telefone. Os dados da compra
        (nome, e-mail, WhatsApp e pagamento) são informados diretamente no checkout da plataforma de
        pagamento, que tem a sua própria política de privacidade.
      </p>

      <h2>2. Pixel da Meta e cookies de mensuração</h2>
      <p>
        Usamos o Pixel da Meta (Facebook e Instagram) e cookies de mensuração para entender quantas
        pessoas visitam a página, quais anúncios as trouxeram e quantas seguem para o checkout.
        Essas ferramentas registram informações técnicas como o endereço IP, o tipo de navegador e
        do aparelho, as páginas visitadas e os parâmetros da campanha (UTMs).
      </p>
      <p>
        Também usamos a UTMify para atribuir as vendas às campanhas corretas, e podemos registrar
        eventos anônimos de navegação (como rolagem da página e cliques nos botões) para melhorar a
        experiência.
      </p>

      <h2>3. Para que usamos esses dados</h2>
      <p>
        Para medir o desempenho dos anúncios, mostrar anúncios mais relevantes e melhorar esta
        página. Não vendemos seus dados.
      </p>

      <h2>4. Como desativar</h2>
      <p>
        Você pode bloquear ou apagar cookies nas configurações do seu navegador e ajustar suas
        preferências de anúncios nas configurações da sua conta da Meta.
      </p>

      <h2>5. Seus direitos e contato</h2>
      <p>
        Você pode pedir acesso, correção ou exclusão dos seus dados pelo e-mail{' '}
        <a className="font-semibold text-vinho underline" href={`mailto:${CONFIG.EMAIL_SUPORTE}`}>
          {CONFIG.EMAIL_SUPORTE}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
