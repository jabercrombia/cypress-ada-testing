const { XMLParser } = require('fast-xml-parser');
const { fetch } = require('undici'); // or use node-fetch if preferred

async function parseSitemap(url) {
  const res = await fetch(url);
  const xml = await res.text();
  const parser = new XMLParser();
  const parsed = parser.parse(xml);

  if (parsed.sitemapindex) {
    const sitemaps = Array.isArray(parsed.sitemapindex.sitemap)
      ? parsed.sitemapindex.sitemap
      : [parsed.sitemapindex.sitemap];

    const allRoutes = [];
    for (const sm of sitemaps) {
      const nestedRoutes = await parseSitemap(sm.loc);
      allRoutes.push(...nestedRoutes);
    }
    return allRoutes;
  }

  if (parsed.urlset) {
    const urls = Array.isArray(parsed.urlset.url)
      ? parsed.urlset.url
      : [parsed.urlset.url];

    return urls.map((u) => new URL(u.loc).pathname);
  }

  return [];
}

module.exports = { parseSitemap };
