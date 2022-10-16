/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  async redirects() {
    return [
      {
        source: "/events",
        destination: "/events/upcoming",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/about/main-branch",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
