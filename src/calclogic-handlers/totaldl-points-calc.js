function calculateMenTotalDLPoints(totaldlRangeSelected) {
  let totaldlPoints = 0;

  switch (totaldlRangeSelected) {
    case '< 158':
      totaldlPoints = 0;
      break;
    case '158 - 200':
      totaldlPoints = 1;
      break;
    case '201 - 239':
      totaldlPoints = 2;
      break;
    case '240 - 278':
      totaldlPoints = 3;
      break;
    case '> 278':
      totaldlPoints = 4;
      break;
  }
  return totaldlPoints;
}

function calculateWomenTotalDLPoints(totaldlRangeSelected) {
  let totaldlPoints = 0;

  switch (totaldlRangeSelected) {
    case '< 158':
      totaldlPoints = 0;
      break;
    case '158 - 200':
      totaldlPoints = 1;
      break;
    case '201 - 239':
      totaldlPoints = 3;
      break;
    case '240 - 278':
      totaldlPoints = 4;
      break;
    case '> 278':
      totaldlPoints = 5;
      break;
  }
  return totaldlPoints;
}

export default function getTotalDLPoints(totaldl, gender) {
  if (gender === 'male') {
    return calculateMenTotalDLPoints(totaldl);
  } return calculateWomenTotalDLPoints(totaldl);
}
