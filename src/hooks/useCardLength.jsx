import { useEffect, useState } from 'react';
import { getRecentApi } from '../apis/getRecentHotApi';

const useCardLength = () => {
  const [cardLength, setCardLength] = useState(0);

  const fetchCardLength = async () => {
    const response = await getRecentApi();
    setCardLength(response.count);
  };

  useEffect(() => {
    fetchCardLength();
  }, []);

  return { cardLength };
};

export default useCardLength;
