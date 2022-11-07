import { format } from 'date-fns';
import { atom, selector } from 'recoil';
import { getValueWithKoreanUnit } from '../utils/get';

// 광고 관리 카드 리스트
const adManagingListAtom = atom({
  key: 'adManagingAtom',
  default: [],
});

const adManagementCardListSelector = selector({
  key: 'adManagementCardListSelector',
  get: ({ get }) => {
    const adManagingList = get(adManagingListAtom);
    return adManagingList.map(listItem => {
      const statusKoName = listItem.status === 'active' ? '진행중' : '중단';
      const adTypeToKo = listItem.adType === 'web' ? '웹광고' : '앱광고';

      return {
        id: listItem.id,
        title: listItem.title,
        adType: adTypeToKo,
        report: [
          {
            key: 'status',
            name: '상태',
            value: statusKoName,
            engValue: listItem.status,
          },
          {
            key: 'startDate',
            name: '광고 생성일',
            value: format(new Date(listItem.startDate), 'yyyy-MM-dd'),
          },
          {
            key: 'budget',
            name: '일 희망 예산',
            value: getValueWithKoreanUnit('budget', listItem.budget),
          },
          {
            key: 'roas',
            name: '광고 수익률',
            value: `${getValueWithKoreanUnit('roas', listItem.report.roas)}%`,
          },
          {
            key: 'convValue',
            name: '매출',
            value: getValueWithKoreanUnit(
              'convValue',
              listItem.report.convValue
            ),
          },
          {
            key: 'cost',
            name: '광고 비용',
            value: getValueWithKoreanUnit('cost', listItem.report.cost),
          },
        ],
      };
    });
  },
});

// 광고 관리 카드 필터링
const statusAtom = atom({
  key: 'status',
  default: 'all',
});

export { adManagingListAtom, statusAtom, adManagementCardListSelector };
