/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'boostroom.mobrilz.digital',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'boostroom.mobrilz.digital',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
