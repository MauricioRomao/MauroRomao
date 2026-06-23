"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white-950 text-slate-100 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md"
      >
        {/* 404 */}
        <h1 className="text-6xl sm:text-7xl font-bold text-purple-500">
          404
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-4">
          Página não encontrada
        </h2>

        {/* Description */}
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
          A página que estás a tentar aceder não existe ou foi movida.
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800 my-6" />

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-white text-sm font-medium"
        >
          Voltar ao início
        </Link>
      </motion.div>
    </div>
  );
}