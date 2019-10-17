export default function getAgePoints(age, gender){
  if(gender === 'male') {
    return calculateMenAgePoints(age)
  } else {return calculateWomenAgePoints(age)}
}

function calculateMenAgePoints(ageRangeSelected){
  let agePoints = 0;

  switch(ageRangeSelected) {
      case "30 - 34":
          agePoints = 0;
          break;
      case "35 - 39":
          agePoints = 2;
          break;
      case "40 - 44":
          agePoints = 5;
          break;
      case "45 - 49":
          agePoints = 7;
          break;
      case "50 - 54":
          agePoints = 8;
          break;
      case "55 - 59":
          agePoints = 10;
          break;
      case "60 - 64":
          agePoints = 11;
          break;
      case "65 - 69":
          agePoints = 12;
          break;
      case "70 - 74":
          agePoints = 14;
          break;
      case "75+":
          agePoints = 15;
          break;
  }
  return agePoints;
}

function calculateWomenAgePoints(ageRangeSelected){
  let agePoints = 0;

  switch(ageRangeSelected) {
      case "30 - 34":
          agePoints = 0;
          break;
      case "35 - 39":
          agePoints = 2;
          break;
      case "40 - 44":
          agePoints = 4;
          break;
      case "45 - 49":
          agePoints = 5;
          break;
      case "50 - 54":
          agePoints = 7;
          break;
      case "55 - 59":
          agePoints = 8;
          break;
      case "60 - 64":
          agePoints = 9;
          break;
      case "65 - 69":
          agePoints = 10;
          break;
      case "70 - 74":
          agePoints = 11;
          break;
      case "75+":
          agePoints = 12;
          break;
  }
  return agePoints;
}