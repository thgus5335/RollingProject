import CommonSection from './CommonSection';
import useFetchListData from '../../hooks/useFetchListData';

const HotList = () => {
  const { hotData } = useFetchListData();

  return (
    <>
      <CommonSection title={'인기 롤링 페이퍼🔥'} data={hotData} />
    </>
  );
};

export default HotList;
