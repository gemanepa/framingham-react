/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('Location | Portuguese Version', () => {
  beforeEach(() => {
    cy.visit('/pt');
  });

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty');
  });

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq('http://localhost:3000/pt');
      expect(location.host).to.eq('localhost:3000');
      expect(location.hostname).to.eq('localhost');
      expect(location.origin).to.eq('http://localhost:3000');
      expect(location.pathname).to.eq('/pt');
      expect(location.port).to.eq('3000');
    });
  });

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'http://localhost:3000/pt');
  });
});
