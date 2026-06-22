import Image from "next/image";
import MauroImage from "../../Images/mauro.jpg"
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaReact } from "react-icons/fa";

export default function Hero() {
  return (
    // Fundo claro e textos escuros padrão usando as classes do Tailwind
    <section className="container mx-auto px-4 md:px-8 py-12 lg:py-20 min-h-[calc(100vh-80px)] flex items-center bg-[#f5f6fb] text-slate-800">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

        {/* Lado Esquerdo - Conteúdo */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <span className="text-blue-600 text-sm md:text-base font-bold tracking-widest uppercase">
            HELLO
          </span>

          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            I'm GraphixPro
          </h1>

          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-medium text-slate-700">
            Senior Fullstack{" "}
            <span className="text-blue-600 font-semibold drop-shadow-[0_0_15px_rgba(37,99,235,0.15)]">
              Developer
            </span>
          </h2>

          <p className="mt-5 max-w-md mx-auto lg:mx-0 text-sm md:text-base text-slate-500 leading-relaxed">
            I'm a creative developer based in New York, and I'm very passionate and dedicated to my work.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 active:scale-95 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md">
              About Me
            </button>

            <div className="flex gap-5 text-slate-400">
              <a href="#" className="hover:text-blue-600 transition-colors"><FaFacebookF size={18} /></a>
              <a href="#" className="hover:text-pink-600 transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn size={18} /></a>
              <a href="#" className="hover:text-slate-900 transition-colors"><FaXTwitter size={18} /></a>
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem e Elementos Flutuantes */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 w-full min-h-[400px] md:min-h-[500px]">
          
          {/* Círculo de Fundo Suave */}
          <div className="absolute w-[280px] sm:w-[380px] md:w-[450px] aspect-square rounded-full border border-blue-100 bg-gradient-to-b from-blue-500/5 to-transparent" />

          {/* Container controlado para a foto de Perfil */}
          <div className="w-[240px] sm:w-[320px] md:w-[380px] aspect-square relative z-10 overflow-hidden rounded-full border-4 ">
  <Image
    src={MauroImage}
    alt="Mauro Romão"
    fill
    priority
    className="object-cover"
  />
</div>


          {/* Next.js - Cards brancos com sombras suaves para destacar no fundo claro */}
          <div className="absolute top-[10%] left-[5%] md:left-[12%] bg-white border border-slate-100 p-3 rounded-xl shadow-md flex items-center gap-2 z-20 animate-[bounce_4s_infinite_ease-in-out]">
            <RiNextjsFill className="text-xl sm:text-2xl text-slate-900" />
            <span className="text-xs font-semibold text-slate-700 pr-1">Next.js</span>
          </div>

          {/* Node.js */}
          <div className="absolute top-[35%] right-[2%] md:right-[5%] bg-white border border-slate-100 p-3 rounded-xl shadow-md flex items-center gap-2 z-20 animate-[bounce_4.5s_infinite_ease-in-out]">
            <FaNodeJs className="text-xl sm:text-2xl text-green-600" />
            <span className="text-xs font-semibold text-slate-700 pr-1">Node.js</span>
          </div>

          {/* React Native */}
          <div className="absolute bottom-[12%] left-[10%] md:left-[20%] bg-white border border-slate-100 p-3 rounded-xl shadow-md flex items-center gap-2 z-20 animate-[bounce_5s_infinite_ease-in-out]">
            <FaReact className="text-xl sm:text-2xl text-cyan-600 animate-[spin_12s_linear_infinite]" />
            <span className="text-xs font-semibold text-slate-700 pr-1">Native</span>
          </div>

        </div>

      </div>
    </section>
  );
}
