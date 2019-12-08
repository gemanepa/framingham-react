/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('Navigation | Switching Container Types', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render info container and then calcinput container', () => {
    cy.fixture('navselectors').then((object) => {
      //CalcInput Container and Info NavButton should be visible
      cy.get(object.static.mc_calcinput).should('be.visible');
      cy.get(object.static.mc_info).should('not.exist');

      cy.get(object.static.nb_infobtn).should('be.visible');
      cy.get(object.static.nb_infobtn).click({ force: true });

      //Info Container and Calculate NavButton should be visible
      cy.get(object.static.mc_info).should('be.visible');
      cy.get(object.static.mc_calcinput).should('not.exist');

      cy.get(object.static.nb_calcbtn).should('be.visible');
      cy.get(object.static.nb_calcbtn).contains('Calculate');
      cy.get(object.static.nb_calcbtn).click({ force: true });

      //CalcInput Container and Info NavButton should be visible again
      cy.get(object.static.mc_calcinput).should('be.visible');
      cy.get(object.static.mc_info).should('not.exist');

      cy.get(object.static.nb_infobtn).should('be.visible');
      cy.get(object.static.nb_infobtn).contains('Info');
    });
  });
});
