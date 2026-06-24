import type { Metadata } from "next";

export const siteConfig = {
  name: "Sulav Baral",
  shortName: "Sulav Baral",
  defaultTitle: "Sulav Baral — AI Engineer & Software Developer",
  description:
    "The personal portfolio of Sulav Baral, an AI Engineer and Software Developer building practical systems across applied AI, data engineering, machine learning, automation, and backend development.",
  githubProfile: "https://github.com/Sulav-17",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title: {
      absolute: title,
    },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${siteConfig.shortName} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/twitter-image")],
    },
  };
}
