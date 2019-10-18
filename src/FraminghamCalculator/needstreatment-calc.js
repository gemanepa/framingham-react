export default function needsTreatment(gender, diabetes, smoking, ldl, wt, agePoints, hdlPoints, smokingPoints, risklevel) {
    const risklevels = {
        low: risklevelLow(gender, diabetes, agePoints),
        intermediate: risklevelIntermediate(gender, ldl, diabetes, wt, agePoints, hdlPoints, smokingPoints),
        high: risklevelHigh()
    }

    if(risklevel) {
        return risklevels[risklevel]
    }
    return 'unknown';
}

function risklevelLow(gender, diabetes, agePoints){
    const maleConditional = (gender === 'male' && agePoints >= 5 && diabetes)
    const femaleConditional = (gender === 'female' && agePoints >= 4 && diabetes)

    if( maleConditional || femaleConditional ) { return 'treatmentLowDiabetes' }
    else { return 'patientnotrequirestreatment'}
}

function risklevelIntermediate(gender, ldl, diabetes, wt, agePoints, hdlPoints, smokingPoints){
    const hdl = (hdlPoints == 2);
    const smoking = (smokingPoints > 1);
    const waist = (wt.includes('> 102') || wt.includes('> 88'));
    const lowdl = ldl.includes('> 135');

    const maleConditional = (gender === 'male' && agePoints >= 8 && (hdl || smoking || diabetes || waist));
    const femaleConditional = (gender === 'female' && agePoints >=9 && (hdl || smoking || diabetes || waist));

    if(maleConditional || femaleConditional){ return 'intermediatewithfactors' }
    else if (lowdl) {return 'treatment_intermediate_ldl' }
    else { return 'intermediatenofactors'}
}

function risklevelHigh(){
    return true
}