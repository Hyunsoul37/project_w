//next.config.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://winetoy.shop/api/:path*`,
      },
    ];
  },
};
module.exports = nextConfig;
