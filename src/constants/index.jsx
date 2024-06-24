import {
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
} from "../utils";

export const navLists = ["Início", "O que é", "Vantagens", "Contato"];

export const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "O que é Computação na Nuvem?",
      "Entenda os conceitos básicos.",
      "Explorando a tecnologia.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
    youtubeLink: "https://www.youtube.com/watch?v=OFIVUTmc2cs&t=11s"
  },
  {
    id: 2,
    textLists: ["Vantagens da Nuvem.", "Eficiência, escalabilidade e segurança."],
    video: highlightSecondVideo,
    videoDuration: 5,
    youtubeLink: 'https://www.youtube.com/watch?v=8JI9wQ8sUdQ&t=28s'
  },
  {
    id: 3,
    textLists: [
      "Como a Nuvem Funciona?",
      "Armazenamento e processamento de dados.",
      "Acesso remoto e flexibilidade.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
    youtubeLink: 'https://www.youtube.com/watch?v=FDFejm-ovtI'
  },
  {
    id: 4,
    textLists: ["Segurança na Nuvem.", "Proteja seus dados de forma eficaz."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
    youtubeLink: 'https://www.youtube.com/watch?v=FA4_nzMiK0g'
  },
];

export const models = [
  {
    id: 1,
    title: "Infraestrutura de Nuvem",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
  },
  {
    id: 2,
    title: "Segurança em Nuvem",
    color: ["#53596E", "#6395ff", "#21242e"],
  },
  {
    id: 3,
    title: "Armazenamento em Nuvem",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
  },
  {
    id: 4,
    title: "Computação em Nuvem",
    color: ["#454749", "#3b3b3b", "#181819"],
  },
];

export const sizes = [
  { label: 'Pequenas Empresas', value: "small" },
  { label: 'Empresarial', value: "large" },
];

export const footerLinks = [
  "Política de Privacidade",
  "Termos de Serviço",
  "Política de Vendas",
  "Legal",
  "Mapa do Site",
];

export const disciplines = [
  {
    title: 'Fundamentos de Computação em Nuvem',
    content: {
      description: 'Introdução aos conceitos básicos de computação em nuvem, modelos de serviço (IaaS, PaaS, SaaS), modelos de implementação (nuvem pública, privada, híbrida), vantagens e desvantagens da nuvem.',
      learning: 'Conceitos fundamentais, terminologia, e a compreensão das arquiteturas e serviços oferecidos por provedores de nuvem.',
    },
  },
  {
    title: 'Infraestrutura de TI',
    content: {
      description: 'Componentes de infraestrutura de TI, incluindo servidores, armazenamento, redes e virtualização.',
      learning: 'Compreensão de como a infraestrutura de TI suporta a computação em nuvem e a implementação de recursos virtualizados.',
    },
  },
  {
    title: 'Administração de Sistemas',
    content: {
      description: 'Gerenciamento e manutenção de sistemas operacionais, servidores e redes.',
      learning: 'Habilidades práticas na administração de sistemas que são fundamentais para gerenciar ambientes de nuvem.',
    },
  },
  {
    title: 'Redes de Computadores',
    content: {
      description: 'Fundamentos de redes de computadores, incluindo protocolos, topologias, segurança e gerenciamento de rede.',
      learning: 'Como redes suportam a computação em nuvem e o papel crucial das redes na comunicação entre serviços em nuvem.',
    },
  },
  {
    title: 'Banco de Dados',
    content: {
      description: 'Modelagem de dados, linguagens de consulta (SQL), administração de bancos de dados.',
      learning: 'Como os bancos de dados podem ser implementados e gerenciados na nuvem, incluindo serviços de banco de dados como Amazon RDS, Google Cloud SQL, etc.',
    },
  },
  {
    title: 'Desenvolvimento de Software',
    content: {
      description: 'Ciclo de vida de desenvolvimento de software, metodologias de desenvolvimento, ferramentas e práticas de desenvolvimento ágil.',
      learning: 'Desenvolvimento de aplicações que podem ser implementadas e escaladas na nuvem, uso de ambientes de desenvolvimento integrados na nuvem.',
    },
  },
  {
    title: 'Segurança da Informação',
    content: {
      description: 'Princípios de segurança da informação, criptografia, controle de acesso, políticas de segurança.',
      learning: 'Segurança na nuvem, incluindo proteção de dados, conformidade, e estratégias de mitigação de riscos em ambientes de nuvem.',
    },
  },
  {
    title: 'Arquitetura de Software',
    content: {
      description: 'Padrões de arquitetura, design de sistemas distribuídos, integração de sistemas.',
      learning: 'Design de arquiteturas escaláveis e resilientes para a nuvem, uso de microservices, containers e orquestração.',
    },
  },
  {
    title: 'Engenharia de Software',
    content: {
      description: 'Processos de engenharia de software, qualidade de software, testes e manutenção.',
      learning: 'Como práticas de engenharia de software se aplicam ao desenvolvimento e operação de aplicações na nuvem, DevOps.',
    },
  },
  {
    title: 'Sistemas Distribuídos',
    content: {
      description: 'Modelos de computação distribuída, algoritmos distribuídos, sistemas de arquivos distribuídos.',
      learning: 'Como distribuir processamento e armazenamento em um ambiente de nuvem, utilizando frameworks e ferramentas como Hadoop e Spark.',
    },
  },
  {
    title: 'Tópicos Avançados em Sistemas de Informação',
    content: {
      description: 'Abordagens e tecnologias emergentes em Sistemas de Informação.',
      learning: 'Aplicações avançadas e pesquisa em tecnologias de computação em nuvem.',
    },
  },
  {
    title: 'Projetos e Práticas em Sistemas de Informação',
    content: {
      description: 'Desenvolvimento de projetos práticos e aplicação de conhecimentos teóricos.',
      learning: 'Implementação prática de soluções em nuvem, desde a concepção até a entrega, utilizando as melhores práticas e ferramentas do mercado.',
    },
  },
];