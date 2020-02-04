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
const i18nNlCypress = require('../../e2e/cypress/fixtures/i18nNL.json');

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
const i18nNlBodyCypressKeys = Object.keys(i18nNlCypress.body);

test('nl body length', () => {
  expect(nlBodyKeys.length).toEqual(72);
  expect(nlBodyKeys.length).toEqual(afBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(caBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(daBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(deBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(enBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(esBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(itBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(frBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(svBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(ruBodyKeys.length);
  expect(nlBodyKeys.length).toEqual(i18nNlBodyCypressKeys.length);
});

test('nl body keys', () => {
  expect(arraysEqual(nlBodyKeys, afBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, caBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, daBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, svBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, ruBodyKeys)).toEqual(true);
  expect(arraysEqual(nlBodyKeys, i18nNlBodyCypressKeys)).toEqual(true);
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
const i18nNlHeadCypressKeys = Object.keys(i18nNlCypress.head);

test('nl head length', () => {
  expect(nlHeadKeys.length).toEqual(4);
  expect(nlHeadKeys.length).toEqual(afHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(caHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(daHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(deHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(enHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(esHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(ptHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(itHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(frHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(svHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(ruHeadKeys.length);
  expect(nlHeadKeys.length).toEqual(i18nNlHeadCypressKeys.length);
});

test('nl head keys', () => {
  expect(arraysEqual(nlHeadKeys, afHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, caHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, daHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, svHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, ruHeadKeys)).toEqual(true);
  expect(arraysEqual(nlHeadKeys, i18nNlHeadCypressKeys)).toEqual(true);
});

test('nl strings props vals', () => {
  expect(i18nNl).toEqual(
    {
      lang: 'nl',
      head: {
        appname: 'HartRisico Framingham',
        description: 'Met de Framingham-schaal kan het individuele risico op cardiovasculaire gebeurtenissen binnen 10 jaar worden bepaald',
        keywords: 'framingham, rekenmachine, risico, hart, hartziekte, cardiovasculair, berekening',
        title: 'Framingham CardioVasculaire Risico Calculator'
      },
      body: {
        abdominal_aortic_aneurysm: 'Abdominaal aorta-aneurysma',
        age: 'Leeftijd',
        androidapp: 'Android App',
        alternative_target: 'Alternatieve doelstelling',
        app_name: 'HR Framingham',
        arterial_pression: 'Systolische bloeddruk',
        aterosclerosis: 'Klinische atherosclerose',
        back: 'Terug',
        brief_description: 'Bereken het individuele risico op hart- en vaatziekten in 10 jaar',
        calculate: 'Berekenen',
        chronic_kidney_disease: 'Chronische nierziekte',
        colesterol_hdl: 'HDL Cholesterol',
        colesterol_ldl: 'LDL Cholesterol',
        colesterol_total: 'Totaal Cholesterol',
        'cms(inches)': 'cms (inches)',
        cvd: 'CVR',
        cvdexplanation: 'CVR: CardioVasculair Risico in 10 jaar',
        day: 'Dag',
        decrease_in: 'reductie in',
        diabetes: 'Diabetes of hoog-vasten glycemie',
        elinks: 'Links',
        gender: 'Geslacht',
        genderRequired: 'Geslacht is verplicht',
        heartage: 'Hart Leeftijd',
        high: 'Hoog',
        hypertension_in_treatment: 'Hypertensie behandeld',
        info: 'Info',
        intermediate: 'Gemiddeld',
        low: 'Laag',
        man: 'Man',
        mgdl: 'mg/dl',
        mmHg: 'mmHg',
        month: 'Maand',
        navbar_title: 'HartRisico Framingham',
        or: 'of',
        patient: 'Patiënt',
        patient_highly_requires_treatment: 'De patiënt heeft behandeling nodig',
        patient_name: 'Patient Naam',
        patient_not_requires_treatment: 'De patiënt heeft geen behandeling nodig.',
        patientdata: 'Patiënteninformatie',
        primary_target: 'Primaire doelstelling',
        purpose: 'Doel',
        purpose_text1: 'Het risico van een individu voor toekomstige cardiovasculaire gebeurtenissen kan worden gewijzigd door veranderingen in levensstijl en preventieve medische behandeling.',
        purpose_text2: 'Veranderingen in levensstijl omvatten stoppen met roken, gezonde voeding, regelmatige lichaamsbeweging, enz. Preventieve medische behandeling omvat een statine, kleine doses aspirine, behandeling voor hypertensie, enz.',
        purpose_text3: 'Het is belangrijk om het risico van een individuele patiënt te kunnen voorspellen om te beslissen wanneer levensstijlwijziging en preventieve medische behandeling moeten worden gestart, met dit doel zijn meerdere risicomodellen voor de voorspelling van cardiovasculair risico van individuele patiënten ontwikkeld. Een van dit risicomodel is de Framingham Risk Score.        ',
        results: 'Uitslagen',
        risk: 'Risico',
        risk_score_calculator: 'Risicoscore Calculator',
        score: 'Partituur',
        send: 'Sturen',
        smoking: 'Roker',
        so_treatment_is_recommended: 'dus behandeling wordt aanbevolen',
        statins_only_indicated: 'Statines alleen aangegeven in geval van:',
        treatment: 'Behandeling:',
        treatment_intermediate_hasfactors: 'Hoewel het risiconiveau niet hoog is, heeft de patiënt risicofactoren voor zijn leeftijd',
        treatment_intermediate_ldl: 'Hoewel het risiconiveau niet hoog is, heeft de patiënt hoge LDL-waarden en wordt behandeling aanbevolen',
        treatment_intermediate_norisks: 'Hoewel het risiconiveau niet laag is, presenteert de patiënt geen risicofactoren, dus heeft het meestal geen behandeling nodig',
        treatment_low_diabetes: 'Aunque el nivel de riesgo es bajo, el paciente requiere tratamiento con estatinas debido a la presencia de diabetes o glucosa alta en la sangre en una persona mayor de 40 años.',
        unknown: 'Onbekend',
        usefulness: 'Nuttigheid',
        usefulness_text_start: 'De Framingham-schaal maakt het mogelijk om het risico op cardiovasculaire gebeurtenissen in 10 jaar te bepalen door factoren zoals leeftijd, geslacht, bloeddruk, diabetes en roken te beoordelen, aan elk een score toe te kennen en het cardiovasculaire risico van de patiënt te classificeren in laag, gemiddeld, of hoog.',
        usefulness_text_lowrisk: 'Laag risico = 10% of minder',
        usefulness_text_intermediaterisk: 'Gemiddeld risico = 10-20%',
        usefulness_text_highrisk: 'Hoog risico = 20% of meer',
        usefulness_text_end: 'De Framingham-schaal maakt het ook mogelijk om de vasculaire leeftijd te berekenen, wat een schatting geeft van de vasculaire schade van de patiënt door het verschil in jaren tussen het resultaat en de chronologische leeftijd van de patiënt.',
        using_guidelines: 'Gebruik van de 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Geldigheid',
        validation_text: 'De Framingham Risk Score is gevalideerd in de VS, zowel bij mannen als bij vrouwen, zowel in Europese Amerikanen als in Afrikaanse Amerikanen.',
        waist_circumference: 'Tailleomtrek',
        woman: 'Vrouw',
        year: 'Jaar',
        years: 'jaar oud'
      }
    }
  );
  expect(i18nNl).toEqual(i18nNlCypress);
});
