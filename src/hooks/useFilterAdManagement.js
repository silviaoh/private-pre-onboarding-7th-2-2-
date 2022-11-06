import React from 'react';
import { useRecoilState } from 'recoil';
import { statusAtom } from '../recoil/adManagement';

/**
 * onChange: () => void
 * status: string
 */
const useFilterAdManagement = () => {
  const [status, setStatus] = useRecoilState(statusAtom);

  const onStatusChange = value => {
    console.log('value', value);
  };

  return { status, onStatusChange };
};

export default useFilterAdManagement;
