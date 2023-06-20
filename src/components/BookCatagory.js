import React from 'react';
import { useSelector } from 'react-redux';

function BooKCatagory() {
  const catagory = useSelector((state) => state.catagory);
  return (
    <div>
      <p>{Object.values(catagory)}</p>
    </div>
  );
}

export default BooKCatagory;
