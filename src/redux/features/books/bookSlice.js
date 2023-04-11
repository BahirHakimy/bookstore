import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      progress: 64,
      currentChapter: 'Chapter 17',
      circleStyles:
        'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_64%,_#e8e8e8_0)]',
    },
    {
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
      progress: 8,
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      circleStyles:
        'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_8%,_#e8e8e8_0)]',
    },
    {
      title: 'Capital in the Twenty-First Century',
      category: 'Economy',
      author: 'Suzanne Collins',
      progress: 0,
      currentChapter: 'Introduction',
      circleStyles:
        'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_0%,_#e8e8e8_0)]',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.items.push({
        title: payload.title,
        category: 'Action',
        author: payload.author,
        progress: Math.round(Math.random() * 100),
        currentChapter: 'Chapter 17',
        circleStyles:
          'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_64%,_#e8e8e8_0)]',
      });
    },
    removeBook: (state, { payload }) => {
      state.items = state.items.filter(
        (item, index) => index !== payload.index
      );
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
