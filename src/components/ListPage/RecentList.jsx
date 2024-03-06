import CommonSection from './CommonSection';
import useFetchListData from '../../hooks/useFetchListData';

const RecentList = () => {
  const { recentData } = useFetchListData();

  return (
    <>
      <CommonSection title={'최근에 만든 롤링 페이퍼⭐️'} data={recentData} />
    </>
  );
};

export default RecentList;
