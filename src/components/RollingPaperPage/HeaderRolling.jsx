import styles from './HeaderRolling.module.css';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState } from 'react';
import Button from '../common/Button';
import { getReaction, postReaction } from '../../apis/rollingPaperAPI';

const HeaderRolling = ({ rollingInfo }) => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const recipient = rollingInfo.name;
  const writer = rollingInfo.messageCount;

  const [emoji, setEmoji] = useState([]);

  const fetchData = async id => {
    const response = await getReaction(id);
    setEmoji(response.results);
    console.log(response.results);
  };

  useEffect(() => {
    fetchData(rollingInfo);
  }, []);

  const handleButtonClick = () => {
    setIsClicked(prev => !prev);
  };

  const onEmojiClick = emoji => {
    setSelectedEmoji(emoji);

    console.log(selectedEmoji);
    postReaction(selectedEmoji);
  };
  console.log(selectedEmoji);

  console.log(rollingInfo);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.recipient}>To. {recipient}</div>
      <div className={styles.contentContainer}>
        <div className={styles.writer}>profile img {writer}명이 작성했어요!</div>
        <div>emoji</div>
        <Button onClick={handleButtonClick} size="extraSmall" type="outline">
          추가
          {isClicked && (
            <div className={styles.emojiContainer}>
              <EmojiPicker onClick={onEmojiClick} />
            </div>
          )}
        </Button>
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
