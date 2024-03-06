// Dropdown.jsx
import React, { useEffect } from 'react';
import styles from './Dropdown.module.css'; // Import your CSS file
import ShareKaKao from '../../utils/ShareKakao.jsx';

export default function Dropdown({ onClick, name }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <p
        className={styles.paragraph}
        onClick={() =>
            ShareKaKao(window.location.href, `${name}님의 롤링페이퍼입니다.`)
        }
      >
        카카오톡 공유
      </p>
      <p className={styles.paragraph} onClick={onClick}>
        URL 공유
      </p>
    </div>
  );
}
