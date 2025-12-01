// todo: remove mock data - replace with database
export interface Course {
  id: number;
  slug: string;
  titulo: string;
  categoria: string;
  duracao: string;
  alunos: number;
  rating: number;
  descricao: string;
  descricaoCompleta: string;
  preco: number;
  nivel: string;
  objetivos: string[];
  modulos: {
    titulo: string;
    licoes: { titulo: string; duracao: string }[];
  }[];
  instrutor: {
    nome: string;
    cargo: string;
    bio: string;
    experiencia: number;
    alunosTreinados: number;
    avaliacao: number;
  };
  testemunhos: {
    nome: string;
    cargo: string;
    texto: string;
  }[];
  faqs: {
    pergunta: string;
    resposta: string;
  }[];
}

export const cursosData: Course[] = [
  {
    id: 1,
    slug: "analise-dados-python",
    titulo: "Análise de Dados com Python",
    categoria: "Tecnologia",
    duracao: "120h",
    alunos: 234,
    rating: 4.8,
    descricao: "Domine análise de dados, visualização e machine learning básico.",
    descricaoCompleta: "Transforme dados em insights acionáveis com Python, Pandas, e visualização avançada. Aprenda a trabalhar com grandes volumes de dados e a extrair valor de informação bruta.",
    preco: 299,
    nivel: "Intermédio",
    objetivos: [
      "Manipular e limpar grandes datasets com Pandas",
      "Criar visualizações impactantes com Matplotlib e Seaborn",
      "Aplicar análise estatística descritiva e inferencial",
      "Desenvolver dashboards interativos",
      "Implementar modelos de machine learning básicos",
      "Automatizar processos de análise de dados"
    ],
    modulos: [
      {
        titulo: "Fundamentos de Python para Data Science",
        licoes: [
          { titulo: "Configuração do Ambiente", duracao: "45min" },
          { titulo: "Tipos de Dados e Estruturas", duracao: "1h 20min" },
          { titulo: "Funções e Módulos", duracao: "1h 10min" }
        ]
      },
      {
        titulo: "Manipulação de Dados com Pandas",
        licoes: [
          { titulo: "Introdução ao Pandas", duracao: "50min" },
          { titulo: "DataFrames e Series", duracao: "1h 30min" },
          { titulo: "Limpeza e Transformação", duracao: "2h" }
        ]
      },
      {
        titulo: "Visualização de Dados",
        licoes: [
          { titulo: "Matplotlib Básico", duracao: "1h" },
          { titulo: "Gráficos Avançados com Seaborn", duracao: "1h 45min" },
          { titulo: "Dashboards Interativos", duracao: "2h 30min" }
        ]
      }
    ],
    instrutor: {
      nome: "Dr. João Silva",
      cargo: "Data Scientist @ Tech Corp | PhD em Machine Learning",
      bio: "Com mais de 15 anos de experiência em análise de dados e machine learning, João já treinou mais de 5.000 profissionais em Portugal e Brasil. Especializado em transformar dados complexos em insights acionáveis para empresas Fortune 500.",
      experiencia: 15,
      alunosTreinados: 5000,
      avaliacao: 4.9
    },
    testemunhos: [
      {
        nome: "Ana Costa",
        cargo: "Data Analyst @ Startup",
        texto: "Este curso transformou completamente a minha carreira. Consegui uma promoção em 3 meses após concluir."
      },
      {
        nome: "Pedro Santos",
        cargo: "Business Intelligence @ Corporate",
        texto: "Conteúdo prático e atual. O melhor investimento que fiz na minha formação profissional."
      },
      {
        nome: "Maria Oliveira",
        cargo: "Junior Developer",
        texto: "Mesmo sendo iniciante, consegui acompanhar todo o curso. Muito bem estruturado."
      }
    ],
    faqs: [
      {
        pergunta: "Preciso de experiência prévia em programação?",
        resposta: "Recomendamos conhecimento básico de lógica de programação, mas o curso inclui módulos introdutórios para iniciantes."
      },
      {
        pergunta: "Quanto tempo tenho acesso ao curso?",
        resposta: "O acesso é vitalício. Uma vez inscrito, pode revisitar o conteúdo sempre que quiser."
      },
      {
        pergunta: "Existe certificado de conclusão?",
        resposta: "Sim, ao completar 100% do curso recebe um certificado digital verificável."
      }
    ]
  },
  {
    id: 2,
    slug: "gestao-projetos-ageis",
    titulo: "Gestão de Projetos Ágeis",
    categoria: "Gestão",
    duracao: "80h",
    alunos: 189,
    rating: 4.9,
    descricao: "Scrum, Kanban e metodologias ágeis aplicadas ao mundo real.",
    descricaoCompleta: "Domine as metodologias ágeis mais utilizadas no mercado. Aprenda a liderar equipas, gerir sprints e entregar valor de forma consistente.",
    preco: 249,
    nivel: "Iniciante",
    objetivos: [
      "Implementar Scrum do zero numa organização",
      "Facilitar cerimónias ágeis de forma eficaz",
      "Criar e gerir backlogs priorizados",
      "Aplicar Kanban para otimizar fluxos de trabalho",
      "Medir e melhorar a velocidade da equipa",
      "Preparar-se para certificações PMI-ACP e PSM"
    ],
    modulos: [
      {
        titulo: "Fundamentos do Mindset Ágil",
        licoes: [
          { titulo: "História e Manifesto Ágil", duracao: "40min" },
          { titulo: "Valores e Princípios", duracao: "55min" },
          { titulo: "Ágil vs Tradicional", duracao: "45min" }
        ]
      },
      {
        titulo: "Scrum na Prática",
        licoes: [
          { titulo: "Papéis no Scrum", duracao: "1h" },
          { titulo: "Artefactos e Eventos", duracao: "1h 30min" },
          { titulo: "Sprint Planning e Review", duracao: "2h" }
        ]
      }
    ],
    instrutor: {
      nome: "Dra. Sofia Mendes",
      cargo: "Agile Coach @ Consultoria Global",
      bio: "Certificada PSM III e PMI-ACP, Sofia liderou transformações ágeis em mais de 50 empresas. Especialista em escalar agilidade em grandes organizações.",
      experiencia: 12,
      alunosTreinados: 3500,
      avaliacao: 4.9
    },
    testemunhos: [
      {
        nome: "Ricardo Ferreira",
        cargo: "Scrum Master @ Tech Company",
        texto: "Finalmente entendi a essência do ágil. Curso completo e muito prático."
      },
      {
        nome: "Carla Lima",
        cargo: "Product Owner",
        texto: "A Sofia tem uma capacidade incrível de explicar conceitos complexos de forma simples."
      }
    ],
    faqs: [
      {
        pergunta: "O curso prepara para certificações?",
        resposta: "Sim, o conteúdo está alinhado com os requisitos das certificações PSM e PMI-ACP."
      },
      {
        pergunta: "Preciso ter experiência em gestão?",
        resposta: "Não é necessário. O curso foi desenhado para todos os níveis de experiência."
      }
    ]
  },
  {
    id: 3,
    slug: "marketing-digital-avancado",
    titulo: "Marketing Digital Avançado",
    categoria: "Marketing",
    duracao: "100h",
    alunos: 312,
    rating: 4.7,
    descricao: "SEO, SEM, Social Media e estratégias de crescimento digital.",
    descricaoCompleta: "Domine todas as vertentes do marketing digital moderno. De SEO a campanhas pagas, de social media a analytics avançado.",
    preco: 349,
    nivel: "Avançado",
    objetivos: [
      "Criar estratégias SEO que geram resultados",
      "Gerir campanhas Google Ads e Meta Ads",
      "Analisar dados com Google Analytics 4",
      "Desenvolver estratégias de conteúdo eficazes",
      "Automatizar marketing com ferramentas modernas",
      "Medir ROI de campanhas digitais"
    ],
    modulos: [
      {
        titulo: "SEO Técnico e On-Page",
        licoes: [
          { titulo: "Fundamentos de SEO", duracao: "1h" },
          { titulo: "Otimização On-Page", duracao: "1h 45min" },
          { titulo: "SEO Técnico Avançado", duracao: "2h" }
        ]
      },
      {
        titulo: "Publicidade Digital",
        licoes: [
          { titulo: "Google Ads do Zero", duracao: "2h" },
          { titulo: "Meta Ads Masterclass", duracao: "2h 30min" },
          { titulo: "Retargeting e Remarketing", duracao: "1h 30min" }
        ]
      }
    ],
    instrutor: {
      nome: "Miguel Rocha",
      cargo: "Head of Growth @ Scale-up",
      bio: "Com passagem por Google e Meta, Miguel já geriu mais de 10M€ em investimento publicitário. Especialista em growth hacking e marketing de performance.",
      experiencia: 10,
      alunosTreinados: 4200,
      avaliacao: 4.8
    },
    testemunhos: [
      {
        nome: "Joana Martins",
        cargo: "Marketing Manager",
        texto: "O curso mais completo de marketing digital que já fiz. Vale cada cêntimo."
      }
    ],
    faqs: [
      {
        pergunta: "O curso inclui ferramentas pagas?",
        resposta: "Utilizamos versões gratuitas e trials. Não há custos adicionais obrigatórios."
      }
    ]
  },
  {
    id: 4,
    slug: "ux-ui-design",
    titulo: "UX/UI Design Completo",
    categoria: "Design",
    duracao: "90h",
    alunos: 156,
    rating: 4.9,
    descricao: "Do wireframe ao protótipo: design de experiências digitais.",
    descricaoCompleta: "Aprenda a criar interfaces intuitivas e experiências de utilizador memoráveis. Do research inicial à entrega final em Figma.",
    preco: 279,
    nivel: "Iniciante",
    objetivos: [
      "Conduzir pesquisa de utilizadores eficaz",
      "Criar wireframes e protótipos em Figma",
      "Aplicar princípios de design visual",
      "Desenvolver design systems escaláveis",
      "Realizar testes de usabilidade",
      "Construir portfolio profissional"
    ],
    modulos: [
      {
        titulo: "Fundamentos de UX",
        licoes: [
          { titulo: "O que é UX Design", duracao: "45min" },
          { titulo: "Pesquisa de Utilizadores", duracao: "1h 30min" },
          { titulo: "Personas e Journey Maps", duracao: "1h 15min" }
        ]
      },
      {
        titulo: "UI Design em Figma",
        licoes: [
          { titulo: "Interface do Figma", duracao: "1h" },
          { titulo: "Design Systems", duracao: "2h" },
          { titulo: "Prototipagem Avançada", duracao: "2h 30min" }
        ]
      }
    ],
    instrutor: {
      nome: "Beatriz Tavares",
      cargo: "Lead Designer @ Product Studio",
      bio: "Designer premiada com mais de 8 anos de experiência. Trabalhou em produtos usados por milhões de pessoas em empresas como Spotify e Booking.",
      experiencia: 8,
      alunosTreinados: 2800,
      avaliacao: 4.9
    },
    testemunhos: [
      {
        nome: "Tiago Alves",
        cargo: "Junior Designer",
        texto: "Consegui o meu primeiro emprego em design 2 meses após terminar o curso."
      }
    ],
    faqs: [
      {
        pergunta: "Preciso saber desenhar?",
        resposta: "Não! UX/UI Design é sobre resolver problemas, não sobre habilidades artísticas."
      }
    ]
  },
  {
    id: 5,
    slug: "lideranca-equipas",
    titulo: "Liderança de Equipas",
    categoria: "Gestão",
    duracao: "60h",
    alunos: 278,
    rating: 4.8,
    descricao: "Desenvolva competências de liderança para o mundo moderno.",
    descricaoCompleta: "Aprenda a liderar com empatia, comunicar com clareza e desenvolver equipas de alto desempenho no contexto híbrido e remoto.",
    preco: 199,
    nivel: "Intermédio",
    objetivos: [
      "Desenvolver estilo de liderança autêntico",
      "Comunicar de forma clara e persuasiva",
      "Gerir conflitos de forma construtiva",
      "Motivar e desenvolver membros da equipa",
      "Liderar equipas remotas e híbridas",
      "Criar cultura de feedback contínuo"
    ],
    modulos: [
      {
        titulo: "Autoconhecimento e Liderança",
        licoes: [
          { titulo: "Estilos de Liderança", duracao: "1h" },
          { titulo: "Inteligência Emocional", duracao: "1h 30min" },
          { titulo: "Autoavaliação e Desenvolvimento", duracao: "45min" }
        ]
      }
    ],
    instrutor: {
      nome: "Carlos Andrade",
      cargo: "Executive Coach | Ex-CEO",
      bio: "Com 20 anos de experiência executiva, Carlos já liderou equipas de mais de 500 pessoas. Hoje dedica-se a formar a próxima geração de líderes.",
      experiencia: 20,
      alunosTreinados: 6000,
      avaliacao: 4.8
    },
    testemunhos: [
      {
        nome: "Helena Dias",
        cargo: "Team Lead",
        texto: "Transformou a forma como vejo liderança. Muito mais do que um curso técnico."
      }
    ],
    faqs: [
      {
        pergunta: "Preciso ser gestor para fazer o curso?",
        resposta: "Não. O curso é útil para quem aspira a posições de liderança ou quer melhorar soft skills."
      }
    ]
  },
  {
    id: 6,
    slug: "excel-avancado-negocios",
    titulo: "Excel Avançado para Negócios",
    categoria: "Tecnologia",
    duracao: "50h",
    alunos: 423,
    rating: 4.6,
    descricao: "Domine Excel: fórmulas, dashboards, Power Query e automação.",
    descricaoCompleta: "Transforme-se num power user de Excel. Aprenda fórmulas avançadas, Power Query, tabelas dinâmicas e automação com VBA.",
    preco: 149,
    nivel: "Intermédio",
    objetivos: [
      "Dominar fórmulas avançadas (INDEX, MATCH, XLOOKUP)",
      "Criar dashboards profissionais",
      "Automatizar tarefas com Power Query",
      "Construir modelos financeiros",
      "Introdução ao VBA para automação",
      "Integrar Excel com outras ferramentas"
    ],
    modulos: [
      {
        titulo: "Fórmulas Avançadas",
        licoes: [
          { titulo: "VLOOKUP vs XLOOKUP", duracao: "45min" },
          { titulo: "INDEX e MATCH", duracao: "1h" },
          { titulo: "Fórmulas de Array", duracao: "1h 30min" }
        ]
      }
    ],
    instrutor: {
      nome: "Rui Fernandes",
      cargo: "Financial Analyst @ Big 4",
      bio: "MVP Microsoft Excel há 5 anos consecutivos. Rui já formou equipas em mais de 100 empresas portuguesas.",
      experiencia: 12,
      alunosTreinados: 8000,
      avaliacao: 4.7
    },
    testemunhos: [
      {
        nome: "Sandra Lopes",
        cargo: "Controller Financeiro",
        texto: "Poupo horas todas as semanas graças ao que aprendi neste curso."
      }
    ],
    faqs: [
      {
        pergunta: "Que versão do Excel preciso?",
        resposta: "Recomendamos Excel 2019 ou Microsoft 365 para aceder a todas as funcionalidades."
      }
    ]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return cursosData.find(c => c.slug === slug);
}

export function getCoursesByCategory(categoria: string): Course[] {
  if (categoria === "Todas as Áreas") return cursosData;
  return cursosData.filter(c => c.categoria === categoria);
}

export function getCategories(): string[] {
  const uniqueCategories = Array.from(new Set(cursosData.map(c => c.categoria)));
  return ["Todas as Áreas", ...uniqueCategories];
}
