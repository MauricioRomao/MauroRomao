import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false, // ajuda em redes problemáticas
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Definido bg-slate-950 e text-slate-100 para garantir que o Dark Mode seja o padrão nativo */}
      <body className={`${poppins.className} bg-slate-950 text-slate-100 antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}