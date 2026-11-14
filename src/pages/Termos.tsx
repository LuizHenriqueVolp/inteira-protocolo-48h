import { CONFIG, GARANTIA_DIAS } from '@/data/config';
import { LegalLayout } from './Legal';

export default function Termos() {
  return (
    <LegalLayout titulo="Termos de Uso">
      <p>
        Ao comprar ou acessar o {CONFIG.PRODUTO} e seus bônus, você concorda com os termos abaixo.
      </p>

      <h2>1. O que é o produto</h2>
      <p>
        Um material digital educativo, em PDF, entregue pelo WhatsApp informado no checkout logo
        após a confirmação do pagamento. Nada é enviado pelo correio.
      </p>

      <h2>2. Caráter educativo</h2>
      <p>
        O conteúdo tem caráter educativo e não substitui acompanhamento psicológico, médico ou
        jurídico. Este produto não garante resultados específicos; os resultados podem variar.
      </p>

      <h2>3. Uso pessoal</h2>
      <p>
        O acesso é pessoal e intransferível. Não é permitido copiar, revender, distribuir ou
        publicar o material, no todo ou em parte, sem autorização por escrito.
      </p>

      <h2>4. Garantia e reembolso</h2>
      <p>
        Você tem {GARANTIA_DIAS} dias, a partir da compra, para pedir o reembolso integral pela
        própria plataforma de pagamento ou pelo e-mail{' '}
        <a className="font-semibold text-vinho underline" href={`mailto:${CONFIG.EMAIL_SUPORTE}`}>
          {CONFIG.EMAIL_SUPORTE}
        </a>
        , sem precisar justificar.
      </p>

      <h2>5. Ajuda em situações de risco</h2>
      <p>
        Se você está em situação de violência, ligue 180 (Central de Atendimento à Mulher) ou 190.
        Se estiver pensando em tirar a própria vida, ligue 188 (CVV), 24h e gratuito.
      </p>
    </LegalLayout>
  );
}
