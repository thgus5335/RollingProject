import { useEffect, useState } from 'react';
import { getHotApi, getRecentApi } from '../apis/getRecentApi';
import { useLocation } from 'react-router-dom';

const useFetchListData = offset => {
  const [hotData, setHotData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const location = useLocation();

  const fetchHotData = async () => {
    const response = await getHotApi(offset);
    const hotSortedData = response.results;
    setHotData(hotSortedData);
  };

  const fetchRecentData = async () => {
    const response = await getRecentApi(offset);
    const recentSortedData = response.results;
    setRecentData(recentSortedData);
  };

  useEffect(() => {
    fetchHotData();
    fetchRecentData();
  }, [location.search]);

  return { hotData, recentData };
};

export default useFetchListData;
