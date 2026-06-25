import { StaticImageData } from 'next/image';
export interface CarouselSlide {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  bgColor: string;
}
