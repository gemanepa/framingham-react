const { arraysEqual } = require('../../helpers/arraysEqual');
const i18nEn = require('../../../src/i18n/en.json');
const i18nEs = require('../../../src/i18n/es.json');
const i18nPt = require('../../../src/i18n/pt.json');
const i18nIt = require('../../../src/i18n/it.json');
const i18nFr = require('../../../src/i18n/fr.json');
const i18nDe = require('../../../src/i18n/de.json');
const i18nDeCypress = require('../../e2e/cypress/fixtures/i18nDE.json');

const enKeys = Object.keys(i18nEn);
const esKeys = Object.keys(i18nEs);
const deKeys = Object.keys(i18nDe);
const frKeys = Object.keys(i18nFr);
const itKeys = Object.keys(i18nIt);
const ptKeys = Object.keys(i18nPt);
const i18nDeCypressKeys = Object.keys(i18nDeCypress);

test('de body length', () => {
  expect(deKeys.length).toEqual(69);
  expect(deKeys.length).toEqual(enKeys.length);
  expect(deKeys.length).toEqual(esKeys.length);
  expect(deKeys.length).toEqual(ptKeys.length);
  expect(deKeys.length).toEqual(itKeys.length);
  expect(deKeys.length).toEqual(frKeys.length);
  expect(deKeys.length).toEqual(i18nDeCypressKeys.length);
});

test('de body keys', () => {
  expect(arraysEqual(deKeys, enKeys)).toEqual(true);
  expect(arraysEqual(deKeys, esKeys)).toEqual(true);
  expect(arraysEqual(deKeys, frKeys)).toEqual(true);
  expect(arraysEqual(deKeys, itKeys)).toEqual(true);
  expect(arraysEqual(deKeys, ptKeys)).toEqual(true);
  expect(arraysEqual(deKeys, i18nDeCypressKeys)).toEqual(true);
});

test('de body props vals', () => {
  expect(i18nDe).toEqual(
    {
      abdominal_aortic_aneurysm: 'abdominales Aortenaneurysma',
      age: 'Alter',
      androidapp: 'Android App',
      alternative_target: 'Alternatives Ziel',
      app_name: 'Framingham HR',
      arterial_pression: 'Systolischen Blutdruck',
      aterosclerosis: 'Atherosklerose',
      back: 'Zurück ',
      brief_description: 'Berechnen Sie das individuelle Risiko für Herz-Kreislauf-Erkrankungen in 10 Jahren',
      calculate: 'Berechnen',
      chronic_kidney_disease: 'Chronische Nierenerkrankung',
      colesterol_hdl: 'HDL-Cholesterin',
      colesterol_ldl: 'LDL-Cholesterin',
      colesterol_total: 'Gesamtcholesterin',
      cvd: 'HKR',
      cvdexplanation: 'HKR: Herz-Kreislauf-Risiko in 10 Jahren',
      day: 'Tag',
      decrease_in: 'Reduktion in',
      diabetes: 'Diabetes oder hohe Nüchtern Glykämie',
      elinks: 'Elinks',
      gender: 'Geschlecht',
      genderRequired: 'Geschlecht ist erforderlich',
      heartage: 'Herzalter',
      high: 'Hoch',
      hypertension_in_treatment: 'Hypertonie behandelt',
      info: 'Info',
      intermediate: 'Mittelstufe',
      low: 'Niedrig',
      man: 'Mann',
      month: 'Monat',
      navbar_title: 'Framingham HerzRisiko',
      or: 'oder',
      patient: 'Patient',
      patient_highly_requires_treatment: 'Der Patient muss behandelt werden',
      patient_name: 'Name des Patienten',
      patient_not_requires_treatment: 'Der Patient benötigt keine Behandlung.',
      patientdata: 'Patientendaten',
      primary_target: 'Hauptziel',
      purpose: 'Zweck',
      purpose_text1: 'Das Risiko einer Person für zukünftige kardiovaskuläre Ereignisse kann durch Änderungen des Lebensstils und vorbeugende medizinische Behandlung verändert werden.',
      purpose_text2: 'Änderungen des Lebensstils können beinhalten, dass Sie mit dem Rauchen aufhören, sich gesund ernähren und regelmäßig Sport treiben. Die vorbeugende medizinische Behandlung kann ein Statin, kleine Dosen Aspirin und eine Behandlung gegen Bluthochdruck umfassen',
      purpose_text3: 'Es ist wichtig, das Risiko eines einzelnen Patienten vorhersagen zu können, um zu entscheiden, wann eine Änderung des Lebensstils und eine vorbeugende medizinische Behandlung eingeleitet werden sollen. Zu diesem Zweck wurden mehrere Risikomodelle für die Vorhersage des kardiovaskulären Risikos einzelner Patienten entwickelt. Ein solches Hauptrisikomodell ist der Framingham Risk Score.',
      results: 'Ergebnisse',
      risk: 'Risiko',
      risk_score_calculator: 'Risk Score Rechner',
      score: 'Interpunktion',
      send: 'Senden',
      smoking: 'Raucher',
      so_treatment_is_recommended: 'daher wird eine Behandlung empfohlen',
      statins_only_indicated: 'Verwenden Sie Statine nur, wenn:',
      treatment: 'Behandlung:',
      treatment_intermediate_hasfactors: 'Obwohl das Risiko nicht hoch ist, hat der Patient Risikofaktoren für sein Alter',
      treatment_intermediate_ldl: 'Obwohl das Risiko nicht hoch ist, weist der Patient hohe LDL-Werte auf, und eine Behandlung wird empfohlen',
      treatment_intermediate_norisks: 'Obwohl das Risiko nicht niedrig ist, weist der Patient keine Risikofaktoren auf, sodass normalerweise keine Behandlung erforderlich ist',
      treatment_low_diabetes: 'Obwohl das Risiko gering ist, muss der Patient über 40 mit Statin behandelt werden, wenn er an Diabetes leidet oder einen hohen Blutzuckerspiegel hat.',
      unknown: 'Unbekannt',
      usefulness: 'Nützlichkeit',
      usefulness_text_start: 'Die Framingham-Skala ermöglicht es, das Risiko eines kardiovaskulären Ereignisses innerhalb von 10 Jahren zu bestimmen, indem Faktoren wie Alter, Geschlecht, Blutdruck, Diabetes und Rauchen bewertet, jedem von ihnen eine Punktzahl zugewiesen und der Patient in niedrig, mittel und hoch klassifiziert wird kardiovaskuläres Risiko.',
      usefulness_text_lowrisk: 'Geringes Risiko = 10% oder weniger',
      usefulness_text_intermediaterisk: 'Zwischenrisiko = 10-20%',
      usefulness_text_highrisk: 'Hohes Risiko = 20% oder mehr',
      usefulness_text_end: 'Die Framingham-Skala ermöglicht auch die Berechnung des Gefäßalters, das eine Schätzung des Gefäßschadens des Patienten anhand der Differenz der Jahre zwischen dem Ergebnis und dem chronologischen Alter des Patienten liefert.',
      using_guidelines: 'Verwendung der 2017 Canadian CardioVascular Society Guidelines',
      validation: 'Validierung',
      validation_text: 'Der Framingham Risk Score wurde in den USA sowohl bei Männern als auch bei Frauen, sowohl bei Europäern als auch bei Afroamerikanern, validiert.',
      waist_circumference: 'Bauchumfang',
      woman: 'Frau',
      year: 'Jahr',
      years: 'jahre alt'
    }
  );
  expect(i18nDe).toEqual(i18nDeCypress);
});
