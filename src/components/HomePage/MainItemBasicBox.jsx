import styles from './MainItemBox.module.css'; // CSS 파일 import

import MousePointImage from '../../assets/icons/mouse-point.png';
import EllipseImage from '../../assets/icons/ellipse.svg';
import PlusImage from '../../assets/icons/plus.svg';

export default function MainItemBasicBox() {
  return (
    <div className={styles.basicBox}>
      <img src={EllipseImage} alt="회색 동그라미 이미지" className={styles.image} />
      <img src={PlusImage} alt="더하기 이미지" className={styles.image} />
      <img src={MousePointImage} alt="마우스포인터이미지" className={styles.mouseImage} />
    </div>
  );
}
