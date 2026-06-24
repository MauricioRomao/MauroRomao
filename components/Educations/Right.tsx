"use client";

import { motion } from "framer-motion";
import { SetData } from "@/Database/Experience/Experience";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaVuejs
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiPostgresql
} from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
  HTML5: <FaHtml5 className="text-4xl text-orange-500" />,
  CSS3: <FaCss3Alt className="text-4xl text-blue-500" />,
  JavaScript: <FaJs className="text-4xl text-yellow-500" />,
  React: <FaReact className="text-4xl text-blue-500" />,
  "Node.js": <FaNodeJs className="text-4xl text-green-500" />,
  MongoDB: <SiMongodb className="text-4xl text-green-500" />,
  TypeScript: <SiTypescript className="text-4xl text-blue-500" />,
  "Next.js": <SiNextdotjs className="text-4xl text-white" />,
  MySQL: <SiMysql className="text-4xl text-white" />,
  Angular : <FaAngular className="text-4xl text-red-500" />,
  Vue : <FaVuejs className="text-4xl text-green-500" />,
  Post : <SiPostgresql className="text-4xl text-blue-500" />,
  Native: <FaReact className="text-4xl text-blue-400" />
};
const Experiencies = SetData()
export default function Right() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24 py-6 sm:py-10 lg:py-12">
      {Experiencies.map((item, index) => (
        <motion.div
          key={`${item.nomedaempresa}-${index}`}
          className="relative bg-slate-900/50 border border-slate-800/60 p-5 sm:p-8 rounded-2xl"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* LINHA VERTICAL */}
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-white/30" />

          {/* INÍCIO */}
          <div className="absolute left-[18px] sm:left-[26px] top-6 w-2.5 h-2.5 rounded-full bg-white" />

          {/* FIM */}
          <div className="absolute left-[18px] sm:left-[26px] bottom-6 w-2.5 h-2.5 rounded-full bg-white/60" />

          {/* CONTEÚDO */}
          <div className="pl-10 sm:pl-14">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white border border-white/20">
                {item.ano} - {item.nomedaempresa}
              </span>

              <span className="text-xs text-slate-500">
                {item.empresa}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white">
              {item.funcao}
            </h3>

            <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
              {item.descricao}
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              {item.tecnologias.map((tech) => (
                <div key={tech}>
                  {techIcons[tech] ?? (
                    <span className="text-slate-400 text-sm">{tech}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}