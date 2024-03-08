import styles from './CardList.module.css';
import AddCard from './AddCard';
import Card from './Card';
import { useState, useEffect } from 'react';
import { getMessage } from '../../apis/rollingPaperAPI';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const RollingPage = ({ id, mode = 'normal' }) => {
  const [offset, setOffset] = useState(0);
  const [messageList, setMessageList] = useState([]);
  const [ref, inView] = useInView();
  const editMode = mode === 'edit' ? 'editCard' : '';
  const LIMIT = 12;

  const handleMessageList = async (id, limit, offset) => {
    if (offset === 0) {
      const response = await getMessage(id, limit - 1, offset);
      setMessageList(response);
    } else {
      const response = await getMessage(id, limit, offset);
      setMessageList(prevList => [...prevList, ...response]);
    }
  };

  useEffect(() => {
    if (inView) {
      setOffset(preOffset => preOffset + LIMIT);
      handleMessageList(id, LIMIT, offset);
    }
  }, [inView]);

  return (
    <>
      <div className={styles.cardList}>
        <Link className={styles[editMode]} to={`/post/${id}/message`}>
          <AddCard mode={mode} />
        </Link>
        {messageList && messageList.map(message => <Card key={message.id} mode={mode} messageInfo={message} />)}
        <p ref={ref}></p>
      </div>
    </>
  );
};

export default RollingPage;
