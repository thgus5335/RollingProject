import styles from './CardList.module.css';
import AddCard from './AddCard';
import Card from './Card';
import { useState, useEffect } from 'react';
import { getMessage } from '../../apis/rollingPaperAPI';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const RollingPage = ({ id, mode = 'normal' }) => {
  // const [message, setMessage] = useState([]);
  const editMode = mode === 'edit' ? 'editCard' : '';

  // const fetchData = async (id, limit, offset) => {
  //   const response = await getMessage(id, limit, offset);
  //   setMessage(response);
  // };

  // useEffect(() => {
  //   fetchData(id);
  // }, []);

  const [offset, setOffset] = useState(6);
  const [messageList, setMessageList] = useState([]);
  // console.log('MMMMMM', message);

  const handleMessageList = async (id, limit, offset) => {
    const response = await getMessage(id, limit, offset);
    console.log(response);
    if (offset === 0) setMessageList(response);
    else setMessageList(prevList => [...prevList, ...response]);
  };
  // const loadMessages = async (options) => {
  //   const RESPONSE = await fetchMessagesAsync(options);

  //   if (options.offset === 0) {
  //     setList(RESPONSE?.results);
  //   } else {
  //     setList((prevList) => [...prevList, ...RESPONSE?.results]);
  //   }

  //   const NEXT = RESPONSE?.next;
  //   if (NEXT) {
  //     setOffset(NEXT.split("offset=")[1]);
  //     setHasNext(true);
  //   } else {
  //     setHasNext(false);
  //   }
  // };
  //       setMessage(preData => preData.concat(res.data.results));
  //       setPage(prePage => prePage + PAGE_SIZE);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      setOffset(preOffset => preOffset + 6);
      console.log('offset: ', offset);
      handleMessageList(id, 6, offset);
    }
  }, [inView]);

  // useEffect(() => {
  //   const handleIntersection = entries => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting && hasNext) {
  //         loadMessages({ recipientId, offset, limit: LIMIT });
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, IO_OPTIONS);

  //   observer.observe(SENTINEL.current);

  //   return () => {
  //     /* 페이지 전환 시 element 사라짐 대응 조건식 */
  //     if (SENTINEL.current) {
  //       observer.unobserve(SENTINEL.current);
  //     }
  //   };
  // }, [offset, hasNext]);

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

// import { useInView } from 'react-intersection-observer';
// import axios from 'axios';
// import LIMIT from '../../constants/constants';
// import useIntersection from '../../hooks/useIntersection';

// //-----------------------------------------------------------------------
// const [message, setMessage] = useState([]);
// const [page, setPage] = useState(0);
// const [loading, setLoading] = useState(false);
// const [ref, inView] = useInView();
// const PAGE_SIZE = 6;

// const getMessageList = id => {
//   setLoading(true);

//   axios
//     .get(`https://rolling-api.vercel.app/4-13/recipients/${id}/messages/?limit=${PAGE_SIZE}&offset=${page}`)
//     .then(res => {
//       setMessage(preData => preData.concat(res.data.results));
//       setPage(prePage => prePage + PAGE_SIZE);
//     })
//     .catch(error => {
//       alert(error);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// };

// useEffect(() => {
//   if (inView && page > 0) {
//     console.log(inView, '무한 스크롤');
//     getMessageList(id);
//   }
// }, [inView]);
