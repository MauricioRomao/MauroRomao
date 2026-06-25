import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import Slide from "@/components/ui/Slide/Slide";
import ListaProjetos from "@/components/Projetos/Projetos";

export default function Teste() {
    console.log("PAGE TESTE RENDERIZOU");

    return (
        <div className="min-h-screen pb-20 md:pb-0 bg-slate-50 text-slate-900 selection:bg-purple-500/30">
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

            <section className="p-10">
                <Slide />
            </section>
            <section className="p-10 pt-52">
                <ListaProjetos />
            </section>

        </div>
    );
}
