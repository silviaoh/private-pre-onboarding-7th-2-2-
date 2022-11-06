const getDiffOfTime = (startDate, endDate) => {
  if (startDate && endDate) {
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    return Math.abs(endTime - startTime) / (1000 * 60 * 60 * 24);
  }
};

export default getDiffOfTime;
