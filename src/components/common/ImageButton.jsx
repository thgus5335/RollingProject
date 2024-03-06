import React from 'react';
import styles from './ImageButton.module.css'; // Import your CSS file

export default function ImageButton({
  imageAlt,
  imageURL,
  handleClick,
}) {
  return (
    <>
      <div className={styles.wrapper}>
        <button type="button" onClick={handleClick}>
          <img src={imageURL} alt={imageAlt} />
        </button>
      </div>
    </>
  );
}