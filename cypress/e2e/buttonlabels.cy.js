const sitemapUrl = Cypress.env('SITEMAP_URL');

if (!sitemapUrl) {
  throw new Error('Missing SITEMAP_URL. Set it via .env');
}

describe('Sitemap Routes - Button Accessibility', () => {
  let routes = [];

  before(() => {
    cy.task('getRoutesFromSitemap', sitemapUrl).then((res) => {
      routes = res;
    });
  });

  it('Should validate that <button> elements have an aria-label when buttons exist', () => {
    routes.forEach((route) => {
      cy.log(`Testing button aria-labels on route: ${route}`);
      cy.visit(route);
      
      // Check if there is at least one button on the page
      cy.get('body').then(($body) => {
        // Check if there are any buttons on the page
        const buttonExists = $body.find('button').length > 0;
  
        if (buttonExists) {
          cy.log(`Button exists on the page! -  ${route}`);
            cy.get('button').then(($buttons) => {
              // If there are buttons, perform the tests
              if ($buttons.length > 0) {
                cy.wrap($buttons).each(($button) => {
                  cy.wrap($button)
                    .should('have.attr', 'aria-label')
                    .and('not.be.empty');
                });
              } 
            });
        } else {
          cy.log('No buttons found on this page.');
        }
      });
    });
  });
});
