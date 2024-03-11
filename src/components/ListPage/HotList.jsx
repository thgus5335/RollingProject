import CommonSection from './CommonSection';
import useFetchHotData from '../../hooks/useFetchHotData';

const HotList = () => {
  const { hotData } = useFetchHotData();

  return (
    <>
      <CommonSection title={'인기 롤링 페이퍼🔥'} data={hotData} />
    </>
  );
};

export default HotList;
