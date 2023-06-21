import { useSelector, useDispatch } from 'react-redux';
import { removeBook, removeAllBook } from '../redux/book/bookSlice';
import InputNewBook from './InputnewBook';

function BookStat() {
  const book = useSelector((mybook) => mybook.books.books);
  const dispatch = useDispatch();
  return (
    <div className="container">
      {book.map((mybook) => (
        <div
          className="single-book-item"
          key={mybook.item_id}
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
                onClick={() => dispatch(removeBook(mybook.item_id))}
              >
                Remove
              </button>
            </span>
            <span className="span edit">Edit</span>
          </div>
          <div className="progress">
            <h3>64%</h3>
            <p>Completed</p>
          </div>
          <div className="current-chapter">
            <p>Current Chapter</p>
            <p>Chapter-17</p>
            <button className="btn" type="button">
              Update Progress
            </button>
          </div>
        </div>
      ))}
      <button type="submit" className="btn" onClick={() => dispatch(removeAllBook())}>
        Remove All Books
      </button>
      <InputNewBook />
    </div>
  );
}

export default BookStat;
