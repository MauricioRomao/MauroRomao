import Link from "next/link";
import Image from "next/image";
import MauroLogo from "../../Images/logo.png"

export default function Header() {
  return (
    // Adicionado px-4 para o conteúdo não colar nas bordas em telemóveis e backdrop-blur opcional para efeito premium
    <header className="w-full  backdrop-blur-md sticky top-0 z-50 transition-all border-b ">
      <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-6">
        
        {/* Link do Logótipo estruturado com o SVG gerado */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          {/* Certifique-se de salvar o ficheiro logo.svg na pasta public/ */}
          <div className="w-8 h-8 relative">
            <Image 
              src={MauroLogo} 
              alt="Logo  Mauro Romão" 
              fill
              className="object-contain w-60"
              priority
            />
          </div>
         
        </Link>

        {/* Menu de Navegação - Escondido em mobile, visível a partir de md (tablets) com hover states modernos */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
          <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="#blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </nav>

        {/* Botão de Ação - px reduzido em ecrãs pequenos (sm:) para evitar sobreposição */}
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-blue-600 hover:bg-blue-500 active:scale-95 px-4 sm:px-6 py-2 text-xs sm:text-sm text-white font-semibold tracking-wide cursor-pointer transition-all shadow-md shadow-blue-600/10">
            Download CV
          </button>
        </div>

      </div>
    </header>
  );
}
