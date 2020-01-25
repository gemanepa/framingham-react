/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('Navigation | Switching Container Types', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render Info from NavButton, then CalcInput from NavButton', () => {
    cy.fixture('selectors').then((object) => {
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

  it('should render Results after filling Form, then CalcInput from GoBack btn', () => {
    cy.fixture('selectors').then((object) => {
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

      cy.get(object.static.results_goback).click({ force: true });
      cy.get(object.static.mc_calcinput).should('be.visible');
    });
  });

  it('should render Results after filling Form, then Info from NavButton, then CalcInput from GoBack btn', () => {
    cy.fixture('selectors').then((object) => {
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

      cy.get(object.static.nb_infobtn).click({ force: true });
      cy.get(object.static.mc_info).should('be.visible');

      cy.get(object.static.info_goback).click({ force: true });
      cy.get(object.static.mc_calcinput).should('be.visible');
    });
  });
});
