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
            <p className="book-catagory">{mybook.category}</p>
            <p className="book-title">{mybook.title}</p>
            <p className="book-author">{mybook.author}</p>
            <span>Comment</span>
            <span className="span">
              <button
                className="span-btn"
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
            <div className="progress-bar">
              <progress value="75" min="0" max="100" style={{ visibility: 'hidden', height: '0', width: '0' }}>75%</progress>
            </div>
            <div className="progress-complete">
              <h3>
                {i + 45}
                %
              </h3>
              <p className="book-title book-catagory">Completed</p>
            </div>
          </div>
          <div className="current-chapter">
            <p className="book-catagory">CURRENT CHAPTER</p>
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
