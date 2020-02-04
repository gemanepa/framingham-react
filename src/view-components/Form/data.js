export const selects = [
  {
    label: 'age',
    name: 'age',
    values: ['30 - 34', '35 - 39', '40 - 44', '45 - 49', '50 - 54', '55 - 59', '60 - 64', '65 - 69', '70 - 74', '75+'],
  },
  {
    label: 'colesterol_hdl',
    name: 'hdl',
    values: ['< 35.0', '35.0 - 45.9', '46.0 - 49.9', '50.0 - 61.9', '> 62.0'],
    helper: 'mgdl',
  },
  {
    label: 'colesterol_ldl',
    name: 'ldl',
    values: ['< 80.0', '80.0 - 135.0', '> 135.0'],
    helper: 'mgdl',
  },
  {
    label: 'colesterol_total',
    name: 'totaldl',
    values: ['< 158', '158 - 200', '201 - 239', '240 - 278', '> 278'],
    helper: 'mgdl',
  },
  {
    label: 'arterial_pression',
    name: 'ta',
    values: ['< 120', '120 - 129', '130 - 139', '140 - 149', '150 - 159', '160+'],
    helper: 'mmHg',
  },
  {
    label: 'waist_circumference',
    name: 'wt',
    values: {
      male: ['< 102 (40)', '> 102 (40)', 'Unknown'],
      female: ['< 88 (35)', '> 88 (35)', 'Unknown'],
      undefined: [''],
    },
    helper: 'cms(inches)',
  },
];

export const checkboxes = [
  {
    checkboxKey: 'hypertension_in_treatment',
  },
  {
    checkboxKey: 'smoking',
  },
  {
    checkboxKey: 'diabetes',
  },

];
