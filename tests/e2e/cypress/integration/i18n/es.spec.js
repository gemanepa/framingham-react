/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('i18n | ES', () => {
    beforeEach(() => {
      cy.viewport('macbook-15')
      cy.visit('/?lang=es');
    });
  
    it('Should have ES sentences in Head component', () => {
        cy.get('head title').should('contain', 'Framingham Calculadora Riesgo CardioVascular')
        cy.get('head meta[name="application-name"]').should('have.attr', 'content', 'CardioRiesgo Framingham')
        cy.get('head meta[name="description"]').should('have.attr', 'content', 'La Escala de Framingham permite determinar el riesgo de padecer cualquier evento cardiovascular en 10 años')
        cy.get('head meta[name="keywords"]').should('have.attr', 'content', 'framingham, calculadora, riesgo, corazon, coronario, enfermedad, cardiovascular, calculo')
    })

    it('Should have ES sentences in Header component', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.i18n.appHeader_title).first().contains('CardioRiesgo');
        cy.get(object.i18n.appHeader_title).last().contains('Framingham');
        cy.get(object.i18n.subheader).contains('Determina el riesgo de enfermedades cardiovasculares en 10 años') ;
      });
    });

    it('Should have ES sentences in NavButtons component', () => {
        cy.fixture('selectors').then((object) => {
          cy.get(object.static.nb_infobtn).click({ force: true });
    
          cy.get(object.static.nb_calcbtn).contains('Calcular');

          cy.viewport('iphone-6')
          cy.reload()
          cy.get(object.static.nb_calcbtn).contains('Calcular');
        });
    });

    it('Should have EN sentences in CalcInput component header & subheader link', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.i18n.mc_calcheader).contains('Calculo de Riesgo');
        cy.get(object.static.ci_elinksccs).contains('Usando 2017 Canadian CardioVascular Society Guidelines');
      });
    });

    it('Should have ES sentences in Form component input labels', () => {
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

    it('Should have ES sentences in Results component type low', () => {
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

        cy.get(object.i18n.results_title).contains('Resultados');
        cy.get(object.i18n.results_score).contains('Puntuacion: 4');
        cy.get(object.i18n.results_cvd).contains('RCV: 2.4%');
        cy.get(object.i18n.results_heartage).contains('Edad Corazon: 39');
        cy.get(object.i18n.results_risk).contains('Riesgo: Bajo');
        cy.get(object.i18n.results_treatment).contains('Tratamiento:')
        cy.get(object.i18n.results_treatment).contains('El paciente no requiere tratamiento.')
        cy.get(object.i18n.results_treatment).contains('Estatinas solo indicadas en caso de: Aterosclerosis Clinica')
        cy.get(object.i18n.results_treatment).contains('Aneurisma Aortico Abdominal')
        cy.get(object.i18n.results_treatment).contains('Enfermedad Renal Cronica')
      })
    })

    it('Should have ES sentences in Results component type intermediate with risk factors (1)', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.static.mc_calcinput).should('be.visible');
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_50_54).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.i18n.form_hdl_menuitem_35_45).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.i18n.form_ldl_menuitem_80).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_158_200).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.i18n.form_ta_menuitem_120_129).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_morethan102).click({ force: true });
        cy.get(object.static.form_smoking_checkbox).click({ force: true });
        cy.get(object.static.form_diabetes_checkbox).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains('Resultados');
        cy.get(object.i18n.results_score).contains('Puntuacion: 14');
        cy.get(object.i18n.results_cvd).contains('RCV: 18.4%');
        cy.get(object.i18n.results_heartage).contains('Edad Corazon: 68');
        cy.get(object.i18n.results_risk).contains('Riesgo: Intermedio');
        cy.get(object.i18n.results_treatment).contains('Tratamiento:')
        cy.get(object.i18n.results_treatment).contains('Si bien el nivel de riesgo no es Alto, el paciente presenta factores de riesgo para su edad (Tabaquismo, Diabetes o Glucemia alta en ayunas, Circunferencia de Cintura) por lo que se recomienda tratamiento')
      })
    })

    it('Should have ES sentences in Results component type intermediate with risk factors (2)', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.static.mc_calcinput).should('be.visible');
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_50_54).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.static.form_hdl_menuitem).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.static.form_ldl_menuitem).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_240_278).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.static.form_ta_menuitem).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_lessthan102).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains('Resultados');
        cy.get(object.i18n.results_score).contains('Puntuacion: 11');
        cy.get(object.i18n.results_cvd).contains('RCV: 11.2%');
        cy.get(object.i18n.results_heartage).contains('Edad Corazon: 57');
        cy.get(object.i18n.results_risk).contains('Riesgo: Intermedio');
        cy.get(object.i18n.results_treatment).contains('Tratamiento:')
        cy.get(object.i18n.results_treatment).contains('Si bien el nivel de riesgo no es Alto, el paciente presenta factores de riesgo para su edad (Bajo HDL) por lo que se recomienda tratamiento')
      })
    })

    it('Should have ES sentences in Results component type intermediate with high LDL', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_60_64).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.i18n.form_hdl_menuitem_35_45).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.i18n.form_ldl_menuitem_135).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_158_200).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.i18n.form_ta_menuitem_120_129).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_lessthan102).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains('Resultados');
        cy.get(object.i18n.results_score).contains('Puntuacion: 13');
        cy.get(object.i18n.results_cvd).contains('RCV: 15.6%');
        cy.get(object.i18n.results_heartage).contains('Edad Corazon: 64');
        cy.get(object.i18n.results_risk).contains('Riesgo: Intermedio');
        cy.get(object.i18n.results_treatment).contains('Tratamiento:')
        cy.get(object.i18n.results_treatment).contains('Si bien el nivel de riesgo no es Alto, el paciente presenta niveles altos de LDL y se recomienda tratamiento')
      })
    })

    it('Should have ES sentences in Results component type intermediate with no risks', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_60_64).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.i18n.form_hdl_menuitem_35_45).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.i18n.form_ldl_menuitem_80).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_158_200).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.i18n.form_ta_menuitem_120_129).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_lessthan102).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains('Resultados');
        cy.get(object.i18n.results_score).contains('Puntuacion: 13');
        cy.get(object.i18n.results_cvd).contains('RCV: 15.6%');
        cy.get(object.i18n.results_heartage).contains('Edad Corazon: 64');
        cy.get(object.i18n.results_risk).contains('Riesgo: Intermedio');
        cy.get(object.i18n.results_treatment).contains('Tratamiento:')
        cy.get(object.i18n.results_treatment).contains('Si bien el nivel de riesgo no es Bajo, el paciente no presenta factores de riesgo por lo que generalmente no requiere tratamiento')
      })
    })

    it('Should have ES sentences in Results component type high', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.static.form_gender_male).click({ force: true });
        cy.get(object.static.form_age_select).click({ force: true });
        cy.get(object.i18n.form_age_menuitem_60_64).click({ force: true });
        cy.get(object.static.form_hdl_select).click({ force: true });
        cy.get(object.i18n.form_hdl_menuitem_35_45).click({ force: true });
        cy.get(object.static.form_ldl_select).click({ force: true });
        cy.get(object.i18n.form_ldl_menuitem_80).click({ force: true });
        cy.get(object.static.form_totaldl_select).click({ force: true });
        cy.get(object.i18n.form_totaldl_menuitem_158_200).click({ force: true });
        cy.get(object.static.form_ta_select).click({ force: true });
        cy.get(object.i18n.form_ta_menuitem_120_129).click({ force: true });
        cy.get(object.static.form_wt_select).click({ force: true });
        cy.get(object.i18n.form_wt_menuitem_morethan102).click({ force: true });
        cy.get(object.static.form_treatment_checkbox).click({ force: true });
        cy.get(object.static.form_smoking_checkbox).click({ force: true });
        cy.get(object.static.form_diabetes_checkbox).click({ force: true });
        cy.get(object.static.form_sendbtn).click({ force: true });

        cy.get(object.i18n.results_title).contains('Resultados');
        cy.get(object.i18n.results_score).contains('Puntuacion: 19');
        cy.get(object.i18n.results_cvd).contains('RCV: > 30%');
        cy.get(object.i18n.results_heartage).contains('Edad Corazon: > 80');
        cy.get(object.i18n.results_risk).contains('Riesgo: Alto');
        cy.get(object.i18n.results_treatment).contains('Tratamiento:')
        cy.get(object.i18n.results_treatment).contains('El paciente necesita tratamiento')
        cy.get(object.i18n.results_treatment).contains('Objetivo Primario: ≤2 mmol/L o ≥50% disminucion en LDL-C')
        cy.get(object.i18n.results_treatment).contains('Objetivo Alternativo: Apo B ≤0.8 g/L')
        cy.get(object.i18n.results_treatment).contains('Objetivo Alternativo: Non-HDL-C ≤2.6 mmol/L')
      })
    })
  });