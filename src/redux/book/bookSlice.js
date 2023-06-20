import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      const { booktitle, bookauthor } = action.payload;
      const newbook = {
        booktitle,
        bookauthor,
      };
      state.books.push(newbook);
    },
    removeBook(state) {
      state.books = [];
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
