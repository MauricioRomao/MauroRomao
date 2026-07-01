import { StaticImageData } from 'next/image';
export interface CarouselSlide {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  bgColor: string;
}
