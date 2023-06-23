import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData, deleteBooks } from '../redux/book/bookSlice';
import InputNewBook from './InputnewBook';

function BookStat() {
  const dispatch = useDispatch();
  const books = useSelector((mybook) => mybook.books);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div className="container">
      {Object.values(books).map((mybook, i) => (
        <div
          className="single-book-item"
          key={mybook.id}
        >
          <div className="book-info">
            <p>{mybook.category}</p>
            <p className="book-title">{mybook.title}</p>
            <p>{mybook.author}</p>
            <span>Comment</span>
            <span className="span">
              <button
                className="btn"
                type="submit"
                onClick={() => {
                  dispatch(deleteBooks(mybook.id));
                }}
              >
                Remove
              </button>
            </span>
            <span className="span edit">Edit</span>
          </div>
          <div className="progress">
            <h3>
              {i + 45}
              %
            </h3>
            <p>Completed</p>
          </div>
          <div className="current-chapter">
            <p>Current Chapter</p>
            <p>
              Chapter-1
              {i}
            </p>
            <button className="btn" type="button">
              Update Progress
            </button>
          </div>
        </div>
      ))}
      <InputNewBook />
    </div>
  );
}

export default BookStat;
