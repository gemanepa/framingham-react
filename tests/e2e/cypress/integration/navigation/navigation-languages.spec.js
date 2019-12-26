/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('Navigation | Switching Languages', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be in english site', () => {
    cy.fixture('selectors').then((object) => {
      const selectorBtn = cy.get(object.static.nb_languagebtn);
      selectorBtn.should('be.visible');
      selectorBtn.click({ force: true });

      const selectorLink = cy.get(object.static.nb_languageen);
      selectorLink.should('exist');
      selectorLink.should('have.attr', 'href', '/?lang=en');
      selectorLink.contains('English');
      selectorLink.click({ force: true });
      cy.url().should('eq', 'http://localhost:3000/?lang=en');
    });
  });

  it('should be in spanish site', () => {
    cy.fixture('selectors').then((object) => {
      const selectorBtn = cy.get(object.static.nb_languagebtn);
      selectorBtn.should('be.visible');
      selectorBtn.click({ force: true });

      const selectorLink = cy.get(object.static.nb_languagees);
      selectorLink.should('exist');
      selectorLink.should('have.attr', 'href', '/?lang=es');
      selectorLink.contains('Español');
      selectorLink.click({ force: true });
      cy.url().should('eq', 'http://localhost:3000/?lang=es');
    });
  });
});
