import { Route, Routes } from 'react-router-dom';
import BookStat from './bookstate';
import BooKCatagory from './BookCatagory';

function BookList() {
  return (
    <div className="BookList">
      <Routes>
        <Route path="/" element={<BookStat />} />
        <Route path="/categories" element={<BooKCatagory />} />
      </Routes>
    </div>
  );
}

export default BookList;
