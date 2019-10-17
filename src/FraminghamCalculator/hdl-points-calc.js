
export default function getHDLPoints(hdl, gender){
  if(gender === 'male') {
    return calculateMenHDLPoints(hdl)
  } else {return calculateWomenHDLPoints(hdl)}
}

function calculateMenHDLPoints(hdlRangeSelected) {
  let hdlPoints = 0;

  switch(hdlRangeSelected) {
      case"< 35.0":
          hdlPoints = 2;
          break;
      case "35.0 - 45.9":
          hdlPoints = 1;
          break;
      case "46.0 - 49.9":
          hdlPoints = 0;
          break;
      case "50.0 - 61.9":
          hdlPoints = -1;
          break;
      case "> 62.0":
          hdlPoints = -2;
          break;
  }
  return hdlPoints;
}

function calculateWomenHDLPoints(hdlRangeSelected) {
  let hdlPoints = 0;

  switch(hdlRangeSelected) {
      case"< 35.0":
          hdlPoints = 2;
          break;
      case "35.0 - 45.9":
          hdlPoints = 1;
          break;
      case "46.0 - 49.9":
          hdlPoints = 0;
          break;
      case "50.0 - 61.9":
          hdlPoints = -1;
          break;
      case "> 62.0":
          hdlPoints = -2;
          break;
  }
  return hdlPoints;
}