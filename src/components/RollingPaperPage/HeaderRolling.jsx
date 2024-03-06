import styles from './HeaderRolling.module.css';
import EmojiPicker from 'emoji-picker-react';
import { useRef, useState } from 'react';
import Button from '../common/Button';
import toast from '../../Toast/Toast';
import useClickOutside from '../../hooks/useClickOutside';
import ImageButton from '../common/ImageButton';
import shareIcon from '../../assets/icons/share-icon.svg';
import Dropdown from './Dropdown';

const HeaderRolling = ({ rollingInfo }) => {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const recipient = rollingInfo.name;
  const writer = rollingInfo.messageCount;

  const [dropdown, setDropdown] = useState(false);


  const handleDropdown = () => {
    setDropdown(true);
  };
  
  const handleClickShareURL = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    toast.addSuccess('URL이 복사되었습니다.');
  };

  const shareRef = useRef(null);

  useClickOutside(shareRef, setDropdown);
  useClickOutside(shareRef, setDropdown);



  const handleButtonClick = () => {
    setIsClicked(prev => !prev);
  };

  const onEmojiClick = emoji => {
    setSelectedEmoji(emoji);
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
        <div ref={shareRef} className={styles.dropDownWrapper}>
            <ImageButton
              imageURL={shareIcon}
              imageAlt="share-icon"
              handleClick={handleDropdown}
            />
          {dropdown && <Dropdown name={recipient} onClick={handleClickShareURL} />}
        </div>
      </div>    
    </div>
  );
};
export default HeaderRolling;
