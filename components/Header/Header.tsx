import Link from "next/link";
import Image from "next/image";
import MauroLogo from "../../Images/logo.png";

// Importação dos ícones para o menu inferior móvel
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { FaBookOpen, FaGear } from "react-icons/fa6";

export default function Header() {
    return (
        <>
            {/* Header Superior - Desktop e Base Mobile */}
            <header className="w-full backdrop-blur-md sticky top-0 z-50 transition-all border-b bg-white/80">
                <div className="container mx-auto flex items-center justify-between py-5 px-4 md:px-6">

                    {/* Link do Logótipo */}
                    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <div className="w-8 h-8 relative">
                            <Image
                                src={MauroLogo}
                                alt="Logo Mauro Romão"
                                fill
                                className="object-contain w-60"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Menu Desktop - Escondido em mobile (md:flex) */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</Link>
                        <Link href="#portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link>
                        <Link href="#serviços" className="hover:text-blue-600 transition-colors">Serviços</Link>
                        <Link href="#blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                        <Link href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
                    </nav>

                    {/* Botão de Download CV */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="/Mauro.pdf"
                            download="Mauro.pdf"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition flex items-center gap-4"
                        >
                            Donwload CV
                        </a>
                    </div>
                </div>
            </header>

            {/* Menu Inferior Fixo - Apenas visível em Mobile (md:hidden) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 z-50 px-2 py-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                <div className="flex justify-around items-center max-w-md mx-auto">
                    
                    <Link href="/" className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-blue-600 active:scale-95 transition-all w-14 py-1">
                        <FaHome size={20} />
                        <span className="text-[10px] font-medium">Home</span>
                    </Link>

                    <Link href="#sobre" className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-blue-600 active:scale-95 transition-all w-14 py-1">
                        <FaUser size={18} />
                        <span className="text-[10px] font-medium">Sobre</span>
                    </Link>

                    <Link href="#portfolio" className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-blue-600 active:scale-95 transition-all w-14 py-1">
                        <FaBriefcase size={18} />
                        <span className="text-[10px] font-medium">Portfolio</span>
                    </Link>

                    <Link href="#serviços" className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-blue-600 active:scale-95 transition-all w-14 py-1">
                        <FaGear size={18} />
                        <span className="text-[10px] font-medium">Serviços</span>
                    </Link>

                    <Link href="#blog" className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-blue-600 active:scale-95 transition-all w-14 py-1">
                        <FaBookOpen size={18} />
                        <span className="text-[10px] font-medium">Blog</span>
                    </Link>

                    <Link href="#contacto" className="flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-blue-600 active:scale-95 transition-all w-14 py-1">
                        <FaEnvelope size={18} />
                        <span className="text-[10px] font-medium">Contacto</span>
                    </Link>

                </div>
            </nav>
        </>
    );
}
