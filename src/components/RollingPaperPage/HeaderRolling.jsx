import styles from './HeaderRolling.module.css';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import Button from '../common/Button';

const HeaderRolling = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(prev => !prev);
  };

  const onEmojiClick = emoji => {
    setSelectedEmoji(emoji);
  };
  console.log(selectedEmoji);

  return (
    <div className={styles.headerContainer}>
      <div>To. Ashely</div>
      <div className={styles.contentContainer}>
        <div>profile img 23명이 작성했어요!</div>
        <div>emoji</div>
        <Button onClick={handleButtonClick} size="extraSmall" type="outline">
          추가
          {isClicked && (
            <div className={styles.emojiContainer}>
              <EmojiPicker onClick={onEmojiClick} />
            </div>
          )}
        </Button>
        <div>공유</div>
      </div>
    </div>
  );
};
export default HeaderRolling;
