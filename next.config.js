const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/media',
            destination: '/',
            permanent: true,
          },
          {
            source: '/melisalitvin',
            destination: '/',
            permanent: true,
          },
          {
            source: '/nosotros',
            destination: '/es/about',
            permanent: true,
          },
          {
            source: '/novedades',
            destination: '/',
            permanent: true,
          },
        ]
    }
};
 
module.exports = withNextIntl(nextConfig);
