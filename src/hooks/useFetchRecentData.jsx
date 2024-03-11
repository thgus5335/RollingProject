import { useEffect, useState } from 'react';
import { getRecentApi } from '../apis/getRecentHotApi';

const useFetchRecentData = () => {
  const [recentData, setRecentData] = useState([]);

  const fetchRecentData = async () => {
    const response = await getRecentApi();
    const recentSortedData = response.results;
    setRecentData(recentSortedData);
  };

  useEffect(() => {
    fetchRecentData();
  }, []);

  return { recentData };
};

export default useFetchRecentData;
