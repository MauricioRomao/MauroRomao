import Link from 'next/link'
import Image from "next/image"
import { DataServicos } from '@/Database/Servicos/servicos'
import { FaArrowLeft } from "react-icons/fa";

import LogoImagem from "@/Images/logo.png"
export default function ServicesPage() {
  
    return (


        <>

    
            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="container mx-auto flex items-center  justify-between py-4 px-4 md:px-6">

                    <div className="flex items-center gap-3">
                        <Link
                            href="/" 
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors group"
                        >
                            <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-0.5" />
                            Voltar para Home
                        </Link>
                        
                    </div>
                </div>
            </header>

    <section className="bg-[#f8f9fa] min-h-screen py-20 flex flex-col items-center justify-center">

      <div className="text-center max-w-xl mx-auto mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight mb-4">
          Meus Serviços
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          Vamos tirar a sua ideia do papel? Estou pronto para desenvolver o seu projeto através de soluções em programação.
        </p>
      </div>



       <div className="text-center max-w-xl mx-auto mb-16 px-4">
        
         <Image 
       
        src={LogoImagem} 
        alt="Mauro Romão" 
        priority 
        style={{width:"100px"}}
      />

      </div>


      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl mx-auto px-4">
        {DataServicos.map((service) => (
          <div 
            key={service.id} 
            className="flex flex-col items-center text-center p-8 bg-white border border-gray-100 rounded-3xl transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/70"
          >
            <div className={`w-12 h-12 rounded-full ${service.iconBg} ${service.iconColor} flex items-center justify-center mb-6 font-bold text-lg`}>
              ✦
            </div>
            
            <h3 className="text-gray-900 font-bold text-xl mb-3 tracking-tight">
              {service.title}
            </h3>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {service.description}
            </p>
            <Link 
              href={`https://api.whatsapp.com/send?phone=+244921401948&text=Oi, Mauro  ! Gostaria de saber mais sobre ${service.title}`}
              target='_blank'
              className={`${service.iconColor} text-xs font-semibold uppercase tracking-wider hover:underline inline-flex items-center gap-1 mt-auto`}
            >
              Saber Mais <span className="text-sm">→</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link 
          href="/projetos" 
          className="inline-block bg-slate-800 hover:bg-slate-600 text-white font-medium text-sm px-8 py-3 rounded-full transition-colors duration-250 shadow-md shadow-pink-500/10"
        >
          Ver projetos →
        </Link>
      </div>
    </section>
    </>
    )
}
