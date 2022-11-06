const getNameOfAdStatus = key => {
  switch (key) {
    case 'roas':
      return 'ROAS';
    case 'cost':
      return '광고비';
    case 'imp':
      return '노출 수';
    case 'click':
      return '클릭 수';
    case 'cvr':
      return '전환 수';
    case 'convValue':
      return '매출';
    default:
      throw new Error(`Unhandled ${key} value`);
  }
};

export default getNameOfAdStatus;
