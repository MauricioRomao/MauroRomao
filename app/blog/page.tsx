"use client"
import { FaArrowLeft } from "react-icons/fa"

import Link from "next/link"
import { motion } from "framer-motion";

export default function NotFound() {

    

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


    <div className="min-h-screen bg-white-950 text-slate-100 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md"
      >

        <h1 className="text-6xl sm:text-7xl font-bold text-slate-700">
          Estou a prepara um artigo que será do seu interesse.
        </h1>


        <h2 className="text-xl sm:text-2xl font-semibold mt-4">
          Pagina estara disponivel no dia 5 de Julho.
        </h2>


        <p className="text-slate-800 text-sm sm:text-base mt-3 leading-relaxed">
            Pagina estará disponivel no dia 5 de Julho.
        </p>

     
        <div className="w-full h-px bg-slate-800 my-6" />

        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 transition text-white text-sm font-medium"
        >
          Voltar para Home
        </Link>
      </motion.div>
    </div>

    </>
  );
}