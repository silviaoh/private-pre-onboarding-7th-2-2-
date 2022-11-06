const getDiffOfTime = (startDate, endDate) => {
  if (startDate && endDate) {
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    return Math.abs(endTime - startTime) / (1000 * 60 * 60 * 24);
  }
};

const getTimeOfPast = (date, diff) => {
  if (!date) return;
  const basic = new Date(date);
  return new Date(basic.setDate(basic.getDate() - diff)).getTime();
};

export { getDiffOfTime, getTimeOfPast };
