describe('Image alt tag tests', () => {
    const routeEnv = Cypress.env('ROUTES');
    console.log('Loaded ROUTES:', routeEnv);
  
    if (!routeEnv) {
      it('No ROUTES environment variable set', () => {
        throw new Error('Missing ROUTES. Set it via .env or CLI');
      });
      return;
    }
  
    // get pages from environment file
    const routes = routeEnv.split(',');

    // this creates an array of routes from the environment variable
    // for example: /about, /contact, /products
    routes.map((route) => '/' + route);

    // we are adding home page here into array
    routes.push('/');

    routes.forEach((route) => {
      it(`Checks image alt tags on ${route}`, () => {
        cy.visit(route);
        cy.get('img').each(($img) => {
          cy.wrap($img)
            .should('have.attr', 'alt')
            .and('not.be.empty');
        });
      });
    });
  });
  