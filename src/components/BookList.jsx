import React from 'react';
import BookItem from './BookItem';
import AddBook from './AddBook';

function BookList() {
  const books = [
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
  ];
  return (
    <div className="flex flex-col px-[6.25rem] pb-16 bg-slate-100">
      {books.map((book) => (
        <BookItem key={book.title} book={book} />
      ))}
      <hr className="my-6" />
      <AddBook />
    </div>
  );
}

export default BookList;
