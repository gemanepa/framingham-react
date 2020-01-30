const { arraysEqual } = require('../../helpers/arraysEqual');
const i18nEn = require('../../../src/i18n/en.json');
const i18nEs = require('../../../src/i18n/es.json');
const i18nPt = require('../../../src/i18n/pt.json');
const i18nIt = require('../../../src/i18n/it.json');
const i18nFr = require('../../../src/i18n/fr.json');
const i18nDe = require('../../../src/i18n/de.json');
const i18nPtCypress = require('../../e2e/cypress/fixtures/i18nPT.json');

const enBodyKeys = Object.keys(i18nEn.body);
const esBodyKeys = Object.keys(i18nEs.body);
const deBodyKeys = Object.keys(i18nDe.body);
const frBodyKeys = Object.keys(i18nFr.body);
const itBodyKeys = Object.keys(i18nIt.body);
const ptBodyKeys = Object.keys(i18nPt.body);
const i18nPtBodyCypressKeys = Object.keys(i18nPtCypress.body);

test('it body length', () => {
  expect(ptBodyKeys.length).toEqual(69);
  expect(ptBodyKeys.length).toEqual(deBodyKeys.length);
  expect(ptBodyKeys.length).toEqual(enBodyKeys.length);
  expect(ptBodyKeys.length).toEqual(itBodyKeys.length);
  expect(ptBodyKeys.length).toEqual(frBodyKeys.length);
  expect(ptBodyKeys.length).toEqual(esBodyKeys.length);
  expect(ptBodyKeys.length).toEqual(i18nPtBodyCypressKeys.length);
});

