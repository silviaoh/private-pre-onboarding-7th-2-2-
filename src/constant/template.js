const AD_STATUS_TEMPLATE = ['roas', 'cost', 'imp', 'click', 'cvr', 'convValue'];

const CHART_OPTIONS = [
  {
    label: 'ROAS',
    value: 'roas',
    color: '#4FADF7',
  },
  {
    label: '광고비',
    value: 'cost',
    color: '#a84232',
  },
  {
    label: '노출수',
    value: 'imp',
    color: '#ebe773',
  },
  {
    label: '클릭수',
    value: 'click',
    color: '#85DA47',
  },
  {
    label: '전환 수',
    value: 'cvr',
    color: '#73ebbf',
  },
  {
    label: '매출',
    value: 'convValue',
    color: '#8b73eb',
  },
];

const STATUS_OPTIONS = [
  { label: '전체', value: 'all' },
  { label: '진행중', value: 'active' },
  { label: '중단됨', value: 'ended' },
];

export { AD_STATUS_TEMPLATE, CHART_OPTIONS, STATUS_OPTIONS };
