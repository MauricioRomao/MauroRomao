import fotoProjeto from "@/Images/backend-development.jpg";
import fotoportfolio from "@/Images/portfolio.png";
import { Project } from "@/Types/Projects/Project"


export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Bisno",
    description: "Plataforma completa de vendas e painel administrativo.",
    imageSrc: fotoProjeto,
    imageAlt: "Preview do projeto E-commerce Bisno",
    projectUrl: "/projetos/ecommerce-bisno",
    fullDescription: " O objetivo da Spout é conectar Pipas(vendedores de agua) para moradoes por meio de um app "
  },
  {
    id: "proj-2",
    title: "MetroFood",
    description: "Aplicação web para controlo financeiro pessoal com gráficos interativos em tempo real.",
    imageSrc: fotoProjeto,
    imageAlt: "Preview do projeto Dashboard Finanças",
    projectUrl: "/projetos/dashboard-financas",
    fullDescription: " O objetivo da Spout é conectar Pipas(vendedores de agua) para moradoes por meio de um app "

  },
  {
    id: "proj-3",
    title: "App de Entregas",
    description: "Interface mobile desenvolvida para conectar estafetas a estabelecimentos locais.",
    imageSrc: fotoProjeto,
    imageAlt: "Preview do projeto App de Entregas",
    projectUrl: "/projetos/app-entregas",
    fullDescription: " O objetivo da Spout é conectar Pipas(vendedores de agua) para moradoes por meio de um app "

  }
  ,
  {
    id: "proj-4",
    title: "Portfolio",
    description: "Mostrar os meus resultados reais, metodologias de trabalho e estudos de caso de forma prática..",
    imageSrc: fotoportfolio,
    imageAlt: "Preview do projeto App de Entregas",
    projectUrl: "/projetos/app-entregas",
    fullDescription: " O objetivo da Spout é conectar Pipas(vendedores de agua) para moradoes por meio de um app "

  }
];
