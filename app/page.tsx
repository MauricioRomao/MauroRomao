import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Educations from "@/components/Educations/Educations";

export default function Home() {
  return (
     <>
       {/* pb-20 garante que o menu fixo inferior não tape o conteúdo em mobile */}
       <div className="min-h-screen pb-20 md:pb-0">
          <Header />
          <main>
             <Hero />
             <Educations/>
          </main>
       </div>
     </>
  );
}
