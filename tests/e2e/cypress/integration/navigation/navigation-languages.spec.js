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
      selectorLink.should('have.attr', 'href', '/en');
      selectorLink.contains('English');
      selectorLink.click({ force: true });
      cy.url().should('eq', 'http://localhost:3000/en');
    });
  });

  it('should be in spanish site', () => {
    cy.fixture('selectors').then((object) => {
      const selectorBtn = cy.get(object.static.nb_languagebtn);
      selectorBtn.should('be.visible');
      selectorBtn.click({ force: true });

      const selectorLink = cy.get(object.static.nb_languagees);
      selectorLink.should('exist');
      selectorLink.should('have.attr', 'href', '/es');
      selectorLink.contains('Español');
      selectorLink.click({ force: true });
      cy.url().should('eq', 'http://localhost:3000/es');
    });
  });

  it('should be in portuguese site', () => {
    cy.fixture('selectors').then((object) => {
      const selectorBtn = cy.get(object.static.nb_languagebtn);
      selectorBtn.should('be.visible');
      selectorBtn.click({ force: true });

      const selectorLink = cy.get(object.static.nb_languagept);
      selectorLink.should('exist');
      selectorLink.should('have.attr', 'href', '/pt');
      selectorLink.contains('Português');
      selectorLink.click({ force: true });
      cy.url().should('eq', 'http://localhost:3000/pt');
    });
  });

  it('should be in italian site', () => {
    cy.fixture('selectors').then((object) => {
      const selectorBtn = cy.get(object.static.nb_languagebtn);
      selectorBtn.should('be.visible');
      selectorBtn.click({ force: true });

      const selectorLink = cy.get(object.static.nb_languageit);
      selectorLink.should('exist');
      selectorLink.should('have.attr', 'href', '/it');
      selectorLink.contains('Italiano');
      selectorLink.click({ force: true });
      cy.url().should('eq', 'http://localhost:3000/it');
    });
  });

  it('should be in french site', () => {
    cy.fixture('selectors').then((object) => {
      const selectorBtn = cy.get(object.static.nb_languagebtn);
      selectorBtn.should('be.visible');
      selectorBtn.click({ force: true });

      const selectorLink = cy.get(object.static.nb_languagefr);
      selectorLink.should('exist');
      selectorLink.should('have.attr', 'href', '/fr');
      selectorLink.contains('Français');
      selectorLink.click({ force: true });
      cy.url().should('eq', 'http://localhost:3000/fr');
    });
  });

  it('should be in german site', () => {
    cy.fixture('selectors').then((object) => {
      const selectorBtn = cy.get(object.static.nb_languagebtn);
      selectorBtn.should('be.visible');
      selectorBtn.click({ force: true });

      const selectorLink = cy.get(object.static.nb_languagede);
      selectorLink.should('exist');
      selectorLink.should('have.attr', 'href', '/de');
      selectorLink.contains('Deutsch');
      selectorLink.click({ force: true });
      cy.url().should('eq', 'http://localhost:3000/de');
    });
  });
});
