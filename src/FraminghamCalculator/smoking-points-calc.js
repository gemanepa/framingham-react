export default function getSmokingPoints(smoking, gender){
    if(!smoking) { return 0 }
    else if(smoking && gender === 'male') { return 4 }
    else if(smoking && gender === 'female') { return 3 }
  }