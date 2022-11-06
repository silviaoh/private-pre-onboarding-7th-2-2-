import { useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { adManagingListAtom } from '../recoil/adManagement';
import { AdListService } from '../service/AdListService';

const useAdManagement = () => {
  const adListService = new AdListService();
  const [adManagingList, setAdManagingList] =
    useRecoilState(adManagingListAtom);

  const getAdManagingList = useCallback(async () => {
    const result = await adListService.get();
    setAdManagingList(result.data.ads);
  }, []);

  useEffect(() => {
    getAdManagingList();
  }, []);

  return adManagingList;
};

export default useAdManagement;
