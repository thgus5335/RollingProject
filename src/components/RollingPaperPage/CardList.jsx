import styles from './CardList.module.css';
import AddCard from './AddCard';
import Card from './Card';
import { useState, useEffect } from 'react';
import { getMessage } from '../../apis/rollingPaperAPI';
import { Link } from 'react-router-dom';
// import useIntersection from '../../hooks/useIntersection';

const RollingPage = ({ id, mode = 'normal' }) => {
  const [message, setMessage] = useState([]);
  const editMode = mode === 'edit' ? 'editCard' : '';

  const fetchData = async id => {
    const response = await getMessage(id);
    setMessage(response);
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <>
      <div className={styles.cardList}>
        <Link className={styles[editMode]} to={`/post/${id}/message`}>
          <AddCard mode={mode} />
        </Link>
        {message && message.map(message => <Card key={message.id} mode={mode} messageInfo={message} />)}
      </div>
      {/* <div ref={observer}></div> */}
    </>
  );
};

export default RollingPage;
