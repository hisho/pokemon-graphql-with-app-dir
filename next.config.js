/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['img.pokemondb.net'],
  },
}

module.exports = nextConfig
