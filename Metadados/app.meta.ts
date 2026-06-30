import { Metadata } from "next";

const baseUrl = process.env.NODE_ENV === "development" 
    ? "http://localhost:3000" 
    : "https://vercel.app";



export const appMeta: Metadata = {
  title: {
    default: "Mauro Romão | Desenvolvedor de Software",
    template: "%s | Mauro Romão" 
  },
  description: "Portfólio profissional de Mauro Romão, Desenvolvedor de Software Angolano focado em criar soluções web modernas, escaláveis e de alta performance.",
  keywords: [
    "Mauro Romão",
    "Mauricio Romão",
    "Desenvolvedor de software Angolano",
    "Programador Angola",
    "Next.js Developer",
    "React Frontend Angola",
    "Portfólio Mauro Romão"
  ],
  authors: [{ name: "Mauro Romão", url: baseUrl }],
  creator: "Mauro Romão",
  metadataBase: new URL(baseUrl),
  
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  
  openGraph: {
    title: "Mauro Romão | Desenvolvedor de Software",
    description: "Explore o portfólio de Mauro Romão. Projetos modernos de desenvolvimento de software e soluções web.",
    url: baseUrl,
    siteName: "Mauro Romão Portfólio",
    locale: "pt_AO", //
    type: "profile",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "Mauro Romão - Desenvolvedor de Software Portfolio",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Mauro Romão | Desenvolvedor de Software",
    description: "Portfólio profissional de desenvolvimento de software.",
    images: ["/logo.png"],
  },
};

