import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

function LinkButton({ value, link }) {
  return (
    <div className={styles.buttonArea}> 
      <Link to={link}>
        <button className={styles.button}>{value}</button> 
      </Link>
    </div>
  );
}

export default LinkButton;
