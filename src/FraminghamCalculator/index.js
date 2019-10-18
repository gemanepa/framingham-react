import getAgePoints from './age-points-calc';
import getHDLPoints from './hdl-points-calc';
import getTotalDLPoints from './totaldl-points-calc';
import getTAPoints from './ta-points-calc';

export default function FraminghamCalculator(data){
  const { age, diabetes, gender, hdl, ldl, smoking, ta, totaldl, treatment, wt } = data;
  const agePoints = getAgePoints(age, gender);
  const hdlPoints = getHDLPoints(hdl, gender);
  const totalDLPoints = getTotalDLPoints(totaldl, gender);
  const TAPoints = getTAPoints(ta, treatment, gender);

  
  console.log('agePoints');
  console.log(agePoints)
  console.log('hdlPoints');
  console.log(hdlPoints);
  console.log('totalDLPoints');
  console.log(totalDLPoints);
  console.log('TAPoints');
  console.log(TAPoints);
  return data
}