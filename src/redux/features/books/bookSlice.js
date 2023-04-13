import axios from 'axios';
import { toast } from 'react-toastify';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: [],
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/apps/${process.env.REACT_APP_API_ID}/books`
  );
  return response.data;
});

export const createBook = createAsyncThunk(
  'books/createBook',
  async ({ title, author }, { getState }) => {
    try {
      const book = {
        item_id: `item${getState().books?.items.length}`,
        category: 'Action',
        title,
        author,
      };
      axios.post(
        `${process.env.REACT_APP_API_URL}/apps/${process.env.REACT_APP_API_ID}/books`,
        book
      );
      return book;
    } catch (error) {
      return error;
    }
  }
);
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async ({ itemID }) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/apps/${process.env.REACT_APP_API_ID}/books/${itemID}`
      );
      return itemID;
    } catch (error) {
      return error;
    }
  }
);

const createItem = ([itemID, data]) => {
  const progress = Math.round(Math.random() * 100);
  return {
    itemID,
    ...data[0],
    progress,
    currentChapter: 'Introduction',
    circleStyles:
      'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_67%,_#e8e8e8_0)]',
  };
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
      items: state.items.filter((item) => item.itemID !== payload.itemID),
    }),
    filterBooks: (state, { payload }) => ({
      ...state,
      items: state.items.filter((item) => item.category === payload.category),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      const id = toast.loading('Loading Please wait...');
      return { ...state, loading: [...state.loading, id] };
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const updatedLoading = [...state.loading]; // Create a copy of the loading array
      toast.dismiss(updatedLoading.pop());
      return {
        ...state,
        items: Object.entries(action.payload).map(createItem),
        loading: updatedLoading, // Update the loading array without the last element
        error: null,
      };
    });

    builder.addCase(fetchBooks.rejected, (state) => {
      const updatedLoading = [...state.loading]; // Create a copy of the loading array
      toast.dismiss(updatedLoading.pop());
      return { ...state, loading: [] };
    });

    builder.addCase(createBook.pending, (state) => {
      const id = toast.loading('Posting Please wait...');
      return { ...state, loading: [...state.loading, id] };
    });

    builder.addCase(createBook.fulfilled, (state, { payload }) => {
      const updatedLoading = [...state.loading]; // Create a copy of the loading array
      const toastId = updatedLoading.pop();
      setTimeout(() => toast.dismiss(toastId), 1000);
      return {
        ...state,
        loading: updatedLoading,
        items: [
          ...state.items,
          {
            ...payload,
            progress: Math.round(Math.random() * 100),
            currentChapter: 'Introduction',
            circleStyles:
              'bg-[radial-gradient(closest-side,_white_79%,_transparent_80%_100%),conic-gradient(#379cf6_67%,_#e8e8e8_0)]',
          },
        ],
      };
    });

    builder.addCase(deleteBook.pending, (state) => {
      const id = toast.loading('Deleting Please wait...');
      return { ...state, loading: [...state.loading, id] };
    });

    builder.addCase(deleteBook.fulfilled, (state, { payload }) => {
      const updatedLoading = [...state.loading]; // Create a copy of the loading array
      const toastId = updatedLoading.pop();
      setTimeout(() => toast.dismiss(toastId), 1000);
      const updatedItems = state.items.filter(
        (item) => item.itemID !== payload
      );
      return { ...state, loading: updatedLoading, items: updatedItems };
    });
  },
});

export const { addBook, removeBook, filterBooks } = bookSlice.actions;
export default bookSlice.reducer;
