import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { absoluteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/projects", "/about", "/contact"];
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: absoluteUrl(route),
  }));
}
