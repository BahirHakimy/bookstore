import { configureStore } from '@reduxjs/toolkit';
import booksReducer from 'redux/features/books/bookSlice';
import categoryReducer from 'redux/features/categories/categorySlice'

export default configureStore({ reducer: { books: booksReducer,categories:categoryReducer } });
