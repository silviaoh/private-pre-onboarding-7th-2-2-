const getValueOfAdStatus = (key, prevSum, currSum) => {
  switch (key) {
    case 'roas':
      return +(((currSum - prevSum) / prevSum) * 100).toFixed(0);
    case 'cost':
    case 'imp':
    case 'click':
    case 'cvr':
      return +(currSum - prevSum).toFixed(2);
    case 'convValue':
      return currSum - prevSum;
    default:
      throw new Error(`Unhandled ${key} value`);
  }
};

export default getValueOfAdStatus;
