import getAgePoints from './age-points-calc';
import getHDLPoints from './hdl-points-calc';
import getTotalDLPoints from './totaldl-points-calc';
import getTAPoints from './ta-points-calc';
import getSmokingPoints from './smoking-points-calc';
import calculateCVD from './cvd-calc';
import calculateHeartAge from './heartage-calc';
import calculateRiskLevel from './risk-calc';
import needsTreatment from './needstreatment-calc';

export default function FraminghamCalculator(data, translations) {
  const {
    age, diabetes, gender, hdl, ldl, smoking, ta, totaldl, treatment, wt,
  } = data;

  // Points Calculation
  const agePoints = getAgePoints(age, gender);
  const hdlPoints = getHDLPoints(hdl, gender);
  const dlPoints = getTotalDLPoints(totaldl, gender);
  const taPoints = getTAPoints(ta, treatment, gender);
  const smokingPoints = getSmokingPoints(smoking, gender);
  const score = agePoints + hdlPoints + dlPoints + taPoints + smokingPoints;

  // Framingham Score Calculations
  const cvd = calculateCVD(score, gender);
  const heartage = calculateHeartAge(score, gender);
  const risklevel = calculateRiskLevel(score, gender);
  const needstreatment = needsTreatment(
    gender,
    diabetes,
    ldl,
    wt,
    agePoints,
    hdlPoints,
    smokingPoints,
    risklevel
  );

  return {
    score,
    cvd,
    heartage,
    risklevel: translations[risklevel],
    needstreatment: translations[needstreatment],
  };
}
