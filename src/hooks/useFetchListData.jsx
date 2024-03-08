import { useEffect, useState } from 'react';
import { getHotApi, getRecentApi } from '../apis/getRecentHotApi';

const useFetchListData = () => {
  const [hotData, setHotData] = useState([]);
  const [recentData, setRecentData] = useState([]);

  const fetchHotData = async () => {
    const response = await getHotApi();
    const hotSortedData = response.results;
    setHotData(hotSortedData);
  };

  const fetchRecentData = async () => {
    const response = await getRecentApi();
    const recentSortedData = response.results;
    setRecentData(recentSortedData);
  };

  useEffect(() => {
    fetchHotData();
    fetchRecentData();
  }, []);

  return { hotData, recentData };
};

export default useFetchListData;
