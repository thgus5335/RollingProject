import React from 'react';
import Button from './Button';

export default function ImageButton({ imageAlt, imageURL, handleClick }) {
  return (
    <>
      <Button size="small" type="outline" onClick={handleClick}>
        <img src={imageURL} alt={imageAlt} />
      </Button>
    </>
  );
}
