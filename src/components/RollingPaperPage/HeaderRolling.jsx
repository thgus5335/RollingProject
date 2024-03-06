import styles from './HeaderRolling.module.css';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useState, useRef } from 'react';
import Button from '../common/Button';
import { getReaction, postReaction, getTopReaction } from '../../apis/rollingPaperAPI';
import dropDown from '../../assets/icons/dropDown.svg';
import emojiIcon from '../../assets/icons/emojiIcon.svg';
import toast from '../../Toast/Toast';
import useClickOutside from '../../hooks/useClickOutside';
import ImageButton from '../common/ImageButton';
import shareIcon from '../../assets/icons/share-icon.svg';
import Dropdown from './Dropdown';

const HeaderRolling = ({ rollingInfo }) => {
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);
  const [emojiDropDown, setEmojiDropDown] = useState(false);
  const recipient = rollingInfo.name;
  const writer = rollingInfo.messageCount;
  const recentMessages = rollingInfo.recentMessages;

  const id = rollingInfo.id;
  // const topEmojis = rollingInfo.topReactions;

  const [emojiList, setEmojiList] = useState([]);
  const [topEmojis, setTopEmojis] = useState([]);

  const fetchEmoji = async id => {
    const response = await getReaction(id);
    setEmojiList(response);
  };

  const fetchTopEmoji = async id => {
    const response = await getTopReaction(id);
    setTopEmojis(response);
  };

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
    setIsEmojiClicked(prev => !prev);
  };

  const handleEmojiDropDownClick = () => {
    setEmojiDropDown(prev => !prev);
    fetchEmoji(id);
  };

  const onEmojiClick = emoji => {
    postReaction(id, emoji.emoji);
    fetchEmoji(id);
    fetchTopEmoji(id);
  };

  useEffect(() => {
    if (id) fetchTopEmoji(id);
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.recipient}>To. {recipient}</div>
      <div className={styles.contentContainer}>
        {recentMessages && (
          <div className={styles.imageStyle}>
            {recentMessages.map((recentMessage, index) => (
              <img
                key={recentMessage.id}
                src={recentMessage.profileImageURL}
                className={styles.profileImage}
                style={{ left: `${index * -1.3}rem` }}
              />
            ))}
            {writer > 3 && <div className={styles.plusProfile}>+{writer - 3}</div>}
          </div>
        )}
        <div className={styles.writer}>profile img {writer}명이 작성했어요!</div>
        <div className={styles.topEmojis}>
          {topEmojis &&
            topEmojis.map(emoji => (
              <div key={emoji.id} className={styles.emojiBox}>
                <p>
                  {emoji.emoji} {emoji.count}
                </p>
              </div>
            ))}
          <img src={dropDown} alt="drop down icon" className={styles.dropDown} onClick={handleEmojiDropDownClick} />
        </div>
        {emojiDropDown && (
          <div className={styles.emojiDropDown}>
            {emojiList &&
              emojiList.map(emoji => (
                <div key={emoji.id} className={styles.emojiBox}>
                  <p>
                    {emoji.emoji} {emoji.count}
                  </p>
                </div>
              ))}
          </div>
        )}
        <div>
          <Button onClick={handleButtonClick} size="small" type="outline">
            <img src={emojiIcon} alt="emoji icon" />
            추가
            {isEmojiClicked && (
              <div className={styles.emojiContainer}>
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </Button>
        </div>
      </div>
      <div ref={shareRef} className={styles.dropDownWrapper}>
        <ImageButton imageURL={shareIcon} imageAlt="share-icon" handleClick={handleDropdown} />
        {dropdown && <Dropdown name={recipient} onClick={handleClickShareURL} />}
      </div>
    </div>
  );
};
export default HeaderRolling;
