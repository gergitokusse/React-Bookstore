import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/book/bookSlice';

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{count}</span>
      <button
        type="submit"
        onClick={() => dispatch(addBook())}
      >
        +
      </button>
      <button
        type="submit"
        onClick={() => dispatch(removeBook())}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
