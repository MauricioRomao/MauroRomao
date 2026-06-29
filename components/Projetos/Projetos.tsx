
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/Database/Projetos/Projetos";

export default function ListaProjetos() {
  return (
    <section className="w-full py-12 px-4 max-w-7xl mx-auto">

      <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight text-center md:text-left">
        Meus Projetos
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {projectsData.map((project) => (
          <article 
            key={project.id} 
            className="flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
        
            <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>


            <div className="flex flex-col flex-1 p-5 md:p-6 text-left">
              <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                {project.title}
              </h3>
              
              <p className="text-sm md:text-base text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                {project.description}
              </p>

    
              <div className="mt-auto">
                <Link
                  href={`/projetos/${project.id}`}
                  className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:text-blue-900 font-semibold hover:bg-slate-300 active:scale-[0.98] transition-all duration-200"
                >
                  Ver projeto
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
