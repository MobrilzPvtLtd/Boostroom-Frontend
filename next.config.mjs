/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`, // Corrected URL construction
      },
    ];
  },
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
