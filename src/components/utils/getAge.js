const getAge = (currentDate = Date.now(), birthday = 'April 4, 1996') => {
  const birthDate = new Date(birthday);
  const ageInMilliseconds = currentDate - birthDate;

  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;

  const age = ageInMilliseconds / years;

  return age.toFixed(7);
};

export default getAge;
