const { baseUrl } = Cypress.config();
const enLang = '?lang=en';
const esLang = '?lang=es';

context('Location | Default Site', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty');
  });

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq(baseUrl);
      expect(location.pathname).to.eq('/');
      expect(location.port).to.eq('3000');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.be.empty;
    });
  });

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', baseUrl);
  });
});

context('Location | English Site', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config().baseUrl}${enLang}`);
  });

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty');
  });

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq(`${Cypress.config().baseUrl}${enLang}`);
      expect(location.pathname).to.eq('/');
      expect(location.port).to.eq('3000');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.eq(enLang);
    });
  });

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', `${Cypress.config().baseUrl}${enLang}`);
  });
});

context('Location | Spanish Site', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config().baseUrl}${esLang}`);
  });

  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty');
  });

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq(`${Cypress.config().baseUrl}${esLang}`);
      expect(location.pathname).to.eq('/');
      expect(location.port).to.eq('3000');
      expect(location.protocol).to.eq('http:');
      expect(location.search).to.eq(esLang);
    });
  });

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', `${Cypress.config().baseUrl}${esLang}`);
  });
});
