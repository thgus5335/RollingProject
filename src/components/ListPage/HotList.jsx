import CommonSection from './CommonSection';
import useFetchListData from '../../hooks/useFetchListData';

const HotList = () => {
  const { hotData } = useFetchListData();
  console.log(hotData);
  return (
    <>
      <CommonSection title={'인기 롤링 페이퍼🔥'} data={hotData} />
    </>
  );
};

export default HotList;

//results에서 messageCount 내림차순으로 정렬
