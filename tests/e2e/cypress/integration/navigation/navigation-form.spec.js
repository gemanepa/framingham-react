/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('Navigation | Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should show results after filling form', () => {
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
    });
  });

  it('Should fail all inputs validations', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_sendbtn).click({ force: true });

      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(18); });
    });
  });

  it('Should fail all inputs validations except gender', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_gender_female).click({ force: true });
      cy.get(object.static.form_sendbtn).click({ force: true });
      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(17); });
    });
  });

  it('Should fail all inputs validations except age', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_age_select).click({ force: true });
      cy.get(object.static.form_age_menuitem).click({ force: true });
      cy.get(object.static.form_sendbtn).click({ force: true });
      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(16); });
    });
  });

  it('Should fail all inputs validations except hdl', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_ldl_select).click({ force: true });
      cy.get(object.static.form_ldl_menuitem).click({ force: true });
      cy.get(object.static.form_sendbtn).click({ force: true });
      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(15); });
    });
  });

  it('Should fail all inputs validations except ldl', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_age_select).click({ force: true });
      cy.get(object.static.form_age_menuitem).click({ force: true });
      cy.get(object.static.form_sendbtn).click({ force: true });
      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(16); });
    });
  });

  it('Should fail all inputs validations except totaldl', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_totaldl_select).click({ force: true });
      cy.get(object.static.form_totaldl_menuitem).click({ force: true });
      cy.get(object.static.form_sendbtn).click({ force: true });
      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(15); });
    });
  });

  it('Should fail all inputs validations except ta', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_ta_select).click({ force: true });
      cy.get(object.static.form_ta_menuitem).click({ force: true });
      cy.get(object.static.form_sendbtn).click({ force: true });
      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(15); });
    });
  });

  it('Should fail all inputs validations except wt when gender selected', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_gender_female).click({ force: true });
      cy.get(object.static.form_wt_select).click({ force: true });
      cy.get(object.static.form_wt_menuitem).click({ force: true });
      cy.get(object.static.form_sendbtn).click({ force: true });
      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(14); });
    });
  });

  it('Should fail all inputs validations when wt selected with no gender', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.form_wt_select).click({ force: true });
      cy.get(object.static.form_wt_menuitem_nogender).click({ force: true });
      cy.get(object.static.form_sendbtn).click({ force: true });
      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(18); });
    });
  });

  it('Should clean all fields', () => {
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

      cy.get(object.static.form_resetbtn).click({ force: true });

      cy.get(object.static.form_sendbtn).click({ force: true });

      cy.get('.Mui-error').then(($lis) => { expect($lis).to.have.length(18); });
    });
  });
});
