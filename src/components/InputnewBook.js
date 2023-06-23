import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBooks } from '../redux/book/bookSlice';

function InputNewBook() {
  const booklength = Date.now().toString();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBooks({
      id: booklength + 1,
      title,
      author,
      category,
    }));
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <div>
      <h2>Add new Book</h2>
      <form className="form" onSubmit={addNewBook}>
        <input
          required
          name="title"
          className="input input-book"
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          required
          name="author"
          className="input input-book"
          type="text"
          placeholder="Book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          name="category"
          value={category}
          className="input category-input"
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option>Action</option>
          <option>Educational</option>
          <option>Fiction</option>
          <option>Science Fiction</option>
          <option>Economy</option>
        </select>
        <button className="book-submit-btn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default InputNewBook;
