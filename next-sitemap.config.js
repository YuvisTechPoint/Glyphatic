/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.glyphatic.com',
  generateRobotsTxt: true,
  exclude: ['/studio/*'],
}
