import React from 'react';
import MainTextBox from './MainTextBox';
import Group from '../../assets/images/group.png';
import EmojiMainImage from '../../assets/images/emoji-main.svg';
import styles from './MainBox.module.css';

export default function MainBox({ type }) {
  return (
    <div className={`${styles.mainBox} ${styles[type]} ${type === 'first' ? styles.first : ''} ${type === 'second' ? styles.second : ''}`}>
            {type === 'first' && (
                <>
                <MainTextBox
                    number="01"
                    text="누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요"
                    subText="로그인 없이 자유롭게 만들어요"
                />
                <div className={styles.group}>
                    <img src={Group} alt="group"/>
                </div>
                </>
            )}
        
            {type === 'second' && (
                <>
                <img src={EmojiMainImage} alt="이모지" className={styles.image} />
                <MainTextBox
                    number="02"
                    text="서로에게 이모지로 감정을 표현해보세요"
                    subText="롤링 페이퍼에 이모지를 추가할 수 있어요."
                />
                </>
            )}
        
    </div>
  );
}