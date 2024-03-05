import MainTextBox from './MainTextBox';
import EmojiMainImage from '../../assets/images/emoji-main.svg';

import styles from './MainBox.module.css'; // CSS 파일 import

export default function MainBoxSecond() {
  return (
    <div className={styles.mainBoxSecond}>
      <img src={EmojiMainImage} alt="이모지" className={styles.image} />
      <MainTextBox
        number="02"
        text="서로에게 이모지로 감정을 표현해보세요"
        subText="롤링 페이퍼에 이모지를 추가할 수 있어요."
      />
    </div>
  );
}
