import { format } from 'date-fns';
import { atom, selector } from 'recoil';

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

      return {
        id: listItem.id,
        title: listItem.title,
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
            value: format(new Date(listItem.startDate), 'yyyy-mm-dd'),
          },
          {
            key: 'budget',
            name: '일 희망 예산',
            value: listItem.budget,
          },
          {
            key: 'roas',
            name: '광고 수익률',
            value: listItem.report.roas,
          },
          {
            key: 'convValue',
            name: '매출',
            value: listItem.report.convValue,
          },
          {
            key: 'cost',
            name: '광고 비용',
            value: listItem.report.cost,
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
