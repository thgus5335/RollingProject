import styles from './Relation.module.css';
import { useState } from 'react';

const RelationShip = ({ onRelationChange, relation }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = e => {
    const { innerText } = e.target;
    onRelationChange(innerText);
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
        <h1 className={styles.title}>상대와의 관계</h1>
      </div>
      <div className={styles.selectBox} onClick={() => setShowOptions(prev => !prev)}>
        <label className={styles.label}>{relation}</label>
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
