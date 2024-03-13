import CommonSection from './CommonSection';
import useFetchRecentData from '../../hooks/useFetchRecentData';

const RecentList = () => {
  const { recentData } = useFetchRecentData();

  return (
    <>
      <CommonSection title={'최근에 만든 롤링 페이퍼⭐️'} data={recentData} />
    </>
  );
};

export default RecentList;
