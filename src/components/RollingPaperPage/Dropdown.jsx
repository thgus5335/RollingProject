import React, { useEffect } from 'react';
import styles from './Dropdown.module.css'; 
import ShareKaKao from '../../utils/ShareKakao';
import { toast } from 'react-toastify'; 

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

  const handleClick = () => {
    onClick(); // HeaderRolling 컴포넌트에서 전달받은 onClick 함수 호출
    toast.success('URL이 복사되었습니다.',{
      position: 'bottom-center',
      autoClose: '1500'
    }); // 토스트 메시지 표시
  };

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
      <p className={styles.paragraph} onClick={handleClick}>
        URL 공유
      </p>
    </div>
  );
}
