/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('Form | Happy Path', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show results after filling form', () => {
    cy.fixture('navselectors').then((object) => {
      cy.get(object.static.mc_calcinput).should('be.visible');
      cy.get(object.static.form_gender_female).click({ force: true });
      cy.get(object.static.form_age_select).click({ force: true });
      cy.get(object.static.form_age_menuitem).click({ force: true });
      cy.get(object.static.form_hdl_select).click({ force: true });
      cy.get(object.static.form_hdl_menuitem).click({ force: true });
      cy.get(object.static.form_ldl_select).click({ force: true });
      cy.get(object.static.form_ldl_menuitem).click({ force: true });
      cy.get(object.static.form_totaldl_select).click({ force: true });
      cy.get(object.static.form_totaldl_menuitem).click({ force: true });
      cy.get(object.static.form_ta_select).click({ force: true });
      cy.get(object.static.form_ta_menuitem).click({ force: true });
      cy.get(object.static.form_wt_select).click({ force: true });
      cy.get(object.static.form_wt_menuitem).click({ force: true });
      cy.get(object.static.form_treatment_checkbox).click({ force: true });
      cy.get(object.static.form_smoking_checkbox).click({ force: true });
      cy.get(object.static.form_diabetes_checkbox).click({ force: true });

      cy.get(object.static.form_sendbtn).click({ force: true });

      cy.get(object.static.mc_results).should('be.visible');
    });
  });
});
