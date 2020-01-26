
function risklevelLow(gender, diabetes, agePoints, translations) {
  const {
    age,
    abdominal_aortic_aneurysm,
    aterosclerosis,
    chronic_kidney_disease,
    or,
    patient_not_requires_treatment,
    statins_only_indicated,
    treatment_low_diabetes,
    years
  } = translations;
  const maleConditional = (gender === 'male' && agePoints >= 5 && diabetes);
  const femaleConditional = (gender === 'female' && agePoints >= 4 && diabetes);

  if (maleConditional || femaleConditional) {
    return treatment_low_diabetes;
  }
  return `${patient_not_requires_treatment}\n
  ${statins_only_indicated} ${aterosclerosis}, ${abdominal_aortic_aneurysm}, & 
  ${chronic_kidney_disease} (${age} ≥ 50 ${years} + eGFR <60 mL/min/1.73 m2 ${or} ACR > 3 mg/mmol)`;
}

function risklevelIntermediate(gender, ldl, hasDiabetes, wt, agePoints, hdlPoints, smokingPoints, translations) {
  const {
    diabetes,
    low,
    smoking,
    treatment_intermediate_hasfactors,
    waist_circumference, so_treatment_is_recommended,
    treatment_intermediate_ldl,
    treatment_intermediate_norisks
  } = translations;

  const hdl = (hdlPoints === 2);
  const isSmoker = (smokingPoints > 1);
  const hasHighWaist = (wt.includes('> 102') || wt.includes('> 88'));
  const lowdl = ldl.includes('> 135');

  const maleConditional = (gender === 'male' && agePoints >= 8 && (hdl || isSmoker || hasDiabetes || hasHighWaist));
  const femaleConditional = (gender === 'female' && agePoints >= 9 && (hdl || isSmoker || hasDiabetes || hasHighWaist));

  if (maleConditional || femaleConditional) {
    return `${treatment_intermediate_hasfactors} (${hdl ? `${low} HDL` : ''}${(hdl && (isSmoker || hasDiabetes || hasHighWaist)) ? ', ' : ''}${isSmoker ? smoking : ''}${(isSmoker && (hasDiabetes || hasHighWaist)) ? ', ' : ''}${hasDiabetes ? diabetes : ''}${(hasDiabetes && hasHighWaist) ? ', ' : ''}${hasHighWaist ? waist_circumference : ''}) ${so_treatment_is_recommended}`;
  }

  if (lowdl) { return treatment_intermediate_ldl; }
  return treatment_intermediate_norisks;
}

function risklevelHigh(translations) {
  const {
    alternative_target, decrease_in, or, patient_highly_requires_treatment, primary_target
  } = translations;

  return `• ${patient_highly_requires_treatment}\n
  
  • ${primary_target}: ≤2 mmol/L ${or} ≥50% ${decrease_in} LDL-C\n

  • ${alternative_target}: Apo B ≤0.8 g/L\n

  • ${alternative_target}: Non-HDL-C ≤2.6 mmol/L\n`;
}

export default function needsTreatment(
  gender,
  diabetes,
  ldl,
  wt,
  agePoints,
  hdlPoints,
  smokingPoints,
  risklevel,
  translations
) {
  const risklevels = {
    low: risklevelLow(gender, diabetes, agePoints, translations),
    intermediate: risklevelIntermediate(
      gender,
      ldl,
      diabetes,
      wt,
      agePoints,
      hdlPoints,
      smokingPoints,
      translations
    ),
    high: risklevelHigh(translations),
  };

  if (risklevel) {
    return risklevels[risklevel];
  }
  return 'unknown';
}
