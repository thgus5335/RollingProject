import styles from './HeaderRolling.module.css';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import Button from '../common/Button';
import { getReaction, postReaction } from '../../apis/rollingPaperAPI';

const HeaderRolling = ({ id }) => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [emoji, setEmoji] = useState([]);

  const fetchData = async id => {
    const response = await getReaction(id);
    setEmoji(response.results);
    console.log(response.results);
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  const handleButtonClick = () => {
    setIsClicked(prev => !prev);
  };

  const onEmojiClick = emoji => {
    setSelectedEmoji(emoji);

    console.log(selectedEmoji);
    postReaction(selectedEmoji);
  };

  return (
    <div className={styles.headerContainer}>
      <div>To. Ashely</div>
      <div className={styles.contentContainer}>
        <div>profile img 23명이 작성했어요!</div>
        {emoji &&
          emoji.map(emoji => (
            <div key={emoji.id}>
              {emoji.emoji}
              {emoji.count}
            </div>
          ))}
        <div>
          <Button onClick={handleButtonClick} size="extraSmall" type="outline">
            추가
            {isClicked && (
              <div className={styles.emojiContainer}>
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </Button>
        </div>
        <div>공유</div>
      </div>
    </div>
  );
};
export default HeaderRolling;
