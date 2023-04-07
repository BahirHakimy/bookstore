import React from 'react';
import BookItem from './BookItem';

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
      <h2 className="text-xl text-[#888] font-bold uppercase tracking-tight mb-4">
        Add new book
      </h2>
      <form className="flex items-center justify-between" action="">
        <input
          type="text"
          name="bookTitle"
          id="bookTitle"
          placeholder="Book title"
          className="bg-white border text-slate-400 px-4 py-2 w-[40rem] border-[#e8e8e8] outline-none text-sm"
        />
        <select
          name="category"
          id="category"
          className="bg-white border text-slate-400 px-4 py-2 w-60 border-[#e8e8e8] text-sm "
        >
          <option value="" selected disabled>
            Category
          </option>
          <option value="action">Action</option>
          <option value="science fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <input
          type="submit"
          value="Add book"
          className="uppercase text-sm font-bold tracking-wider bg-[#0290ff] text-white px-12 py-2 rounded"
        />
      </form>
    </div>
  );
}

export default BookList;
