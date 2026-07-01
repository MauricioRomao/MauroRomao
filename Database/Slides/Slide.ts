import React from 'react';
import fotoRefund from "@/Images/backend-development.jpg";
import {CarouselSlide} from "@/Types/Slide/CarouselSlide"

export const slideData: CarouselSlide[] = [
  {
    id: 'slide-1',
    title: React.createElement(React.Fragment, null, "Backend Developer.", React.createElement("br"), ),
    description: React.createElement(React.Fragment, null, "3 anos de experiência profissional com Backend.", React.createElement("br"), "projetar, construir e manter."),
    imageSrc: fotoRefund,
    imageAlt: 'Macarons de chocolate',
    bgColor: '#E8F4FD'
  },
  {
    id: 'slide-2',
    title: React.createElement(React.Fragment, null, "frontend", React.createElement("br"), "Developer"),
    description: React.createElement(React.Fragment, null, "4 anos de experiência profissional.", React.createElement("br"), "interfaces interativas, otimização de performance."),
    imageSrc: fotoRefund, 
    imageAlt: '',
    bgColor: '#F5F5F5' 
  },
  {
    id: 'slide-3',
    title: React.createElement(React.Fragment, null, "DevOps & Cloud", React.createElement("br"), ""),
    description: React.createElement(React.Fragment, null, "automatizar a infraestrutura.", React.createElement("br"), "segurança e alta escala."),
    imageSrc: fotoRefund,
    imageAlt: 'devOps e Cloud',
    bgColor: '#FAFAF9'
  }
];
