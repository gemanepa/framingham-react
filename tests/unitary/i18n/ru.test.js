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
const i18nRuCypress = require('../../e2e/cypress/fixtures/i18nRU.json');

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
const i18nRuBodyCypressKeys = Object.keys(i18nRuCypress.body);

test('ru body length', () => {
  expect(ruBodyKeys.length).toEqual(72);
  expect(ruBodyKeys.length).toEqual(afBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(caBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(daBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(deBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(esBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(enBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(ptBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(itBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(frBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(nlBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(svBodyKeys.length);
  expect(ruBodyKeys.length).toEqual(i18nRuBodyCypressKeys.length);
});

test('ru body keys', () => {
  expect(arraysEqual(ruBodyKeys, afBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, caBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, daBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, deBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, esBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, enBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, frBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, itBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, ptBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, nlBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, svBodyKeys)).toEqual(true);
  expect(arraysEqual(ruBodyKeys, i18nRuBodyCypressKeys)).toEqual(true);
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
const i18nRuHeadCypressKeys = Object.keys(i18nRuCypress.head);

test('ru head length', () => {
  expect(ruHeadKeys.length).toEqual(4);
  expect(ruHeadKeys.length).toEqual(afHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(caHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(daHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(deHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(enHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(esHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(ptHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(itHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(frHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(nlHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(svHeadKeys.length);
  expect(ruHeadKeys.length).toEqual(i18nRuHeadCypressKeys.length);
});

test('ru head keys', () => {
  expect(arraysEqual(ruHeadKeys, afHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, caHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, daHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, deHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, esHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, enHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, frHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, itHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, ptHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, nlHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, svHeadKeys)).toEqual(true);
  expect(arraysEqual(ruHeadKeys, i18nRuHeadCypressKeys)).toEqual(true);
});

test('ru strings props vals', () => {
  expect(i18nRu).toEqual(
    {
      lang: 'ru',
      head: {
        appname: 'сердечный риск Фрамингема',
        description: 'рассчитывает риск сердечно-сосудистых событий за 10 лет',
        keywords: 'framingham, калькулятор, риск, оценка, сердце, сердечно-сосудистые, ишемическая болезнь сердца, исследование, расчет',
        title: 'Калькулятор сердечно-сосудистых рисков'
      },
      body: {
        abdominal_aortic_aneurysm: 'Аневризма брюшной аорты',
        age: 'возраст',
        androidapp: 'Android App',
        alternative_target: 'альтернативная цель',
        app_name: 'Фрамингема',
        arterial_pression: 'Систолическое давление',
        aterosclerosis: 'Клинический Атеросклероз',
        back: 'назад',
        brief_description: 'Рассчитать риск сердечно-сосудистых заболеваний за 10 лет',
        calculate: 'вычислять',
        chronic_kidney_disease: 'Хроническая болезнь почек',
        colesterol_hdl: 'Холестерин ЛПВП',
        colesterol_ldl: 'Холестерин ЛПНП',
        colesterol_total: 'Общий холестерин',
        'cms(inches)': 'сантиметров (дюймов)',
        cvd: 'CCP',
        cvdexplanation: 'CCP: Сердечно-сосудистый риск через 10 лет',
        day: 'день',
        decrease_in: 'сокращение в',
        diabetes: 'Диабет или высокий уровень глюкозы в крови натощак',
        elinks: 'Гиперссылки',
        gender: 'жанр',
        genderRequired: 'Пол обязателен',
        heartage: 'возраст сердца',
        high: 'высокая',
        hypertension_in_treatment: 'Гипертония на лечении',
        info: 'Информация',
        intermediate: 'промежуточный',
        low: 'низкий',
        man: 'Варон',
        mgdl: "'мг / дл'",
        mmHg: 'мм рт.ст.',
        month: 'месяц',
        navbar_title: 'сердечный риск Фрамингема',
        or: 'или же',
        patient: 'пациент',
        patient_highly_requires_treatment: 'Пациент нуждается в лечении',
        patient_name: 'Имя пациента',
        patient_not_requires_treatment: 'Пациент не требует лечения.',
        patientdata: 'Информация для пациентов',
        primary_target: 'Основная цель',
        purpose: 'Цель',
        purpose_text1: 'Риск индивидуума для будущих сердечно-сосудистых событий может быть изменен путем изменения образа жизни и профилактического лечения.',
        purpose_text2: 'Изменения в образе жизни могут включать отказ от курения, здоровое питание, регулярные физические упражнения и т. Д. Профилактическое медицинское лечение может включать статины, небольшие дозы аспирина, лечение гипертонии и т. Д.',
        purpose_text3: 'Важно иметь возможность прогнозировать риск для отдельного пациента, чтобы решить, когда начинать изменение образа жизни и профилактическое медицинское лечение, с этой целью были разработаны множественные модели риска для прогнозирования сердечно-сосудистого риска для отдельных пациентов. Одной из таких ключевых моделей риска является оценка риска по Фрамингему.',
        results: 'Результаты',
        risk: 'риск',
        risk_score_calculator: 'Калькулятор оценки риска',
        score: 'пунктуация',
        send: 'послать',
        smoking: 'курильщик',
        so_treatment_is_recommended: 'поэтому лечение рекомендуется',
        statins_only_indicated: 'Статины указываются только в случае:',
        treatment: 'Лечение:',
        treatment_intermediate_hasfactors: 'Хотя уровень риска не высок, пациент имеет факторы риска для своего возраста',
        treatment_intermediate_ldl: 'Хотя уровень риска не высок, у пациента высокий уровень ЛПНП, и рекомендуется лечение',
        treatment_intermediate_norisks: 'Хотя уровень риска не низкий, пациент не представляет факторов риска, поэтому обычно не требует лечения',
        treatment_low_diabetes: 'Хотя уровень риска является низким, пациент требует лечения статинами из-за наличия диабета или повышенного уровня глюкозы в крови у человека старше 40 лет.',
        unknown: 'неизвестный',
        usefulness: 'Полезность',
        usefulness_text_start: 'Шкала Фреймингема позволяет определить риск перенесения любого сердечно-сосудистого события в течение 10 лет, оценивая такие факторы, как возраст, пол, артериальное давление, диабет и курение, присваивая баллы каждому из них и стратифицируя пациента на низкий, средний и высокий сердечно-сосудистый риск.',
        usefulness_text_lowrisk: 'Низкий риск = 10% или меньше',
        usefulness_text_intermediaterisk: 'Промежуточный риск = 10-20%',
        usefulness_text_highrisk: 'Высокий риск = 20% или больше',
        usefulness_text_end: 'Шкала Фреймингема также позволяет рассчитать сосудистый возраст, который дает оценку сосудистого повреждения пациента через разницу лет между результатом и хронологическим возрастом пациента.',
        using_guidelines: 'Использование рекомендаций Канадского общества сердечно-сосудистой системы 2017 года',
        validation: 'достоверности',
        validation_text: 'Показатель риска Framingham был протестирован в США, как у мужчин, так и у женщин, как у европейцев, так и у афроамериканцев.',
        waist_circumference: 'Окружность талии',
        woman: 'женщина',
        year: 'год',
        years: 'лет'
      }
    }
  );
  expect(i18nRu).toEqual(i18nRuCypress);
});
