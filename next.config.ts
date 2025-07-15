import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.example.com'],
  },
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  },
  webpack: (config) => {
    config.cache = { type: 'filesystem' }
    return config
  },
}

export default nextConfig
