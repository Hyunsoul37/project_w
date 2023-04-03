//next.config.js
/** @type {import('next').NextConfig} */

const { hostname } = require("os");

const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "custom",
    remotePatterns: [
      {
        hostname: "winetoy.s3.ap-northeast-2.amazonaws.com",
      },
    ],
    formats: ["image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        //destination: `http://winetoy.shop/api/:path*`,
        destination: `http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/:path*`,
      },
      {
        source: "/:first/api/:path*",
        //destination: `http://winetoy.shop/api/:path*`,
        destination: `http://ec2-3-35-233-57.ap-northeast-2.compute.amazonaws.com:8080/api/:path*`,
      },
    ];
  },
};
module.exports = nextConfig;
