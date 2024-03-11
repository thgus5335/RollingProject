import styles from './HeaderRolling.module.css';
import EmojiPicker from 'emoji-picker-react';
import { useState, useRef, useEffect } from 'react';
import Button from '../common/Button';
import { getReaction, postReaction, getTopReaction } from '../../apis/rollingPaperAPI';
import dropDown from '../../assets/icons/dropDown.svg';
import emojiIcon from '../../assets/icons/emojiIcon.svg';
import useClickOutside from '../../hooks/useClickOutside';
import shareIcon from '../../assets/icons/share-icon.svg';
import Dropdown from './Dropdown';
import Emoji from '../common/Emoji';
import Profile from '../common/Profile';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const HeaderRolling = ({ rollingInfo }) => {
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);
  const [emojiDropDown, setEmojiDropDown] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [topEmojis, setTopEmojis] = useState([]);
  const [emojiList, setEmojiList] = useState([]);

  const recipient = rollingInfo.name;
  const writer = rollingInfo.messageCount;
  const recentMessages = rollingInfo.recentMessages;
  const id = rollingInfo.id;

  const fetchEmoji = async id => {
    const response = await getReaction(id);
    setEmojiList(response);
  };

  const fetchTopEmojis = async id => {
    const response = await getTopReaction(id);
    setTopEmojis(response);
  };

  const shareRef = useRef(null);
  useClickOutside(shareRef, setDropdown);

  const emojiDropDownRef = useRef(null);
  useClickOutside(emojiDropDownRef, setEmojiDropDown);

  const emojiPickerRef = useRef(null);
  useClickOutside(emojiPickerRef, setIsEmojiClicked);

  const handleButtonClick = () => {
    setIsEmojiClicked(prev => !prev);
  };

  const handleEmojiDropDownClick = () => {
    setEmojiDropDown(prev => !prev);
    fetchEmoji(id);
  };

  const handleDropdown = () => {
    setDropdown(prev => !prev);
  };

  const handleClickShareURL = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
  };

  const onEmojiClick = emoji => {
    postReaction(id, emoji.emoji).then(() => {
      fetchEmoji(id);
      fetchTopEmojis(id);
    });
    setIsEmojiClicked(prev => !prev);
    fetchTopEmojis(id);
  };

  useEffect(() => {
    if (id) fetchTopEmojis(id);
  }, [id]);

  return (
    <>
      <ToastContainer
        toastStyle={{
          backgroundColor: 'white',
          border: '1px solid #ccc',
          color: 'black',
        }}
      />
      <div className={styles.rollingMobileHeader}>
        <div className={styles.recipientMobile}>To. {recipient}</div>
      </div>
      <div className={styles.rollingHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.recipient}>To. {recipient}</div>
          <div className={styles.contentContainer}>
            <div className={styles.headerProfile}>
              <Profile recentMessages={recentMessages} messageCount={writer} />
            </div>
            <div className={styles.emojiDropDownContainer} ref={emojiDropDownRef}>
              <div className={styles.emojiArea}>{topEmojis && <Emoji emoticon={topEmojis} />}</div>
              {topEmojis.length > 0 && (
                <img
                  src={dropDown}
                  alt="drop down icon"
                  className={styles.dropDown}
                  onClick={handleEmojiDropDownClick}
                />
              )}
            </div>
            {emojiDropDown && <div className={styles.emojiDropDown}>{emojiList && <Emoji emoticon={emojiList} />}</div>}
            <div className={styles.buttonContainer}>
              <div ref={emojiPickerRef}>
                <Button className={styles.emojiButton} onClick={handleButtonClick} size="small" type="outline">
                  <img src={emojiIcon} alt="emoji icon" />
                  <span className={styles.addEmojiButton}>추가</span>
                </Button>
                {isEmojiClicked && (
                  <div className={styles.emojiContainer}>
                    <EmojiPicker onEmojiClick={onEmojiClick} />
                  </div>
                )}
              </div>
              <div className={styles.line}></div>
              <div className={styles.dropDownWrapper} ref={shareRef}>
                <Button size="small" type="outline" onClick={handleDropdown}>
                  <img src={shareIcon} alt="share-icon" />
                </Button>
                {dropdown && <Dropdown name={recipient} onClick={handleClickShareURL} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderRolling;
