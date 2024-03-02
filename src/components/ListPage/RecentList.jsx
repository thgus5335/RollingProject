import CommonSection from './CommonSection';
import useFetchListData from '../../hooks/useFetchListData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecentList = () => {
  const [offset, setOffSet] = useState(0);
  const { recentData } = useFetchListData(offset);
  const navigate = useNavigate();

  const handleForward = offset => {
    setOffSet(prevOffSet => prevOffSet + 1);
    navigate(`?limit=4&offset=${offset + 1}`);
  };

  const handleBackward = offset => {
    setOffSet(prevOffSet => prevOffSet - 1);
    navigate(`?limit=4&offset=${offset - 1}`);
  };

  return (
    <>
      <CommonSection
        title={'최근에 만든 롤링 페이퍼⭐️'}
        data={recentData}
        handleForward={handleForward}
        handleBackward={handleBackward}
        offset={offset}
      />
    </>
  );
};

export default RecentList;
