import getAgePoints from './age-points-calc';
import getHDLPoints from './hdl-points-calc';
import getTotalDLPoints from './totaldl-points-calc';
import getTAPoints from './ta-points-calc';
import getSmokingPoints from './smoking-points-calc';
import calculateCVD from './cvd-calc';
import calculateHeartAge from './heartage-calc';
import calculateRiskLevel from './risk-calc';
import needsTreatment from './needstreatment-calc';

export default function FraminghamCalculator(data){
  const { age, diabetes, gender, hdl, ldl, smoking, ta, totaldl, treatment, wt } = data;

  //Points Calculation
  const agePoints = getAgePoints(age, gender);
  const hdlPoints = getHDLPoints(hdl, gender);
  const dlPoints = getTotalDLPoints(totaldl, gender);
  const taPoints = getTAPoints(ta, treatment, gender);
  const smokingPoints = getSmokingPoints(smoking, gender)
  const score = agePoints + hdlPoints + dlPoints + taPoints + smokingPoints;

  // Framingham Score Calculations
  const cvd = calculateCVD(score, gender);
  const heartage = calculateHeartAge(score, gender);
  const risklevel = calculateRiskLevel(score, gender);
  const needstreatment = needsTreatment(gender, diabetes, smoking, ldl, wt, agePoints, hdlPoints, smokingPoints, risklevel);

  console.log('==================================')
  console.log('agePoints');
  console.log(agePoints)
  console.log('hdlPoints');
  console.log(hdlPoints);
  console.log('totalDLPoints');
  console.log(dlPoints);
  console.log('taPoints');
  console.log(taPoints);
  console.log('smokingPoints');
  console.log(smokingPoints);
  console.log('cvd');
  console.log(cvd);
  console.log('heartage');
  console.log(heartage);
  console.log('risklevel');
  console.log(risklevel);
  console.log('needstreatment');
  console.log(needstreatment);

  return data
}