import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Huzaifa Sys — Full Stack AI Engineer",
    short_name: "Huzaifa Sys",
    description:
      "Full Stack AI Engineer architecting scalable web applications, autonomous agent workflows, and resilient cloud systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0A66C2",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
