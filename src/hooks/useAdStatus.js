import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { adStatusListAtom } from '../recoil/dashboard';
import { AdStatusService } from '../service/AdStatusService';

// get adStatusList
// setAdStatusList

const useAdStatus = () => {
  const [adStatusList, setAdStatusList] = useRecoilState(adStatusListAtom);

  const getAdStatus = useCallback(async () => {
    const adStatusService = new AdStatusService();

    const result = await adStatusService.get();
    setAdStatusList(result.data.report.daily);
  }, [setAdStatusList]);

  useEffect(() => {
    getAdStatus();
  }, [getAdStatus]);

  return { adStatusList, setAdStatusList };
};

export default useAdStatus;
