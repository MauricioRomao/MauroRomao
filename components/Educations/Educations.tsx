"use client";

import { motion } from "framer-motion";
import Right from "./Right";
export default function Educations() {
  return (
    <div className="min-h-[200vh] bg-slate-950 text-white selection:bg-purple-500/30 ">

      <section className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 relative">

        {/* ================= LEFT (STICKY CARD) ================= */}
        <div className="lg:sticky lg:top-24 h-fit self-start">

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">


            <h2 className="text-2 sm:text-3xl font-bold text-white mt-3">
              Experiência Educacional E  Profissional
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3">
              2020 - 2024  (IMAG)
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3">
             Informatica de Gestão
            </p>

            <div className="w-full h-2 bg-gradient-to-r from-white to-black-500 rounded-full mt-5 animate-pulse" />

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3">
              2024 - Momento (IMETRO)
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3">
              Estudante do 2 no curso de Ciências da Computação
            </p>

            {/* indicador visual */}
          </motion.div>
        </div>

        {/* ================= RIGHT (SCROLL CONTENT) ================= */}
        <Right />
      </section>
    </div>
  );
}