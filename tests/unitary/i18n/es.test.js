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
const i18nEsCypress = require('../../e2e/cypress/fixtures/i18nES.json');

const afBodyKeys = Object.keys(i18nAf.body);
const caBodyKeys = Object.keys(i18nCa.body);
const daBodyKeys = Object.keys(i18nDa.body);
const enBodyKeys = Object.keys(i18nEn.body);
const esBodyKeys = Object.keys(i18nEs.body);
const deBodyKeys = Object.keys(i18nDe.body);
const frBodyKeys = Object.keys(i18nFr.body);
const itBodyKeys = Object.keys(i18nIt.body);
const ptBodyKeys = Object.keys(i18nPt.body);
const i18nEsBodyCypressKeys = Object.keys(i18nEsCypress.body);

test('es body length', () => {
  expect(esBodyKeys.length).toEqual(69);
  expect(esBodyKeys.length).toEqual(afBodyKeys.length);
  expect(esBodyKeys.length).toEqual(caBodyKeys.length);
  expect(esBodyKeys.length).toEqual(daBodyKeys.length);
  expect(esBodyKeys.length).toEqual(deBodyKeys.length);
  expect(esBodyKeys.length).toEqual(enBodyKeys.length);
  expect(esBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(esBodyKeys.length).toEqual(itBodyKeys.length);
  expect(esBodyKeys.length).toEqual(frBodyKeys.length);
  expect(esBodyKeys.length).toEqual(i18nEsBodyCypressKeys.length);
});

test('es body keys', () => {
  expect(arraysEqual(esBodyKeys, afBodyKeys)).toEqual(true);
  expect(arraysEqual(esBodyKeys, caBodyKeys)).toEqual(true);
  expect(arraysEqual(esBodyKeys, daBodyKeys)).toEqual(true);
  expect(arraysEqual(esBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(esBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(esBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(esBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(esBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(esBodyKeys, i18nEsBodyCypressKeys)).toEqual(true);
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
const i18nEsHeadCypressKeys = Object.keys(i18nEsCypress.head);

test('es head length', () => {
  expect(esHeadKeys.length).toEqual(4);
  expect(esHeadKeys.length).toEqual(afHeadKeys.length);
  expect(esHeadKeys.length).toEqual(caHeadKeys.length);
  expect(esHeadKeys.length).toEqual(daHeadKeys.length);
  expect(esHeadKeys.length).toEqual(deHeadKeys.length);
  expect(esHeadKeys.length).toEqual(enHeadKeys.length);
  expect(esHeadKeys.length).toEqual(ptHeadKeys.length);
  expect(esHeadKeys.length).toEqual(itHeadKeys.length);
  expect(esHeadKeys.length).toEqual(frHeadKeys.length);
  expect(esHeadKeys.length).toEqual(i18nEsHeadCypressKeys.length);
});

test('es head keys', () => {
  expect(arraysEqual(esHeadKeys, afHeadKeys)).toEqual(true);
  expect(arraysEqual(esHeadKeys, caHeadKeys)).toEqual(true);
  expect(arraysEqual(esHeadKeys, daHeadKeys)).toEqual(true);
  expect(arraysEqual(esHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(esHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(esHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(esHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(esHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(esHeadKeys, i18nEsHeadCypressKeys)).toEqual(true);
});

test('es strings props vals', () => {
  expect(i18nEs).toEqual(
    {
      lang: 'es',
      head: {
        appname: 'CardioRiesgo Framingham',
        description: 'La Escala de Framingham permite determinar el riesgo individual de padecer cualquier evento cardiovascular en 10 años',
        keywords: 'framingham, calculadora, riesgo, corazon, coronario, enfermedad, cardiovascular, calculo',
        title: 'Framingham Calculadora Riesgo CardioVascular'
      },
      body: {
        abdominal_aortic_aneurysm: 'Aneurisma Aortico Abdominal',
        age: 'Edad',
        androidapp: 'Android App',
        alternative_target: 'Objetivo Alternativo',
        app_name: 'CR Framingham',
        arterial_pression: 'Presion Arterial Sistolica',
        aterosclerosis: 'Aterosclerosis Clinica',
        back: 'Atras',
        brief_description: 'Calcula el riesgo individual de enfermedades cardiovasculares en 10 años',
        calculate: 'Calcular',
        chronic_kidney_disease: 'Enfermedad Renal Cronica',
        colesterol_hdl: 'Colesterol HDL',
        colesterol_ldl: 'Colesterol LDL',
        colesterol_total: 'Colesterol Total',
        cvd: 'RCV',
        cvdexplanation: 'RCV: Riesgo CardioVascular en 10 años',
        day: 'Dia',
        decrease_in: 'disminucion en',
        diabetes: 'Diabetes o Glucemia alta en ayunas',
        elinks: 'Elinks',
        gender: 'Genero',
        genderRequired: 'Genero es requerido',
        heartage: 'Edad Corazon',
        high: 'Alto',
        hypertension_in_treatment: 'Hipertension en tratamiento',
        info: 'Info',
        intermediate: 'Intermedio',
        low: 'Bajo',
        man: 'Hombre',
        month: 'Mes',
        navbar_title: 'CardioRiesgo Framingham',
        or: 'o',
        patient: 'Paciente',
        patient_highly_requires_treatment: 'El paciente necesita tratamiento',
        patient_name: 'Nombre del Paciente',
        patient_not_requires_treatment: 'El paciente no requiere tratamiento.',
        patientdata: 'Datos del Paciente',
        primary_target: 'Objetivo Primario',
        purpose: 'Proposito',
        purpose_text1: 'El riesgo de un individuo para futuros eventos cardiovasculares es modificable por los cambios en el estilo de vida y el tratamiento médico preventivo.',
        purpose_text2: 'Los cambios en el estilo de vida pueden incluir dejar de fumar, una dieta saludable, ejercicio regular, etc. El tratamiento médico preventivo puede incluir una estatina, una mini dosis de aspirina, un tratamiento para la hipertensión, etc.',
        purpose_text3: 'Es importante poder predecir el riesgo de un paciente para decidir cuándo iniciar la modificación del estilo de vida y el tratamiento médico preventivo por lo que se han desarrollado multiples modelos para la predicción del riesgo cardiovascular de pacientes individuales. Uno de estos modelos de riesgo clave es el Framingham Risk Score.',
        results: 'Resultados',
        risk: 'Riesgo',
        risk_score_calculator: 'Calculadora de Riesgo',
        score: 'Puntuacion',
        send: 'Enviar',
        smoking: 'Tabaquismo',
        so_treatment_is_recommended: 'por lo que se recomienda tratamiento',
        statins_only_indicated: 'Estatinas solo indicadas en caso de:',
        treatment: 'Tratamiento:',
        treatment_intermediate_hasfactors: 'Si bien el nivel de riesgo no es Alto, el paciente presenta factores de riesgo para su edad',
        treatment_intermediate_ldl: 'Si bien el nivel de riesgo no es Alto, el paciente presenta niveles altos de LDL y se recomienda tratamiento',
        treatment_intermediate_norisks: 'Si bien el nivel de riesgo no es Bajo, el paciente no presenta factores de riesgo por lo que generalmente no requiere tratamiento',
        treatment_low_diabetes: 'Si bien el nivel de riesgo es Bajo, el paciente requiere tratamiento de estatinas debido a la presencia de diabetes o glucemia alta en ayunas en una persona mayor de 40 años',
        unknown: 'Desconocido',
        usefulness: 'Utilidad',
        usefulness_text_start: 'La escala de Framingham permite determinar el riesgo de sufrir cualquier evento cardiovascular en 10 años evaluando factores como la edad, el sexo, la presión arterial, la diabetes y el tabaquismo, asignando un puntaje a cada uno de ellos y estratificando al paciente en niveles de riesgo cardiovascular bajo, medio y alto.',
        usefulness_text_lowrisk: 'Riesgo Bajo = 10% o menos',
        usefulness_text_intermediaterisk: 'Riesgo Intermedio = 10-20%',
        usefulness_text_highrisk: 'Riesgo Alto = 20% o más',
        usefulness_text_end: 'La escala de Framingham también permite calcular la edad vascular, lo que da una estimación del daño vascular del paciente a través de la diferencia de años entre el resultado y la edad cronológica del paciente.',
        using_guidelines: 'Usando 2017 Canadian CardioVascular Society Guidelines',
        validation: 'Validacion',
        validation_text: 'El Framingham Risk Score ha sido validado en los EE. UU., tanto en hombres como en mujeres, tanto en europeos como en afroamericanos.',
        waist_circumference: 'Circunferencia de Cintura',
        woman: 'Mujer',
        year: 'Año',
        years: 'años'
      }
    }
  );
  expect(i18nEs).toEqual(i18nEsCypress);
});
