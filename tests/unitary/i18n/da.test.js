const { arraysEqual } = require('../../helpers/arraysEqual');
const i18nAf = require('../../../src/i18n/af.json');
const i18nCa = require('../../../src/i18n/ca.json');
const i18nDa = require('../../../src/i18n/da.json');
const i18nEn = require('../../../src/i18n/en.json');
const i18nEs = require('../../../src/i18n/es.json');
const i18nPt = require('../../../src/i18n/pt.json');
const i18nIt = require('../../../src/i18n/it.json');
const i18nFr = require('../../../src/i18n/fr.json');
const i18nDe = require('../../../src/i18n/de.json');
const i18nDaCypress = require('../../e2e/cypress/fixtures/i18nDA.json');

const afBodyKeys = Object.keys(i18nAf.body);
const caBodyKeys = Object.keys(i18nCa.body);
const daBodyKeys = Object.keys(i18nDa.body);
const enBodyKeys = Object.keys(i18nEn.body);
const esBodyKeys = Object.keys(i18nEs.body);
const deBodyKeys = Object.keys(i18nDe.body);
const frBodyKeys = Object.keys(i18nFr.body);
const itBodyKeys = Object.keys(i18nIt.body);
const ptBodyKeys = Object.keys(i18nPt.body);
const i18nDaBodyCypressKeys = Object.keys(i18nDaCypress.body);

