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
const i18nAfCypress = require('../../e2e/cypress/fixtures/i18nAF.json');

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
const i18nAfBodyCypressKeys = Object.keys(i18nAfCypress.body);

test('af body length', () => {
  expect(afBodyKeys.length).toEqual(72);
  expect(afBodyKeys.length).toEqual(caBodyKeys.length);
  expect(afBodyKeys.length).toEqual(daBodyKeys.length);
  expect(afBodyKeys.length).toEqual(enBodyKeys.length);
  expect(afBodyKeys.length).toEqual(deBodyKeys.length);
  expect(afBodyKeys.length).toEqual(esBodyKeys.length);
  expect(afBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(afBodyKeys.length).toEqual(itBodyKeys.length);
  expect(afBodyKeys.length).toEqual(frBodyKeys.length);
  expect(afBodyKeys.length).toEqual(nlBodyKeys.length);
  expect(afBodyKeys.length).toEqual(svBodyKeys.length);
  expect(afBodyKeys.length).toEqual(ruBodyKeys.length);
  expect(afBodyKeys.length).toEqual(i18nAfBodyCypressKeys.length);
});

test('af body keys', () => {
  expect(arraysEqual(afBodyKeys, caBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, daBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, nlBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, svBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, ruBodyKeys)).toEqual(true);
  expect(arraysEqual(afBodyKeys, i18nAfBodyCypressKeys)).toEqual(true);
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
const i18nAfHeadCypressKeys = Object.keys(i18nAfCypress.head);

test('af head length', () => {
  expect(afHeadKeys.length).toEqual(4);
  expect(afHeadKeys.length).toEqual(caHeadKeys.length);
  expect(afHeadKeys.length).toEqual(daHeadKeys.length);
  expect(afHeadKeys.length).toEqual(deHeadKeys.length);
  expect(afHeadKeys.length).toEqual(enHeadKeys.length);
  expect(afHeadKeys.length).toEqual(esHeadKeys.length);
  expect(afHeadKeys.length).toEqual(esHeadKeys.length);
  expect(afHeadKeys.length).toEqual(nlHeadKeys.length);
  expect(afHeadKeys.length).toEqual(svHeadKeys.length);
  expect(afHeadKeys.length).toEqual(itHeadKeys.length);
  expect(afHeadKeys.length).toEqual(frHeadKeys.length);
  expect(afHeadKeys.length).toEqual(ruHeadKeys.length);
  expect(afHeadKeys.length).toEqual(i18nAfHeadCypressKeys.length);
});

test('af head keys', () => {
  expect(arraysEqual(afHeadKeys, caHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, daHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, nlHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, svHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, ruHeadKeys)).toEqual(true);
  expect(arraysEqual(afHeadKeys, i18nAfHeadCypressKeys)).toEqual(true);
});

test('af strings props vals', () => {
  expect(i18nAf).toEqual(
    {
      lang: 'af',
      head: {
        appname: 'KardioRisiko Framingham',
        description: 'Die Framingham-skaal stel dit in staat om die individuele risiko van enige kardiovaskulêre voorval binne tien jaar te bepaal',
        keywords: 'framingham, sakrekenaar, risiko, telling, hart, kardiovaskulêre, koronêre, siekte, studie, berekening',
        title: 'Framingham KardioVaskulêre Risiko Sakrekenaar'
      },
      body: {
        abdominal_aortic_aneurysm: 'Abdominale aorta Aneurysma',
        age: 'Ouderdom',
        androidapp: 'Android App',
        alternative_target: 'Alternatiewe doelwit',
        app_name: 'KR Framingham',
        arterial_pression: 'Sistoliese bloeddruk',
        aterosclerosis: 'Kliniese Aterosklerose',
        back: 'Terug',
        brief_description: 'Bereken die individuele risiko van kardiovaskulêre siekte oor tien jaar',
        calculate: 'Bereken',
        chronic_kidney_disease: 'Chroniese Niersiekte',
        colesterol_hdl: 'HDL Cholesterol',
        colesterol_ldl: 'LDL Cholesterol',
        colesterol_total: 'Totale Cholesterol',
        'cms(inches)': 'cms (inches)',
        cvd: 'KVR',
        cvdexplanation: 'KVR: Kardio-vaskulêre risiko in 10 jaar',
        day: 'Dag',
        decrease_in: 'vermindering in',
        diabetes: 'Diabetes of hoë vastende glukemie',
        elinks: 'Links',
        gender: 'Genre',
        genderRequired: 'Genre is verpligtend',
        heartage: 'Hart Ouderdom',
        high: 'Hoë',
        hypertension_in_treatment: 'Hipertensie behandel',
        info: 'Info',
        intermediate: 'Intermediêre',
        low: 'Lae',
        man: 'Man',
        mgdl: 'mg/dl',
        mmHg: 'mmHg',
        month: 'Maand',
        navbar_title: 'KardioRisiko Framingham',
        or: 'of',
        patient: 'Pasiënt',
        patient_highly_requires_treatment: 'Die pasiënt benodig behandeling',
        patient_name: 'Pasiënt se Naam',
        patient_not_requires_treatment: 'Die pasiënt benodig nie behandeling nie.',
        patientdata: 'Pasiëntinligting',
        primary_target: 'Primêre Doelwit',
        purpose: 'Doel',
        purpose_text1: "'N Individu se risiko vir toekomstige kardiovaskulêre gebeure kan verander word deur lewenstylveranderings en voorkomende mediese behandeling.",
        purpose_text2: "Lewenstylveranderinge kan insluit die ophou van rook, 'n gesonde dieet, gereelde oefening, ens. Voorkomende mediese behandeling kan 'n statine, klein dosisse aspirien, behandeling van hipertensie, ens.",
        purpose_text3: "Dit is belangrik om die risiko van 'n individuele pasiënt te kan voorspel ten einde te besluit wanneer om lewenstylwysiging en voorkomende mediese behandeling te begin. Met hierdie doel is verskeie risikomodelle vir die voorspelling van kardiovaskulêre risiko vir individuele pasiënte ontwikkel. Een van die belangrikste risikomodelle is die Framingham Risk Score.",
        results: 'Resultate',
        risk: 'Risiko',
        risk_score_calculator: 'Risiko Telling Sakrekenaar',
        score: 'Punktuasie',
        send: 'Stuur',
        smoking: 'Roker',
        so_treatment_is_recommended: 'so behandeling word aanbeveel',
        statins_only_indicated: 'Statine word slegs aangedui in die geval van:',
        treatment: 'Behandeling:',
        treatment_intermediate_hasfactors: 'Alhoewel die vlak van risiko nie hoog is nie, het die pasiënt risikofaktore vir sy ouderdom',
        treatment_intermediate_ldl: 'Alhoewel die vlak van risiko nie hoog is nie, het die pasiënt hoë vlakke van LDL en behandeling word aanbeveel',
        treatment_intermediate_norisks: 'Alhoewel die vlak van risiko nie laag is nie, het die pasiënt nie risikofaktore nie, dus benodig dit gewoonlik nie behandeling nie',
        treatment_low_diabetes: "Alhoewel die vlak van risiko laag is, benodig die pasiënt behandeling van statiene as gevolg van die teenwoordigheid van diabetes of hoë bloedglukose in 'n persoon ouer as 40 jaar.",
        unknown: 'Onbekend',
        usefulness: 'Nut',
        usefulness_text_start: 'Die Framingham-skaal laat dit toe om die risiko van kardiovaskulêre voorvalle in tien jaar te bereken, wat die pasiënt in lae, medium en hoë kardiovaskulêre risiko klassifiseer, met inagneming van faktore soos ouderdom, geslag, bloeddruk, diabetes en rook.',
        usefulness_text_lowrisk: 'Lae risiko = 10% of minder',
        usefulness_text_intermediaterisk: 'Intermediêre risiko = 10-20%',
        usefulness_text_highrisk: 'Hoë risiko = 20% of meer',
        usefulness_text_end: "Die Framingham-skaal laat ook toe om die vaskulêre ouderdom te bereken, wat 'n skatting gee van die vaatskade van die pasiënt deur die verskil tussen jare tussen die resultaat en die chronologiese ouderdom van die pasiënt.",
        using_guidelines: 'Met behulp van die 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Bekragtiging',
        validation_text: 'Die Framingham-risikotelling is in die VSA bekragtig, beide mans en dames, beide in die Europeërs en die Afro-Amerikaners.',
        waist_circumference: 'Sistoliese bloeddruk',
        woman: 'Vrou',
        year: 'Jaar',
        years: 'jaar oud'
      }
    }
  );
  expect(i18nAf).toEqual(i18nAfCypress);
});
