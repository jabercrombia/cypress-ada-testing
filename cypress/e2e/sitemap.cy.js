require('dotenv').config();


describe('Internal Links Test', () => {
    it('should have all internal links working', () => {
      cy.visit('http://localhost:3000/'); // Replace with your site's URL
  
      // Grab all anchor links
      cy.get('a[href]')
        .each(($link) => {
          // Get the href attribute
          const linkHref = $link.attr('href');
  
          // Check if the link is internal (i.e., starts with '/')
          if (linkHref.startsWith('/')) {
            // Make sure the link is not a fragment or javascript:void(0)
            if (!linkHref.includes('#') && linkHref !== 'javascript:void(0)') {
              // Visit the internal link and check if it loads
              cy.visit(linkHref);
              cy.url().should('include', linkHref); // Check if the URL includes the internal link
            }
          }
        });
    });
  });
  