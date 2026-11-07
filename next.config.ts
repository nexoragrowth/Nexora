import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // La página /vsl-1 ya no existe: quien entre por un link viejo cae en la home.
      { source: "/vsl-1", destination: "/", permanent: true },
      // El caso de MB Cell se sacó de la web (2026-11-07): los links viejos van a los proyectos.
      { source: "/casos/mbcell", destination: "/#proyectos", permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: "/vsl-1/pitch-deck", destination: "/vsl-1/pitch-deck/index.html" },
    ];
  },
};

export default nextConfig;
