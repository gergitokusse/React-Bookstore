import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/book/bookSlice';

function InputNewBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handelAddbook = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: Date.now().toString(),
      title,
      category,
    };
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <h2>Add new Book</h2>
      <form onSubmit={handelAddbook} className="form">
        <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" placeholder="Book title" required />
        <select name="catagory" onChange={(e) => setCategory(e.target.value)} required>
          <option value="" key="0">Catagory </option>
          <option key="1">catagory-1</option>
          <option key="2">catagory-2</option>
          <option key="3">catagory-3</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default InputNewBook;