test('it body keys', () => {
  expect(arraysEqual(ptBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(ptBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(ptBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(ptBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(ptBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(ptBodyKeys, i18nPtBodyCypressKeys)).toEqual(true);
});

const enHeadKeys = Object.keys(i18nEn.head);
const esHeadKeys = Object.keys(i18nEs.head);
const deHeadKeys = Object.keys(i18nDe.head);
const frHeadKeys = Object.keys(i18nFr.head);
const itHeadKeys = Object.keys(i18nIt.head);
const ptHeadKeys = Object.keys(i18nPt.head);
const i18nPtHeadCypressKeys = Object.keys(i18nPtCypress.head);

test('it head length', () => {
  expect(ptHeadKeys.length).toEqual(4);
  expect(ptHeadKeys.length).toEqual(deHeadKeys.length);
  expect(ptHeadKeys.length).toEqual(enHeadKeys.length);
  expect(ptHeadKeys.length).toEqual(itHeadKeys.length);
  expect(ptHeadKeys.length).toEqual(frHeadKeys.length);
  expect(ptHeadKeys.length).toEqual(esHeadKeys.length);
  expect(ptHeadKeys.length).toEqual(i18nPtHeadCypressKeys.length);
});

test('it head keys', () => {
  expect(arraysEqual(ptHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(ptHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(ptHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(ptHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(ptHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(ptHeadKeys, i18nPtHeadCypressKeys)).toEqual(true);
});

test('pt strings props vals', () => {
  expect(i18nPt).toEqual(
    {
      lang: 'pt',
      head: {
        appname: 'CardioRisco Framingham',
        description: 'A Escala de Framingham permite determinar o risco individual de sofrer qualquer evento cardiovascular em 10 anos',
        keywords: 'framingham, calculadora, risco, coração, doença coronariana, cardiovascular, cálculo',
        title: 'Framingham Calculadora Risco CardioVascular'
      },
      body: {
        abdominal_aortic_aneurysm: 'Aneurisma Aórtico Abdominal',
        age: 'Idade',
        androidapp: 'Android App',
        alternative_target: 'Objetivo Alternativo',
        app_name: 'CR Framingham',
        arterial_pression: 'Pressão Arterial Sistólica',
        aterosclerosis: 'Aterosclerose Clínica',
        back: 'Atrás',
        brief_description: 'Calcular o risco individual de doença cardiovascular em 10 anos',
        calculate: 'Calcular',
        chronic_kidney_disease: 'Doença Renal Crônica',
        colesterol_hdl: 'Colesterol HDL',
        colesterol_ldl: 'Colesterol LDL',
        colesterol_total: 'Colesterol Total',
        cvd: 'RCV',
        cvdexplanation: 'RCV: Risco CardioVascular em 10 anos',
        day: 'Dia',
        decrease_in: 'diminuição de',
        diabetes: 'Diabetes ou anomalia da glicemia',
        elinks: 'Elinks',
        gender: 'Gênero',
        genderRequired: 'Gênero é obrigatório',
        heartage: 'Idade Coração',
        high: 'Alto',
        hypertension_in_treatment: 'Hipertensão sob tratamento',
        info: 'Info',
        intermediate: 'Intermédio',
        low: 'Baixo',
        man: 'Homen',
        month: 'Mês',
        navbar_title: 'CardioRisco Framingham',
        or: 'ou',
        patient: 'Paciente',
        patient_highly_requires_treatment: 'Paciente requer tratamento',
        patient_name: 'Nome do Paciente',
        patient_not_requires_treatment: 'Paciente não requer tratamento',
        patientdata: 'Dados do Paciente',
        primary_target: 'Objetivo Primário',
        purpose: 'Finalidade',
        purpose_text1: 'O risco de um indivíduo para futuros eventos cardiovasculares é modificável por mudanças no estilo de vida e tratamento médico preventivo.',
        purpose_text2: 'As mudanças no estilo de vida podem incluir a interrupção do fumo, dieta saudável, exercício físico regular, etc. O tratamento médico preventivo pode incluir estatina, pequenas doses de aspirina, tratamento para hipertensão, etc.',
        purpose_text3: 'É importante prever o risco de um paciente individual para decidir quando iniciar a modificação do estilo de vida e o tratamento médico preventivo, com esse objetivo foram desenvolvidos vários modelos de risco para a previsão do risco cardiovascular de pacientes individuais. Um desses principais modelos de risco é o Framingham Risk Score.',
        results: 'Resultados',
        risk: 'Risco',
        risk_score_calculator: 'Calculadora de Risco',
        score: 'Pontos',
        send: 'Enviar',
        smoking: 'Tabagismo',
        so_treatment_is_recommended: 'e o tratamento é recomendado.',
        statins_only_indicated: 'As estatinas são indicadas apenas em caso de',
        treatment: 'Tratamento:',
        treatment_intermediate_hasfactors: 'Embora o nível de risco não seja alto, o paciente possui fatores de risco para sua idade',
        treatment_intermediate_ldl: 'Embora o nível de risco não seja alto, altos níveis de LDL estão presentes e o tratamento é recomendado.',
        treatment_intermediate_norisks: 'Embora o nível de risco não seja baixo, o paciente não apresenta fatores de risco para a idade e geralmente não necessitará de tratamento medicamentoso.',
        treatment_low_diabetes: 'Embora o nível de risco seja baixo, o paciente necessita de tratamento com estatinas, pois a presença de diabetes ou anomalia da glicemia em jejum prejudicada em pessoas com mais de 40 anos é considerada um fator de risco.',
        unknown: 'Desconhecido',
        usefulness: 'Utilidade',
        usefulness_text_start: 'A Escala de Framingham permite determinar o risco de sofrer qualquer evento cardiovascular em 10 anos, avaliando fatores como idade, sexo, pressão arterial, diabetes e tabagismo, atribuindo uma pontuação a cada um deles e estratificando o paciente em baixo, médio e alto risco cardiovascular.',
        usefulness_text_lowrisk: 'Baixo risco = 10% ou menos',
        usefulness_text_intermediaterisk: 'Risco intermediário = 10-20%',
        usefulness_text_highrisk: 'Alto risco = 20% ou mais',
        usefulness_text_end: 'A Escala de Framingham também permite calcular a idade vascular, que fornece uma estimativa do dano vascular do paciente através da diferença de anos entre o resultado e a idade cronológica do paciente.',
        using_guidelines: 'Usando 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Validação',
        validation_text: 'O escore de risco de Framingham foi validado nos EUA, tanto em homens quanto em mulheres, tanto em americanos europeus como em afro-americanos.',
        waist_circumference: 'Circunferência da Cintura',
        woman: 'Mulher',
        year: 'Ano',
        years: 'anos'
      }
    }
  );
  expect(i18nPt).toEqual(i18nPtCypress);
});
