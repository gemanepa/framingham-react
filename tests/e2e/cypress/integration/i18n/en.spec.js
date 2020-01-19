/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('i18n | EN', () => {
    beforeEach(() => {
      cy.viewport('macbook-15')
      cy.visit('/?lang=en');
    });
  
    it('Should have EN sentences in Head component', () => {
        cy.get('head title').should('contain', 'Framingham CardioVascular Risk Score Calculator')
        cy.get('head meta[name="application-name"]').should('have.attr', 'content', 'Framingham CardioRisk')
        cy.get('head meta[name="description"]').should('have.attr', 'content', 'Framingham CR calculates the risk of suffering cardiovascular events in 10 years')
        cy.get('head meta[name="keywords"]').should('have.attr', 'content', 'framingham, calculator, risk, score, heart, cardiovascular, coronary, disease, study, calculation')
    })

    it('Should have EN sentences in Header component', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.i18n.appHeader_title).first().contains('Framingham');
        cy.get(object.i18n.appHeader_title).last().contains('CardioRisk');
        cy.get(object.i18n.subheader).contains('Determine the risk of cardiovascular diseases in 10 years') ;
      });
    });

    it('Should have EN sentences in NavButtons component', () => {
        cy.fixture('selectors').then((object) => {
          cy.get(object.static.nb_infobtn).click({ force: true });
    
          cy.get(object.static.nb_calcbtn).contains('Calculate');

          cy.viewport('iphone-6')
          cy.reload()
          cy.get(object.static.nb_calcbtn).contains('Calculate');
        });
    });

    it('Should have EN sentences in CalcInput component header & subheader link', () => {
      cy.fixture('selectors').then((object) => {
        cy.get(object.i18n.mc_calcheader).contains('Risk Score Calculator');
        cy.get(object.static.ci_elinksccs).contains('Using 2017 Canadian CardioVascular Society Guidelines');
      });
    });

    it('Should have EN sentences in Form component input labels', () => {
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

    it('Should have EN sentences in Results component type low', () => {
      cy.fixture('selectors').then((object) => {
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

        cy.get(object.i18n.results_title).contains('Results');
        cy.get(object.i18n.results_score).contains('Score: 4');
        cy.get(object.i18n.results_cvd).contains('CVD: 2.4%');
        cy.get(object.i18n.results_heartage).contains('Heart Age: 39');
        cy.get(object.i18n.results_risk).contains('Risk: Low');
        cy.get(object.i18n.results_treatment).contains('Treatment:')
        cy.get(object.i18n.results_treatment).contains('Patient not requires treatment.')
        cy.get(object.i18n.results_treatment).contains('Statins only indicated in case of: Clinical Atherosclerosis')
        cy.get(object.i18n.results_treatment).contains('Abdominal Aortic Aneurysm')
        cy.get(object.i18n.results_treatment).contains('Chronic Kidney Disease')
      })
    })

    it('Should have EN sentences in Results component type intermediate with risk factors (1)', () => {
      cy.fixture('selectors').then((object) => {
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

        cy.get(object.i18n.results_title).contains('Results');
        cy.get(object.i18n.results_score).contains('Score: 14');
        cy.get(object.i18n.results_cvd).contains('CVD: 18.4%');
        cy.get(object.i18n.results_heartage).contains('Heart Age: 68');
        cy.get(object.i18n.results_risk).contains('Risk: Intermediate');
        cy.get(object.i18n.results_treatment).contains('Treatment:')
        cy.get(object.i18n.results_treatment).contains('While Risk Level is not High, the patient presents risk factors for its age (Smoking, Diabetes or Impaired fasting glucose, Waist Circumference) so treatment is recommended')
      })
    })

    it('Should have EN sentences in Results component type intermediate with risk factors (2)', () => {
      cy.fixture('selectors').then((object) => {
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

        cy.get(object.i18n.results_title).contains('Results');
        cy.get(object.i18n.results_score).contains('Score: 11');
        cy.get(object.i18n.results_cvd).contains('CVD: 11.2%');
        cy.get(object.i18n.results_heartage).contains('Heart Age: 57');
        cy.get(object.i18n.results_risk).contains('Risk: Intermediate');
        cy.get(object.i18n.results_treatment).contains('Treatment:')
        cy.get(object.i18n.results_treatment).contains('While Risk Level is not High, the patient presents risk factors for its age (Low HDL) so treatment is recommended')
      })
    })

    it('Should have EN sentences in Results component type intermediate with high LDL', () => {
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

        cy.get(object.i18n.results_title).contains('Results');
        cy.get(object.i18n.results_score).contains('Score: 13');
        cy.get(object.i18n.results_cvd).contains('CVD: 15.6%');
        cy.get(object.i18n.results_heartage).contains('Heart Age: 64');
        cy.get(object.i18n.results_risk).contains('Risk: Intermediate');
        cy.get(object.i18n.results_treatment).contains('Treatment:')
        cy.get(object.i18n.results_treatment).contains('While Risk Level is not High, high levels of LDL are present and treatment is recommended')
      })
    })

    it('Should have EN sentences in Results component type intermediate with no risks', () => {
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

        cy.get(object.i18n.results_title).contains('Results');
        cy.get(object.i18n.results_score).contains('Score: 13');
        cy.get(object.i18n.results_cvd).contains('CVD: 15.6%');
        cy.get(object.i18n.results_heartage).contains('Heart Age: 64');
        cy.get(object.i18n.results_risk).contains('Risk: Intermediate');
        cy.get(object.i18n.results_treatment).contains('Treatment:')
        cy.get(object.i18n.results_treatment).contains('While Risk Level is not Low, the patient presents no risk factors for its age and would generally require no meds treatment')
      })
    })

    it('Should have EN sentences in Results component type high', () => {
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

        cy.get(object.i18n.results_title).contains('Results');
        cy.get(object.i18n.results_score).contains('Score: 19');
        cy.get(object.i18n.results_cvd).contains('CVD: > 30%');
        cy.get(object.i18n.results_heartage).contains('Heart Age: > 80');
        cy.get(object.i18n.results_risk).contains('Risk: High');
        cy.get(object.i18n.results_treatment).contains('Treatment:')
        cy.get(object.i18n.results_treatment).contains('Patient highly requires treatment')
        cy.get(object.i18n.results_treatment).contains('Primary Target: ≤2 mmol/L or ≥50% decrease in LDL-C')
        cy.get(object.i18n.results_treatment).contains('Alternative Target: Apo B ≤0.8 g/L')
        cy.get(object.i18n.results_treatment).contains('Alternative Target: Non-HDL-C ≤2.6 mmol/L')
      })
    })
  });