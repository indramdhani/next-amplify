/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/new-path',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/new-path',
        basePath: false,
        permanent: false
      }
    ];
  }
};

module.exports = nextConfig;
