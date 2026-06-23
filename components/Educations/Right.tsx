import { motion } from "framer-motion";

import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiMongodb, SiTypescript, SiReactivex } from "react-icons/si";

export default function Right() {
    return (

        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-24 py-6 sm:py-10 lg:py-12">

            {/* ITEM 1 */}
            <motion.div
                className="relative bg-slate-900/50 border border-slate-800/60 p-5 sm:p-8 rounded-2xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                {/* LINHA VERTICAL BRANCA */}
                <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-white/30" />

                {/* INÍCIO */}
                <div className="absolute left-[18px] sm:left-[26px] top-6 w-2.5 h-2.5 rounded-full bg-white" />

                {/* FIM */}
                <div className="absolute left-[18px] sm:left-[26px] bottom-6 w-2.5 h-2.5 rounded-full bg-white/60" />

                {/* CONTEÚDO */}

                <div className="pl-10 sm:pl-14">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white border border-white/20">
                            2020 - Jodakier
                        </span>

                        <span className="text-xs text-slate-500">
                            Empresa
                        </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                        Frontend Developer
                    </h3>

                    <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                        Primeira experiência como Dev...

                    </p>
                    <div className="flex ">
                        <FaCss3Alt className="text-4xl text-blue-500" />
                        <FaHtml5 className="text-4xl text-orange-500" />
                        <FaJs className="text-4xl text-yellow-500" />
                    </div>

                </div>
            </motion.div>




            {/* Segundo Elemento*/}

            <motion.div
                className="relative bg-slate-900/50 border border-slate-800/60 p-5 sm:p-8 rounded-2xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                {/* LINHA VERTICAL BRANCA */}
                <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-white/30" />

                {/* INÍCIO */}
                <div className="absolute left-[18px] sm:left-[26px] top-6 w-2.5 h-2.5 rounded-full bg-white" />

                {/* FIM */}
                <div className="absolute left-[18px] sm:left-[26px] bottom-6 w-2.5 h-2.5 rounded-full bg-white/60" />

                {/* CONTEÚDO */}

                <div className="pl-10 sm:pl-14">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white border border-white/20">
                            2023 - Andromeda
                        </span>

                        <span className="text-xs text-slate-500">
                           Startup
                        </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                       Backend Developer
                    </h3>

                    <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                        Implementação de E-commerce...

                    </p>
                    <div className="flex ">
                        <FaNodeJs className="text-4xl text-green-500" />
                        <SiMongodb className="text-4xl text-green-500" />
                        <SiTypescript className="text-4xl text-blue-500" />
                    </div>

                </div>
            </motion.div>




             {/* Terceiro Elemento*/}

            <motion.div
                className="relative bg-slate-900/50 border border-slate-800/60 p-5 sm:p-8 rounded-2xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                {/* LINHA VERTICAL BRANCA */}
                <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-white/30" />

                {/* INÍCIO */}
                <div className="absolute left-[18px] sm:left-[26px] top-6 w-2.5 h-2.5 rounded-full bg-white" />

                {/* FIM */}
                <div className="absolute left-[18px] sm:left-[26px] bottom-6 w-2.5 h-2.5 rounded-full bg-white/60" />

                {/* CONTEÚDO */}

                <div className="pl-10 sm:pl-14">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white border border-white/20">
                            2024 - Spout 
                        </span>

                        <span className="text-xs text-slate-500">
                           Startup
                        </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                       Frontend Developer
                    </h3>

                    <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                         A Spout é uma plataforma inovadora que conecta       consumidores a fornecedores de transporte de água (caminhões-pipa e cisternas)....

                    </p>
                    <div className="flex ">
                        <SiReactivex className="text-4xl text-white-500" />
                      
                    </div>

                </div>
            </motion.div>



            {/* Quarto Elemento*/}

            <motion.div
                className="relative bg-slate-900/50 border border-slate-800/60 p-5 sm:p-8 rounded-2xl"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
            >
                {/* LINHA VERTICAL BRANCA */}
                <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-white/30" />

                {/* INÍCIO */}
                <div className="absolute left-[18px] sm:left-[26px] top-6 w-2.5 h-2.5 rounded-full bg-white" />

                {/* FIM */}
                <div className="absolute left-[18px] sm:left-[26px] bottom-6 w-2.5 h-2.5 rounded-full bg-white/60" />

                {/* CONTEÚDO */}

                <div className="pl-10 sm:pl-14">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white border border-white/20">
                            2025 - SoftMedia 
                        </span>

                        <span className="text-xs text-slate-500">
                           Empresa
                        </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white">
                       Frontend Developer
                    </h3>

                    <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
                         
                         Trabalhei como formador e Dev interno.

                    </p>
                    <div className="flex ">
                        <SiNextdotjs className="text-4xl text-white-500" />
                        <FaReact className="text-4xl text-blue-500" />
                        <SiMysql className="text-4xl text-white" />
                        <SiTypescript className="text-4xl text-blue-500" />
                      
                    </div>

                </div>
            </motion.div>





        </div>

    )
}

