const getTimeOfPast = (date, diff) => {
  if (!date) return;
  const basic = new Date(date);
  return new Date(basic.setDate(basic.getDate() - diff)).getTime();
};

export default getTimeOfPast;
