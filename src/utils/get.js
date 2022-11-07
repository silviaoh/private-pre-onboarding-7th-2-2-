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

const getVariationsOfAdStatus = (key, prevSum, currSum) => {
  switch (key) {
    case 'roas':
      return (((currSum - prevSum) / prevSum) * 100).toFixed(0);
    case 'cost':
    case 'imp':
    case 'click':
    case 'cvr':
    case 'convValue':
      return getValueWithKoreanUnit(key, currSum - prevSum);
    default:
      throw new Error(`Unhandled ${key} value`);
  }
};

const getValueWithKoreanUnit = (key, value) => {
  switch (key) {
    case 'roas':
      return value.toFixed(2);
    case 'cost':
    case 'imp':
    case 'convValue':
    case 'budget':
      return getNumberToKorean(value);
    case 'click':
    case 'cvr':
      return value.toFixed(1);
    default:
      throw new Error(`Unhandled ${key} value`);
  }
};

/**
 * interface
 * - 1 ~ 4= 원
 * - 5 ~ 8= 만
 * - 8 <= x < 12 = 억
 * - 12 <= x = 경
 */

const getNumberToKorean = value => {
  const digit = String(value).split('').length;
  const localeOption = {
    maximumFractionDigits: 4,
  };

  if (digit < 5) return `${value.toLocaleString('ko-KR', localeOption)}`;
  else if (5 <= digit && digit < 9)
    return `${(value / 10000).toLocaleString('ko-KR', localeOption)}만 `;
  else if (9 <= digit && digit < 13)
    return `${(value / (10000 * 10000)).toLocaleString(
      'ko-KR',
      localeOption
    )}억 `;
  else if (13 <= digit)
    return `${(value / (10000 * 10000 * 10000)).toLocaleString(
      'ko-KR',
      localeOption
    )}경 `;
  else return value;
};

export {
  getNameOfAdStatus,
  getUnitOfAdStatus,
  getVariationsOfAdStatus,
  getNumberToKorean,
  getValueWithKoreanUnit,
};
