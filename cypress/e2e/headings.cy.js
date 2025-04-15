
require('dotenv').config();

const sitemapUrl = Cypress.env('SITE_URL') + '/sitemap.xml';
describe('Sitemap Routes', () => {
  
  it('should contain valid H1 tags on each page', () => {
    cy.log(sitemapUrl);

    cy.task('getRoutesFromSitemap', sitemapUrl).then((routes) => {
      routes.forEach((route) => {
        cy.visit(route);
        cy.get('h1').then(($h1) => {
          if ($h1.length === 0) {
            const errorMessage = `❌ Missing H1 tag on ${route} at ${new Date().toISOString()}`;
            cy.task('writeErrorLog', { message: errorMessage });
          } else {
            cy.log(`✅ Found H1 on ${route}`);
          }
        });
      });
    });
  });
});
