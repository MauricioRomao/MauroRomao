import { Metadata } from "next";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Educations from "@/components/Educations/Educations";
import { appMeta } from "@/Metadados/app.meta";

export const  metadata = appMeta 

export default  async function Home() {

  return (
     <>
      
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
