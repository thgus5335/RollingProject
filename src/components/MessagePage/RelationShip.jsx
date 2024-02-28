import styles from './Relation.module.css';
import { useState } from 'react';

const RelationShip = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState('지인');

  const handleOnChangeSelectValue = e => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };
  const relationData = [
    { id: 1, value: '친구' },
    { id: 2, value: '지인' },
    { id: 3, value: '동료' },
    { id: 4, value: '가족' },
  ];

  return (
    <div className={styles.container}>
      <div>
        <h1>상대와의 관계</h1>
      </div>
      <div className={styles.selectBox} onClick={() => setShowOptions(prev => !prev)}>
        <label className={styles.label}>{currentValue}</label>
        <ul className={showOptions ? styles.selectShow : styles.selectNoShow}>
          {relationData.map(v => (
            <li key={v.id} className={styles.list} onClick={handleOnChangeSelectValue}>
              {v.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelationShip;
