/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm Custom Repository',
    description: 'This is a custom kasm repository',
    icon: '/img/logo.svg',
    listUrl: ' https://J1810Z.github.io/kasm_registry/',
    contactUrl: 'https://github.com/J1810Z/kasm_registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
