import { Poppins } from "next/font/google";
import "./globals.css";
import icon from "../Images/logo.png"


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  icons: {
    icon: [
      {
        url: '/logo.png', // Caminho direto a partir da pasta public (sem chaves e sem import)
        sizes: '192x192',       
        type: 'image/png',
      },
    ],
  },
};

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
