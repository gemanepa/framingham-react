import getAgePoints from './age-points-calc';
import getHDLPoints from './hdl-points-calc'


export default function FraminghamCalculator(data){
  const { age, diabetes, gender, hdl, ldl, smoking, ta, totaldl, treatment, wt } = data;
  const agePoints = getAgePoints(age, gender);
  const hdlPoints = getHDLPoints(hdl, gender);
  console.log('agePoints');
  console.log(agePoints)
  console.log('hdlPoints');
  console.log(hdlPoints)
  return data
}