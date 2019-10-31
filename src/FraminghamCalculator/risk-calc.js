export default function calculateRiskLevel(score, gender){
    if(gender === 'male') {
      return calculateMenRiskLevel(score)
    } else {return calculateWomenRiskLevel(score)}
}

function calculateMenRiskLevel(Score){
    let risklevel = 'unknown';

    if (Score <= 10) {
        risklevel = 'low';
    }

    else if (Score >= 11 && Score <= 14) {
        risklevel = 'intermediate';
    }

    else if (Score >= 15) {
        risklevel = 'high';
    }
    return risklevel;
}

function calculateWomenRiskLevel(Score){
    let risklevel = 'unknown';

    if (Score <= 12) {
        risklevel = 'low';
    }

    else if (Score >= 13 && Score <= 17) {
        risklevel = 'intermediate';
    }

    else if (Score >= 18) {
        risklevel = 'high';
    }
    return risklevel;
}