import React from 'react';

function AddBook() {
  return (
    <div>
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

export default AddBook;
