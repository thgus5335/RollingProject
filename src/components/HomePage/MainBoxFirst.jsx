import ProfileImageSH from '../../assets/images/profile_img_girl.png';
import ProfileImageSY from '../../assets/images/profile_img_man.png';
import MainItemBox from './MainItemBox';
import MainItemBasicBox from './MainItemBasicBox';
import MainTextBox from './MainTextBox';

import styles from './MainBox.module.css'; // CSS 파일 import

export default function MainBoxFirst() {
  return (
    <div className={styles.mainBoxFirst}>
      <MainTextBox
        number="01"
        text="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요"
        subText="로그인 없이 자유롭게 만들어요"
      />

      <div className={styles.mainItemContainer}>
        <MainItemBox
          profileImage={ProfileImageSH}
          recipientId="신승화"
          relationship="동료"
          content="아맞다 로그아웃🫢"
          createdAt="2024.01.20"
        />
        <MainItemBox
          profileImage={ProfileImageSY}
          recipientId="오설영"
          relationship="동료"
          content="오늘 '결석' 인원 안내드려요🙏🏻"
          createdAt="2024.01.20"
        />
        <MainItemBasicBox />
      </div>
    </div>
  );
}
