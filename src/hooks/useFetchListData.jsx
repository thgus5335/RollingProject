import { useEffect, useState } from 'react';
import getRecentApi from '../apis/getRecentApi';

const useFetchListData = () => {
  const [hotData, setHotData] = useState([]);
  const [recentData, setRecentData] = useState([]);

  //results array를 인기 순대로(hotSortedData), 최신 순대로(recentSortedData) 정렬
  const fetchHotData = async () => {
    const response = await getRecentApi();
    const data = response.results;
    //배열의 깊은 복사
    const data1 = JSON.parse(JSON.stringify(data));
    const data2 = JSON.parse(JSON.stringify(data));
    const hotSortedData = data1.sort((a, b) => b.messageCount - a.messageCount);
    const recentSortedData = data2.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setHotData(hotSortedData);
    setRecentData(recentSortedData);
  };

  useEffect(() => {
    fetchHotData();
  }, []);

  return { hotData, recentData };
};

export default useFetchListData;
