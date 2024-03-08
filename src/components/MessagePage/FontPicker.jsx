import styles from './FontPicker.module.css';
import { useState } from 'react';

const FontPicker = ({ onFontChange, font }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Noto Sans');
  const handleOnChangeSelectValue = e => {
    const { innerText } = e.target;
    onFontChange(innerText);
    setSelectedFont(innerText);
  };
  const fontList = [
    { id: 1, value: 'Noto Sans' },
    { id: 2, value: 'Pretendard' },
    { id: 3, value: '나눔명조' },
    { id: 4, value: '나눔손글씨 손편지체' },
  ];
  const convertToEnglishFontName = koreanFontName => {
    const fontNameMap = {
      'Noto Sans': 'notoSans',
      나눔명조: 'nanumMyeongjo',
      '나눔손글씨 손편지체': 'nanumPenScript',
    };
    return fontNameMap[koreanFontName] || koreanFontName;
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>폰트 선택</h1>
      </div>
      <div
        className={showOptions ? styles.selectBox : styles.noSelectBox}
        onClick={() => setShowOptions(prev => !prev)}>
        <label className={styles.label} style={{ fontFamily: convertToEnglishFontName(selectedFont) }}>
          {font}
        </label>
        <ul className={showOptions ? styles.selectShow : styles.selectNoShow}>
          {fontList.map(v => (
            <li
              key={v.id}
              className={`${styles.list}  ${styles['fontFamily' + v.id]}`}
              onClick={handleOnChangeSelectValue}>
              {v.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FontPicker;
