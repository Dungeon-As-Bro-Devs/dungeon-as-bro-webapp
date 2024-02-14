/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other Next.js configuration options...
    async headers() {
      return [
        {
          source: '/fonts/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };

module.exports = nextConfig
