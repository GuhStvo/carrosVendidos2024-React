/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    console.log(config); // Exibe a configuração no terminal
    return config;
  },
};

export default nextConfig;