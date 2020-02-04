const { arraysEqual } = require('../../helpers/arraysEqual');
const i18nAf = require('../../../src/i18n/af.json');
const i18nCa = require('../../../src/i18n/ca.json');
const i18nDa = require('../../../src/i18n/da.json');
const i18nEn = require('../../../src/i18n/en.json');
const i18nEs = require('../../../src/i18n/es.json');
const i18nNl = require('../../../src/i18n/nl.json');
const i18nPt = require('../../../src/i18n/pt.json');
const i18nIt = require('../../../src/i18n/it.json');
const i18nFr = require('../../../src/i18n/fr.json');
const i18nDe = require('../../../src/i18n/de.json');
const i18nSv = require('../../../src/i18n/sv.json');
const i18nRu = require('../../../src/i18n/ru.json');
const i18nSvCypress = require('../../e2e/cypress/fixtures/i18nSV.json');

const afBodyKeys = Object.keys(i18nAf.body);
const caBodyKeys = Object.keys(i18nCa.body);
const daBodyKeys = Object.keys(i18nDa.body);
const enBodyKeys = Object.keys(i18nEn.body);
const esBodyKeys = Object.keys(i18nEs.body);
const deBodyKeys = Object.keys(i18nDe.body);
const frBodyKeys = Object.keys(i18nFr.body);
const itBodyKeys = Object.keys(i18nIt.body);
const nlBodyKeys = Object.keys(i18nNl.body);
const ptBodyKeys = Object.keys(i18nPt.body);
const svBodyKeys = Object.keys(i18nSv.body);
const ruBodyKeys = Object.keys(i18nRu.body);
const i18nSvBodyCypressKeys = Object.keys(i18nSvCypress.body);

