import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from 'redux/features/books/bookSlice';
import BookItem from './BookItem';
import AddBook from './AddBook';

function BookList() {
  const { items } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col px-[6.25rem] pb-16 bg-slate-100">
      {items.map((book) => (
        <BookItem
          key={book.title}
          book={book}
          onRemove={() => dispatch(removeBook({ item_id: book.item_id }))}
        />
      ))}
      <hr className="my-6" />
      <AddBook />
    </div>
  );
}

export default BookList;
