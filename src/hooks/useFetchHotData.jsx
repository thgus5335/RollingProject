import { useEffect, useState } from 'react';
import { getHotApi } from '../apis/getRecentHotApi';

const useFetchHotData = () => {
  const [hotData, setHotData] = useState([]);

  const fetchHotData = async () => {
    const response = await getHotApi();
    const hotSortedData = response.results;
    setHotData(hotSortedData);
  };

  useEffect(() => {
    fetchHotData();
  }, []);

  return { hotData };
};

export default useFetchHotData;
