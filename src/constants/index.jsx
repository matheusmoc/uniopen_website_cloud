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