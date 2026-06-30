

import { Metadata } from "next";
import { projectsData } from "@/Database/Projetos/Projetos";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function getProjectMetadata({ params }: ProjectPageProps): Promise<Metadata> {
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
    openGraph: {
      title: project.title,
      description: project.description,
      url: `${baseUrl}/projetos/${id}`,
      siteName: "Mauro Romão Portfólio",
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
      title: project.title,
      description: project.description,
      images: [absoluteImageUrl],
    },
  };
}
