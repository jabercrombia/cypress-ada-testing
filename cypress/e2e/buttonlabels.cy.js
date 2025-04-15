describe('Buttons Accessibility', () => {
  const routeEnv = Cypress.env('ROUTES');

  if (!routeEnv) {
    it('No ROUTES environment variable set', () => {
      throw new Error('Missing ROUTES. Set it via .env or CLI');
    });
    return;
  }

  const routes = routeEnv
    .split(',')
    .map((r) => r.trim().startsWith('/') ? r.trim() : '/' + r.trim());

  if (!routes.includes('/')) {
    routes.push('/');
  }

  routes.forEach((route) => {
    it(`should have accessible button labels on ${route}`, () => {
      cy.visit(route);

      cy.get('body').then(($body) => {
        if ($body.find('button').length > 0) {
          cy.get('button').each(($button) => {
            cy.wrap($button)
              .should(($btn) => {
                const hasText = $btn.text().trim().length > 0;
                const hasAriaLabel = $btn.attr('aria-label')?.trim().length > 0;
                expect(hasText || hasAriaLabel, 'button should have text or aria-label').to.be.true;
              });
          });
        } else {
          cy.log(`No buttons found on ${route}`);
        }
      });
    });
  });
});
