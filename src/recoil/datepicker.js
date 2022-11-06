import { atom, selector } from 'recoil';

const startDateAtom = atom({
  key: 'startDate',
  default: new Date('2022/02/04'),
});

const endDateAtom = atom({
  key: 'endDate',
  default: new Date('2022/02/06'),
});

export { startDateAtom, endDateAtom };
