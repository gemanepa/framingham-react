const { arraysEqual } = require('../../helpers/arraysEqual');
const i18nEn = require('../../../src/i18n/en.json');
const i18nEs = require('../../../src/i18n/es.json');
const i18nPt = require('../../../src/i18n/pt.json');
const i18nIt = require('../../../src/i18n/it.json');
const i18nFr = require('../../../src/i18n/fr.json');
const i18nDe = require('../../../src/i18n/de.json');
const i18nItCypress = require('../../e2e/cypress/fixtures/i18nIT.json');

const enKeys = Object.keys(i18nEn.body);
const esKeys = Object.keys(i18nEs.body);
const deKeys = Object.keys(i18nDe.body);
const frKeys = Object.keys(i18nFr.body);
const itKeys = Object.keys(i18nIt.body);
const ptKeys = Object.keys(i18nPt.body);
const i18nItCypressKeys = Object.keys(i18nItCypress.body);

test('it body length', () => {
  expect(itKeys.length).toEqual(69);
  expect(itKeys.length).toEqual(deKeys.length);
  expect(itKeys.length).toEqual(enKeys.length);
  expect(itKeys.length).toEqual(ptKeys.length);
  expect(itKeys.length).toEqual(frKeys.length);
  expect(itKeys.length).toEqual(esKeys.length);
  expect(itKeys.length).toEqual(i18nItCypressKeys.length);
});

test('it body keys', () => {
  expect(arraysEqual(itKeys, deKeys)).toEqual(true);
  expect(arraysEqual(itKeys, enKeys)).toEqual(true);
  expect(arraysEqual(itKeys, esKeys)).toEqual(true);
  expect(arraysEqual(itKeys, frKeys)).toEqual(true);
  expect(arraysEqual(itKeys, ptKeys)).toEqual(true);
  expect(arraysEqual(itKeys, i18nItCypressKeys)).toEqual(true);
});

test('it strings props vals', () => {
  expect(i18nIt).toEqual(
    {
      lang: 'it',
      head: {
        appname: 'CardioRischio Framingham',
        description: 'La Scala di Framingham calcola il rischio individuale di subire eventi cardiovascolari in 10 anni',
        keywords: 'framingham, calcolatrice, rischio, cuore, coronarico, malattia, cardiovascolare, calcolo',
        title: 'Framingham Calcolatore Rischio CardioVascolare'
      },
      body: {
        abdominal_aortic_aneurysm: "Aneurisma dell'aorta addominale",
        age: 'Età',
        androidapp: 'Android App',
        alternative_target: 'Obiettivo Alternativo',
        app_name: 'CR Framingham',
        arterial_pression: 'Pressione Sanguigna Sistolica',
        aterosclerosis: 'Aterosclerosi clinica',
        back: 'Tornare',
        brief_description: 'Calcola il rischio individuale di malattie cardiovascolari in 10 anni',
        calculate: 'Calcolare',
        chronic_kidney_disease: 'Malattia renale cronica',
        colesterol_hdl: 'Colesterolo HDL',
        colesterol_ldl: 'Colesterolo LDL',
        colesterol_total: 'Colesterolo Totale',
        cvd: 'RCV',
        cvdexplanation: 'RCV: Rischio CardioVascolare a 10 anni',
        day: 'Giorno',
        decrease_in: 'diminuzione di',
        diabetes: 'Diabete o alterata glicemia',
        elinks: 'Elinks',
        gender: 'Genere',
        genderRequired: 'Genere è richiesto',
        heartage: 'Età Cardiaca',
        high: 'Elevato',
        hypertension_in_treatment: 'Ipertensione sotto trattamento',
        info: 'Info',
        intermediate: 'Intermedio',
        low: 'Basso',
        man: 'Uomo',
        month: 'Mese',
        navbar_title: 'CardioRischio Framingham',
        or: 'o',
        patient: 'Paziente',
        patient_highly_requires_treatment: 'Il paziente richiede trattamento',
        patient_name: 'Nome del Paziente',
        patient_not_requires_treatment: 'Il paziente non richiede trattamento',
        patientdata: 'Dati del paziente',
        primary_target: 'Obiettivo Primario',
        purpose: 'Scopo',
        purpose_text1: 'Il rischio di un individuo per futuri eventi cardiovascolari è modificabile dai cambiamenti dello stile di vita e dalle cure mediche preventive.',
        purpose_text2: "I cambiamenti nello stile di vita possono includere l'interruzione del fumo, un'alimentazione sana, esercizio fisico regolare, ecc. Il trattamento medico preventivo può includere statine, piccole dosi di aspirina, trattamento per l'ipertensione, ecc.",
        purpose_text3: 'È importante essere in grado di prevedere il rischio di un singolo paziente al fine di decidere quando avviare la modifica dello stile di vita e il trattamento medico preventivo, con questo scopo sono stati sviluppati molteplici modelli di rischio per la previsione del rischio cardiovascolare dei singoli pazienti. Uno di questi modelli chiave di rischio è il Framingham Risk Score.',
        results: 'Risultati',
        risk: 'Rischio',
        risk_score_calculator: 'Calcolatore di Rischio',
        score: 'Punti',
        send: 'Inviare',
        smoking: 'Tabagismo',
        so_treatment_is_recommended: 'e il trattamento è raccomandato.',
        statins_only_indicated: 'Le statine sono indicate solo in caso di',
        treatment: 'Trattamento:',
        treatment_intermediate_hasfactors: 'Sebbene il livello di rischio non sia elevato, il paziente presenta fattori di rischio per la sua età',
        treatment_intermediate_ldl: 'Sebbene il livello di rischio non sia elevato, sono presenti livelli elevati di LDL e si raccomanda il trattamento',
        treatment_intermediate_norisks: 'Sebbene il livello di rischio non sia basso, il paziente non presenta fattori di rischio per la sua età e generalmente non richiede trattamenti medici',
        treatment_low_diabetes: 'Sebbene il livello di rischio sia basso, i pazienti necessitano di una terapia con statine perché la presenza di diabete o di alterata glicemia a digiuno nei soggetti di età superiore ai 40 anni è considerata un fattore di rischio.',
        unknown: 'Sconosciuto',
        usefulness: 'Utilità',
        usefulness_text_start: 'La scala Framingham consente di determinare il rischio di subire qualsiasi evento cardiovascolare in 10 anni valutando fattori quali età, sesso, pressione sanguigna, diabete e fumo, assegnando un punteggio a ciascuno di essi e stratificando il paziente in basso, medio e alto rischio cardiovascolare.',
        usefulness_text_lowrisk: 'Basso rischio = 10% o meno',
        usefulness_text_intermediaterisk: 'Rischio intermedio = 10-20%',
        usefulness_text_highrisk: 'Alto rischio = 20% o più',
        usefulness_text_end: "La scala di Framingham consente anche di calcolare l'età vascolare, che fornisce una stima del danno vascolare del paziente attraverso la differenza di anni tra il risultato e l'età cronologica del paziente.",
        using_guidelines: 'Utilizzando 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Validazione',
        validation_text: 'Il punteggio di rischio di Framingham è stato validato negli Stati Uniti, sia negli uomini che nelle donne, sia negli americani europei che negli afroamericani.',
        waist_circumference: 'Taglia della Cintura',
        woman: 'Donna',
        year: 'Anno',
        years: 'anni'
      }
    }
  );
  expect(i18nIt).toEqual(i18nItCypress);
});
