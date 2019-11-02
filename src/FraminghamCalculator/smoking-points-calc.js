export default function getSmokingPoints(smoking, gender) { // eslint-disable-line consistent-return
  if (!smoking) { return 0; }
  if (smoking && gender === 'male') { return 4; }
  if (smoking && gender === 'female') { return 3; }
}
