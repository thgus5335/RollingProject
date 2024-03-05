import styles from './CardList.module.css';
import AddCard from './AddCard';
import Card from './Card';
import { useState, useEffect } from 'react';
import { getMessage } from '../../apis/rollingPaperAPI';
import { Link } from 'react-router-dom';

const RollingPage = ({ id }) => {
  const [message, setMessage] = useState([]);

  const fetchData = async id => {
    const response = await getMessage(id);
    setMessage(response);
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <div className={styles.cardList}>
      <Link to={`/post/${id}/message`}>
        <AddCard />
      </Link>
      {message && message.map(message => <Card key={message.id} mode={'normal'} messageInfo={message} />)}
    </div>
  );
};

export default RollingPage;
