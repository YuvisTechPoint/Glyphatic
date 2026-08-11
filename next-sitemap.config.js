/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.paloaltonetworks.in',
  generateRobotsTxt: true,
  exclude: ['/studio/*'], // Exclude CMS studio from sitemap
}
