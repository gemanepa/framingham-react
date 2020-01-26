const {
  en, es, pt, it
} = require('../../../src/i18n/head.json');

test('en head', () => {
  expect(en).toEqual(
    {
      appname: 'Framingham CardioRisk',
      description: 'Framingham CR calculates the individual risk of suffering cardiovascular events in 10 years',
      keywords: 'framingham, calculator, risk, score, heart, cardiovascular, coronary, disease, study, calculation',
      title: 'Framingham CardioVascular Risk Score Calculator'
    },
  );
});

test('es head', () => {
  expect(es).toEqual(
    {
      appname: 'CardioRiesgo Framingham',
      description: 'La Escala de Framingham permite determinar el riesgo individual de padecer cualquier evento cardiovascular en 10 años',
      keywords: 'framingham, calculadora, riesgo, corazon, coronario, enfermedad, cardiovascular, calculo',
      title: 'Framingham Calculadora Riesgo CardioVascular'
    }
  );
});

test('pt head', () => {
  expect(pt).toEqual(
    {
      appname: 'CardioRisco Framingham',
      description: 'A Escala de Framingham permite determinar o risco individual de sofrer qualquer evento cardiovascular em 10 anos',
      keywords: 'framingham, calculadora, risco, coração, doença coronariana, cardiovascular, cálculo',
      title: 'Framingham Calculadora Risco CardioVascular'
    }
  );
});

test('it head', () => {
  expect(it).toEqual(
    {
      appname: 'CardioRischio Framingham',
      description: 'La Scala di Framingham calcola il rischio individuale di subire eventi cardiovascolari in 10 anni',
      keywords: 'framingham, calcolatrice, rischio, cuore, coronarico, malattia, cardiovascolare, calcolo',
      title: 'Framingham Calcolatore Rischio Cardiovascolare'
    }
  );
});
