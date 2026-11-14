export type Depoimento = {
  nome: string;
  cidade?: string;
  /** Etiqueta curta exibida ao lado do nome (ex.: "Na hora da descoberta"). */
  tag?: string;
  texto: string;
  ativo: boolean;
  /**
   * true = relato fictício/ilustrativo. Enquanto houver algum ativo, a seção mostra
   * o aviso "Personagens e relatos fictícios" (não remova o aviso: apresentar relato
   * fictício como real é propaganda enganosa e viola as políticas de anúncio da Meta).
   * Quando tiver relatos reais (com autorização), cadastre com ficticio: false.
   */
  ficticio?: boolean;
};

export const DEPOIMENTOS: Depoimento[] = [
  {
    nome: 'Marina Costa',
    tag: 'Na hora da descoberta',
    texto:
      'Descobri há pouco e ainda estou tentando organizar tudo o que sinto. Por enquanto, estou me dando um tempo para pensar com calma.',
    ativo: true,
    ficticio: true,
  },
  {
    nome: 'Fernanda Alves',
    tag: 'Reconstruir a confiança',
    texto:
      'Eu quis tentar de novo, mas entendi que confiança não volta de uma hora para outra. Estou aprendendo a respeitar meu próprio tempo.',
    ativo: true,
    ficticio: true,
  },
  {
    nome: 'Patrícia Nogueira',
    tag: 'Um passo de cada vez',
    texto:
      'Depois de tantos anos de idas e vindas, quero olhar para o que eu preciso e decidir meu próximo passo sem pressão.',
    ativo: true,
    ficticio: true,
  },
  {
    nome: 'Andréa Martins',
    tag: 'Cuidar de si',
    texto:
      'Por muito tempo tentei encontrar todas as respostas sozinha. Conversar com alguém de confiança me ajudou a organizar os pensamentos.',
    ativo: true,
    ficticio: true,
  },
  {
    nome: 'Juliana Ribeiro',
    tag: 'Sem pressa',
    texto:
      'Eu achava que precisava decidir tudo naquele mesmo dia. Agora estou tentando dar um passo de cada vez e respeitar meus limites.',
    ativo: true,
    ficticio: true,
  },
  {
    nome: 'Renata Oliveira',
    tag: 'Recuperar a confiança',
    texto:
      'Ainda tenho dias difíceis, mas estou voltando a prestar atenção no que me faz bem e no que quero para o meu futuro.',
    ativo: true,
    ficticio: true,
  },
];
