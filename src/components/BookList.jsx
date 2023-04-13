import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, fetchBooks } from 'redux/features/books/bookSlice';
import BookItem from './BookItem';
import AddBook from './AddBook';

function BookList() {
  // Here I get the items from the store
  const { items } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="flex flex-col px-[6.25rem] pb-16 bg-slate-100">
      {items.length > 0
        && items.map((book) => (
          // Here I pass each book to a reusable components
          <BookItem
            key={book.itemID}
            book={book}
            // Here I use remove book action to remove a book with the given id
            onRemove={() => dispatch(deleteBook({ itemID: book.itemID }))}
          />
        ))}
      <hr className="my-6" />
      <AddBook />
    </div>
  );
}

export default BookList;
