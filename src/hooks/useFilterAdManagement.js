import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { statusAtom } from '../recoil/adManagement';

/**
 * TODO : REfactoring
 * onChange: () => void
 * getFilteredList: adManagementFilteredCardItem[]
 * status: string
 */
const useFilterAdManagement = () => {
  const [status, setStatus] = useRecoilState(statusAtom);

  const onStatusChange = useCallback(
    value => setStatus(value.value),
    [setStatus]
  );

  const getFilteredList = useCallback(
    list =>
      list.filter(listItem =>
        status === 'all' ? true : listItem.report[0].engValue === status
      ),
    [status]
  );

  return { status, onStatusChange, getFilteredList };
};

export default useFilterAdManagement;
