export default (birthday = 'April 4, 1996') => {
  const birthDate = new Date(birthday);
  const currentDate = Date.now();
  const ageInMilliseconds = currentDate - birthDate;

  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;

  const age = ageInMilliseconds / years;

  return age.toFixed(10);
};
