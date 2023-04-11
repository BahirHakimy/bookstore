import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/features/books/bookSlice';

function AddBook() {
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const { title, author } = ev.target;
    dispatch(addBook({ title: title.value, author: author.value }));
    ev.target.reset();
  };

  return (
    <div>
      <h2 className="text-xl text-[#888] font-bold uppercase tracking-tight mb-4">
        Add new book
      </h2>
      <form
        className="flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          required
          name="title"
          id="title"
          placeholder="Book title"
          className="bg-white border text-slate-400 px-4 py-2 w-[40rem] border-[#e8e8e8] outline-none text-sm"
        />
        <input
          name="author"
          type="text"
          required
          id="author"
          placeholder="Author"
          className="bg-white border text-slate-400 px-4 py-2 w-60 border-[#e8e8e8] text-sm"
        />
        <input
          type="submit"
          value="Add book"
          className="uppercase text-sm font-bold tracking-wider bg-[#0290ff] text-white px-12 py-2 rounded"
        />
      </form>
    </div>
  );
}

export default AddBook;
