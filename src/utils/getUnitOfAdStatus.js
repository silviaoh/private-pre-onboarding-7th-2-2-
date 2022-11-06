const getUnitOfAdStatus = key => {
  switch (key) {
    case 'roas':
      return '%';
    case 'cost':
    case 'convValue':
      return '원';
    case 'imp':
    case 'click':
    case 'cvr':
      return '회';
    default:
      throw new Error(`Unhandled ${key} value`);
  }
};

export default getUnitOfAdStatus;
