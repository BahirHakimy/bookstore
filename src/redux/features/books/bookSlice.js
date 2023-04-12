import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      progress: 45,
      currentChapter: 'Chapter 7',
      circleStyles:
        'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_64%,_#e8e8e8_0)]',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      progress: 33,
      currentChapter: 'Chapter 7',
      circleStyles:
        'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_64%,_#e8e8e8_0)]',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      progress: 25,
      currentChapter: 'Chapter 7',
      circleStyles:
        'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_64%,_#e8e8e8_0)]',
    },
    {
      item_id: 'item4',
      title: 'The Hunger Games',
      category: 'Action',
      author: 'Suzanne Collins',
      progress: 64,
      currentChapter: 'Chapter 17',
      circleStyles:
        'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_64%,_#e8e8e8_0)]',
    },
    {
      item_id: 'item5',
      title: 'Dune',
      category: 'Science Fiction',
      author: 'Frank Herbert',
      progress: 8,
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      circleStyles:
        'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_8%,_#e8e8e8_0)]',
    },
    {
      item_id: 'item6',
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
    removeBook: (state, { payload }) => ({
      ...state,
      items: state.items.filter((item) => item.item_id !== payload.item_id),
    }),
    filterBooks: (state, { payload }) => ({
      ...state,
      items: state.items.filter((item) => item.category === payload.category),
    }),
  },
});

export const { addBook, removeBook, filterBooks } = bookSlice.actions;
export default bookSlice.reducer;
