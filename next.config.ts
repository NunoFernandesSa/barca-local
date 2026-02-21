import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**", // Permite todos os caminhos
      },
      // Se também usares localhost
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
      // Para produção (quando tiveres domínio real)
      // {
      //   protocol: 'https',
      //   hostname: 'api.seusite.com',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
