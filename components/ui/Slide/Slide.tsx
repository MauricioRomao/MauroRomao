
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';


import { slideData } from '@/Database/Slides/Slide';

export default function Slide() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: any) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <div className="w-full h-30 space-y-4 font-semibold">
      <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing font-semibold"  ref={emblaRef}>
        <div className="flex select-none">
          {slideData.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 px-2">
              
              <div 
                style={{ backgroundColor: slide.bgColor }}
                className="w-full max-w-md md:max-w-5xl mx-auto rounded-[2rem] p-6 sm:p-8 md:p-10 font-sans border border-neutral-200/40 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
                  
                  {/* Lado Esquerdo - Textos e*/}
                  <div className="flex flex-col flex-1 min-w-0 text-left">
                    <h2 className="text-xl sm:text-2xl md:text-4xl  lg:text-5xl font-black font-semibold leading-tight text-gray-950 tracking-tight">
                      {slide.title}
                    </h2>
                    
                    <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-500/90 leading-snug">
                      {slide.description}
                    </p>
                    
                  
                  </div>

                  {/* Lado Direito - Imagem */}
                  <div className="hidden md:block relative md:h-56 md:w-72 lg:h-64 lg:w-96 shrink-0 overflow-hidden rounded-3xl border border-neutral-200/20 bg-white/50">
                    <Image
                      src={slide.imageSrc} 
                      alt={slide.imageAlt}
                      fill
                      className="object-contain object-center"
                      priority
                    />
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    
      <div className="flex items-center justify-center gap-1.5 pt-1">
        {slideData.map((_, index) => {
          const isCurrent = selectedIndex === index;
          return (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ir para o slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                isCurrent 
                  ? 'w-6 bg-black' 
                  : 'w-1.5 bg-neutral-200 hover:bg-neutral-400'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
