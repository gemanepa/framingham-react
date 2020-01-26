/* eslint-disable no-undef */ /* eslint-disable spaced-comment */
/// <reference types="Cypress" />

context('i18n | PT', () => {
  beforeEach(() => {
    cy.viewport('macbook-15');
    cy.visit('/?lang=pt');
  });

  it('Should have PT sentences in Head component', () => {
    cy.get('head title').should('contain', 'Framingham Calculadora Risco CardioVascular');
    cy.get('head meta[name="application-name"]').should('have.attr', 'content', 'CardioRisco Framingham');
    cy.get('head meta[name="description"]').should('have.attr', 'content', 'A Escala de Framingham permite determinar o risco individual de sofrer qualquer evento cardiovascular em 10 anos');
    cy.get('head meta[name="keywords"]').should('have.attr', 'content', 'framingham, calculadora, risco, coração, doença coronariana, cardiovascular, cálculo');
  });

  it('Should have PT sentences in Header component', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.i18n.appHeader_title).first().contains('Framingham');
      cy.get(object.i18n.appHeader_title).last().contains('CardioRico');
      cy.get(object.i18n.subheader).contains('Calcular o risco individual de doença cardiovascular em 10 anos');
    });
  });

  it('Should have PT sentences in NavButtons component', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.nb_infobtn).click({ force: true });

      cy.get(object.static.nb_calcbtn).contains('Calcular');

      cy.viewport('iphone-6');
      cy.reload();
      cy.get(object.static.nb_calcbtn).contains('Calcular');
    });
  });

  it('Should have PT sentences in CalcInput component header & subheader link', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.i18n.mc_calcheader).contains('Calculadora de Risco');
      cy.get(object.static.ci_elinksccs).contains('Usando 2017 Canadian CardioVascular Society Guidelines');
    });
  });

  it('Should have PT sentences in Form component input labels', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.i18n.form_gender_female).contains('Mulher');
      cy.get(object.i18n.form_gender_male).contains('Homen');
      cy.get(object.i18n.form_label_age).contains('Idade');
      cy.get(object.i18n.form_label_hdl).contains('Colesterol HDL');
      cy.get(object.i18n.form_label_ldl).contains('Colesterol LDL');
      cy.get(object.i18n.form_label_totaldl).contains('Colesterol Total');
      cy.get(object.i18n.form_label_ta).contains('Pressão Arterial Sistólica');
      cy.get(object.i18n.form_label_wt).contains('Circunferência da Cintura');
      cy.get(object.i18n.form_treatment_checkbox).contains('Hipertensão sob tratamento');
      cy.get(object.i18n.form_smoking_checkbox).contains('Tabagismo');
      cy.get(object.i18n.form_diabetes_checkbox).contains('Diabetes ou anomalia da glicemia');
    });
  });

  it('Should have PT sentences in Results component type low', () => {
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

      cy.get(object.i18n.results_title).contains('Resultados');
      cy.get(object.i18n.results_score).contains('Pontos: 4');
      cy.get(object.i18n.results_cvd).contains('RCV: 2.4%');
      cy.get(object.i18n.results_heartage).contains('Heart Age: 39');
      cy.get(object.i18n.results_risk).contains('Risk: Low');
      cy.get(object.i18n.results_treatment).contains('Treatment:');
      cy.get(object.i18n.results_treatment).contains('Patient not requires treatment.');
      cy.get(object.i18n.results_treatment).contains('Statins only indicated in case of: Clinical Atherosclerosis');
      cy.get(object.i18n.results_treatment).contains('Abdominal Aortic Aneurysm');
      cy.get(object.i18n.results_treatment).contains('Chronic Kidney Disease');
    });
  });

  it('Should have PT sentences in Results component type intermediate with risk factors (1)', () => {
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
      cy.get(object.i18n.results_treatment).contains('Treatment:');
      cy.get(object.i18n.results_treatment).contains('While Risk Level is not High, the patient presents risk factors for its age (Smoking, Diabetes or Impaired fasting glucose, Waist Circumference) so treatment is recommended');
    });
  });

  it('Should have PT sentences in Results component type intermediate with risk factors (2)', () => {
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
      cy.get(object.i18n.results_treatment).contains('Treatment:');
      cy.get(object.i18n.results_treatment).contains('While Risk Level is not High, the patient presents risk factors for its age (Low HDL) so treatment is recommended');
    });
  });

  it('Should have PT sentences in Results component type intermediate with high LDL', () => {
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
      cy.get(object.i18n.results_treatment).contains('Treatment:');
      cy.get(object.i18n.results_treatment).contains('While Risk Level is not High, high levels of LDL are present and treatment is recommended');
    });
  });

  it('Should have PT sentences in Results component type intermediate with no risks', () => {
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
      cy.get(object.i18n.results_treatment).contains('Treatment:');
      cy.get(object.i18n.results_treatment).contains('While Risk Level is not Low, the patient presents no risk factors for its age and would generally require no meds treatment');
    });
  });

  it('Should have PT sentences in Results component type high', () => {
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
      cy.get(object.i18n.results_treatment).contains('Treatment:');
      cy.get(object.i18n.results_treatment).contains('Patient highly requires treatment');
      cy.get(object.i18n.results_treatment).contains('Primary Target: ≤2 mmol/L or ≥50% decrease in LDL-C');
      cy.get(object.i18n.results_treatment).contains('Alternative Target: Apo B ≤0.8 g/L');
      cy.get(object.i18n.results_treatment).contains('Alternative Target: Non-HDL-C ≤2.6 mmol/L');
    });
  });

  it('Should have PT sentences in Info container', () => {
    cy.fixture('selectors').then((object) => {
      cy.get(object.static.nb_infobtn).should('be.visible');
      cy.get(object.static.nb_infobtn).click({ force: true });

      cy.get(object.static.info_goback).contains('Back');
      cy.get(object.i18n.mc_infoheader).contains('Info');

      cy.get(object.i18n.mc_infopsuse).contains('Usefulness');
      cy.get(object.i18n.mc_infopduse).contains('The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk.');
      cy.get(object.i18n.mc_infopduse).contains('Low Risk = 10% or less');
      cy.get(object.i18n.mc_infopduse).contains('Intermediate risk = 10-20%');
      cy.get(object.i18n.mc_infopduse).contains('High Risk = 20% or more');
      cy.get(object.i18n.mc_infopduse).contains("The Framingham Scale also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the difference of years between the result and the patient's chronological age.");

      cy.get(object.i18n.mc_infopspur).contains('Purpose');
      cy.get(object.i18n.mc_infopdpur).contains("An individual's risk for future cardiovascular events is modifiable by lifestyle changes and preventive medical treatment.");
      cy.get(object.i18n.mc_infopdpur).contains('Lifestyle changes can include stopping smoking, healthy diet, regular exercise, etc. Preventive medical treatment can include a statin, small doses of aspirin, treatment for hypertension, etc.');
      cy.get(object.i18n.mc_infopdpur).contains('It is important to be able to predict the risk of an individual patient in order to decide when to initiate lifestyle modification and preventive medical treatment, with this purpose multiple risk models for the prediction of cardiovascular risk of individual patients have been developed. One such key risk model is the Framingham Risk Score.');

      cy.get(object.i18n.mc_infopsval).contains('Validation');
      cy.get(object.i18n.mc_infopdval).contains('The Framingham Risk Score has been validated in the US, both in men and women, both in European Americans and African Americans.');
    });
  });
});
