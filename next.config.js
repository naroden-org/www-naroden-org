/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'output',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
