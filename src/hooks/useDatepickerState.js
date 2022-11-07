import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

const useDatepickerState = (atom = null) => {
  const [date, setDate] = useRecoilState(atom);

  const onChange = useCallback(
    selectedDate => setDate(selectedDate),
    [setDate]
  );

  return {
    date,
    setDate,
    onChange,
  };
};

export default useDatepickerState;
