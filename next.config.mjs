/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scanslot.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
