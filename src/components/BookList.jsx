import React from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from 'redux/features/books/bookSlice';

function BookList() {
  const { items } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col px-[6.25rem] pb-16 bg-slate-100">
      {items.map((book, i) => (
        <BookItem
          key={book.title}
          book={book}
          onRemove={() => dispatch(removeBook({ index: i }))}
        />
      ))}
      <hr className="my-6" />
      <AddBook />
    </div>
  );
}

export default BookList;
