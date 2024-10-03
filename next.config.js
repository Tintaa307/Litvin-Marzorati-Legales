const createNextIntlPlugin = require("next-intl/plugin")

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/media",
        destination: "/",
        permanent: true,
      },
      {
        source: "/melisalitvin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/nosotros",
        destination: "/es/about",
        permanent: true,
      },
      {
        source: "/novedades",
        destination: "/",
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "instagram.faep8-1.fna.fbcdn.net",
      },
    ],
  },
}

module.exports = withNextIntl(nextConfig)
