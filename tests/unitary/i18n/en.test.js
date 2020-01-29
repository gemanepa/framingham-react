const { arraysEqual } = require('../../helpers/arraysEqual');
const i18nEn = require('../../../src/i18n/en.json');
const i18nEs = require('../../../src/i18n/es.json');
const i18nPt = require('../../../src/i18n/pt.json');
const i18nIt = require('../../../src/i18n/it.json');
const i18nFr = require('../../../src/i18n/fr.json');
const i18nDe = require('../../../src/i18n/de.json');
const i18nEnCypress = require('../../e2e/cypress/fixtures/i18nEN.json');

const enBodyKeys = Object.keys(i18nEn.body);
const esBodyKeys = Object.keys(i18nEs.body);
const deBodyKeys = Object.keys(i18nDe.body);
const frBodyKeys = Object.keys(i18nFr.body);
const itBodyKeys = Object.keys(i18nIt.body);
const ptBodyKeys = Object.keys(i18nPt.body);
const i18nEnBodyCypressKeys = Object.keys(i18nEnCypress.body);

test('en body length', () => {
  expect(enBodyKeys.length).toEqual(69);
  expect(enBodyKeys.length).toEqual(deBodyKeys.length);
  expect(enBodyKeys.length).toEqual(esBodyKeys.length);
  expect(enBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(enBodyKeys.length).toEqual(itBodyKeys.length);
  expect(enBodyKeys.length).toEqual(frBodyKeys.length);
  expect(enBodyKeys.length).toEqual(i18nEnBodyCypressKeys.length);
});

test('en body keys', () => {
  expect(arraysEqual(enBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(enBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(enBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(enBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(enBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(enBodyKeys, i18nEnBodyCypressKeys)).toEqual(true);
});

const enHeadKeys = Object.keys(i18nEn.head);
const esHeadKeys = Object.keys(i18nEs.head);
const deHeadKeys = Object.keys(i18nDe.head);
const frHeadKeys = Object.keys(i18nFr.head);
const itHeadKeys = Object.keys(i18nIt.head);
const ptHeadKeys = Object.keys(i18nPt.head);
const i18nEnHeadCypressKeys = Object.keys(i18nEnCypress.head);

test('en head length', () => {
  expect(enHeadKeys.length).toEqual(4);
  expect(enHeadKeys.length).toEqual(deHeadKeys.length);
  expect(enHeadKeys.length).toEqual(esHeadKeys.length);
  expect(enHeadKeys.length).toEqual(ptHeadKeys.length);
  expect(enHeadKeys.length).toEqual(itHeadKeys.length);
  expect(enHeadKeys.length).toEqual(frHeadKeys.length);
  expect(enHeadKeys.length).toEqual(i18nEnHeadCypressKeys.length);
});

test('en head keys', () => {
  expect(arraysEqual(enHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(enHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(enHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(enHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(enHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(enHeadKeys, i18nEnHeadCypressKeys)).toEqual(true);
});

test('en strings props vals', () => {
  expect(i18nEn).toEqual(
    {
      lang: 'en',
      head: {
        appname: 'Framingham CardioRisk',
        description: 'Framingham CR calculates the individual risk of suffering cardiovascular events in 10 years',
        keywords: 'framingham, calculator, risk, score, heart, cardiovascular, coronary, disease, study, calculation',
        title: 'Framingham CardioVascular Risk Score Calculator'
      },
      body: {
        abdominal_aortic_aneurysm: 'Abdominal Aortic Aneurysm',
        age: 'Age',
        androidapp: 'Android App',
        alternative_target: 'Alternative Target',
        app_name: 'Framingham CR',
        arterial_pression: 'Systolic Arterial Pressure',
        aterosclerosis: 'Clinical Atherosclerosis',
        back: 'Back',
        brief_description: 'Calculate the individual risk of cardiovascular disease in 10 years',
        calculate: 'Calculate',
        chronic_kidney_disease: 'Chronic Kidney Disease',
        colesterol_hdl: 'HDL Cholesterol',
        colesterol_ldl: 'LDL Cholesterol',
        colesterol_total: 'Total Cholesterol',
        cvd: 'CVD',
        cvdexplanation: 'CVD: CardioVascular Disease Risk in 10 years',
        day: 'Day',
        decrease_in: 'decrease in',
        diabetes: 'Diabetes or Impaired fasting glucose',
        elinks: 'Elinks',
        gender: 'Gender',
        genderRequired: 'Gender is required',
        heartage: 'Heart Age',
        high: 'High',
        hypertension_in_treatment: 'Hypertension under treatment',
        info: 'Info',
        intermediate: 'Intermediate',
        low: 'Low',
        man: 'Man',
        month: 'Month',
        navbar_title: 'Framingham CardioRisk',
        or: 'or',
        patient: 'Patient',
        patient_highly_requires_treatment: 'Patient highly requires treatment',
        patient_name: "Patient's Name",
        patient_not_requires_treatment: 'Patient not requires treatment.',
        patientdata: 'Patient Data',
        primary_target: 'Primary Target',
        purpose: 'Purpose',
        purpose_text1: "An individual's risk for future cardiovascular events is modifiable by lifestyle changes and preventive medical treatment.",
        purpose_text2: 'Lifestyle changes can include stopping smoking, healthy diet, regular exercise, etc. Preventive medical treatment can include a statin, small doses of aspirin, treatment for hypertension, etc.',
        purpose_text3: 'It is important to be able to predict the risk of an individual patient in order to decide when to initiate lifestyle modification and preventive medical treatment, with this purpose multiple risk models for the prediction of cardiovascular risk of individual patients have been developed. One such key risk model is the Framingham Risk Score.',
        results: 'Results',
        risk: 'Risk',
        risk_score_calculator: 'Risk Score Calculator',
        score: 'Score',
        send: 'Send',
        smoking: 'Smoking',
        so_treatment_is_recommended: 'so treatment is recommended',
        statins_only_indicated: 'Statins only indicated in case of:',
        treatment: 'Treatment:',
        treatment_intermediate_hasfactors: 'While Risk Level is not High, the patient presents risk factors for its age',
        treatment_intermediate_ldl: 'While Risk Level is not High, high levels of LDL are present and treatment is recommended',
        treatment_intermediate_norisks: 'While Risk Level is not Low, the patient presents no risk factors for its age and would generally require no meds treatment',
        treatment_low_diabetes: 'Despite Risk Level being Low, patient requires statins treatment due to diabetes or impaired fasting glucose being present in an over 40 years old person',
        unknown: 'Unknown',
        usefulness: 'Usefulness',
        usefulness_text_start: 'The Framingham Scale allows to determine the risk of suffering any cardiovascular event in 10 years assessing factors such as age, sex, blood pressure, diabetes, and smoking, assigning a score to each of them and stratifying the patient in low, medium, and high cardiovascular risk.',
        usefulness_text_lowrisk: 'Low Risk = 10% or less',
        usefulness_text_intermediaterisk: 'Intermediate risk = 10-20%',
        usefulness_text_highrisk: 'High Risk = 20% or more',
        usefulness_text_end: "The Framingham Scale also allows to calculate the vascular age, which gives an estimate of the vascular damage of the patient through the difference of years between the result and the patient's chronological age.",
        using_guidelines: 'Using 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Validation',
        validation_text: 'The Framingham Risk Score has been validated in the US, both in men and women, both in European Americans and African Americans.',
        waist_circumference: 'Waist Circumference',
        woman: 'Woman',
        year: 'Year',
        years: 'years old'
      }
    }
  );
  expect(i18nEn).toEqual(i18nEnCypress);
});
