import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { projectsData } from "@/Database/Projetos/Projetos";


interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjetoDetalhe({ params }: ProjectPageProps) {


  const { id } = await params;
  
  
  
  const project = projectsData.find((p) => p.id === id);
  if (!project) {
    notFound();
  }
  const href =  `https://api.whatsapp.com/send?phone=+244921401948&text=Gostaria de Conversar sobre o ${project.title}, Mauro?`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">

      {/* Barra de Navegação Superior / Voltar */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto flex items-center py-4 px-4 md:px-6 max-w-5xl">
          <Link
            href="/projetos" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors group"
          >
            <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-0.5" />
            Voltar para Projetos
          </Link>
        </div>
      </header>

      {/* Conteúdo Principal do Detalhe */}
      <main className="container mx-auto py-10 px-4 md:px-6 max-w-5xl">
        <article className="bg-slate-50 rounded-3xl  shadow-sm overflow-hidden p-6 md:p-10">
          
          {/* Título e Cabeçalho */}
          <header className="mb-6 md:mb-8 text-left">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {project.title}
            </h1>
            <div className="h-1 w-20 bg-blue-600 rounded-full" />
          </header>

          {/* Imagem em Destaque */}
          <div className="relative aspect-video w-full rounded-2xl bg-slate-100 overflow-hidden mb-8 md:mb-10 shadow-inner">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1024px"
              className="object-cover object-center"
            />
          </div>

          {/* Grid de Informações e Descrição */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Lado Esquerdo: Descrição Detalhada */}
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Sobre o Projeto
              </h2>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                {project.description}
              </p>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    {project.fullDescription}
              </p>
            </div>

            {/* Lado Direito: Metadados e Botão de Ação */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/80 flex flex-col justify-between h-fit gap-6">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  Detalhes Técnicos
                </h3>
                <ul className="space-y-2 text-sm font-medium text-slate-700">
                  <li className="flex justify-between py-1 border-b border-slate-200/60">
                   
                  </li>
                  <li className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Status:</span>
                    <span className="text-green-600 font-semibold">Concluido</span>
                  </li>
                </ul>
              </div>

              {/* Link para o site real ou repositório */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:text-blue-900 font-semibold hover:bg-slate-300 active:scale-[0.99] transition-all duration-200 shadow-sm hover:shadow"
              >
                 Conversar Sobre o projecto

                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

          </div>

        </article>
      </main>
    </div>
  );
}