test('da body length', () => {
  expect(daBodyKeys.length).toEqual(69);
  expect(daBodyKeys.length).toEqual(afBodyKeys.length);
  expect(daBodyKeys.length).toEqual(caBodyKeys.length);
  expect(daBodyKeys.length).toEqual(deBodyKeys.length);
  expect(daBodyKeys.length).toEqual(enBodyKeys.length);
  expect(daBodyKeys.length).toEqual(esBodyKeys.length);
  expect(daBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(daBodyKeys.length).toEqual(itBodyKeys.length);
  expect(daBodyKeys.length).toEqual(frBodyKeys.length);
  expect(daBodyKeys.length).toEqual(i18nDaBodyCypressKeys.length);
});

test('da body keys', () => {
  expect(arraysEqual(daBodyKeys, afBodyKeys)).toEqual(true);
  expect(arraysEqual(daBodyKeys, caBodyKeys)).toEqual(true);
  expect(arraysEqual(daBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(daBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(daBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(daBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(daBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(daBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(daBodyKeys, i18nDaBodyCypressKeys)).toEqual(true);
});

const afHeadKeys = Object.keys(i18nAf.head);
const caHeadKeys = Object.keys(i18nCa.head);
const daHeadKeys = Object.keys(i18nDa.head);
const enHeadKeys = Object.keys(i18nEn.head);
const esHeadKeys = Object.keys(i18nEs.head);
const deHeadKeys = Object.keys(i18nDe.head);
const frHeadKeys = Object.keys(i18nFr.head);
const itHeadKeys = Object.keys(i18nIt.head);
const ptHeadKeys = Object.keys(i18nPt.head);
const i18nDaHeadCypressKeys = Object.keys(i18nDaCypress.head);

test('da head length', () => {
  expect(daHeadKeys.length).toEqual(4);
  expect(daHeadKeys.length).toEqual(afHeadKeys.length);
  expect(daHeadKeys.length).toEqual(caHeadKeys.length);
  expect(daHeadKeys.length).toEqual(deHeadKeys.length);
  expect(daHeadKeys.length).toEqual(enHeadKeys.length);
  expect(daHeadKeys.length).toEqual(esHeadKeys.length);
  expect(daHeadKeys.length).toEqual(ptHeadKeys.length);
  expect(daHeadKeys.length).toEqual(itHeadKeys.length);
  expect(daHeadKeys.length).toEqual(frHeadKeys.length);
  expect(daHeadKeys.length).toEqual(i18nDaHeadCypressKeys.length);
});

test('da head keys', () => {
  expect(arraysEqual(daHeadKeys, afHeadKeys)).toEqual(true);
  expect(arraysEqual(daHeadKeys, caHeadKeys)).toEqual(true);
  expect(arraysEqual(daHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(daHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(daHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(daHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(daHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(daHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(daHeadKeys, i18nDaHeadCypressKeys)).toEqual(true);
});

test('da strings props vals', () => {
  expect(i18nDa).toEqual(
    {
      lang: 'da',
      head: {
        appname: 'Framingham Hjerte Risiko',
        description: 'The Framingham Scale allows you to determine the individual risk of suffering any cardiovascular event in 10 years',
        keywords: 'framingham, lommeregner, risiko, hjerte, koronar, sygdom, hjerte-kar, beregning',
        title: 'Framingham CardioVascular Risk Calculator'
      },
      body: {
        abdominal_aortic_aneurysm: 'Abdominal aorta Aneurysme',
        age: 'Alder',
        androidapp: 'Android App',
        alternative_target: 'Alternativt mål',
        app_name: 'Framingham HR',
        arterial_pression: 'Systolisk blodtryk',
        aterosclerosis: 'Klinisk aterosklerose',
        back: 'Tilbage',
        brief_description: 'Beregn den individuelle risiko for hjerte-kar-sygdomme i 10 år',
        calculate: 'Beregn',
        chronic_kidney_disease: 'Kronisk nyresygdom',
        colesterol_hdl: 'Kolesterol HDL',
        colesterol_ldl: 'Kolesterol LDL',
        colesterol_total: 'Kolesterol i alt',
        cvd: 'KVR',
        cvdexplanation: 'KVR:  KardioVaskulær Risiko i 10 år',
        day: 'Dag',
        decrease_in: 'reduktion i',
        diabetes: 'Sukkersyge eller Fastende høj blodglukose',
        elinks: 'Elinks',
        gender: 'Køn',
        genderRequired: 'Køn er påkrævet',
        heartage: 'Hjerte Alder',
        high: 'Høj',
        hypertension_in_treatment: 'Hypertension behandlet',
        info: 'Oplysninger',
        intermediate: 'Mellemprodukt',
        low: 'Lav',
        man: 'Mand',
        month: 'Måned',
        navbar_title: 'Framingham Hjerte Risiko',
        or: 'eller',
        patient: 'Patienten',
        patient_highly_requires_treatment: 'Patienten har brug for behandling.',
        patient_name: 'Patientnavn',
        patient_not_requires_treatment: 'Patienten behøver ikke behandling.',
        patientdata: 'Patientinformation',
        primary_target: 'Primært mål',
        purpose: 'Formål',
        purpose_text1: 'Den enkeltes risiko for fremtidige kardiovaskulære begivenheder kan ændres ved livsstilsændringer og forebyggende medicinsk behandling.',
        purpose_text2: 'Livsstilsændringer kan omfatte stop med rygning, sund kost, regelmæssig træning osv. Forebyggende medicinsk behandling kan omfatte en statin, små doser af aspirin, behandling af hypertension osv.',
        purpose_text3: 'Det er vigtigt at være i stand til at forudsige risikoen for en individuel patient for at beslutte, hvornår man skal starte livsstilsændring og forebyggende medicinsk behandling, med dette formål er der udviklet flere risikomodeller til forudsigelse af hjerte-kar-risiko hos individuelle patienter. En sådan vigtig risikomodel er Framingham Risk Score.',
        results: 'Resultater',
        risk: 'Risiko',
        risk_score_calculator: 'Beregning af Risikoscore',
        score: 'Tegnsætning',
        send: 'Sende',
        smoking: 'Ryger',
        so_treatment_is_recommended: 'så behandling anbefales',
        statins_only_indicated: 'Statiner angives kun i tilfælde af:',
        treatment: 'Behandling:',
        treatment_intermediate_hasfactors: 'Selvom risikoen ikke er høj, har patienten risikofaktorer for hans alder',
        treatment_intermediate_ldl: 'Selvom risikoen ikke er høj, har patienten høje niveauer af LDL og behandling anbefales',
        treatment_intermediate_norisks: 'Selv om risikoniveauet ikke er lavt, frembyder patienten ikke risikofaktorer, så det kræver normalt ikke behandling',
        treatment_low_diabetes: 'Selv om risikoniveauet er lavt, kræver patienten behandling af statiner på grund af tilstedeværelsen af ​​diabetes eller fastende høj blodglukose hos en person over 40 år.',
        unknown: 'Ukendt',
        usefulness: 'Anvendelighed',
        usefulness_text_start: 'Framingham-skalaen giver mulighed for at bestemme risikoen for at lide enhver kardiovaskulær begivenhed i 10 år, hvor man vurderer faktorer som alder, køn, blodtryk, diabetes og rygning, tildeler en score til hver af dem og stratificerer patienten i lavt, medium og højt hjerte-kar-risiko.',
        usefulness_text_lowrisk: 'Lav risiko = 10% eller mindre',
        usefulness_text_intermediaterisk: 'Mellemrisiko = 10-20%',
        usefulness_text_highrisk: 'Høj risiko = 20% eller mere',
        usefulness_text_end: 'Framingham-skalaen tillader også at beregne den vaskulære alder, hvilket giver et skøn over patientens vaskulære skade gennem forskellen i år mellem resultatet og patientens kronologiske alder.',
        using_guidelines: 'Brug af 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Validering',
        validation_text: 'Framingham Risk Score er valideret i USA, både hos mænd og kvinder, både hos europæiske amerikanere og afroamerikanere.',
        waist_circumference: 'Midje omkreds',
        woman: 'Kvinder',
        year: 'År',
        years: 'år gammel'
      }
    }
  );
  expect(i18nDa).toEqual(i18nDaCypress);
});
