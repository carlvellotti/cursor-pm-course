/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cursorforpms.com',
  outDir: 'out', // write directly into the static export (postbuild runs after next build copies public/)
  generateRobotsTxt: true,
  generateIndexSitemap: false, // Don't need index for <50k URLs
  exclude: ['/company-context/*'], // Exclude reference pages from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*'],
      },
    ],
  },
}
