import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Oqn1NHVbaBga7BdSjSg7/books';

export const getData = createAsyncThunk(
  'book/getData',
  async (thunkAPI, { rejectWithValue }) => {
    try {
      const response = await axios(url);
      const books = response.data;
      return books;
    } catch (error) {
      return rejectWithValue(error.data);
    }
  },
);

export const addBooks = createAsyncThunk('books/addBooks', async (book) => {
  await axios.post(`${url}`, {
    item_id: book.id,
    title: book.title,
    category: book.category,
    author: book.author,
  });
  return book;
});

export const deleteBooks = createAsyncThunk(
  'book/deleteBooks',
  async (itemId) => {
    await axios.delete(`${url}/${itemId}`);
    return itemId;
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    data: [],
    isLoading: false,
    message: '',
    success: false,
  },
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line max-len
      .addCase(getData.fulfilled, (state, action) => Object.keys(action.payload).map((key) => ({
        id: key,
        title: action.payload[key][0].title,
        author: action.payload[key][0].author,
        category: action.payload[key][0].category,
      })))

      .addCase(addBooks.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      // eslint-disable-next-line max-len
      .addCase(deleteBooks.fulfilled, (state, action) => state.filter((book) => book.id !== action.payload));
  },
});

export default bookSlice;
