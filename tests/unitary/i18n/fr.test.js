const { arraysEqual } = require('../../helpers/arraysEqual');
const i18nAf = require('../../../src/i18n/af.json');
const i18nCa = require('../../../src/i18n/ca.json');
const i18nEn = require('../../../src/i18n/en.json');
const i18nEs = require('../../../src/i18n/es.json');
const i18nPt = require('../../../src/i18n/pt.json');
const i18nIt = require('../../../src/i18n/it.json');
const i18nFr = require('../../../src/i18n/fr.json');
const i18nDe = require('../../../src/i18n/de.json');
const i18nFrCypress = require('../../e2e/cypress/fixtures/i18nFR.json');

const afBodyKeys = Object.keys(i18nAf.body);
const caBodyKeys = Object.keys(i18nCa.body);
const enBodyKeys = Object.keys(i18nEn.body);
const esBodyKeys = Object.keys(i18nEs.body);
const deBodyKeys = Object.keys(i18nDe.body);
const frBodyKeys = Object.keys(i18nFr.body);
const itBodyKeys = Object.keys(i18nIt.body);
const ptBodyKeys = Object.keys(i18nPt.body);
const i18nFrBodyCypressKeys = Object.keys(i18nFrCypress.body);

test('fr body length', () => {
  expect(frBodyKeys.length).toEqual(69);
  expect(frBodyKeys.length).toEqual(afBodyKeys.length);
  expect(frBodyKeys.length).toEqual(caBodyKeys.length);
  expect(frBodyKeys.length).toEqual(deBodyKeys.length);
  expect(frBodyKeys.length).toEqual(enBodyKeys.length);
  expect(frBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(frBodyKeys.length).toEqual(itBodyKeys.length);
  expect(frBodyKeys.length).toEqual(esBodyKeys.length);
  expect(frBodyKeys.length).toEqual(i18nFrBodyCypressKeys.length);
});

test('fr body keys', () => {
  expect(arraysEqual(frBodyKeys, afBodyKeys)).toEqual(true);
  expect(arraysEqual(frBodyKeys, caBodyKeys)).toEqual(true);
  expect(arraysEqual(frBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(frBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(frBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(frBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(frBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(frBodyKeys, i18nFrBodyCypressKeys)).toEqual(true);
});

const afHeadKeys = Object.keys(i18nAf.head);
const caHeadKeys = Object.keys(i18nCa.head);
const enHeadKeys = Object.keys(i18nEn.head);
const esHeadKeys = Object.keys(i18nEs.head);
const deHeadKeys = Object.keys(i18nDe.head);
const frHeadKeys = Object.keys(i18nFr.head);
const itHeadKeys = Object.keys(i18nIt.head);
const ptHeadKeys = Object.keys(i18nPt.head);
const i18nFrHeadCypressKeys = Object.keys(i18nFrCypress.head);

test('fr head length', () => {
  expect(frHeadKeys.length).toEqual(4);
  expect(frHeadKeys.length).toEqual(afHeadKeys.length);
  expect(frHeadKeys.length).toEqual(caHeadKeys.length);
  expect(frHeadKeys.length).toEqual(deHeadKeys.length);
  expect(frHeadKeys.length).toEqual(enHeadKeys.length);
  expect(frHeadKeys.length).toEqual(ptHeadKeys.length);
  expect(frHeadKeys.length).toEqual(itHeadKeys.length);
  expect(frHeadKeys.length).toEqual(esHeadKeys.length);
  expect(frHeadKeys.length).toEqual(i18nFrHeadCypressKeys.length);
});

test('fr head keys', () => {
  expect(arraysEqual(frHeadKeys, afHeadKeys)).toEqual(true);
  expect(arraysEqual(frHeadKeys, caHeadKeys)).toEqual(true);
  expect(arraysEqual(frHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(frHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(frHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(frHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(frHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(frHeadKeys, i18nFrHeadCypressKeys)).toEqual(true);
});

test('fr strings props vals', () => {
  expect(i18nFr).toEqual(
    {
      lang: 'fr',
      head: {
        appname: 'CardioRisque Framingham',
        description: "L'échelle de Framingham permet de déterminer le risque individuel de souffrir d'un événement cardiovasculaire dans 10 ans",
        keywords: 'framingham, calculator, risque, coeur, coronaire, maladie, cardiovasculaire, calcul',
        title: 'Framingham Calculateur Risque CardioVasculaire'
      },
      body: {
        abdominal_aortic_aneurysm: "Anévrisme de l'aorte abdominale",
        age: 'Âge',
        androidapp: 'Android App',
        alternative_target: 'Objectif alternatif',
        app_name: 'CR Framingham',
        arterial_pression: 'Pression Artérielle Systolique',
        aterosclerosis: 'Athérosclérose clinique',
        back: 'Revenir',
        brief_description: 'Calculer le risque individuel de maladie cardiovasculaire dans 10 ans',
        calculate: 'Calculer',
        chronic_kidney_disease: 'Maladie Rénale Chronique',
        colesterol_hdl: 'Cholestérol HDL',
        colesterol_ldl: 'Cholestérol LDL',
        colesterol_total: 'Cholestérol Total',
        cvd: 'RCV',
        cvdexplanation: 'RCV: Risque CardioVasculaire dans 10 ans',
        day: 'Jour',
        decrease_in: 'diminution de',
        diabetes: 'Diabète ou glycémie élevée à jeun',
        elinks: 'Elinks',
        gender: 'Genre',
        genderRequired: 'Genre est requis',
        heartage: 'Âge du Coeur',
        high: 'Élevé',
        hypertension_in_treatment: 'Hypertension en traitement',
        info: 'Info',
        intermediate: 'Intermédiaire',
        low: 'Faible',
        man: 'Homme',
        month: 'Mois',
        navbar_title: 'CardioRisque Framingham',
        or: 'o',
        patient: 'Patient',
        patient_highly_requires_treatment: "Le patient a besoin d'un traitement",
        patient_name: 'Nom du Patient',
        patient_not_requires_treatment: "Le patient n'a pas besoin de traitement.",
        patientdata: 'Information du patient',
        primary_target: 'Objectif principal',
        purpose: 'Objectif',
        purpose_text1: "Le risque d'un individu pour de futurs événements cardiovasculaires est modifiable par des changements de style de vie et un traitement médical préventif.",
        purpose_text2: "Les changements de style de vie peuvent inclure l'arrêt du tabagisme, une alimentation saine, l'exercice régulier, etc. Un traitement médical préventif peut inclure une statine, de petites doses d'aspirine, un traitement pour l'hypertension, etc.",
        purpose_text3: "Il est important de pouvoir prédire le risque d'un patient individuel afin de décider quand initier une modification du mode de vie et un traitement médical préventif, dans ce but, plusieurs modèles de risque pour la prédiction du risque cardiovasculaire de chaque patient ont été développés. Un tel modèle de risque clé est le Framingham Risk Score.",
        results: 'Résultats',
        risk: 'Risque',
        risk_score_calculator: 'Calculateur de Risque',
        score: 'Ponctuation',
        send: 'Envoyer',
        smoking: 'Tabagisme',
        so_treatment_is_recommended: 'donc le traitement est recommandé',
        statins_only_indicated: "Les statines ne sont indiquées qu'en cas de:",
        treatment: 'Traitement:',
        treatment_intermediate_hasfactors: "Le niveau de risque n'est pas élevé, mais le patient a des facteurs de risque pour son âge",
        treatment_intermediate_ldl: "Le niveau de risque n'est pas élevé, mais le patient présente des niveaux élevés de LDL et un traitement est recommandé.",
        treatment_intermediate_norisks: "Le niveau de risque n'est pas faible, mais le patient n'a pas de facteurs de risque et, par conséquent, ne nécessite généralement pas de traitement",
        treatment_low_diabetes: "Le niveau de risque est faible, mais le patient nécessite un traitement par statines en raison de la présence d'un diabète ou d'une glycémie élevée à jeun chez une personne de plus de 40 ans.",
        unknown: 'Inconnu',
        usefulness: 'Utilité',
        usefulness_text_start: "L'échelle de Framingham permet de déterminer le risque de souffrir d'un événement cardiovasculaire en 10 ans en évaluant des facteurs tels que l'âge, le sexe, la pression artérielle, le diabète et le tabagisme, en attribuant un score à chacun d'eux et en stratifiant le patient en faible, moyen et élevé risque cardiovasculaire.",
        usefulness_text_lowrisk: 'Risque faible = 10% ou moins',
        usefulness_text_intermediaterisk: 'Risque intermédiaire = 10-20%',
        usefulness_text_highrisk: 'Risque élevé = 20% ou plus',
        usefulness_text_end: "L'échelle de Framingham permet également de calculer l'âge vasculaire, ce qui donne une estimation des dommages vasculaires du patient à travers la différence d'années entre le résultat et l'âge chronologique du patient.",
        using_guidelines: 'En utilisant les 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Validation',
        validation_text: 'Le Framingham Risk Score a été validé aux États-Unis, tant chez les hommes que chez les femmes, tant chez les Européens que chez les Afro-Américains.',
        waist_circumference: 'Tour de taille',
        woman: 'Femme',
        year: 'Année',
        years: 'ans'
      }
    }
  );
  expect(i18nFr).toEqual(i18nFrCypress);
});
