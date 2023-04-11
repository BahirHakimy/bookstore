import { configureStore } from '@reduxjs/toolkit';
import booksReducer from 'redux/features/books/bookSlice';

export default configureStore({ reducer: { books: booksReducer } });
