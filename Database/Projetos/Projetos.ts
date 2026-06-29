import BisnoImage from "@/Images/bisno.png"
import fotoportfolio from "@/Images/portfolio.png";
import  EscaladaImage from "@/Images/escalada.jpg"
import SpoutImage from "@/Images/Spout.png"
import Metrofood from "@/Images/metrofood.png"
import { Project } from "@/Types/Projects/Project"


export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Bisno",
    description: "Plataforma completa de vendas e painel administrativo.",
    imageSrc: BisnoImage,
    imageAlt: "Preview do projeto E-commerce Bisno",
    projectUrl: "/projetos/ecommerce-bisno",
    fullDescription:"Plataforma de micro-anúncios desenvolvida para dinamizar o comércio local em Angola. O sistema permite que utilizadores registados publiquem produtos mediante uma taxa fixa de 200 AOA, automatizando a indexação e a entrega visual desses anúncios para potenciais compradores, otimizando o ciclo de conversão e venda."
  },
  {
    id: "proj-2",
    title: "MetroFood",
    description: "O projeto aborda a necessidade de uma ferramenta de comércio ágil e acessível para a comunidade estudantil.",
    imageSrc: Metrofood,
    imageAlt: "Preview do projeto Dashboard Finanças",
    projectUrl: "/projetos/dashboard-financas",
    fullDescription: " Plataforma de marketplace C2C (Consumer-to-Consumer) desenhada exclusivamente para o ambiente académico(Imetro). O sistema permite que estudantes atuem como vendedores, publicando o seu catálogo de produtos de forma autónoma, enquanto outros estudantes navegam pela plataforma e efetuam pedidos de compra, centralizando e dinamizando a economia interna da comunidade estudantil. "

  },
  {
    id: "proj-3",
    title: "Spout",
    description: "O objetivo da Spout é conectar Pipas(vendedores de agua) para moradoes por meio de um app.",
    imageSrc: SpoutImage,
    imageAlt: "Preview do projeto App de Entregas",
    projectUrl: "/projetos/app-entregas",
    fullDescription:" Participei no desenvolvimento de uma Plataforma de intermediação e logística urbana projetada para otimizar a distribuição de água potável. O sistema atua como um agregador de serviços, conectando motoristas de camiões-cisterna (pipas) a moradores locais através de uma aplicação móvel, automatizando o processo de solicitação, geolocalização e correspondência entre a oferta e a procura. Startup-cPresorver"

  }
  ,
  {
    id: "proj-4",
    title: "Portfolio",
    description: "Mostrar os meus resultados reais, metodologias de trabalho e estudos de caso de forma prática..",
    imageSrc: fotoportfolio,
    imageAlt: "Preview do projeto App de Entregas",
    projectUrl: "/projetos/app-entregas",
    fullDescription:" Website pessoal e portfólio digital desenvolvido para centralizar, documentar e expor o meu percurso e evolução técnica no desenvolvimento de software. A plataforma serve como um ecossistema de demonstração prática, onde apresento projetos reais, arquiteturas aplicadas, artigos técnicos e o meu domínio com as tecnologias de mercado."

  },
   {
    id: "proj-5",
    title: " Escalada Milionaria",
    description: "Site para uma empresa de MArketing.",
    imageSrc: EscaladaImage,
    imageAlt: "Preview do projeto App de Entregas",
    projectUrl: "/projetos/app-entregas",
    fullDescription: "Website institucional desenvolvido para a empresa Escalada Milionária com o objetivo de centralizar, estruturar e apresentar o seu catálogo de serviços ao mercado. O projeto foca-se na criação de uma interface intuitiva, otimizada para conversão e alinhada com a identidade visual da marca "

  }
];