test('sv body length', () => {
  expect(svBodyKeys.length).toEqual(72);
  expect(svBodyKeys.length).toEqual(afBodyKeys.length);
  expect(svBodyKeys.length).toEqual(caBodyKeys.length);
  expect(svBodyKeys.length).toEqual(daBodyKeys.length);
  expect(svBodyKeys.length).toEqual(deBodyKeys.length);
  expect(svBodyKeys.length).toEqual(esBodyKeys.length);
  expect(svBodyKeys.length).toEqual(enBodyKeys.length);
  expect(svBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(svBodyKeys.length).toEqual(itBodyKeys.length);
  expect(svBodyKeys.length).toEqual(frBodyKeys.length);
  expect(svBodyKeys.length).toEqual(nlBodyKeys.length);
  expect(svBodyKeys.length).toEqual(ruBodyKeys.length);
  expect(svBodyKeys.length).toEqual(i18nSvBodyCypressKeys.length);
});

test('sv body keys', () => {
  expect(arraysEqual(svBodyKeys, afBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, caBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, daBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, nlBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, ruBodyKeys)).toEqual(true);
  expect(arraysEqual(svBodyKeys, i18nSvBodyCypressKeys)).toEqual(true);
});

const afHeadKeys = Object.keys(i18nAf.head);
const caHeadKeys = Object.keys(i18nCa.head);
const daHeadKeys = Object.keys(i18nDa.head);
const enHeadKeys = Object.keys(i18nEn.head);
const esHeadKeys = Object.keys(i18nEs.head);
const deHeadKeys = Object.keys(i18nDe.head);
const frHeadKeys = Object.keys(i18nFr.head);
const itHeadKeys = Object.keys(i18nIt.head);
const nlHeadKeys = Object.keys(i18nNl.head);
const ptHeadKeys = Object.keys(i18nPt.head);
const svHeadKeys = Object.keys(i18nSv.head);
const ruHeadKeys = Object.keys(i18nRu.head);
const i18nSvHeadCypressKeys = Object.keys(i18nSvCypress.head);

test('sv head length', () => {
  expect(svHeadKeys.length).toEqual(4);
  expect(svHeadKeys.length).toEqual(afHeadKeys.length);
  expect(svHeadKeys.length).toEqual(caHeadKeys.length);
  expect(svHeadKeys.length).toEqual(daHeadKeys.length);
  expect(svHeadKeys.length).toEqual(deHeadKeys.length);
  expect(svHeadKeys.length).toEqual(esHeadKeys.length);
  expect(svHeadKeys.length).toEqual(enHeadKeys.length);
  expect(svHeadKeys.length).toEqual(ptHeadKeys.length);
  expect(svHeadKeys.length).toEqual(itHeadKeys.length);
  expect(svHeadKeys.length).toEqual(frHeadKeys.length);
  expect(svHeadKeys.length).toEqual(nlHeadKeys.length);
  expect(svHeadKeys.length).toEqual(ruHeadKeys.length);
  expect(svHeadKeys.length).toEqual(i18nSvHeadCypressKeys.length);
});

test('sv head keys', () => {
  expect(arraysEqual(svHeadKeys, afHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, caHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, daHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, nlHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, ruHeadKeys)).toEqual(true);
  expect(arraysEqual(svHeadKeys, i18nSvHeadCypressKeys)).toEqual(true);
});

test('sv strings props vals', () => {
  expect(i18nSv).toEqual(
    {
      lang: 'sv',
      head: {
        appname: 'Framingham HjärtRisk',
        description: 'Framingham-skalan gör det möjligt att bestämma den individuella risken för att drabbas av någon kardiovaskulär händelse på tio år',
        keywords: 'framingham, kalkylator, risk, poäng, hjärta, kardiovaskulär, kranskärl, sjukdom, studie, beräkning',
        title: 'Framingham Hjärt Riskberäknare'
      },
      body: {
        abdominal_aortic_aneurysm: 'Abdominal aortaanurysm',
        age: 'Ålder',
        androidapp: 'Android App',
        alternative_target: 'Alternativt Mål',
        app_name: 'CR Framingham',
        arterial_pression: 'Systoliskt blodtryck',
        aterosclerosis: 'Klinisk åderförkalkning',
        back: 'Tillbaka',
        brief_description: 'Beräkna den individuella risken för hjärt-kärlsjukdomar på 10 år',
        calculate: 'Kalkylera',
        chronic_kidney_disease: 'Kronisk njursjukdom',
        colesterol_hdl: 'HDL-Kolesterol',
        colesterol_ldl: 'LDL-Kolesterol',
        colesterol_total: 'Totalt-Kolesterol',
        'cms(inches)': 'cms (inches)',
        cvd: 'KVR',
        cvdexplanation: 'KVR: KardioVaskulär Risk i 10 år',
        day: 'Dag',
        decrease_in: 'Minskning i',
        diabetes: 'Diabetes eller höga fastande glykemi',
        elinks: 'Links',
        gender: 'Kön',
        genderRequired: 'Kön krävs',
        heartage: 'Hjärtålder',
        high: 'Hög',
        hypertension_in_treatment: 'Behandlad hypertoni',
        info: 'Info',
        intermediate: 'Intermediär',
        low: 'Låg',
        man: 'Man',
        mgdl: 'mg/dl',
        mmHg: 'mmHg',
        month: 'Månad',
        navbar_title: 'HjärtRisk Framingham',
        or: 'eller',
        patient: 'Patienten',
        patient_highly_requires_treatment: 'Patienten behöver behandling',
        patient_name: 'Patientens Namn',
        patient_not_requires_treatment: 'Patienten behöver inte behandlas.',
        patientdata: 'Patientinformation',
        primary_target: 'Primärt Mål',
        purpose: 'Purpose',
        purpose_text1: 'En individs risk för framtida kardiovaskulära händelser kan ändras genom livsstilsförändringar och förebyggande medicinsk behandling.',
        purpose_text2: 'Livsstilsförändringar kan inkludera att sluta röka, hälsosam kost, regelbunden träning etc. Förebyggande medicinsk behandling kan omfatta en statin, små doser av aspirin, behandling för högt blodtryck, etc.',
        purpose_text3: 'Det är viktigt att kunna förutsäga risken för en enskild patient för att bestämma när man ska initiera livsstilsmodifiering och förebyggande medicinsk behandling, med detta ändamål har flera riskmodeller utvecklats för att förutsäga kardiovaskulär risk för enskilda patienter. En av dessa modeller är Framingham Risk Score.',
        results: 'Resultat',
        risk: 'Risk',
        risk_score_calculator: 'Riskkalkylator',
        score: 'Skiljetecken',
        send: 'Skicka',
        smoking: 'Rökaren',
        so_treatment_is_recommended: 'Så behandling rekommenderas',
        statins_only_indicated: 'Statiner indikeras endast om:',
        treatment: 'Behandling:',
        treatment_intermediate_hasfactors: 'Även om risknivån inte är hög, har patienten riskfaktorer för sin ålder',
        treatment_intermediate_ldl: 'Även om risknivån inte är hög, har patienten höga nivåer av LDL och behandling rekommenderas',
        treatment_intermediate_norisks: 'Även om risknivån inte är låg, uppvisar patienten inte riskfaktorer, så det kräver vanligtvis inte behandling',
        treatment_low_diabetes: 'Även om risknivån är låg, kräver patienten behandling av statiner på grund av närvaron av diabetes eller fastande högt blodsocker hos en person över 40 år.',
        unknown: 'Okänt',
        usefulness: 'Tillämplighet',
        usefulness_text_start: 'Framingham-skalan gör det möjligt att bestämma risken för att drabbas av någon kardiovaskulär händelse på 10 år genom att utvärdera faktorer som ålder, kön, blodtryck, diabetes och rökning, tilldela en poäng till var och en av dem och stratifiera patienten i nivåer av låg, medelhög och hög kardiovaskulär risk.',
        usefulness_text_lowrisk: 'Låg risk = 10% eller mindre',
        usefulness_text_intermediaterisk: 'Mellanrisk = 10-20%',
        usefulness_text_highrisk: 'Hög risk = 20% eller mer',
        usefulness_text_end: 'Framingham-skalan gör det också möjligt att beräkna den vaskulära åldern, vilket ger en uppskattning av patientens vaskulära skada genom skillnaden i år mellan resultatet och patientens kronologiska ålder.',
        using_guidelines: 'Baserat på 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Validering',
        validation_text: 'Framingham Risk Score har validerats i USA, både hos män och kvinnor, både hos européer och afroamerikaner.',
        waist_circumference: 'Midja omkrets',
        woman: 'Kvinnor',
        year: 'År',
        years: 'År gammal'
      }
    }
  );
  expect(i18nSv).toEqual(i18nSvCypress);
});
