import { useEffect, useState } from 'react';
import { getDataLength } from '../apis/getRecentApi';

const useCardLength = () => {
  const [cardLength, setCardLength] = useState(0);

  const fetchCardLength = async () => {
    const response = await getDataLength();
    setCardLength(response.count);
  };

  useEffect(() => {
    fetchCardLength();
  }, []);

  return { cardLength };
};

export default useCardLength;
