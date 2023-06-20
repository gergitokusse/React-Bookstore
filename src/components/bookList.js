import { Route, Routes } from 'react-router-dom';
import BookStat from './bookstate';
import BooKCatagory from './BookCatagory';
import Counter from './counter';

function BookList() {
  return (
    <div className="BookList">
      <Routes>
        <Route path="/" element={<BookStat />} />
        <Route path="/categories" element={<BooKCatagory />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
}

export default BookList;
