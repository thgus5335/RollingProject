import styles from './CardList.module.css';
import AddCard from './AddCard';
import Card from './Card';
import { useState, useEffect } from 'react';
import { getMessage } from '../../apis/rollingPaperAPI';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const RollingPage = ({ id, mode = 'normal' }) => {
  const editMode = mode === 'edit' ? 'editCard' : '';

  const [offset, setOffset] = useState(6);
  const [messageList, setMessageList] = useState([]);

  const handleMessageList = async (id, limit, offset) => {
    const response = await getMessage(id, limit, offset);
    console.log(response);
    if (offset === 0) setMessageList(response);
    else setMessageList(prevList => [...prevList, ...response]);
  };

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      setOffset(preOffset => preOffset + 6);
      console.log('offset: ', offset);
      handleMessageList(id, 6, offset);
    }
  }, [inView]);

  return (
    <>
      <div className={styles.cardList}>
        <Link className={styles[editMode]} to={`/post/${id}/message`}>
          <AddCard mode={mode} />
        </Link>
        {messageList && messageList.map(message => <Card key={message.id} mode={mode} messageInfo={message} />)}
        {/* {loading && <p>Loading...</p>} */}
        <p ref={ref}>test</p>
      </div>
    </>
  );
};

export default RollingPage;
