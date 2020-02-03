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
const i18nCaCypress = require('../../e2e/cypress/fixtures/i18nCA.json');

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
const i18nCaBodyCypressKeys = Object.keys(i18nCaCypress.body);

test('ca body length', () => {
  expect(caBodyKeys.length).toEqual(69);
  expect(caBodyKeys.length).toEqual(afBodyKeys.length);
  expect(caBodyKeys.length).toEqual(daBodyKeys.length);
  expect(caBodyKeys.length).toEqual(deBodyKeys.length);
  expect(caBodyKeys.length).toEqual(enBodyKeys.length);
  expect(caBodyKeys.length).toEqual(esBodyKeys.length);
  expect(caBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(caBodyKeys.length).toEqual(itBodyKeys.length);
  expect(caBodyKeys.length).toEqual(frBodyKeys.length);
  expect(caBodyKeys.length).toEqual(nlBodyKeys.length);
  expect(caBodyKeys.length).toEqual(i18nCaBodyCypressKeys.length);
});

test('ca body keys', () => {
  expect(arraysEqual(caBodyKeys, afBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, daBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, nlBodyKeys)).toEqual(true);
  expect(arraysEqual(caBodyKeys, i18nCaBodyCypressKeys)).toEqual(true);
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
const i18nCaHeadCypressKeys = Object.keys(i18nCaCypress.head);

test('ca head length', () => {
  expect(caHeadKeys.length).toEqual(4);
  expect(caHeadKeys.length).toEqual(afHeadKeys.length);
  expect(caHeadKeys.length).toEqual(daHeadKeys.length);
  expect(caHeadKeys.length).toEqual(deHeadKeys.length);
  expect(caHeadKeys.length).toEqual(enHeadKeys.length);
  expect(caHeadKeys.length).toEqual(esHeadKeys.length);
  expect(caHeadKeys.length).toEqual(ptHeadKeys.length);
  expect(caHeadKeys.length).toEqual(itHeadKeys.length);
  expect(caHeadKeys.length).toEqual(frHeadKeys.length);
  expect(caHeadKeys.length).toEqual(nlHeadKeys.length);
  expect(caHeadKeys.length).toEqual(i18nCaHeadCypressKeys.length);
});

test('ca head keys', () => {
  expect(arraysEqual(caHeadKeys, afHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, daHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, nlHeadKeys)).toEqual(true);
  expect(arraysEqual(caHeadKeys, i18nCaHeadCypressKeys)).toEqual(true);
});

test('en strings props vals', () => {
  expect(i18nCa).toEqual(
    {
      lang: 'ca',
      head: {
        appname: 'CardioRisc Framingham',
        description: "L'Escala de Framingham permet determinar el risc individual de patir qualsevol esdeveniment cardiovascular en 10 anys",
        keywords: 'framingham, calculadora, risc, puntuació, cor, cardiovascular, coronari, malaltia, estudi, càlcul',
        title: 'Calculadora Risc Cardiovascular'
      },
      body: {
        abdominal_aortic_aneurysm: 'Aneurisma Aòrtic Abdominal',
        age: 'Edat',
        androidapp: 'Android App',
        alternative_target: 'Objectiu Alternatiu',
        app_name: 'CR Framingham',
        arterial_pression: 'Pressió Arterial Sistòlica',
        aterosclerosis: 'Aterosclerosi Clínica',
        back: 'Enrere',
        brief_description: 'Calcula el risc individual de malalties cardiovasculars en 10 anys',
        calculate: 'Calcular',
        chronic_kidney_disease: 'Malaltia Renal Crònica',
        colesterol_hdl: 'Colesterol HDL',
        colesterol_ldl: 'Colesterol LDL',
        colesterol_total: 'Colesterol Total',
        cvd: 'RCV',
        cvdexplanation: 'RCV: Risc CardioVascular en 10 anys',
        day: 'Dia',
        decrease_in: 'disminució en',
        diabetes: 'Diabetis o Glucèmia alta en dejú',
        elinks: 'Elinks',
        gender: 'Gènere',
        genderRequired: 'Gènere és requerit',
        heartage: 'Edat Cor',
        high: 'Alt',
        hypertension_in_treatment: 'Hipertensió en tractament',
        info: 'Info',
        intermediate: 'Intermedi',
        low: 'Sota',
        man: 'Home',
        month: 'Mes',
        navbar_title: 'CardioRisc Framingham',
        or: 'o',
        patient: 'Pacient',
        patient_highly_requires_treatment: 'El pacient necessita tractament',
        patient_name: 'Nom del Pacient',
        patient_not_requires_treatment: 'El pacient no requereix tractament.',
        patientdata: 'Dades del Pacient',
        primary_target: 'Objectiu Primari',
        purpose: 'Propòsit',
        purpose_text1: "El risc d'un individu per a futurs esdeveniments cardiovasculars és modificable pels canvis en l'estil de vida i el tractament mèdic preventiu.",
        purpose_text2: "Els canvis en l'estil de vida poden incloure deixar de fumar, una dieta saludable, exercici regular, etc. El tractament mèdic preventiu pot incloure una estatina, una mini dosi d'aspirina, un tractament per a la hipertensió, etc.",
        purpose_text3: "És important poder predir el risc d'un pacient per decidir quan iniciar la modificació de l'estil de vida i el tractament mèdic preventiu per la qual cosa s'han desenvolupat múltiples models per a la predicció de el risc cardiovascular de pacients individuals. Un d'aquests models de risc clau és el Framingham Risk Score.",
        results: 'Resultats',
        risk: 'Risc',
        risk_score_calculator: 'Calculadora de Risc',
        score: 'Puntuació',
        send: 'Enviar',
        smoking: 'Tabaquisme',
        so_treatment_is_recommended: 'per la qual cosa es recomana tractament',
        statins_only_indicated: 'Estatines només indicades en cas de:',
        treatment: 'Tractament:',
        treatment_intermediate_hasfactors: 'Si bé el nivell de risc no és Alt, el pacient presenta factors de risc per a la seva edat',
        treatment_intermediate_ldl: 'Si bé el nivell de risc no és Alt, el pacient presenta nivells alts de LDL i es recomana tractament',
        treatment_intermediate_norisks: 'Si bé el nivell de risc no és Baix, el pacient no presenta factors de risc pel que generalment no requereix tractament',
        treatment_low_diabetes: "Si bé el nivell de risc és Baix, el pacient requereix tractament d'estatines causa de la presència de diabetis o glucèmia alta en dejú en una persona major de 40 anys",
        unknown: 'Desconegut',
        usefulness: 'Utilitat',
        usefulness_text_start: "L'escala de Framingham permet determinar el risc de patir qualsevol esdeveniment cardiovascular en 10 anys avaluant factors com l'edat, el sexe, la pressió arterial, la diabetis i el tabaquisme, assignant un puntuació a cada un d'ells i estratificant a el pacient en nivells de risc cardiovascular baix, mitjà i alt.",
        usefulness_text_lowrisk: 'Risc Baix = 10% o menys',
        usefulness_text_intermediaterisk: 'Risc Intermedi = 10-20%',
        usefulness_text_highrisk: 'Risc Alt = 20% o més',
        usefulness_text_end: "L'escala de Framingham també permet calcular l'edat vascular, el que dóna una estimació de el dany vascular de l'pacient a través de la diferència d'anys entre el resultat i l'edat cronològica de l'pacient.",
        using_guidelines: 'Usant 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Validació',
        validation_text: 'El Framingham Risk Score ha estat validat en els EE. UU., tant en homes com en dones, tant en europeus com a afroamericans.',
        waist_circumference: 'Circumferència de Cintura',
        woman: 'Dona',
        year: 'Any',
        years: 'anys'
      }
    }
  );
  expect(i18nCa).toEqual(i18nCaCypress);
});
