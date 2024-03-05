import CommonSection from './CommonSection';
import useFetchListData from '../../hooks/useFetchListData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HotList = () => {
  const [offset, setOffSet] = useState(0);
  const { hotData } = useFetchListData(offset);
  const navigate = useNavigate();
  console.log('hotdata', hotData);

  const handleForward = offset => {
    setOffSet(prevOffSet => prevOffSet + 1);
    navigate(`?limit=4&offset=${offset + 1}&sort=like`);
  };

  const handleBackward = offset => {
    setOffSet(prevOffSet => prevOffSet - 1);
    navigate(`?limit=4&offset=${offset - 1}&sort=like`);
  };

  return (
    <>
      <CommonSection
        title={'인기 롤링 페이퍼🔥'}
        data={hotData}
        handleForward={handleForward}
        handleBackward={handleBackward}
        offset={offset}
      />
    </>
  );
};

export default HotList;
