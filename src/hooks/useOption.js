import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

const useOption = atom => {
  const [option, setOption] = useRecoilState(atom);

  const onChange = useCallback(option => setOption(option.value), []);

  return { option, onChange };
};

export default useOption;
