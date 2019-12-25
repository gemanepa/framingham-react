const i18nHead = require('../../../src/i18n/head.json');

test('en head', () => {
  expect(i18nHead.en).toEqual(
    {
      appname: 'Framingham CardioRisk',
      description: 'Framingham CR calculates the risk of suffering cardiovascular events in 10 years',
      keywords: 'framingham, calculator, risk, score, heart, cardiovascular, coronary, disease, study, calculation',
      title: 'Framingham CardioVascular Risk Score Calculator'
    }
  );
});

test('es head', () => {
  expect(i18nHead.es).toEqual(
    {
      appname: 'CardioRiesgo Framingham',
      description: 'La Escala de Framingham permite determinar el riesgo de padecer cualquier evento cardiovascular en 10 años',
      keywords: 'framingham, calculadora, riesgo, corazon, coronario, enfermedad, cardiovascular, calculo',
      title: 'Framingham Calculadora Riesgo CardioVascular'
    }
  );
});
