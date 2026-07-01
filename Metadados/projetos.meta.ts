import { Metadata } from "next";
import { projectsData } from "@/Database/Projetos/Projetos";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {};
  }

  const baseUrl = process.env.NODE_ENV === "development" 
    ? "http://localhost:3000" 
    : "https://vercel.app";

  const imageSrcString = typeof project.imageSrc === "string" 
    ? project.imageSrc 
    : (project.imageSrc as any)?.src || "";

  const absoluteImageUrl = imageSrcString.startsWith("http")
    ? imageSrcString
    : `${baseUrl}${imageSrcString.startsWith("/") ? "" : "/"}${imageSrcString}`;

  return {
    title: `${project.title} | Mauro Romão`,
    description: project.description,
    keywords: [
      project.title,
      "Mauro Romão",
      "Desenvolvedor de software Angolano",
      "Portfólio Mauro Romão",
      "Projetos Web"
    ],
    authors: [{ name: "Mauro Romão", url: baseUrl }],
    creator: "Mauro Romão",
    metadataBase: new URL(baseUrl),
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
      apple: "/favicon.png",
    },
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
      title: `${project.title} | Mauro Romão`,
      description: project.description,
      url: `${baseUrl}/projetos/${id}`,
      siteName: "Mauro Romão Portfólio",
      locale: "pt_AO",
      type: "website",
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: project.imageAlt || `Preview do projeto ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Mauro Romão`,
      description: project.description,
      images: [absoluteImageUrl],
    },
  };
}
