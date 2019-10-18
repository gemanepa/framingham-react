export default function getTAPoints(ta, treatment, gender){
    if(gender === 'male') {
      return calculateMenTAPoints(ta, treatment)
    } else {return calculateWomenTAPoints(ta, treatment)}
  }

 
function calculateMenTAPoints(taRangeSelected, isOnTreatment){
    let taPoints = 0;

    switch(taRangeSelected) {
        case"< 120":
            if(!isOnTreatment) {
                taPoints = -2;
            }
            if(isOnTreatment) {
                taPoints = 0;
            }
            break;
        case "120 - 129":
            if(!isOnTreatment) {
                taPoints = 0;
            }
            if(isOnTreatment) {
                taPoints = 2;
            }
            break;
        case "130 - 139":
            if(!isOnTreatment) {
                taPoints = 1;
            }
            if(isOnTreatment) {
                taPoints = 3;
            }
            break;
        case "140 - 149":
            if(!isOnTreatment) {
                taPoints = 2;
            }
            if(isOnTreatment) {
                taPoints = 4;
            }
            break;
        case "150 - 159":
            if(!isOnTreatment) {
                taPoints = 2;
            }
            if(isOnTreatment) {
                taPoints = 4;
            }
            break;
        case "160+":
            if(!isOnTreatment) {
                taPoints = 3;
            }
            if(isOnTreatment) {
                taPoints = 5;
            }
            break;
    }
    return taPoints;
}

function calculateWomenTAPoints(taRangeSelected, isOnTreatment) {
    let taPoints = 0;

    switch(taRangeSelected) {
        case"< 120":
            if(!isOnTreatment) {
                taPoints = -3;
            }
            if(isOnTreatment) {
                taPoints = -1;
            }
            break;
        case "120 - 129":
            if(!isOnTreatment) {
                taPoints = 0;
            }
            if(isOnTreatment) {
                taPoints = 2;
            }
            break;
        case "130 - 139":
            if(!isOnTreatment) {
                taPoints = 1;
            }
            if(isOnTreatment) {
                taPoints = 3;
            }
            break;
        case "140 - 149":
            if(!isOnTreatment) {
                taPoints = 2;
            }
            if(isOnTreatment) {
                taPoints = 5;
            }
            break;
        case "150 - 159":
            if(!isOnTreatment) {
                taPoints = 4;
            }
            if(isOnTreatment) {
                taPoints = 6;
            }
            break;
        case "160+":
            if(!isOnTreatment) {
                taPoints = 5;
            }
            if(isOnTreatment) {
                taPoints = 7;
            }
            break;
    }
    return taPoints;  
}