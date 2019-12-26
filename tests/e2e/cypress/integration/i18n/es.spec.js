/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('i18n | en', () => {
    beforeEach(() => {
      cy.viewport('macbook-15')
      cy.visit('/?lang=es');
    });
  
    it('Should have es sentences in Head component', () => {
        cy.get('head title').should('contain', 'Framingham Calculadora Riesgo CardioVascular')
        cy.get('head meta[name="application-name"]').should('have.attr', 'content', 'CardioRiesgo Framingham')
        cy.get('head meta[name="description"]').should('have.attr', 'content', 'La Escala de Framingham permite determinar el riesgo de padecer cualquier evento cardiovascular en 10 años')
        cy.get('head meta[name="keywords"]').should('have.attr', 'content', 'framingham, calculadora, riesgo, corazon, coronario, enfermedad, cardiovascular, calculo')
    })

    it('Should have es sentences in Header component', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.i18n.appHeader_title).first().contains('CardioRiesgo');
        cy.get(object.i18n.appHeader_title).last().contains('Framingham');
        cy.get(object.i18n.subheader).contains('Determina el riesgo de enfermedades cardiovasculares en 10 años') ;
      });
    });

    it('Should have es sentences in NavButtons component', () => {
        cy.fixture('selectors').then((object) => {
          cy.get(object.static.nb_infobtn).click({ force: true });
    
          cy.get(object.static.nb_calcbtn).contains('Calcular');

          cy.viewport('iphone-6')
          cy.reload()
          cy.get(object.static.nb_calcbtn).contains('Calcular');
        });
    });

    it('Should have es labels in Form component', () => {
        cy.fixture('selectors').then((object) => {
          cy.get(object.i18n.form_gender_female).contains('Mujer');
          cy.get(object.i18n.form_gender_male).contains('Hombre');
          cy.get(object.i18n.form_label_age).contains('Edad');
          cy.get(object.i18n.form_label_hdl).contains('Colesterol HDL');
          cy.get(object.i18n.form_label_ldl).contains('Colesterol LDL');
          cy.get(object.i18n.form_label_totaldl).contains('Colesterol Total');
          cy.get(object.i18n.form_label_ta).contains('Presion Arterial Sistolica');
          cy.get(object.i18n.form_label_wt).contains('Circunferencia de Cintura');
          cy.get(object.i18n.form_treatment_checkbox).contains('Hipertension en tratamiento');
          cy.get(object.i18n.form_smoking_checkbox).contains('Tabaquismo');
          cy.get(object.i18n.form_diabetes_checkbox).contains('Diabetes o Glucemia alta en ayunas');
        });
      });
  });