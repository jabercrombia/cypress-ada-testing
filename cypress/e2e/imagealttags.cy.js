const sitemapUrl = Cypress.env('SITEMAP_URL');

if (!sitemapUrl) {
  throw new Error('Missing SITEMAP_URL. Set it via .env');
}

describe('Sitemap Routes - Image Alt Tag Validation', () => {
  let routes = [];

  before(() => {
    cy.task('getRoutesFromSitemap', sitemapUrl).then((res) => {
      routes = res;
    });
  });

  it('Should validate that all <img> tags have alt attributes', () => {
    routes.forEach((route) => {
      cy.log(`Testing image alt tags on route: ${route}`);
      cy.visit(route);
      cy.get('img').each(($img) => {
        cy.wrap($img)
          .should('have.attr', 'alt')
          .and('not.be.empty');
      });
    });
  });
});
