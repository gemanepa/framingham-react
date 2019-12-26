/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('i18n | en', () => {
    beforeEach(() => {
      cy.viewport('macbook-15')
      cy.visit('/?lang=en');
    });
  
    it('Should have en sentences in Head component', () => {
        cy.get('head title').should('contain', 'Framingham CardioVascular Risk Score Calculator')
        cy.get('head meta[name="application-name"]').should('have.attr', 'content', 'Framingham CardioRisk')
        cy.get('head meta[name="description"]').should('have.attr', 'content', 'Framingham CR calculates the risk of suffering cardiovascular events in 10 years')
        cy.get('head meta[name="keywords"]').should('have.attr', 'content', 'framingham, calculator, risk, score, heart, cardiovascular, coronary, disease, study, calculation')
    })

    it('Should have en sentences in Header component', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.i18n.appHeader_title).first().contains('Framingham');
        cy.get(object.i18n.appHeader_title).last().contains('CardioRisk');
        cy.get(object.i18n.subheader).contains('Determine the risk of cardiovascular diseases in 10 years') ;
      });
    });

    it('Should have en sentences in NavButtons component', () => {
        cy.fixture('selectors').then((object) => {
          cy.get(object.static.nb_infobtn).click({ force: true });
    
          cy.get(object.static.nb_calcbtn).contains('Calculate');

          cy.viewport('iphone-6')
          cy.reload()
          cy.get(object.static.nb_calcbtn).contains('Calculate');
        });
    });

    it('Should have en labels in Form component', () => {
        cy.fixture('selectors').then((object) => {
          cy.get(object.i18n.form_gender_female).contains('Woman');
          cy.get(object.i18n.form_gender_male).contains('Man');
          cy.get(object.i18n.form_label_age).contains('Age');
          cy.get(object.i18n.form_label_hdl).contains('HDL Cholesterol');
          cy.get(object.i18n.form_label_ldl).contains('LDL Cholesterol');
          cy.get(object.i18n.form_label_totaldl).contains('Total Cholesterol');
          cy.get(object.i18n.form_label_ta).contains('Systolic Arterial Pressure');
          cy.get(object.i18n.form_label_wt).contains('Waist Circumference');
          cy.get(object.i18n.form_treatment_checkbox).contains('Hypertension under treatment');
          cy.get(object.i18n.form_smoking_checkbox).contains('Smoking');
          cy.get(object.i18n.form_diabetes_checkbox).contains('Diabetes or Impaired fasting glucose');
        });
      });
  });